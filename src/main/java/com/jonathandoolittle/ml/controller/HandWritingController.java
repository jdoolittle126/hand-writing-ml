package com.jonathandoolittle.ml.controller;

import com.jonathandoolittle.ml.dto.*;
import com.jonathandoolittle.ml.links.HandWritingLinks;
import com.jonathandoolittle.ml.service.HandWritingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/")
public class HandWritingController {
	
	@Autowired
	HandWritingService handWritingService;

    @PostMapping(path = HandWritingLinks.IDENTIFY_CHAR)
    public ResponseEntity<?> recognizeCharacter(@RequestBody RecognitionRequest request) {
        log.info("HandWritingController: recognizeCharacter");
        RecognitionResult response = handWritingService.recognizeCharacter(request.sessionName, new PixelData(request.data));
        return ResponseEntity.ok(response);
    }

    @PostMapping(path = HandWritingLinks.TRAIN_MODEL)
    public ResponseEntity<?> trainModel(@RequestBody TrainingRequest request) {
        log.info("HandWritingController: trainModel for session " + request.sessionName);
        TrainingResult response = handWritingService.trainModel(request);
        return ResponseEntity.ok(response);
    }

}
