package com.mts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mts.entities.AdmissionStatus;
import com.mts.entities.Applicant;

public interface IApplicantRepository extends JpaRepository<Applicant, Integer> {

	@Query(value = "SELECT status FROM applicant WHERE applicant_id = :n", nativeQuery = true)
	AdmissionStatus getStatusById(@Param("n") int applicantId);

	List<Applicant> findByStatus(AdmissionStatus status);
}
