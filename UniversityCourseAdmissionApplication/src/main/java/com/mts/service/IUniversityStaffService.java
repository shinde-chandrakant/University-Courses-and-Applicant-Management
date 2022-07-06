package com.mts.service;

import java.util.List;

import com.mts.entities.Course;
import com.mts.entities.UniversityStaffMember;
import com.mts.exception.CourseNotFoundException;
import com.mts.exception.StaffMemberNotFoundException;

public interface IUniversityStaffService {
	public UniversityStaffMember addStaff(UniversityStaffMember user);

	public UniversityStaffMember updateStaff(UniversityStaffMember user) throws StaffMemberNotFoundException;

	public UniversityStaffMember viewStaff(int staffid) throws StaffMemberNotFoundException;

	public void removeStaff(int staffid) throws StaffMemberNotFoundException;

	public List<UniversityStaffMember> viewAllStaffs();

	public Course addCourse(Course course);

	public Course removeCourse(int courseId) throws CourseNotFoundException;

	public Course updateCourse(Course course) throws CourseNotFoundException;

}
