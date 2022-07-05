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

import com.mts.entities.Course;
import com.mts.exception.CourseNotFoundException;
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
	
	@DeleteMapping("/removeCourse/{courseId}")
	public Course removeCourse(@PathVariable int courseId) throws CourseNotFoundException {
		return courseServiceImpl.removeCourse(courseId);
	}
	
	@PutMapping("/updateCourse")
	public Course updateCourse(@RequestBody Course course) throws CourseNotFoundException {
		return courseServiceImpl.updateCourse(course);
	}
	
	@GetMapping("/viewAllCourses")
	public List<Course> viewAllCourses(){
		return courseServiceImpl.viewAllCourses();
	}
}
