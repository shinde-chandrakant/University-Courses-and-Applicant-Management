package com.mts.exception;

public class LoginFailedException extends Exception {

	private static final long serialVersionUID = 1L;

	public LoginFailedException() {}
	
	public LoginFailedException(String msg) {
		super(msg);
	}
}
