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

import com.mts.entities.Admission;
import com.mts.entities.AdmissionStatus;
import com.mts.exception.AdmissionNotGrantedException;
import com.mts.exception.CourseNotFoundException;
import com.mts.repository.IAdmissionRepository;
import com.mts.service.IAdmissionService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class AdmissionServiceTest {

	@Autowired
	IAdmissionService service;

	@MockBean
	IAdmissionRepository repo;

	int id = 101;
	LocalDate admissionDate = LocalDate.parse("2022-02-13");

	AdmissionStatus status = AdmissionStatus.Applied;

	Admission c1 = new Admission(101, 1002, 101, admissionDate, status);

	List<Admission> lst = Stream.of(new Admission(102, 1002, 102, admissionDate, status), c1)
			.collect(Collectors.toList());
	
	List<Admission> lst1 = List.of(c1);

	@Test
	@Order(1)
	public void testAddAdmission() {
		when(repo.save(c1)).thenReturn(c1);

		assertThat(service.addAdmission(c1)).isEqualTo(c1);
	}

	@Test
	@Order(2)
	public void testViewAdmissionsByCourseId() throws CourseNotFoundException {
		int courseId = 101;
		when(repo.findByCourseId(courseId)).thenReturn(lst1);
		assertEquals(1, service.showAllAdmissionsByCourseId(courseId).size());
	}

	@Test
	@Order(3)
	public void testViewAllAdmission() {
		when(repo.findByadmissionDate(admissionDate)).thenReturn(lst);
		assertEquals(2, service.showAllAdmissionsByDate(admissionDate).size());
	}

	@Test
	@Order(4)
	public void testUpdateAdmission() throws AdmissionNotGrantedException {
		when(repo.findById(c1.getAdmissionId())).thenReturn(Optional.of(c1));

		Admission cc1 = repo.findById(c1.getAdmissionId()).get();
		cc1.setCourseId(2003);

		when(repo.save(cc1)).thenReturn(cc1);

		assertEquals(cc1, service.updateAdmission(cc1));
	}

	@Test
	@Order(5)
	public void testRemoveCourse() throws AdmissionNotGrantedException {
		when(repo.findById(id)).thenReturn(Optional.of(c1));
		service.cancelAdmission(id);
		verify(repo, times(1)).delete(c1);
	}

}
