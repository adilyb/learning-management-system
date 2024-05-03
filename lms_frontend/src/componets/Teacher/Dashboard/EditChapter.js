import axios from "axios";
import TeacherSideBar from "./TeacherSideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = 'http://127.0.0.1:8000/api'

function EditChapter() {


    const { chapter_id } = useParams();

    const [chapterData, setChapterData] = useState({
        'course': '',
        'title': '',
        'description': '',
        'prev_video':'',
        'video': '',
        'remarks': '',
    })




    const handlechange = (event) => {
        setChapterData({
            ...chapterData,
            [event.target.name]: event.target.value
        })
        // console.log(event.target.name, event.target.value)
    }

    const handlefilechange = (event) => {
        setChapterData({
            ...chapterData,
            [event.target.name]: event.target.files[0]
        })
    }

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('course', chapterData.course);
        _formData.append('title', chapterData.title);
        _formData.append('description', chapterData.description);
        if(chapterData.video ==!''){
            _formData.append('video', chapterData.video, chapterData.video.name);
        }
        _formData.append('remarks', chapterData.remarks);


        try {
            axios.put(baseUrl + '/chapter/'+ chapter_id, _formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    console.log(res.data);
                });
        } catch (error) {
            console.log(error);
        }


    };


    useEffect(() => {
        try {
            axios.get(baseUrl + '/chapter/' + chapter_id)
                .then((res) => {
                    setChapterData({
                        course:res.data.course,
                        title:res.data.title,
                        description:res.data.description,
                        prev_video:res.data.video,
                        remarks:res.data.remarks,
                        video:'',


                    });
                    // console.log(res.data)
                })
        } catch (error) {
            console.log(error);
        }
    }, []);



    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSideBar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <div className="card-header">Add Course</div>
                        <div className="card-body">
                            <form>

                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input name="title" type="text" value={chapterData.title} onChange={handlechange} className="form-control" id="title" />
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="form-label">Description</label>
                                    <input name="description" type="text" value={chapterData.description} onChange={handlechange} className="form-control" id="description" />
                                </div>
                                <div className="mb-3">
                                    <label for="video" className="form-label">Video</label>
                                    
                                    <input name="video" type="file" onChange={handlefilechange} className="form-control" id="video" />
                                    <video controls width={250} height={150}>
                                        <source src={chapterData.prev_video} type="video/webm" />
                                        <source src={chapterData.prev_video} type="video/mp4" />
                                        Sorry, your browser Doesn't Support embedded videos.
                                    </video>
                                    
                                </div>

                                <div className="mb-3">
                                    <label for="remarks" className="form-label">Remarks</label>
                                    <textarea name="remarks" type="text" value={chapterData.remarks} onChange={handlechange} className="form-control" id="remarks" />

                                </div>

                                <button type="submit" onClick={formSubmit} className="btn btn-primary">Upload</button>
                            </form>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default EditChapter;