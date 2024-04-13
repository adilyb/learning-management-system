import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

const baseUrl = "http://127.0.0.1:8000/api/";



function TeacherLogin() {


    const [teacherData, setTeacherData] = useState({
        'username':'',
        'password':'',
    });

    const HandleChange = (event)=>{
        setTeacherData({
            ...teacherData,
            [event.target.name]: event.target.value
        });
    }


    const submitForm = () =>{

        const teacherFormData = new FormData();
        teacherFormData.append('email', teacherData.email)
        teacherFormData.append('password', teacherData.password)
     
        try{
            axios.post(baseUrl+'teacher/login', teacherFormData).then((res) => {
             if(res.data.bool==true){
                localStorage.setItem('teacherLoginStatus', true)
                window.location.href='/teacher/dashboard'

             }

            })
        }catch(error){
            console.log(error);   
        }

    }

    // redirect to the dashboard pages
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus == "true"){
        window.location.href='/teacher/dashboard'
    };


    useEffect(()=>{
        document.title = 'Teacher Login'
    });
  
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Teacher Login</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">User Name</label>
                                    <input type="text" className="form-control" value={teacherData.email} name='email' onChange={HandleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" value={teacherData.password} name='password' onChange={HandleChange} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div>
                                <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherLogin;