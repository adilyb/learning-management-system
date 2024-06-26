import { useState } from "react";
import TeacherSideBar from "./TeacherSideBar";
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
const Swal = require('sweetalert2')
const baseUrl = "http://127.0.0.1:8000/api"

function CourseChapter() {
    const [chapterData, setchapterData] = useState([]);
    const { course_id } = useParams();
    const [totalResult, setTotalResult] = useState(0);



    useState(() => {
        try {
            axios.get(baseUrl + '/all-chapter/' + course_id)
                .then((res) => {
                    setchapterData(res.data);
                    setTotalResult(res.data.length);
                    // console.log(res.data);
                })
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handleDeleteClick = (chapter_id) => {
        Swal.fire({
            title: 'Confirm',
            text: 'Do you want to Delete this Data',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true

        }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete(baseUrl + '/chapter/' + chapter_id)
                    .then(()=>{
                        Swal.fire('success', 'Data has been deleted')
                        try {
                            axios.get(baseUrl + '/all-chapter/' + course_id)
                                .then((res) => {
                                    setchapterData(res.data);
                                    setTotalResult(res.data.length);
                                    // console.log(res.data);
                                })
                        } catch (error) {
                            console.log(error);
                        }
                        
                    })
                    // window.location.reload();
                    // .then((res) => {
                    //     setchapterData(res.data);
                    //     setTotalResult(res.data.length);
                        // console.log(res.data);
                    // })
                }catch(error){
                    console.log(error)
                }
            }
        })
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSideBar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h4 className="card-header">ALL CHAPTERS ({totalResult})</h4>
                        <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">ID</th> */}
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Video</th>
                                        <th scope="col">Remarks</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {chapterData.map((chapter, index) =>
                                        <tr>
                                            {/* <th scope="row">{chapter.id}</th> */}
                                            <td>{chapter.title}</td>
                                            <td>{chapter.description}</td>
                                            <td>
                                                <video controls width={250} height={150}>
                                                    
                                                    <source src={chapter.video} type="video/mp4" />
                                                    Sorry, your browser Doesn't Support embedded videos.
                                                </video>
                                            </td>
                                            <td>{chapter.remarks}</td>


                                            <td>
                                                <Link onClick={()=>handleDeleteClick(chapter.id)} className="btn btn-sm text-white btn-danger"><i class="bi bi-trash-fill"></i></Link>
                                                &nbsp;
                                                <Link to={"/edit-chapter/" + chapter.id} className="btn btn-sm text-white btn-info" ><i class="bi bi-pencil-square"></i></Link>
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

export default CourseChapter;