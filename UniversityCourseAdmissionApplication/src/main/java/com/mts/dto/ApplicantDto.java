package com.mts.dto;

import com.mts.entities.AdmissionStatus;

public class ApplicantDto {
	private int applicantId;
	private String applicantName;
	private AdmissionStatus status;
	
	public ApplicantDto() {
		super();
	}

	public ApplicantDto(int applicantId, String applicantName, AdmissionStatus status) {
		super();
		this.applicantId = applicantId;
		this.applicantName = applicantName;
		this.status = status;
	}

	public int getApplicantId() {
		return applicantId;
	}

	public void setApplicantId(int applicantId) {
		this.applicantId = applicantId;
	}

	public String getApplicantName() {
		return applicantName;
	}

	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}

	public AdmissionStatus getStatus() {
		return status;
	}

	public void setStatus(AdmissionStatus status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "ApplicantDto [applicantId=" + applicantId + ", applicantName=" + applicantName + ", status=" + status
				+ "]";
	}
	
}
