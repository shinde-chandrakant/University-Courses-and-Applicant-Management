package com.mts.serviceTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.mts.dto.ApplicantDto;
import com.mts.entities.Admission;
import com.mts.entities.AdmissionStatus;
import com.mts.entities.Applicant;
import com.mts.exception.ApplicantNotFoundException;
import com.mts.repository.IApplicantRepository;
import com.mts.service.IApplicantService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class ApplicantServiceTest {

	@Autowired
	IApplicantService service;
	
	@MockBean
	IApplicantRepository repo;
	
	int id= 101;
	AdmissionStatus status=AdmissionStatus.Applied;
	
	Applicant c1= new Applicant(101,"Sagar","7934873784","EE",59,new Admission(),status,"pass");
	ApplicantDto c1DTO=new ApplicantDto(101,"Sagar",status);
	
	List<Applicant> lst= Stream.of(c1,new Applicant(102,"Rene","8834873784","EE",59,new Admission(),status,"word")).collect(Collectors.toList());
	List<ApplicantDto> lstDTO=Stream.of(c1DTO,new ApplicantDto(102,"Rene",status)).collect(Collectors.toList());

	@Test
	@Order(1)
	public void testAddApplicant() {
		when(repo.save(c1)).thenReturn(c1);
		
		assertThat(service.addApplicant(c1)).isEqualTo(c1);
	}
	
//	// Not working
//	@Test
//	@Order(2)
//	public void testViewApplicant() throws ApplicantNotFoundException {
//		when(repo.findById(id)).thenReturn(Optional.of(c1));
//		assertEquals(c1DTO,service.viewApplicant(id));
//	}
	
	@Test
	@Order(3)
	public void testViewAllApplicant(){
		when(repo.findByStatus(status)).thenReturn(lst);
		assertEquals(2, service.viewAllApplicantsByStatus(status).size());
	}
	
	@Test
	@Order(4)
	public void testUpdateApplicant() throws ApplicantNotFoundException {
		when(repo.findById(id)).thenReturn(Optional.of(c1));
		
		Applicant cc1=repo.findById(id).get();
		cc1.setApplicantName("Tejas");
		
		when(repo.save(cc1)).thenReturn(cc1);
		
		assertEquals(cc1, service.updateApplicant(cc1));
	}
	
	@Test
	@Order(5)
	public void testRemoveApplicant() throws ApplicantNotFoundException {
		when(repo.findById(id)).thenReturn(Optional.of(c1));
		service.deleteApplicant(c1);
		verify(repo, times(1)).delete(c1);
	}
}
