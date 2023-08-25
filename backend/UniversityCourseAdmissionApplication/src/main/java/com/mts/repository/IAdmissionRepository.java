package com.mts.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mts.entities.Admission;

public interface IAdmissionRepository  extends JpaRepository<Admission, Integer>{
	
	List<Admission> findByCourseId(int courseId);
	List<Admission> findByadmissionDate(LocalDate admissionDate);
}
