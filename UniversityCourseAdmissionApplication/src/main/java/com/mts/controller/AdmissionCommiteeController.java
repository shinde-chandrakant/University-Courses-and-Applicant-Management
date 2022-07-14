package com.mts.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mts.dto.AdmissionCommiteeMemberDto;
import com.mts.entities.AdmissionCommiteeMember;
import com.mts.entities.AdmissionStatus;
import com.mts.exception.AdmissionMemNotFoundException;
import com.mts.service.IAdmissionCommiteeMemberService;

@RestController
@RequestMapping("/commitee")
public class AdmissionCommiteeController {

	@Autowired
	IAdmissionCommiteeMemberService service;
	
	// To add committee members.
	@PostMapping
	public ResponseEntity<AdmissionCommiteeMember> addCommiteeMember(@Valid @RequestBody AdmissionCommiteeMember member) {
		AdmissionCommiteeMember m1= service.addCommiteeMember(member);
		return new ResponseEntity<>(m1, HttpStatus.OK);
	}
	
	// update admission committee member details
	@PutMapping
	public ResponseEntity<Object> updateCommiteeMember(@RequestBody AdmissionCommiteeMember member) throws AdmissionMemNotFoundException {
		try {
			AdmissionCommiteeMember m1=service.updateCommiteeMember(member);
			return new ResponseEntity<>(m1, HttpStatus.OK);
		} catch (AdmissionMemNotFoundException e) {
			return ResponseEntity.ok().body(e.getMessage());
		}
	}
	
	// Get admission committee member details by admission id
	@GetMapping("/{adminId}")
	public ResponseEntity<Object> viewCommiteeMember(@PathVariable int adminId) {
		try {
			AdmissionCommiteeMemberDto m1= service.viewCommiteeMember(adminId);
			return new ResponseEntity<>(m1, HttpStatus.OK);
		} catch (AdmissionMemNotFoundException e) {
			return ResponseEntity.ok().body(e.getMessage());
		}		
	}
	
	// Delete admission committee member by admission id
	@DeleteMapping("/{adminId}")
	public ResponseEntity<String> removeCommiteeMember(@PathVariable int adminId){
		try {
			service.removeCommiteeMember(adminId);
			return ResponseEntity.ok("Deleted..");
		} catch (AdmissionMemNotFoundException | IllegalArgumentException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	// view all committee members
	@GetMapping
	public ResponseEntity<List<AdmissionCommiteeMemberDto>> viewAllCommitteeMembers(){
		List<AdmissionCommiteeMemberDto> lst= service.viewAllCommiteeMembers();
		return new ResponseEntity<>(lst, HttpStatus.OK);
	}
	
	// Get Admission Result by applicant id
	@GetMapping("/getAdmissionResult/{applicantId}")
	public ResponseEntity<AdmissionStatus> getAdmissionResult(@PathVariable int applicantId) {
		AdmissionStatus status= service.provideAdmissionResult(applicantId);
		return ResponseEntity.ok(status);
	}
}
