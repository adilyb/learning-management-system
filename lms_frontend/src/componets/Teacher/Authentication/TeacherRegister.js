import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/api/teacher/";




function TeacherRegister() {

    // usestate
    const [teacherData, setTeacherData] =    useState({
        'full_name': '',
        'email': '',
        'password': '',
        'qualification': '',
        'mobile_no': '',
        'skills': '',
        'status': '',

    });

    // change element value
    const HandleChange = (event) => {
        setTeacherData({
            ...teacherData,
            [event.target.name]: event.target.value
        });
    }
    // change element value end


    // submit form
    const submitForm = () => {
        const teacherFormData = new FormData();
        teacherFormData.append("full_name", teacherData.full_name)
        teacherFormData.append("email", teacherData.email)
        teacherFormData.append("password", teacherData.password)
        teacherFormData.append("qualification", teacherData.qualification)
        teacherFormData.append("mobile_no", teacherData.mobile_no)
        teacherFormData.append("skills", teacherData.skills)

        try {
            axios.post(baseUrl, teacherFormData).then((response) => {
                setTeacherData({
                    'full_name': '',
                    'email': '',
                    'password': '',
                    'qualification': '',
                    'mobile_no': '',
                    'skills': '',
                    'status': 'success',

                })

            });
        } catch (error) {
            console.log(error);
            setTeacherData({
                'status': 'error',
            })
        }


    };

    // submit for end

    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus === "true"){
        window.location.href='/teacher/dashboard'
    };

    useEffect(() => {
        document.title = 'Teacher Register';
    });

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {teacherData.status==='success' && <p className='text-success'>Thanks for your registration</p>}
                    {teacherData.status==='error' && <p className='text-danger'>Something Wrong Happened</p>}

                    <div className="card">
                        <h5 className="card-header">Teacher Register</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                    <input type="text" value={teacherData.full_name} className="form-control" name='full_name' onChange={HandleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" value={teacherData.email} className="form-control" name='email' onChange={HandleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Qualification</label>
                                    <input type="text" value={teacherData.qualification} className="form-control" name='qualification' onChange={HandleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" value={teacherData.password} className="form-control" name='password' onChange={HandleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Mobile Number</label>
                                    <input type="number" value={teacherData.mobile_no} className="form-control" name='mobile_no' onChange={HandleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Skills</label>
                                    <textarea type="text" value={teacherData.skills} className="form-control" name='skills' onChange={HandleChange} />
                                    <div id="skillsexample" className="form-text">Example Php, Python, JavaScript</div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                </div>
                                <button type="submit" onClick={submitForm} className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherRegister;