package com.mts.exception;

public class AdmissionNotGrantedException extends Exception{

	private static final long serialVersionUID = 1L;

	public AdmissionNotGrantedException () {}
	
	public AdmissionNotGrantedException (String msg) {
		super(msg);
	}
}
