package com.mts.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
public class AdmissionCommiteeMember {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int adminId;
	
	@NotNull
	private String adminName;
	
	@Pattern(regexp="[6-9]{1}[0-9]{9}",message ="contact number must have 10 digits")
	private String adminContact;
	
	private String password;
	
	public AdmissionCommiteeMember() {
		super();
	}

	public AdmissionCommiteeMember(int adminId, String adminName, String adminContact, String password) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminContact = adminContact;
		this.password = password;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "AdmissionCommiteeMember [adminId=" + adminId + ", adminName=" + adminName + ", adminContact="
				+ adminContact + ", password=" + password + "]";
	}
	
}
