package com.jonathandoolittle.ml.dto;

import java.util.LinkedList;
import java.util.List;

public class RecognitionResult {

    public char guess;
    public List<Character> characters;

    public List<Double> inputs;
    public List<Double> weights1;
    public List<Double> hiddens;
    public List<Double> weights2;
    public List<Double> confidence;

    public RecognitionResult() {
        guess = '?';
        characters = new LinkedList<Character>();
        confidence = new LinkedList<Double>();
        inputs = new LinkedList<Double>();
        weights1 = new LinkedList<Double>();
        hiddens = new LinkedList<Double>();
        weights2 = new LinkedList<Double>();
    }

}
