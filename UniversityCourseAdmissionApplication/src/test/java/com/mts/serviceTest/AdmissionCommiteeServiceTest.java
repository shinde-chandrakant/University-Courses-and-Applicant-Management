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

import com.mts.dto.AdmissionCommiteeMemberDto;
import com.mts.entities.AdmissionCommiteeMember;
import com.mts.entities.AdmissionStatus;
import com.mts.exception.AdmissionMemNotFoundException;
import com.mts.repository.IAdmissionCommiteeRepository;
import com.mts.repository.IApplicantRepository;
import com.mts.service.IAdmissionCommiteeMemberService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class AdmissionCommiteeServiceTest {

	@Autowired
	IAdmissionCommiteeMemberService service; 
	
	@MockBean
	IAdmissionCommiteeRepository repo;
	
	@MockBean
	IApplicantRepository applicantRepo;
	
	int id= 101;
	
	AdmissionCommiteeMember c1= new AdmissionCommiteeMember(101,"Sagar","7934873784","pass");
	AdmissionCommiteeMemberDto c1DTO=new AdmissionCommiteeMemberDto(101,"Sagar");
	
	List<AdmissionCommiteeMember> lst= Stream.of(c1,new AdmissionCommiteeMember(102,"Magar","9934873784","word")).collect(Collectors.toList());
	List<AdmissionCommiteeMemberDto> lstDTO=Stream.of(c1DTO,new AdmissionCommiteeMemberDto(102,"Magar")).collect(Collectors.toList());
	
	@Test
	@Order(1)
	public void testAddCommiteeMember() {
		when(repo.save(c1)).thenReturn(c1);
		
		assertThat(service.addCommiteeMember(c1)).isEqualTo(c1);
	}
	
	@Test
	@Order(2)
	public void testViewCommiteeMember() throws AdmissionMemNotFoundException {
		when(repo.findById(id)).thenReturn(Optional.of(c1));
		assertEquals(c1DTO,service.viewCommiteeMember(id));
		//assertThat(service.viewCommiteeMember(id)).isNotNull();
	}
	
	@Test
	@Order(3)
	public void testViewAllCommiteeMembers(){
		when(repo.findAll()).thenReturn(lst);
		assertEquals(2, service.viewAllCommiteeMembers().size());
	}
	
	@Test
	@Order(4)
	public void testProvideAdmissionResult() {
		AdmissionStatus status=AdmissionStatus.Rejected;
		when(applicantRepo.getStatusById(id)).thenReturn(status);
		assertEquals(status, service.provideAdmissionResult(id));
	}
	
	@Test
	@Order(5)
	public void testUpdateCommiteeMember() throws AdmissionMemNotFoundException {
		when(repo.findById(id)).thenReturn(Optional.of(c1));
		
		AdmissionCommiteeMember cc1=repo.findById(id).get();
		cc1.setAdminName("Tejas");
		
		when(repo.save(cc1)).thenReturn(cc1);
		
		assertEquals(cc1, service.updateCommiteeMember(cc1));
	}
	
	@Test
	@Order(6)
	public void testRemoveCommiteeMember() throws AdmissionMemNotFoundException {
		service.removeCommiteeMember(id);
		verify(repo, times(1)).deleteById(id);
	}
	

}
