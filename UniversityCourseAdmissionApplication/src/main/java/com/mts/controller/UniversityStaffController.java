package com.mts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

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
	public UniversityStaffMember addStaff(@RequestBody UniversityStaffMember user) {
		return service.addStaff(user);
	}
	
	@PutMapping("/updateStaff")
	public UniversityStaffMember updateStaff(@RequestBody UniversityStaffMember user) throws StaffMemberNotFoundException {
		return service.updateStaff(user);
	}
	
	@GetMapping("/viewStaffMember/{staffid}")
	public UniversityStaffMember viewStaffMember(@PathVariable int staffid) throws StaffMemberNotFoundException {
		return service.viewStaff(staffid);
	}
	
	@DeleteMapping("/removeStaff/{staffid}")
	public void removeStaff(@PathVariable int staffid) throws StaffMemberNotFoundException {
		service.removeStaff(staffid);
	}
	
	@GetMapping("/viewAllStaffs")
	public List<UniversityStaffMember> viewAllStaffs(){
		return service.viewAllStaffs();
	}
	
	@PostMapping("/addCourse")
	public Course addCourse(@RequestBody Course course) {
		return service.addCourse(course);
	}
	
	@DeleteMapping("/removeCourse/{courseId}")
	public Course removeCourse(@PathVariable int courseId) throws CourseNotFoundException {
		return service.removeCourse(courseId);
	}
	
	@PutMapping("/updateCourse")
	public Course updateCourse(@RequestBody Course course) throws CourseNotFoundException {
		return service.updateCourse(course);
	}
}
