package com.mts.serviceTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.List;
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
import com.mts.exception.AdmissionMemNotFoundException;
import com.mts.repository.IAdmissionCommiteeRepository;
import com.mts.service.IAdmissionCommiteeMemberService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class AdmissionCommiteeServiceTest {

	@Autowired
	IAdmissionCommiteeMemberService service; 
	
	@MockBean
	IAdmissionCommiteeRepository repo;
	
	AdmissionCommiteeMember c1= new AdmissionCommiteeMember(101,"Sagar","7934873784","pass");
	AdmissionCommiteeMemberDto c1Dto=new AdmissionCommiteeMemberDto(101,"Sagar");
	
	List<AdmissionCommiteeMember> lst= Stream.of(new AdmissionCommiteeMember(101,"Sagar","7934873784","pass"),new AdmissionCommiteeMember(102,"Magar","9934873784","word")).collect(Collectors.toList());
	List<AdmissionCommiteeMemberDto> lstDTO=Stream.of(new AdmissionCommiteeMemberDto(101,"Sagar"),new AdmissionCommiteeMemberDto(102,"Magar")).collect(Collectors.toList());
	
	@Test
	@Order(1)
	public void testAddCommiteeMember() {
		when(repo.save(c1)).thenReturn(c1);
		
		assertThat(service.addCommiteeMember(c1)).isEqualTo(c1);
	}
	
	@Test
	@Order(2)
	public void testViewCommiteeMember() throws AdmissionMemNotFoundException {
		int id= 101;
		when(repo.findById(id).get()).thenReturn(c1);
		//when(service.viewCommiteeMember(id)).thenReturn(c1Dto);
		assertThat(service.viewCommiteeMember(id)).isEqualTo(c1Dto);
	}
	
	@Test
	@Order(3)
	public void testViewAllCommiteeMembers(){
		when(repo.findAll()).thenReturn(lst);
		when(service.viewAllCommiteeMembers()).thenReturn(lstDTO);
		assertThat(service.viewAllCommiteeMembers()).isEqualTo(lstDTO);
	}
}
