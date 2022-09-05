package com.lms.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.lms.exception.UserExeption;
import com.lms.model.LoginResponse;
import com.lms.model.UseLoginModel;
import com.lms.model.User;
import com.lms.repository.UserRepository;

@Service
public class UserServices {
	
	@Autowired
	public UserRepository userRepository;
	
	
	public List <User> getAllUserDetails() {
		return userRepository.findAll();
	}
	
	
	public User registerUser (User user){
		return userRepository.save(user);
	}
	
	
	public ResponseEntity <User> getUser(long userId) {
		User user = userRepository.findById(userId).orElseThrow(() -> new UserExeption("user not found"));
		return ResponseEntity.ok(user);
	}
	
	
	public ResponseEntity <Map<String, Boolean>> deleteUser(long userId){
		User user = userRepository.findById(userId).orElseThrow(() -> new UserExeption("user not found"));
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	public ResponseEntity <User> updateUser (long userId, User user){
		User existigUser = userRepository.findById(userId).orElseThrow(() -> new UserExeption("user not found"));
		existigUser.setLastName(user.getLastName());
		existigUser.setInitials(user.getInitials());
		existigUser.setEmail(user.getEmail());
		existigUser.setMobileNumber(user.getMobileNumber());
		existigUser.setFaculty(user.getFaculty());
		existigUser.setRegNumber(user.getRegNumber());
		existigUser.setPassword(user.getPassword());
		existigUser.setRole(user.getRole());
		User updated = userRepository.save(existigUser);
		return ResponseEntity.ok(updated);
	}
	
	
	public LoginResponse login  ( UseLoginModel useLoginModel) {
		LoginResponse output = new LoginResponse(getUserByEmail(useLoginModel),getUserRoleByEmail(useLoginModel));
		return output;
	}

	
	public Long getUserByEmail  ( UseLoginModel useLoginModel) {
		User user = userRepository.findById(userRepository.GetUserByemail
				(useLoginModel.getEmail())).orElseThrow(() -> new UserExeption("user not found"));
		if( user.getPassword().equals(useLoginModel.getPassword())  ) {
			return user.getId() ;
		}
		else {
			return (long) -1;
		}
	}
	
	public String getUserRoleByEmail  ( UseLoginModel useLoginModel) {
		User user = userRepository.findById(userRepository.GetUserByemail
				(useLoginModel.getEmail())).orElseThrow(() -> new UserExeption("user not found"));
		if( user.getPassword().equals(useLoginModel.getPassword())  ) {
			return user.getRole();
		}
		else {
			return null;
		}
	}
}
