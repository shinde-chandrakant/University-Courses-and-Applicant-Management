package com.mts.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mts.entities.Admission;
import com.mts.entities.AdmissionCommiteeMember;
import com.mts.entities.AdmissionStatus;
import com.mts.entities.Applicant;
import com.mts.exception.AdmissionMemNotFoundException;
import com.mts.repository.IAdmissionCommiteeMemberRepository;
import com.mts.service.IAdmissionCommiteeMemberService;

@Service
public class AdmissionCommiteeMemberServiceImpl implements IAdmissionCommiteeMemberService{

	@Autowired
	IAdmissionCommiteeMemberRepository repo;
	
	@Override
	public AdmissionCommiteeMember addCommiteeMember(AdmissionCommiteeMember member) {
		return repo.save(member);
	}

	@Override
	public AdmissionCommiteeMember updateCommiteeMember(AdmissionCommiteeMember member) throws AdmissionMemNotFoundException{
		AdmissionCommiteeMember member1=repo.findById(member.getAdminId()).orElseThrow(()->new AdmissionMemNotFoundException("No record present with given id"));
		member1.setAdminName(member.getAdminName());
		member1.setAdminContact(member.getAdminContact());
		return member1;
	}

	@Override
	public AdmissionCommiteeMember viewCommiteeMember(int adminId) throws AdmissionMemNotFoundException{
		return repo.findById(adminId).orElseThrow(()->new AdmissionMemNotFoundException("Invalid memberId !"));
	}

	@Override
	public void removeCommiteeMember(int adminId) throws AdmissionMemNotFoundException{
		repo.deleteById(adminId);	
	}

	@Override
	public List<AdmissionCommiteeMember> viewAllCommiteeMembers() {
		return repo.findAll();
	}

	@Override
	public AdmissionStatus provideAdmissionResult(Applicant applicant, Admission admission) {
		return applicant.getStatus();	
	}

}
