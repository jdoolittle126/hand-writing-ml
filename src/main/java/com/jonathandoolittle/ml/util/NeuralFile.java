package com.jonathandoolittle.ml.util;

import com.jonathandoolittle.ml.MachineLearningApplication;
import lombok.SneakyThrows;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

public class NeuralFile {

    public static final String MODEL_NAME = "MODEL.ser";

    @SneakyThrows
    public static String GetSessionPath(String session) {
        String path = MachineLearningApplication.APPLICATION_NAME + "/" +
                MachineLearningApplication.APPLICATION_VERSION + "/" +
                "Sessions" + "/"
                + session + "/";
        Files.createDirectories(Paths.get(path));
        return path;
    }

    @SneakyThrows
    public static void Save(String session, NeuralNetwork neural) {
        FileOutputStream fileOutputStream = new FileOutputStream(GetSessionPath(session) + MODEL_NAME);
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
        objectOutputStream.writeObject(neural);
        objectOutputStream.close();
        fileOutputStream.close();
    }

    @SneakyThrows
    public static NeuralNetwork Load(String session) {
        NeuralNetwork neural = null;
        FileInputStream fileInputStream = new FileInputStream(GetSessionPath(session) + MODEL_NAME);
        ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
        neural = (NeuralNetwork) objectInputStream.readObject();
        objectInputStream.close();
        fileInputStream.close();
        return neural;
    }

}
