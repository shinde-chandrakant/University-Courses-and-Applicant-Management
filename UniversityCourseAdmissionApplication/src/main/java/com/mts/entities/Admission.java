package com.mts.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Admission {
	@Id
	@GeneratedValue
	private int admissionId;
	@NotNull
	private int courseId;
	@NotNull
	private int applicantId;
	private LocalDate admissionDate;
	@Enumerated(EnumType.STRING)
	private AdmissionStatus status;

	public Admission() {
		super();
	}

	public Admission(int admissionId, int courseId, int applicantId, LocalDate admissionDate, AdmissionStatus status) {
		super();
		this.admissionId = admissionId;
		this.courseId = courseId;
		this.applicantId = applicantId;
		this.admissionDate = admissionDate;
		this.status = status;
	}

	public int getAdmissionId() {
		return admissionId;
	}

	public void setAdmissionId(int admissionId) {
		this.admissionId = admissionId;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public int getApplicantId() {
		return applicantId;
	}

	public void setApplicantId(int applicantId) {
		this.applicantId = applicantId;
	}

	public LocalDate getAdmissionDate() {
		return admissionDate;
	}

	public void setAdmissionDate(LocalDate admissionDate) {
		this.admissionDate = admissionDate;
	}

	public AdmissionStatus getStatus() {
		return status;
	}

	public void setStatus(AdmissionStatus status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Admission [admissionId=" + admissionId + ", courseId=" + courseId + ", applicantId=" + applicantId
				+ ", admissionDate=" + admissionDate + ", status=" + status + "]";
	}

}
