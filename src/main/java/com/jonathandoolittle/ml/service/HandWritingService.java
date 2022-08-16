package com.jonathandoolittle.ml.service;

import com.jonathandoolittle.ml.dto.PixelData;
import com.jonathandoolittle.ml.dto.RecognitionResult;
import com.jonathandoolittle.ml.dto.TrainingRequest;
import com.jonathandoolittle.ml.dto.TrainingResult;
import com.jonathandoolittle.ml.util.TrainingModel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class HandWritingService {


    public HandWritingService() {

    }

    public TrainingResult trainModel(TrainingRequest request) {
        TrainingModel model = new TrainingModel(request);
        TrainingResult result = model.train(request.requestData);
        return result;
    }

    public RecognitionResult recognizeCharacter(String session, PixelData data) {
        TrainingModel model = new TrainingModel(session);
        RecognitionResult result = model.test(data);
        return result;
    }

}
