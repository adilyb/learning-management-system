import axios from "axios";
import TeacherSideBar from "./TeacherSideBar";
import { useState } from "react";


const baseUrl = 'http://127.0.0.1:8000/api'

function AddCourse(){

    const[cats, setCats] = useState([]);
    const[courseData, setCourseData]=useState({
        'category':'',  
        'title':'', 
        'description':'', 
        'f_img':'', 
        'tech_brief':'',
    })

     useState(() => {
        try{
            axios.get(baseUrl+'/category-list')
            .then((res) => {           
                setCats(res.data)
            })
        }catch(error){
            console.log(error);   
        }
     }, []);


    const handlechange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.value
        })
        // console.log(event.target.name, event.target.value)
    }
    
    const handlefilechange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.files[0]
        })
    }

    const formSubmit = (e) =>{
        // e.preventDefault();
        const _formData = new FormData();
        _formData.append('category', courseData.category);
        _formData.append('teacher', 1);
        _formData.append('title', courseData.title);
        _formData.append('description', courseData.description);
        _formData.append('featured_img', courseData.f_img, courseData.f_img.name);
        _formData.append('tech_brief', courseData.tech_brief);


        try{
            axios.post(baseUrl+'/course-add', _formData, {
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
                        <div className="card-header">Add Course</div>
                        <div className="card-body">
                        <form>
                                <div className="mb-3">
                                    <label for="category" className="form-label">Category</label>
                                    <select name="category" onChange={handlechange} className="form-control" id="category">
                                    {cats.map((category, index)=>{return <option key={index} value={category.id}>{category.title}</option>})}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input name="title" type="text" onChange={handlechange} className="form-control" id="title" />
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="form-label">Description</label>
                                    <input name="description" type="text" onChange={handlechange} className="form-control" id="description" />
                                </div>
                                <div className="mb-3">
                                    <label for="f_img" className="form-label">Course Thumbnail</label>
                                    <input name="f_img" type="file" onChange={handlefilechange} className="form-control" id="f_img" />
                                </div>
                               
                                <div className="mb-3">
                                    <label for="tech_brief" className="form-label">Tech</label>
                                    <textarea name="tech_brief" type="text" onChange={handlechange} className="form-control" id="tech_brief" />
                                    <div id="tech_desc" className="form-text">Example Php, Python, JavaScript</div>
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

export default AddCourse;