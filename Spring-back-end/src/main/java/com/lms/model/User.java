package com.lms.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "userDetails")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long id;
	
	@Column(name = "lastName")
	private String lastName;
	
	@Column(name = "initials")
	private String initials;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "mobileNumber")
	private int mobileNumber;
	
	@Column(name = "faculty")
	private String faculty;
	
	@Column(name = "regNumber")
	private String regNumber;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "role")
	private String role;
	
	
	public User() {
		super();
	}


	public User(long id, String lastName, String initials, String email, int mobileNumber, String faculty,
			String regNumber, String password, String role) {
		super();
		this.id = id;
		this.lastName = lastName;
		this.initials = initials;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.faculty = faculty;
		this.regNumber = regNumber;
		this.password = password;
		this.role = role;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getInitials() {
		return initials;
	}


	public void setInitials(String initials) {
		this.initials = initials;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public int getMobileNumber() {
		return mobileNumber;
	}


	public void setMobileNumber(int mobileNumber) {
		this.mobileNumber = mobileNumber;
	}


	public String getFaculty() {
		return faculty;
	}


	public void setFaculty(String faculty) {
		this.faculty = faculty;
	}


	public String getRegNumber() {
		return regNumber;
	}


	public void setRegNumber(String regNumber) {
		this.regNumber = regNumber;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public int hashCode() {
		return Objects.hash(email, faculty, id, initials, lastName, mobileNumber, password, regNumber, role);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(email, other.email) && Objects.equals(faculty, other.faculty) && id == other.id
				&& Objects.equals(initials, other.initials) && Objects.equals(lastName, other.lastName)
				&& mobileNumber == other.mobileNumber && Objects.equals(password, other.password)
				&& Objects.equals(regNumber, other.regNumber) && Objects.equals(role, other.role);
	}
	
	
	

}
