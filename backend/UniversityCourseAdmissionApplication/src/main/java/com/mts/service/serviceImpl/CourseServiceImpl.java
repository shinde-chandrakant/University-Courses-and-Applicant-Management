package com.mts.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mts.entities.Course;
import com.mts.exception.CourseNotFoundException;
import com.mts.repository.ICourseRepository;
import com.mts.service.ICourseService;

@Service
public class CourseServiceImpl implements ICourseService {

	@Autowired
	ICourseRepository courseRepository;

	@Override
	public Course addCourse(Course course) {
		return courseRepository.save(course);
	}

	@Override
	public Course removeCourse(int courseId) throws CourseNotFoundException {
		Course course = courseRepository.findById(courseId)
				.orElseThrow(() -> new CourseNotFoundException("No record present with given id"));

		courseRepository.delete(course);
		return course;

	}

	@Override
	public Course updateCourse(Course course) throws CourseNotFoundException {
		Course existingCourse = courseRepository.findById(course.getCourseId())
				.orElseThrow(() -> new CourseNotFoundException("Cann't update. No Course with this Id found!"));

		existingCourse.setCourseName(course.getCourseName());
		existingCourse.setCourseDuration(course.getCourseDuration());
		existingCourse.setCourseStartDate(course.getCourseStartDate());
		existingCourse.setCourseEndDate(course.getCourseEndDate());
		existingCourse.setCourseFees(course.getCourseFees());
		return courseRepository.save(existingCourse);

	}

	@Override
	public Course viewCourse(int courseid) throws CourseNotFoundException {
		return courseRepository.findById(courseid).orElseThrow(() -> new CourseNotFoundException("Invalid courseId !"));
	}

	@Override
	public List<Course> viewAllCourses() {
		return courseRepository.findAll();
	}

}
