import { useState } from "react";
import TeacherSideBar from "./TeacherSideBar";
import axios from 'axios'
import { Link } from "react-router-dom";

const baseUrl = "http://127.0.0.1:8000/api"

function MyCourse() {
    const [courseData, setCourseData] = useState([]);
    const teacherId = localStorage.getItem('teacherId')



    useState(() => {
        try {
            axios.get(baseUrl + '/teacher-courses/' + teacherId)
                .then((res) =>{
                    setCourseData(res.data);
                    // console.log(res.data);
                })
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSideBar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Img</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((course, index) =>
                                        <tr>
                                            <th scope="row">{course.id}</th>
                                            <td><Link to={'/all-chapter/'+course.id}>{course.title}</Link></td>
                                            <td>{course.description}</td>
                                            <td><img src={course.featured_img} alt={course.title} width="80" className="rounded" /></td>

                                            <td>
                                                <Link className="btn btn-sm text-white btn-danger"><i class="bi bi-trash-fill"></i></Link>
                                                &nbsp;
                                                <Link to={"/add-chapter/"+ course.id} className="btn btn-sm text-white btn-info" ><i class="bi bi-pencil-square"></i></Link>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </section>
            </div>

        </div>
    );
}

export default MyCourse;