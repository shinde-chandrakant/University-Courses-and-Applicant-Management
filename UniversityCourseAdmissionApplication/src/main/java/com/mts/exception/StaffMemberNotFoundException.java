package com.mts.exception;

public class StaffMemberNotFoundException extends Exception{

	private static final long serialVersionUID = 1L;

	public StaffMemberNotFoundException(){}
	
	public StaffMemberNotFoundException(String msg) {
		super(msg);
	}
}
