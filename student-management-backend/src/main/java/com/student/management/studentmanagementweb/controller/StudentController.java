package com.student.management.studentmanagementweb.controller;

import com.student.management.studentmanagementweb.model.Student;
import com.student.management.studentmanagementweb.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/Students")
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }



}
