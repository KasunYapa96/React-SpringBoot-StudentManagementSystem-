package com.student.management.studentmanagementweb.controller;

import com.student.management.studentmanagementweb.model.Student;
import com.student.management.studentmanagementweb.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/Students")
  public  Student createStudent(@RequestBody Student student){
        return studentRepository.save(student);
        //When load the (/Students) we are adding the new student object body and post it.
        // student new object body details are passing to db via studentRepository.save(student)
  }

     @DeleteMapping("/Students/{id}")
    public void deleteStudent(@PathVariable Long id){
        studentRepository.deleteById(id);

    }

}


