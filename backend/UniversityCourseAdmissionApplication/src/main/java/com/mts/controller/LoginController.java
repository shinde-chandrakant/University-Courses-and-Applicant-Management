package com.mts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	// Validate Applicant
	@GetMapping("/validateApplicant")
	public ResponseEntity<Object> loginAsApplicant(@RequestParam int applicantId, @RequestParam String password) {
		try {
			if(service.loginAsApplicant(applicantId, password))
				return ResponseEntity.ok("Login Validated..");
			else
				return ResponseEntity.ok("Invalid Login !!");
		} catch (ApplicantNotFoundException e) {
			return ResponseEntity.ok().body(e.getMessage());
		}
	}
	
	// Validate CommiteeMember
	@GetMapping("/validateCommiteeMember")
	public ResponseEntity<Object> loginAsAdmissionCommiteeMember(@RequestParam int adminId, @RequestParam String password) {
		try {
			if(service.loginAsAdmissionCommiteeMember(adminId, password))
				return ResponseEntity.ok("Login Validated..");
			else
				return ResponseEntity.ok("Invalid Login !!");
		} catch (AdmissionMemNotFoundException e) {
			return ResponseEntity.ok().body(e.getMessage());
		}
	}
	
	// Validate Staff Member
	@GetMapping("/validateStaffMember")
	public ResponseEntity<Object> loginAsUniversityStaffMember(@RequestParam int staffId, @RequestParam String password) {
		try {
			if(service.loginAsUniversityStaffMember(staffId, password))
				return ResponseEntity.ok("Login Validated..");
			else
				return ResponseEntity.ok("Invalid Login !!");
		} catch (StaffMemberNotFoundException e) {
			return ResponseEntity.ok().body(e.getMessage());
		}
	}
}
