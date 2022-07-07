package com.mts.service;

import com.mts.exception.AdmissionMemNotFoundException;
import com.mts.exception.ApplicantNotFoundException;
import com.mts.exception.StaffMemberNotFoundException;

public interface ILoginService {

	public boolean loginAsApplicant(int applicantId, String password) throws ApplicantNotFoundException;

	public boolean loginAsAdmissionCommiteeMember(int adminId, String password) throws AdmissionMemNotFoundException;

	public boolean loginAsUniversityStaffMember(int staffId, String password) throws StaffMemberNotFoundException;

}
