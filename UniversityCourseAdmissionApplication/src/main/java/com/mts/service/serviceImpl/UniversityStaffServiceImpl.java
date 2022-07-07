package com.mts.service.serviceImpl;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mts.dto.StaffMemberDto;
import com.mts.entities.Course;
import com.mts.entities.UniversityStaffMember;
import com.mts.exception.CourseNotFoundException;
import com.mts.exception.StaffMemberNotFoundException;
import com.mts.repository.ICourseRepository;
import com.mts.repository.IUniversityStaffRepository;
import com.mts.service.IUniversityStaffService;

@Service
public class UniversityStaffServiceImpl implements IUniversityStaffService{

	@Autowired
	IUniversityStaffRepository repo;
	
	@Autowired
	ICourseRepository courseRepository;
	
	@Autowired
	ModelMapper mapper;
	
	@Override
	public UniversityStaffMember addStaff(UniversityStaffMember user) {
		return repo.save(user);
	}

	@Override
	public UniversityStaffMember updateStaff(UniversityStaffMember user) throws StaffMemberNotFoundException {
		UniversityStaffMember member=repo.findById(user.getStaffId()).orElseThrow(()->new StaffMemberNotFoundException("Cann't update. No staff member with this Id found!"));
		
		member.setPassword(user.getPassword());
		member.setRole(user.getRole());
		member.setPassword(user.getPassword());
		return repo.save(member);
	}

	@Override
	public StaffMemberDto viewStaff(int staffid) throws StaffMemberNotFoundException {
		UniversityStaffMember member=repo.findById(staffid).orElseThrow(()->new StaffMemberNotFoundException("Invalid staffId !"));
		return mapper.map(member, StaffMemberDto.class);
	}

	@Override
	public void removeStaff(int staffid) throws StaffMemberNotFoundException {
		repo.deleteById(staffid);
	}

	@Override
	public List<StaffMemberDto> viewAllStaffs() {
		List<UniversityStaffMember> lst=repo.findAll();
		List<StaffMemberDto> toDTO=Arrays.asList(mapper.map(lst, StaffMemberDto[].class));
		return toDTO;
	}

	@Override
	public Course addCourse(Course course) {
		return courseRepository.save(course);
	}

	@Override
	public Course removeCourse(int courseId) throws CourseNotFoundException {
		Course course = courseRepository.findById(courseId).orElseThrow(()->new CourseNotFoundException("No record present with given id"));

		courseRepository.delete(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) throws CourseNotFoundException {
		Course existingCourse = courseRepository.findById(course.getCourseId()).orElseThrow(()->new CourseNotFoundException("Cann't update. No Course with this Id found!"));

		existingCourse.setCourseName(course.getCourseName());
		existingCourse.setCourseDuration(course.getCourseDuration());
		existingCourse.setCourseStartDate(course.getCourseStartDate());
		existingCourse.setCourseEndDate(course.getCourseEndDate());
		existingCourse.setCourseFees(course.getCourseFees());
		return courseRepository.save(existingCourse);
	}

}
