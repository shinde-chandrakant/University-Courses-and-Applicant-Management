package com.mts.serviceTest;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.mts.exception.AdmissionMemNotFoundException;
import com.mts.exception.ApplicantNotFoundException;
import com.mts.exception.StaffMemberNotFoundException;
import com.mts.repository.IAdmissionCommiteeRepository;
import com.mts.repository.IApplicantRepository;
import com.mts.repository.IUniversityStaffRepository;
import com.mts.service.ILoginService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class LoginServiceTest {

	@Autowired
	ILoginService service;
	
	@MockBean
	IApplicantRepository applicantRepo;
	
	@MockBean
	IAdmissionCommiteeRepository commiteeRepo;
	
	@MockBean
	IUniversityStaffRepository staffRepo;
	
	int applicantId=101;
	String password="pass";
	
	@Test
	@Order(1)
	public void testApplicant() throws ApplicantNotFoundException {
		//when(service.loginAsApplicant(applicantId, password)).thenReturn(false);
		assertTrue(service.loginAsApplicant(applicantId, password));
	}
	
	@Test
	@Order(2)
	public void testAdmissionCommitee() throws AdmissionMemNotFoundException {
		//when(service.loginAsApplicant(applicantId, password)).thenReturn(false);
		assertTrue(service.loginAsAdmissionCommiteeMember(applicantId, password));
	}
	
	@Test
	@Order(3)
	public void testStaff() throws StaffMemberNotFoundException {
		//when(service.loginAsApplicant(applicantId, password)).thenReturn(false);
		assertTrue(service.loginAsUniversityStaffMember(applicantId, password));
	}
}
