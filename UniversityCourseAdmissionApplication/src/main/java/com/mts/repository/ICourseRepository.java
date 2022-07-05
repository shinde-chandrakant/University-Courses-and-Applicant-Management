package com.mts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.mts.entities.Course;
import com.mts.exception.CourseNotFoundException;

public interface ICourseRepository extends JpaRepository<Course, Integer>{
	
//	public Course addCourse(Course course);
//	public Course removeCourse(int courseid) throws CourseNotFoundException;
//	public Course updateCourse(Course course) throws CourseNotFoundException;
//	public Course viewCourse(int courseid) throws CourseNotFoundException;
	
	@Query("SELECT c from Course c")
	public List<Course> viewCourseList();

}