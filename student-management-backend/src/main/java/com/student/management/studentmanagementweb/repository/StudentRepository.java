package com.student.management.studentmanagementweb.repository;

import com.student.management.studentmanagementweb.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {



}
