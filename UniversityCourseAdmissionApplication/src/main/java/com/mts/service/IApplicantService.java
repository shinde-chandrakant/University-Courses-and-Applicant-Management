package com.mts.service;

import java.util.List;

import com.mts.entities.AdmissionStatus;
import com.mts.entities.Applicant;
import com.mts.exception.ApplicantNotFoundException;

public interface IApplicantService {
	public Applicant addApplicant(Applicant applicant);

	public Applicant updateApplicant(Applicant applicant) throws ApplicantNotFoundException;

	public Applicant deleteApplicant(Applicant applicant) throws ApplicantNotFoundException;

	public Applicant viewApplicant(int applicant) throws ApplicantNotFoundException;

	public List<Applicant> viewAllApplicantsByStatus(AdmissionStatus status);

}
