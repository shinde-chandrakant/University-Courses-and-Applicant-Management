package com.mts.serviceTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.mts.entities.Course;
import com.mts.exception.CourseNotFoundException;
import com.mts.repository.ICourseRepository;
import com.mts.service.ICourseService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class CourseServiceTest {

	@Autowired
	ICourseService service;

	@MockBean
	ICourseRepository repo;

	int id = 101;
	LocalDate startDate = LocalDate.parse("2022-02-13");
	LocalDate endDate = LocalDate.parse("2022-02-19");

	Course c1 = new Course(101, "Py", "6", startDate, endDate, "7000");

	List<Course> lst = Stream.of(new Course(101, "Py", "6", startDate, endDate, "7000"), c1)
			.collect(Collectors.toList());

	@Test
	@Order(1)
	public void testAddCourse() {
		when(repo.save(c1)).thenReturn(c1);

		assertThat(service.addCourse(c1)).isEqualTo(c1);
	}

	@Test
	@Order(2)
	public void testViewCourse() throws CourseNotFoundException {
		when(repo.findById(id).get()).thenReturn(c1);
		assertEquals(c1, service.viewCourse(id));
	}

	@Test
	@Order(3)
	public void testViewAllCourses() {
		when(repo.findAll()).thenReturn(lst);
		assertEquals(2, service.viewAllCourses().size());
	}

	@Test
	@Order(4)
	public void testUpdateCourse() throws CourseNotFoundException {
		when(repo.findById(id).get()).thenReturn(c1);

		Course cc1 = repo.findById(id).get();
		cc1.setCourseName("Java");

		when(repo.save(cc1)).thenReturn(cc1);

		assertEquals(cc1, service.updateCourse(cc1));
	}

	@Test
	@Order(5)
	public void testRemoveCourse() throws CourseNotFoundException {
//		when(repo.findById(id).get()).thenReturn(c1);
//		when(service.removeCourse(id)).thenReturn(c1);
		service.removeCourse(id);
		verify(repo, times(1)).deleteById(id);
	}
}
