package com.mts.serviceTest;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.mts.repository.IApplicantRepository;
import com.mts.service.IApplicantService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class ApplicantServiceTest {

	@Autowired
	IApplicantService service;
	
	@MockBean
	IApplicantRepository repo;
	
	
}
