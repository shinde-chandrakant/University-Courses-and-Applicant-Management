package com.mts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mts.exception.AdmissionMemNotFoundException;
import com.mts.exception.ApplicantNotFoundException;
import com.mts.exception.StaffMemberNotFoundException;
import com.mts.service.ILoginService;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	ILoginService service;
	
	@GetMapping("/validateApplicant")
	public Boolean loginAsApplicant(int applicantId, String password) throws ApplicantNotFoundException {
		return service.loginAsApplicant(applicantId, password);
	}
	
	@GetMapping("/validateCommiteeMember")
	public boolean loginAsAdmissionCommiteeMember(int adminId, String password) throws AdmissionMemNotFoundException {
		return service.loginAsAdmissionCommiteeMember(adminId, password);
	}
	
	@GetMapping("/validateStaffMember")
	public boolean loginAsUniversityStaffMember(int staffId, String password) throws StaffMemberNotFoundException {
		return service.loginAsUniversityStaffMember(staffId, password);
	}
}
