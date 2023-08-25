package com.mts.exception;

public class AdmissionNotGrantedException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public AdmissionNotGrantedException () {}
	
	public AdmissionNotGrantedException (String msg) {
		super(msg);
	}
}
