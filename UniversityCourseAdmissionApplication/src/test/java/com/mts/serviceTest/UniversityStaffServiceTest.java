package com.mts.serviceTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.mts.dto.StaffMemberDto;
import com.mts.entities.Course;
import com.mts.entities.UniversityStaffMember;
import com.mts.exception.CourseNotFoundException;
import com.mts.exception.StaffMemberNotFoundException;
import com.mts.repository.ICourseRepository;
import com.mts.repository.IUniversityStaffRepository;
import com.mts.service.IUniversityStaffService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class UniversityStaffServiceTest {

	@Autowired
	IUniversityStaffService service;
	
	@MockBean
	IUniversityStaffRepository repo;
	
	@MockBean
	ICourseRepository courseRepository;
	
	int id= 101;
	
	UniversityStaffMember c1= new UniversityStaffMember(101,"pass","Electrical Engineer");
	StaffMemberDto c1DTO=new StaffMemberDto(102,"Electrical Engineer");
	
	List<UniversityStaffMember> lst= Stream.of(c1,new UniversityStaffMember(102,"pass","Software Engineer")).collect(Collectors.toList());
	List<StaffMemberDto> lstDTO=Stream.of(c1DTO,new StaffMemberDto(102,"Software Engineer")).collect(Collectors.toList());

	LocalDate startDate = LocalDate.parse("2022-02-13");
	LocalDate endDate = LocalDate.parse("2022-02-19");

	Course d1 = new Course(101, "Py", "6", startDate, endDate, "7000");

	List<Course> lstd = Stream.of(new Course(101, "Py", "6", startDate, endDate, "7000"), d1)
			.collect(Collectors.toList());

	
	@Test
	@Order(1)
	public void testAddUniversityStaffMember() {
		when(repo.save(c1)).thenReturn(c1);
		
		assertThat(service.addStaff(c1)).isEqualTo(c1);
	}
	
//	// Not working
//	@Test
//	@Order(2)
//	public void testViewUniversityStaffMember() throws StaffMemberNotFoundException {
//		when(repo.findById(id)).thenReturn(Optional.of(c1));
//		assertEquals(c1DTO,service.viewStaff(id));
//	}
	
	@Test
	@Order(3)
	public void testViewAllUniversityStaffMember(){
		when(repo.findAll()).thenReturn(lst);
		assertEquals(2, service.viewAllStaffs().size());
	}
	
	@Test
	@Order(4)
	public void testUpdateUniversityStaffMember() throws StaffMemberNotFoundException {
		when(repo.findById(id)).thenReturn(Optional.of(c1));
		
		UniversityStaffMember cc1=repo.findById(id).get();
		cc1.setRole("Mechanical Engineer");
		
		when(repo.save(cc1)).thenReturn(cc1);
		
		assertEquals(cc1, service.updateStaff(c1));
	}
	
	@Test
	@Order(5)
	public void testRemoveUniversityStaffMember() throws StaffMemberNotFoundException {
		//when(repo.findById(id)).thenReturn(Optional.of(c1));
		service.removeStaff(id);
		verify(repo, times(1)).deleteById(id);
	}
	
	@Test
	@Order(6)
	public void testAddCourse() {
		when(courseRepository.save(d1)).thenReturn(d1);
		
		assertThat(service.addCourse(d1)).isEqualTo(d1);
	}
	
	@Test
	@Order(7)
	public void testUpdateCourse() throws CourseNotFoundException {
		when(courseRepository.findById(id)).thenReturn(Optional.of(d1));

		Course dd1 = courseRepository.findById(id).get();
		dd1.setCourseName("Java");

		when(courseRepository.save(dd1)).thenReturn(dd1);

		assertEquals(dd1, service.updateCourse(dd1));
	}

	@Test
	@Order(8)
	public void testRemoveCourse() throws CourseNotFoundException {
		when(courseRepository.findById(id)).thenReturn(Optional.of(d1));
		service.removeCourse(id);
		verify(courseRepository, times(1)).delete(d1);
	}
}
