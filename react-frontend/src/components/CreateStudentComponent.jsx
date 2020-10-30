import React, { Component } from 'react'
import StudentService from '../services/StudentService';

export default class CreateStudentComponent extends Component {


    constructor(props){
        super()
        this.state={
            fullName:'',
            faculty:'',
            emailId:''

        }
        this.changeFullNameHandler=this.changeFullNameHandler.bind(this);
        this.changeFacultyHandler=this.changeFacultyHandler.bind(this);
        this.changeMailHandler=this.changeMailHandler.bind(this);
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student ={fullName:this.state.fullName,faculty:this.state.faculty,emailId:this.state.emailId};
        console.log('student=>'+ JSON.stringify(student))

        StudentService.createStudent(student).then(res=>{
            this.props.history.push('/students');
            
    });
    }

    changeFullNameHandler=(event)=>{
        this.setState({fullName:event.target.value});
    }

    changeFacultyHandler=(event)=>{
        this.setState({faculty:event.target.value});
    }

    changeMailHandler=(event)=>{
        this.setState({emailId:event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Student</h3>
                                <dev className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>First Name:</label>
                                            <input placeholder="name" name="fullName" className="form-control"
                                             value={this.state.fullName} onChange={this.changeFullNameHandler}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Faculty:</label>
                                            <input placeholder="faculty" name="faculty" className="form-control"
                                             value={this.state.faculty} onChange={this.changeFacultyHandler}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Email:</label>
                                            <input placeholder="mail" name="emailId" className="form-control"
                                             value={this.state.emailId} onChange={this.changeMailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveStudent.bind(this)}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    </form>
                                </dev>
                                </div>
                    </div>

                </div>
            </div>
        )
    }
}
