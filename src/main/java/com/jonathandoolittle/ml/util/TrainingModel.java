package com.jonathandoolittle.ml.util;

import com.jonathandoolittle.ml.dto.*;
import lombok.SneakyThrows;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class TrainingModel {

    public String session;
    public int gridSizeX;
    public int gridSizeY;
    public int sampleCount;
    public int charCount;
    public int[][][][] inputs;
    public int[] charCounter;
    public NeuralNetwork network;
    public boolean isTrained;
    public char[] chars;
    
    
    public TrainingModel(TrainingRequest request) {
        isTrained = false;
        session = request.sessionName;
        gridSizeX = request.gridWidth;
        gridSizeY = request.gridHeight;
        sampleCount = request.sampleCount;
        charCount = request.requestData.size();
        inputs = new int[charCount][sampleCount][gridSizeX][gridSizeY];
        charCounter = new int[charCount];
        network = new NeuralNetwork(gridSizeX * gridSizeY, 10, charCount);
        chars = new char[charCount];

        for (int i = 0; i < charCount; i++) {
            chars[i] = request.requestData.get(i).character.charAt(0);
        }

    }

    @SneakyThrows
    public TrainingModel(String session) {

        isTrained = false;

        BufferedReader br = new BufferedReader(new FileReader(NeuralFile.GetSessionPath(session) + "METADATA.info"));
        String[] data = new String[5];
        int counter = 0;
        String st;
        while ((st = br.readLine()) != null) {
            data[counter++] = st;
        }

        gridSizeX = Integer.parseInt(data[0]);
        gridSizeY = Integer.parseInt(data[1]);
        sampleCount = Integer.parseInt(data[2]);
        charCount = Integer.parseInt(data[3]);
        chars = new char[charCount];
        counter = 0;
        for (String s: data[4].split(",")) {
            chars[counter++] = s.charAt(0);
        }

        network = NeuralFile.Load(session);

        System.out.println("LOADED FROM FILE!");
    }


    public TrainingResult train(List<TrainingRequestData> data) {
        StringBuilder message = new StringBuilder("Starting training!\n");

        for (int i = 0; i < data.size(); i++) {

            TrainingRequestData request = data.get(i);
            int char_type = Arrays.binarySearch(chars, request.character.charAt(0));

            System.out.println("CHAR TYPE " + char_type + " " + chars[char_type]);

            for (List<Boolean> pixels: request.input) {

                for (int x = 0; x < gridSizeX; x++) {
                    for (int y = 0; y < gridSizeY; y++) {
                        if (pixels.get(gridSizeY * x + y)) {
                            inputs[char_type][charCounter[char_type]][x][y] = 1;
                        } else {
                            inputs[char_type][charCounter[char_type]][x][y] = 0;
                        }
                    }
                }
                charCounter[char_type]++;
            }
        }

        int sum = 0, ic = 0, oc = 0;
        for (int i = 0; i < charCount; i++) {
            sum += charCounter[i];
        }
        double[] ins = new double[sum * gridSizeX * gridSizeY];
        double[] outs = new double[sum * charCount];

        for (int i = 0; i < charCount; i++) {
            for (int j = 0; j < charCounter[i]; j++) {
                for (int x = 0; x < gridSizeX; x++) {
                    for (int y = 0; y < gridSizeY; y++) {
                        if (inputs[i][j][x][y] == 0) {
                            ins[ic++] = -0.4f;
                        } else {
                            ins[ic++] = +0.4f;
                        }
                    }
                }
                for (int k = 0; k < charCount; k++)
                    if (k != i) outs[oc++] = -0.4f;
                    else outs[oc++] = +0.4f;
            }
        }

        for (int i = 0; i < 3000; i++) {
            double error = network.Train(ins, outs, sum);
            if ((i % 10) == 0) {
                message.append("Output error for iteration ").append(i).append(" =").append(error).append("\n");
            }
            if (error < 0.1f) break;  // done training
        }
        isTrained = true;
        save();
        TrainingResult result = new TrainingResult();
        result.message = message.toString();
        return result;
    }

    @SneakyThrows
    public void save() {
        NeuralFile.Save(session, network);

        BufferedWriter writer = new BufferedWriter(new FileWriter(NeuralFile.GetSessionPath(session) + "METADATA.info"));
        writer.write(gridSizeX + "\n" + gridSizeY + "\n" + sampleCount + "\n" + charCount + "\n");
        String out = "";

        for (int i =0; i < charCount; i++){
            out += chars[i] + ",";
        }

        writer.write(out.substring(0, out.length()-1));
        writer.close();
    }

    public RecognitionResult test(PixelData data) {

        for (int i = 0; i < gridSizeX * gridSizeY; i++) {
            network.Inputs[i] = -0.4f;
            if (data.input.get(i)) {
                network.Inputs[i] = +0.4f;
            }
        }

        // Propagate input neuron values through
        // to the hidden, then output neuron layer:
        network.ForwardPass();
        // Find the largest output neuron value:

        RecognitionResult result = new RecognitionResult();

        int index = 0;
        double maxVal = -99f;

        for (int i = 0; i < charCount; i++) {
            result.characters.add(chars[i]);
            result.confidence.add(network.Outputs[i]);
            if (network.Outputs[i] > maxVal) {
                maxVal = network.Outputs[i];
                index = i;
            }
        }

        for (int i = 0; i < gridSizeX * gridSizeY; i++) {
            result.inputs.add(network.Inputs[i]);
        }

        for (int x = 0; x < network.W1.length; x++) {
            for (int y = 0; y < network.W1[0].length; y++) {
                result.weights1.add(network.W1[x][y]);
            }
        }

        for (int h = 0; h < network.NumHidden; h++) {
            result.hiddens.add(network.Hidden[h]);
        }

        for (int x = 0; x < network.W2.length; x++) {
            for (int y = 0; y < network.W2[0].length; y++) {
                result.weights2.add(network.W2[x][y]);
            }
        }

        result.guess = chars[index];
        return result;
    }
    
    
}
