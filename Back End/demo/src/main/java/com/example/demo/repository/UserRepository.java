package com.example.demo.repository;

import org.springframework.stereotype.Repository;

@Repository
public class UserRepository extends JpaRepository<User, Long>{

}
