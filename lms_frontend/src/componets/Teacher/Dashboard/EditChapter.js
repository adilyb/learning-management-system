import axios from "axios";
import TeacherSideBar from "./TeacherSideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const baseUrl = 'http://127.0.0.1:8000/api'

function EditChapter() {
    
   
    const [chapterData, setChapterData] = useState({
        'title': '',
        'description': '',
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
        _formData.append('title', chapterData.title);
        _formData.append('description', chapterData.description);
        _formData.append('prev_video', chapterData.f_img, chapterData.f_img.name);
        _formData.append('tech_brief', chapterData.tech_brief);


        try {
            axios.put(baseUrl + '/all-chapter' + chapter_id, {
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
    const {chapter_id} = useParams();

    useEffect(() => {
        try {
            axios.get(baseUrl + '/chapter/'+ chapter_id)
                .then((res) => {
                    setChapterData(res.data);
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
                                    <label for="prev_video" className="form-label">Video</label>
                                    <input name="prev_video" type="file" onChange={handlefilechange} className="form-control" id="prev_video" />
                                    <video controls width={250}>
                                        <source src="{chapter.video.url}" type="video/webm" />
                                        <source src="{chapter.video.url}" type="video/mp4" />
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