package com.mts.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AdmissionCommiteeMember {
	@Id
	private int adminId;
	private String adminName;
	private String adminContact;
	
	public AdmissionCommiteeMember() {
		super();
	}

	public AdmissionCommiteeMember(int adminId, String adminName, String adminContact) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminContact = adminContact;
	}

	public int getAdminId() {
		return adminId;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminContact() {
		return adminContact;
	}

	public void setAdminContact(String adminContact) {
		this.adminContact = adminContact;
	}

	@Override
	public String toString() {
		return "AdmissionCommiteeMember [adminId=" + adminId + ", adminName=" + adminName + ", adminContact="
				+ adminContact + "]";
	}
	
}
