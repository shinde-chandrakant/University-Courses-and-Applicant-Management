package com.mts.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Applicant {
	@Id
	private String applicantId;
	private String applicantName;
	private String mobileNumber;
	private String applicantDegree;
	private int applicantGraduationPercent;
	private Admission admission;
	private AdmissionStatus status;
	
	public Applicant() {
		super();
	}

	public Applicant(String applicantId, String applicantName, String mobileNumber, String applicantDegree,
			int applicantGraduationPercent, Admission admission, AdmissionStatus status) {
		super();
		this.applicantId = applicantId;
		this.applicantName = applicantName;
		this.mobileNumber = mobileNumber;
		this.applicantDegree = applicantDegree;
		this.applicantGraduationPercent = applicantGraduationPercent;
		this.admission = admission;
		this.status = status;
	}

	public String getApplicantId() {
		return applicantId;
	}

	public void setApplicantId(String applicantId) {
		this.applicantId = applicantId;
	}

	public String getApplicantName() {
		return applicantName;
	}

	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getApplicantDegree() {
		return applicantDegree;
	}

	public void setApplicantDegree(String applicantDegree) {
		this.applicantDegree = applicantDegree;
	}

	public int getApplicantGraduationPercent() {
		return applicantGraduationPercent;
	}

	public void setApplicantGraduationPercent(int applicantGraduationPercent) {
		this.applicantGraduationPercent = applicantGraduationPercent;
	}

	public Admission getAdmission() {
		return admission;
	}

	public void setAdmission(Admission admission) {
		this.admission = admission;
	}

	public AdmissionStatus getStatus() {
		return status;
	}

	public void setStatus(AdmissionStatus status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Applicant [applicantId=" + applicantId + ", applicantName=" + applicantName + ", mobileNumber="
				+ mobileNumber + ", applicantDegree=" + applicantDegree + ", applicantGraduationPercent="
				+ applicantGraduationPercent + ", admission=" + admission + ", status=" + status + "]";
	}
	
}
