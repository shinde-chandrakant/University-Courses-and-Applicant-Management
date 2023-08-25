package com.mts.dto;

public class AdmissionCommiteeMemberDto {
	
	private int adminId;
	
	private String adminName;

	public AdmissionCommiteeMemberDto() {
		super();
	}

	public AdmissionCommiteeMemberDto(int adminId, String adminName) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
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

	@Override
	public String toString() {
		return "AdmissionCommiteeMemberDto [adminId=" + adminId + ", adminName=" + adminName + "]";
	}

}
