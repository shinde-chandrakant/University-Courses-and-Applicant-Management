package com.mts.service;

import java.util.List;

import com.mts.dto.AdmissionCommiteeMemberDto;
import com.mts.entities.AdmissionCommiteeMember;
import com.mts.entities.AdmissionStatus;
import com.mts.entities.Applicant;
import com.mts.exception.AdmissionMemNotFoundException;

public interface IAdmissionCommiteeMemberService {
	public AdmissionCommiteeMember addCommiteeMember(AdmissionCommiteeMember member);

	public AdmissionCommiteeMember updateCommiteeMember(AdmissionCommiteeMember member)throws AdmissionMemNotFoundException;

	public AdmissionCommiteeMemberDto viewCommiteeMember(int adminId)throws AdmissionMemNotFoundException;

	public void removeCommiteeMember(int adminId)throws AdmissionMemNotFoundException;

	public List<AdmissionCommiteeMemberDto> viewAllCommiteeMembers();

	public AdmissionStatus provideAdmissionResult(Applicant applicant);
}
