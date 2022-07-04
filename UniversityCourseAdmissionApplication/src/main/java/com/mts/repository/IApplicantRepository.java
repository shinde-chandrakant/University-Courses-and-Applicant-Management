package com.mts.repository;

import java.util.List;

import com.mts.entities.Applicant;
import com.mts.exception.ApplicantNotFoundException;

public interface IApplicantRepository {
	public Applicant addApplicant(Applicant applicant);

	public Applicant updateApplicant(Applicant applicant) throws ApplicantNotFoundException;

	public Applicant deleteApplicant(Applicant applicant) throws ApplicantNotFoundException;

	public Applicant viewApplicant(int applicantid) throws ApplicantNotFoundException;

	public List<Applicant> viewAllApplicantsByCourse(int courseid);

}
