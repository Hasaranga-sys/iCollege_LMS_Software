package com.lms.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lms.model.LoginResponse;
import com.lms.model.UseLoginModel;
import com.lms.model.User;
import com.lms.services.UserServices;

@CrossOrigin(origins="*")


@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	public UserServices userservices;
	
	@GetMapping("")
	public List <User> getAllStudentDetails() {
		return userservices.getAllUserDetails();
	}
	
	@PostMapping("")
	public User registerStudent ( @RequestBody User user){
		return userservices.registerUser(user);
	}
	
	@GetMapping("/{userId}")
	public ResponseEntity <User> getUser(@PathVariable long userId) {
		return userservices.getUser(userId);
	}
	
	@DeleteMapping("/{userId}")
	public ResponseEntity <Map<String, Boolean>> deleteUser(@PathVariable long userId){
		return userservices.deleteUser(userId);
	}
	
	@PutMapping("/{userId}")
	public ResponseEntity <User> updateUser (@PathVariable long userId, @RequestBody User user){
		return userservices.updateUser(userId, user);
	}
	
	@PostMapping("/Login")
	public LoginResponse login  (@RequestBody UseLoginModel useLoginModel) {
		return userservices.login(useLoginModel);
	}
	
	

}
