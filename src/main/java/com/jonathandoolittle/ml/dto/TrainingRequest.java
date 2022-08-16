package com.jonathandoolittle.ml.dto;


import java.util.List;

public class TrainingRequest {

    public String sessionName;
    public int gridWidth;
    public int gridHeight;
    public int sampleCount;
    public List<TrainingRequestData> requestData;

}

