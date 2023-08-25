package com.mts.serviceTest;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.mts.entities.Admission;
import com.mts.entities.AdmissionCommiteeMember;
import com.mts.entities.AdmissionStatus;
import com.mts.entities.Applicant;
import com.mts.entities.UniversityStaffMember;
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
	
	AdmissionStatus status=AdmissionStatus.Applied;
	
	Applicant c1= new Applicant(101,"Sagar","7934873784","EE",59,new Admission(),status,"pass");
	AdmissionCommiteeMember d1= new AdmissionCommiteeMember(101,"Sagar","7934873784","pass");
	UniversityStaffMember e1= new UniversityStaffMember(101,"pass","Electrical Engineer");
	
	@Test
	@Order(1)
	public void testApplicant() throws ApplicantNotFoundException {
		when(applicantRepo.findById(applicantId)).thenReturn(Optional.of(c1));
		assertTrue(service.loginAsApplicant(applicantId, password));
	}
	
	@Test
	@Order(2)
	public void testAdmissionCommitee() throws AdmissionMemNotFoundException {
		when(commiteeRepo.findById(applicantId)).thenReturn(Optional.of(d1));
		assertTrue(service.loginAsAdmissionCommiteeMember(applicantId, password));
	}
	
	@Test
	@Order(3)
	public void testStaff() throws StaffMemberNotFoundException {
		when(staffRepo.findById(applicantId)).thenReturn(Optional.of(e1));
		assertTrue(service.loginAsUniversityStaffMember(applicantId, password));
	}
}
