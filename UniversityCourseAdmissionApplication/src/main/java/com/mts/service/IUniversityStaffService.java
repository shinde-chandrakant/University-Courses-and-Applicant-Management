package com.mts.service;

import java.util.List;

import com.mts.entities.Course;
import com.mts.entities.UniversityStaffMember;
import com.mts.exception.CourseNotFoundException;

public interface IUniversityStaffService {
	public UniversityStaffMember addStaff(UniversityStaffMember user);

	public UniversityStaffMember updateStaff(UniversityStaffMember user);

	public UniversityStaffMember viewStaff(int staffid);

	public void removeStaff(int staffid);

	public List<UniversityStaffMember> viewAllStaffs();

	public Course addCourse(Course course);

	public Course removeCourse(int courseId) throws CourseNotFoundException;

	public Course updateCourse(Course course) throws CourseNotFoundException;

}
