package com.lms.model;

public class LoginResponse {
	private long userId;
	private String role;
	
	
	public LoginResponse() {
		super();
	}


	public LoginResponse(long userId, String role) {
		super();
		this.userId = userId;
		this.role = role;
	}


	public long getUserId() {
		return userId;
	}


	public void setUserId(long userId) {
		this.userId = userId;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}
	
	

}
