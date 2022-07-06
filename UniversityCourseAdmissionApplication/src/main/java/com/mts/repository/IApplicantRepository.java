package com.mts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mts.entities.AdmissionStatus;
import com.mts.entities.Applicant;

public interface IApplicantRepository extends JpaRepository<Applicant, Integer> {
	List<Applicant> findByStatus(AdmissionStatus status);
}
