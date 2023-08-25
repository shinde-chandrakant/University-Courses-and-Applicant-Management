package com.mts.exception;

public class AdmissionMemNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public AdmissionMemNotFoundException() {}
	
	public AdmissionMemNotFoundException(String msg) {
		super(msg);
	}
}
	
