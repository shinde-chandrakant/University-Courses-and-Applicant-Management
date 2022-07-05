package com.mts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mts.entities.Course;
import com.mts.service.serviceImpl.CourseServiceImpl;

@RestController
@RequestMapping("/course")
public class CourseController {

	@Autowired
	CourseServiceImpl courseServiceImpl;
	
	@PostMapping("/addCourse")
	public Course addCourse(@RequestBody Course course) {
		return courseServiceImpl.addCourse(course);
	}
	
	@GetMapping("/viewAllCourses")
	public List<Course> viewAllCourses(){
		return courseServiceImpl.viewAllCourses();
	}
}
