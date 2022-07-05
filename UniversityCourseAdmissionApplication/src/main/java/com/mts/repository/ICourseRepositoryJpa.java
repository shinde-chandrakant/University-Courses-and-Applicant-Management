package com.mts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mts.entities.Course;

public interface ICourseRepositoryJpa extends JpaRepository<Course, Integer>{

}
