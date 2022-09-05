package com.lms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lms.model.User;

@Repository
public interface UserRepository extends JpaRepository <User,Long>{
	
	@Query(value="SELECT id FROM user_details u  WHERE u.email = ?1", nativeQuery = true)
	Long GetUserByemail(String email);

}
