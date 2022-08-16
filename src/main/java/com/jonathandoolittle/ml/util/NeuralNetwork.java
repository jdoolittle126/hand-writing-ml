package com.jonathandoolittle.ml.util;


class NeuralNetwork implements java.io.Serializable {

    public double[] Inputs;
    public double[] Outputs;
    // mask of training examples to ignore (true -> ignore):
    public boolean[] IgnoreTraining = null;
    // mask of Input neurons to ignore:
    public boolean[] IgnoreInput = null;
    protected int NumInputs;
    protected int NumHidden;
    protected int NumOutputs;
    protected int NumTraining;
    protected int WeightsFlag;
    protected int SpecialFlag;
    protected double[] Hidden;
    protected double[][] W1;
    protected double[][] W2;
    protected double[] output_errors;
    protected double[] hidden_errors;
    protected double[] InputTraining;
    protected double[] OutputTraining;

    NeuralNetwork() {

    }

    NeuralNetwork(int i, int h, int o) {
        Inputs = new double[i];
        Hidden = new double[h];
        Outputs = new double[o];
        W1 = new double[i][h];
        W2 = new double[h][o];
        NumInputs = i;
        NumHidden = h;
        NumOutputs = o;
        output_errors = new double[NumOutputs];
        hidden_errors = new double[NumHidden];
        // Randomize weights here:
        randomizeWeights();
    }

    public void randomizeWeights() {
        // Randomize weights here:
        for (int ii = 0; ii < NumInputs; ii++)
            for (int hh = 0; hh < NumHidden; hh++)
                W1[ii][hh] =
                        0.1f * Math.random() - 0.05f;
        for (int hh = 0; hh < NumHidden; hh++)
            for (int oo = 0; oo < NumOutputs; oo++)
                W2[hh][oo] =
                        0.1f * Math.random() - 0.05f;
    }

    public void ForwardPass() {
        int i, h, o;
        for (h = 0; h < NumHidden; h++) {
            Hidden[h] = 0.0f;
        }
        for (i = 0; i < NumInputs; i++) {
            for (h = 0; h < NumHidden; h++) {
                Hidden[h] += Inputs[i] * W1[i][h];
            }
        }
        for (o = 0; o < NumOutputs; o++)
            Outputs[o] = 0.0f;
        for (h = 0; h < NumHidden; h++) {
            for (o = 0; o < NumOutputs; o++) {
                Outputs[o] += Sigmoid(Hidden[h]) * W2[h][o];
            }
        }
        for (o = 0; o < NumOutputs; o++)
            Outputs[o] = Sigmoid(Outputs[o]);
    }

    public double Train() {
        return Train(InputTraining, OutputTraining, NumTraining);
    }

    public double Train(double[] ins,
                        double[] outs,
                        int numCases) {
        int i, h, o;
        int inCount = 0, outCount = 0;
        double error = 0.0f;
        for (int example = 0; example < numCases; example++) {
            if (IgnoreTraining != null)
                if (IgnoreTraining[example]) continue;  // skip this case
            // zero out error arrays:
            for (h = 0; h < NumHidden; h++)
                hidden_errors[h] = 0.0f;
            for (o = 0; o < NumOutputs; o++)
                output_errors[o] = 0.0f;
            // copy the input values:
            for (i = 0; i < NumInputs; i++) {
                Inputs[i] = ins[inCount++];
            }

            if (IgnoreInput != null) {
                for (int ii = 0; ii < NumInputs; ii++) {
                    if (IgnoreInput[ii]) {
                        for (int hh = 0; hh < NumHidden; hh++) {
                            W1[ii][hh] = 0;
                        }
                    }
                }
            }

            // Perform a forward pass through the network:

            ForwardPass();

            for (o = 0; o < NumOutputs; o++) {
                output_errors[o] = (outs[outCount++] - Outputs[o]) * SigmoidP(Outputs[o]);
            }
            for (h = 0; h < NumHidden; h++) {
                hidden_errors[h] = 0.0f;
                for (o = 0; o < NumOutputs; o++) {
                    hidden_errors[h] += output_errors[o] * W2[h][o];
                }
            }
            for (h = 0; h < NumHidden; h++) {
                hidden_errors[h] = hidden_errors[h] * SigmoidP(Hidden[h]);
            }
            // Update the hidden to output weights:
            for (o = 0; o < NumOutputs; o++) {
                for (h = 0; h < NumHidden; h++) {
                    W2[h][o] +=
                            0.5 * output_errors[o] * Hidden[h];
                }
            }
            // Update the input to hidden weights:
            for (h = 0; h < NumHidden; h++) {
                for (i = 0; i < NumInputs; i++) {
                    W1[i][h] +=
                            0.5 * hidden_errors[h] * Inputs[i];
                }
            }
            for (o = 0; o < NumOutputs; o++)
                error += Math.abs(output_errors[o]);
        }
        return error;
    }

    /**
     * Converts a value into a probability,
     * used as an activation function. This
     * compresses values so they fall
     * between 0 and 1
     * @param x The value to evaluate
     * @return The compressed result
     */
    protected double Sigmoid(double x) {
        return
                (1.0f / (1.0f + Math.exp(-x))) - 0.5f;
    }

    /**
     * Calculates a value based on the
     * derivative of the Sigmoid function.
     * Useful for backwards passed through
     * the network.
     * @param x The value to evaluate
     * @return The compressed result
     */
    protected double SigmoidP(double x) {
        double z = Sigmoid(x) + 0.5f;
        return z * (1.0f - z);
    }

}
