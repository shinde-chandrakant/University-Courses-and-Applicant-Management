package com.mts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mts.entities.Admission;
import com.mts.entities.AdmissionCommiteeMember;
import com.mts.entities.AdmissionStatus;
import com.mts.entities.Applicant;
import com.mts.exception.AdmissionMemNotFoundException;
import com.mts.service.IAdmissionCommiteeMemberService;

@RestController
@RequestMapping("/admissionMember")
public class AdmissionCommiteeController {

	@Autowired
	IAdmissionCommiteeMemberService service;
	
	@PostMapping("/addCommiteeMember")
	public AdmissionCommiteeMember addCommiteeMember(@RequestBody AdmissionCommiteeMember member) {
		return service.addCommiteeMember(member);
	}
	
	@PutMapping("/updateCommiteeMember")
	public AdmissionCommiteeMember updateCommiteeMember(@RequestBody AdmissionCommiteeMember member) throws AdmissionMemNotFoundException {
		return service.updateCommiteeMember(member);
	}
	
	@GetMapping("/viewCommiteeMember/{adminId}")
	public AdmissionCommiteeMember viewCommiteeMember(@PathVariable int adminId) throws AdmissionMemNotFoundException {
		return service.viewCommiteeMember(adminId);
	}
	
	@DeleteMapping("/removeCommiteeMember/{adminId}")
	public void removeCommiteeMember(@PathVariable int adminId) throws AdmissionMemNotFoundException{
		service.removeCommiteeMember(adminId);
	}
	
	@GetMapping("/viewAllCommiteeMember/")
	public List<AdmissionCommiteeMember> viewAllCommiteeMembers(){
		return service.viewAllCommiteeMembers();
	}
	
	@GetMapping("/getAdmissionResult")
	public AdmissionStatus getAdmissionResult(@RequestBody Applicant applicant, @RequestBody Admission admission) {
		return service.provideAdmissionResult(applicant, admission);
	}
}
