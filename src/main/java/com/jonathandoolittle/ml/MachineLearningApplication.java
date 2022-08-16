package com.jonathandoolittle.ml;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MachineLearningApplication {

	public static final String APPLICATION_NAME = "HandwritingMachineLearning";
	public static final String APPLICATION_VERSION = "0.0.1";

	public static void main(String[] args) {
		SpringApplication.run(MachineLearningApplication.class, args);
	}

}
