package com.mts.service;


import java.util.List;

import com.mts.entities.Course;
import com.mts.exception.CourseNotFoundException;

public interface ICourseService {

	public Course addCourse(Course course);
	public Course removeCourse(int courseId) throws CourseNotFoundException;
	public Course updateCourse(Course course) throws CourseNotFoundException;
	public Course viewCourse(int courseid) throws CourseNotFoundException;
	public List<Course> viewAllCourses();
}
