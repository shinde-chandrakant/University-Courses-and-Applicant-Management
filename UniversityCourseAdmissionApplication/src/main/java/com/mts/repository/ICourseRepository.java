package com.mts.repository;

import java.util.List;

import com.mts.entities.Course;
import com.mts.exception.CourseNotFoundException;

public interface ICourseRepository {
	
	public Course addCourse(Course course);
	public Course removeCourse(int courseid) throws CourseNotFoundException;
	public Course updateCourse(Course course) throws CourseNotFoundException;
	public Course viewCourse(int courseid) throws CourseNotFoundException;
	public List<Course> viewCourseList();

}
