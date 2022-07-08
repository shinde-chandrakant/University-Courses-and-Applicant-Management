package com.mts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mts.dto.StaffMemberDto;
import com.mts.entities.Course;
import com.mts.entities.UniversityStaffMember;
import com.mts.exception.CourseNotFoundException;
import com.mts.exception.StaffMemberNotFoundException;
import com.mts.service.IUniversityStaffService;

@Controller
@RequestMapping("/staff")
public class UniversityStaffController {
	
	@Autowired	
	IUniversityStaffService service;
	
	@PostMapping("/addStaff")
	public ResponseEntity<UniversityStaffMember> addStaff(@RequestBody UniversityStaffMember user) {
		UniversityStaffMember member1= service.addStaff(user);
		return new ResponseEntity<>(member1, HttpStatus.OK);
	}
	
	@PutMapping("/updateStaff")
	public ResponseEntity<Object> updateStaff(@RequestBody UniversityStaffMember user) {
		try {
			UniversityStaffMember applicant1= service.updateStaff(user);
			return new ResponseEntity<>(applicant1, HttpStatus.OK);
		} catch (StaffMemberNotFoundException e) {
			return ResponseEntity.ok().body(e.getMessage());
		}
	}
	
	@GetMapping("/viewStaffMember/{staffid}")
	public ResponseEntity<Object> viewStaffMember(@PathVariable int staffid){
		try {
			StaffMemberDto applicant1= service.viewStaff(staffid);
			return new ResponseEntity<>(applicant1, HttpStatus.OK);
		} catch (StaffMemberNotFoundException e) {
			return ResponseEntity.ok().body(e.getMessage());
		}
	}
	
	@DeleteMapping("/removeStaff/{staffid}")
	public ResponseEntity<String> removeStaff(@PathVariable int staffid) {
		
		try {
			service.removeStaff(staffid);
			return ResponseEntity.ok("Deleted..");
		} catch (StaffMemberNotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/viewAllStaffs")
	public ResponseEntity<List<StaffMemberDto>> viewAllStaffs(){
		List<StaffMemberDto> lst= service.viewAllStaffs();
		return new ResponseEntity<>(lst, HttpStatus.OK);
	}
	
	@PostMapping("/addCourse")
	public ResponseEntity<Course> addCourse(@RequestBody Course course) {
		Course course1= service.addCourse(course);
		return new ResponseEntity<>(course1, HttpStatus.OK);
	}
	
	@DeleteMapping("/removeCourse/{courseId}")
	public ResponseEntity<String> removeCourse(@PathVariable int courseId) {
		
		try {
			service.removeCourse(courseId);
			return ResponseEntity.ok("Deleted..");
		} catch (CourseNotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/updateCourse")
	public ResponseEntity<Object> updateCourse(@RequestBody Course course) {
		
		try {
			Course course1=  service.updateCourse(course);
			return new ResponseEntity<>(course1, HttpStatus.OK);
		} catch (CourseNotFoundException e) {
			return ResponseEntity.ok().body(e.getMessage());
		}
	}
}
