package com.mts.exception;

public class CourseNotFoundException extends Exception {
	
	private static final long serialVersionUID = 1L;
	
	public CourseNotFoundException() {}

	public CourseNotFoundException(String string) {
		super(string);
	}
}
