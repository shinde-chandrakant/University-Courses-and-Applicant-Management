package com.mts.service.serviceImpl;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mts.dto.AdmissionCommiteeMemberDto;
import com.mts.entities.AdmissionCommiteeMember;
import com.mts.entities.AdmissionStatus;
import com.mts.entities.Applicant;
import com.mts.exception.AdmissionMemNotFoundException;
import com.mts.repository.IAdmissionCommiteeRepository;
import com.mts.service.IAdmissionCommiteeMemberService;

@Service
public class AdmissionCommiteeMemberServiceImpl implements IAdmissionCommiteeMemberService{

	@Autowired
	IAdmissionCommiteeRepository repo;
	
	@Autowired
	ModelMapper mapper; 
	
	@Override
	public AdmissionCommiteeMember addCommiteeMember(AdmissionCommiteeMember member) {
		return repo.save(member);
	}

	@Override
	public AdmissionCommiteeMember updateCommiteeMember(AdmissionCommiteeMember member) throws AdmissionMemNotFoundException{
		AdmissionCommiteeMember member1=repo.findById(member.getAdminId()).orElseThrow(()->new AdmissionMemNotFoundException("No record present with given id"));
		member1.setAdminName(member.getAdminName());
		member1.setAdminContact(member.getAdminContact());
		member1.setPassword(member.getPassword());
		return repo.save(member1);
	}

	@Override
	public AdmissionCommiteeMemberDto viewCommiteeMember(int adminId) throws AdmissionMemNotFoundException{
		AdmissionCommiteeMember member1=repo.findById(adminId).orElseThrow(()->new AdmissionMemNotFoundException("Invalid memberId !"));
		return mapper.map(member1, AdmissionCommiteeMemberDto.class);
	}

	@Override
	public void removeCommiteeMember(int adminId) throws AdmissionMemNotFoundException{
		repo.deleteById(adminId);	
	}

	@Override
	public List<AdmissionCommiteeMemberDto> viewAllCommiteeMembers() {
		
		List<AdmissionCommiteeMember>lst=repo.findAll();
		List<AdmissionCommiteeMemberDto> toDTO= Arrays.asList(mapper.map(lst, AdmissionCommiteeMemberDto[].class));
		return toDTO;
	}

	@Override
	public AdmissionStatus provideAdmissionResult(Applicant applicant) {
		return applicant.getStatus();	
	}

}
