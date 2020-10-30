import React, { Component } from 'react'
import StudentService from '../services/StudentService'

export default class ListStudentComponent extends Component {

        constructor(props){
         super(props)

         this.state={
                    students:[]
         }
        }


        componentDidMount(){
            StudentService.getStudents().then((res)=>{
                    this.setState({students:res.data});
            });
        }


    render() {
        return (
            <div>
                <h2 className="text-center">Students List</h2>
                <div className="row">
                        <table className="table table-striped table-bordered">

                                <thead>
                                    <tr>
                                        <th> Student Name</th>
                                        <th> Faculty Name</th>
                                        <th> Student ID</th>
                                        <th> Actions </th>
                                           
                                        
                                    </tr>
                                </thead>

                            <tbody>
                                {this.state.students.map(
                                    student=>
                                    <tr key={student.id}>

                                            <td>{student.fullName}</td>
                                            <td>{student.faculty}</td>
                                            <td>{student.emailId}</td>

                                    </tr>
                                )}
                            </tbody>
                        </table>


                </div>
                
            </div>
        )
    }
}