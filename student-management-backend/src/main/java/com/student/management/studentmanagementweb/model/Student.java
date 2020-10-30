package com.student.management.studentmanagementweb.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="students")

public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="full_name")
    private String fullName;

    @Column(name="faculty_name")
    private String faculty;

    @Column(name="email_id")
    private String emailId;
}
