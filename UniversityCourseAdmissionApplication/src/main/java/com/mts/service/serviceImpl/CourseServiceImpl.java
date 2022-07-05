package com.mts.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mts.entities.Course;
import com.mts.exception.CourseNotFoundException;
import com.mts.repository.ICourseRepository;
import com.mts.service.ICourseService;

@Service
public class CourseServiceImpl implements ICourseService{

	@Autowired
	ICourseRepository courseRepository;
	
	@Override
	public Course addCourse(Course course) {
		
		return courseRepository.save(course);
	}

	@Override
	public Course removeCourse(int courseId) throws CourseNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Course updateCourse(Course course) throws CourseNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Course viewCourse(int courseid) throws CourseNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Course> viewAllCourses() {
		return courseRepository.viewCourseList();
	}

}
