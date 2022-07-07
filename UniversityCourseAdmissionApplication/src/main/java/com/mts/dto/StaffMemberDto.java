package com.mts.dto;

public class StaffMemberDto {

	private int staffId;
	private String role;
	
	public StaffMemberDto() {
		super();
	}

	public StaffMemberDto(int staffId, String role) {
		super();
		this.staffId = staffId;
		this.role = role;
	}

	public int getStaffId() {
		return staffId;
	}

	public void setStaffId(int staffId) {
		this.staffId = staffId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "StaffMemberDto [staffId=" + staffId + ", role=" + role + "]";
	}
	
}
