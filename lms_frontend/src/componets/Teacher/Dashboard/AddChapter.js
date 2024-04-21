import axios from "axios";
import { useState } from "react";
import TeacherSideBar from "./TeacherSideBar";


const baseUrl = 'http://127.0.0.1:8000/api'

function AddChapter(){

    
    const[chapterData, setchapterData]=useState({
        'chapter':'',  
        'title':'', 
        'description':'', 
        'video':'', 
        'remarks':'',
    })

    //  useState(() => {
    //     try{
    //         axios.get(baseUrl+'/course-add')
    //         .then((res) => {           
    //             setCats(res.data)
    //         })
    //     }catch(error){
    //         console.log(error);   
    //     }
    //  }, []);


    const handlechange = (event) => {
        setchapterData({
            ...chapterData,
            [event.target.name]:event.target.value
        })
        // console.log(event.target.name, event.target.value)
    }
    
    const handlefilechange = (event) => {
        setchapterData({
            ...chapterData,
            [event.target.name]:event.target.files[0]
        })
    }

    const formSubmit = () =>{
        const _formData = new FormData();
        _formData.append('chapter', 1);
        _formData.append('title', chapterData.title);
        _formData.append('description', chapterData.description);
        _formData.append('video', chapterData.video, chapterData.video.name);
        _formData.append('remarks', chapterData.remarks);


        try{
            axios.post(baseUrl+'/chapter_add', _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res) => {
                console.log(res.data);
            });
        }catch(error){
            console.log(error);
        }
        

    }



    return(
        <div className="container mt-4">
            <div className="row">
            <aside className="col-md-3">
                    <TeacherSideBar />      
                </aside>
            <section className="col-md-9">
                    <div className="card">
                        <div className="card-header">Add Chapter</div>
                        <div className="card-body">
                        <form>
                                {/* <div className="mb-3">
                                    <label for="category" className="form-label">Category</label>
                                    <select name="category" onChange={handlechange} className="form-control" id="category">
                                    {cats.map((category, index)=>{return <option key={index} value={category.id}>{category.title}</option>})}
                                    </select>
                                </div> */}
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input name="title" type="text" onChange={handlechange} className="form-control" id="title" />
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="form-label">Description</label>
                                    <input name="description" type="text" onChange={handlechange} className="form-control" id="description" />
                                </div>
                                <div className="mb-3">
                                    <label for="video" className="form-label">Video</label>
                                    <input name="video" type="file" onChange={handlefilechange} className="form-control" id="video" />
                                </div>
                               
                                <div className="mb-3">
                                    <label for="remarks" className="form-label">remarks</label>
                                    <textarea name="remarks" type="text" onChange={handlechange} className="form-control" id="remarks" />
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

export default AddChapter;