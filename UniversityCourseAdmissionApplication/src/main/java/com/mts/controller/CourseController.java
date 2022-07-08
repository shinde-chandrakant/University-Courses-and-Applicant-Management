package com.mts.controller;

import java.util.List;

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

import com.mts.entities.Course;
import com.mts.exception.CourseNotFoundException;
import com.mts.service.ICourseService;

@RestController
@RequestMapping("/course")
public class CourseController {

	@Autowired
	ICourseService service;

	@PostMapping("/addCourse")
	public ResponseEntity<Course> addCourse(@RequestBody Course course) {
		Course course1 = service.addCourse(course);
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
			Course course1 = service.updateCourse(course);
			return new ResponseEntity<>(course1, HttpStatus.OK);
		} catch (CourseNotFoundException e) {
			return ResponseEntity.ok().body(e.getMessage());
		}
	}

	@GetMapping("/viewAllCourses")
	public ResponseEntity<List<Course>> viewAllCourses() {
		List<Course> lst = service.viewAllCourses();
		return new ResponseEntity<>(lst, HttpStatus.OK);
	}
}
