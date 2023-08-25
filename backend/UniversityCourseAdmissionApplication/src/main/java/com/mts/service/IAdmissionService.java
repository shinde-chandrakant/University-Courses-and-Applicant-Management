package com.mts.service;

import java.time.LocalDate;
import java.util.List;

import com.mts.entities.Admission;
import com.mts.exception.AdmissionNotGrantedException;

public interface IAdmissionService {
	public Admission addAdmission(Admission admission);

	public Admission updateAdmission(Admission admission) throws AdmissionNotGrantedException;

	public Admission cancelAdmission(int admissionId) throws AdmissionNotGrantedException;

	public List<Admission> showAllAdmissionsByCourseId(int courseId);

	public List<Admission> showAllAdmissionsByDate(LocalDate admissionDate);

}
