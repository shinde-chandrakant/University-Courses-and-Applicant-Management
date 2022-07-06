package com.mts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mts.entities.UniversityStaffMember;

public interface IUniversityStaffRepository extends JpaRepository<UniversityStaffMember, Integer>{
}
