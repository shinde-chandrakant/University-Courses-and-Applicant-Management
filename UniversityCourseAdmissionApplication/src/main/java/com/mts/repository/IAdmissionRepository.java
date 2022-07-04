package com.mts.repository;

import java.time.LocalDate;
import java.util.List;

import com.mts.entities.Admission;
import com.mts.exception.AdmissionNotGrantedException;

public interface IAdmissionRepository {
	public Admission addAdmission(Admission admission) throws AdmissionNotGrantedException;

	public Admission updateAdmission(Admission admission) throws AdmissionNotGrantedException;

	public Admission cancelAdmission(int admissionid) throws AdmissionNotGrantedException;

	public List<Admission> showAllAdmissionsByCourseId(int courseid);

	public List<Admission> showAllAdmissionsByDate(LocalDate admissiondate);

	public List<Admission> showAllAdmissionsByApplicant(int applicantid);

	public double calculateTotalCost(int bookingid);

}
