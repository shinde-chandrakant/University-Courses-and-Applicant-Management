package com.mts;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "UniversityApplication", version = "2.0", description = "Microservice"))
public class UniversityCourseAdmissionApplication {

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

	public static Logger logger = LoggerFactory.getLogger(UniversityCourseAdmissionApplication.class);

	public static void main(String[] args) {
		logger.info("Application started ..");
		SpringApplication.run(UniversityCourseAdmissionApplication.class, args);
	}

}
