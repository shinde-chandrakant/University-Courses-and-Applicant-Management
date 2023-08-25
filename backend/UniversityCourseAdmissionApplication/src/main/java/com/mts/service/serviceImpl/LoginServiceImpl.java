package com.mts.service.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mts.entities.AdmissionCommiteeMember;
import com.mts.entities.Applicant;
import com.mts.entities.UniversityStaffMember;
import com.mts.exception.AdmissionMemNotFoundException;
import com.mts.exception.ApplicantNotFoundException;
import com.mts.exception.StaffMemberNotFoundException;
import com.mts.repository.IAdmissionCommiteeRepository;
import com.mts.repository.IApplicantRepository;
import com.mts.repository.IUniversityStaffRepository;
import com.mts.service.ILoginService;

@Service
public class LoginServiceImpl implements ILoginService{

	@Autowired
	IApplicantRepository applicantRepo;
	
	@Autowired
	IAdmissionCommiteeRepository commiteeRepo;
	
	@Autowired
	IUniversityStaffRepository staffRepo;

	@Override
	public boolean loginAsApplicant(int applicantId, String password) throws ApplicantNotFoundException {
		Applicant applicant= applicantRepo.findById(applicantId).orElseThrow(()-> new ApplicantNotFoundException("No applicant found with this id !"));
		return applicant.getPassword().equals(password);
	}

	@Override
	public boolean loginAsAdmissionCommiteeMember(int adminId, String password) throws AdmissionMemNotFoundException {
		AdmissionCommiteeMember member1=commiteeRepo.findById(adminId).orElseThrow(()->new AdmissionMemNotFoundException("Invalid memberId !"));
		return member1.getPassword().equals(password);
	}

	@Override
	public boolean loginAsUniversityStaffMember(int staffId, String password) throws StaffMemberNotFoundException {
		UniversityStaffMember member=staffRepo.findById(staffId).orElseThrow(()->new StaffMemberNotFoundException("Invalid staffId !"));
		return member.getPassword().equals(password);
	}

}
