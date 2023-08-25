package com.mts.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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

import com.mts.entities.Admission;
import com.mts.exception.AdmissionNotGrantedException;
import com.mts.service.IAdmissionService;

@RestController
@RequestMapping("/admission")
public class AdmissionController {

	@Autowired
	IAdmissionService service;
	
	// Add admission
	@PostMapping
	public ResponseEntity<Admission> addAdmission(@RequestBody Admission admission) {
		Admission admission1=service.addAdmission(admission);
		return new ResponseEntity<>(admission1, HttpStatus.OK);
	}
	
	// Update admission
	@PutMapping
	public ResponseEntity<Object> updateAdmission(@RequestBody Admission admission) {
		try {
			Admission admission1= service.updateAdmission(admission);
			return new ResponseEntity<>(admission1, HttpStatus.OK);			
		} catch (AdmissionNotGrantedException e) {
			return ResponseEntity.ok().body(e.getMessage());
		}
	}
	
	// Delete admission
	@DeleteMapping("/{admissionId}")
	public ResponseEntity<String> cancelAdmission(@PathVariable int admissionId) {	
		try {
			service.cancelAdmission(admissionId);
			return ResponseEntity.ok("Deleted..");
		} catch (AdmissionNotGrantedException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}	
	}
	
	// Get all admission by course Id
	@GetMapping("/{courseId}")
	public ResponseEntity<List<Admission>> showAllAdmissionsByCourseId(@PathVariable int courseId){
		List<Admission> lst= service.showAllAdmissionsByCourseId(courseId);
		return new ResponseEntity<>(lst, HttpStatus.OK);
	}
	
	// Get all admission by course Admission Date
	@GetMapping("/showAllAdmissionsByDate/{admissionDate}")
	public ResponseEntity<List<Admission>> showAllAdmissionsByDate(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate admissionDate) {
		List<Admission> lst= service.showAllAdmissionsByDate(admissionDate);
		return new ResponseEntity<>(lst, HttpStatus.OK);
	}
}
