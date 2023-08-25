package com.mts.exception;

import java.time.LocalDateTime;

public class ErrorDetails {

	private LocalDateTime time;
	private String message;
	private String details;

	public ErrorDetails(LocalDateTime time, String message, String details) {
		super();
		this.time = time;
		this.message = message;
		this.details = details;
	}

	public LocalDateTime getTime() {
		return time;
	}

	public void setLdt(LocalDateTime time) {
		this.time = time;
	}

	public String getMessage() {
		return message;
	}

	public String getDetails() {
		return details;
	}

	@Override
	public String toString() {
		return "ErrorDetails [time=" + time + ", message=" + message + ", details=" + details + "]";
	}

}
