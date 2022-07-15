package com.mts.exception;

public class StaffMemberNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public StaffMemberNotFoundException(){}
	
	public StaffMemberNotFoundException(String msg) {
		super(msg);
	}
}
