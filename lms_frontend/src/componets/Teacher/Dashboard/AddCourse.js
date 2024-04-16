import TeacherSideBar from "./TeacherSideBar";


function AddCourse(){
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
                                    <label for="title" className="form-label">Category</label>
                                    <input type="fullname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" />
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Profile Photo</label>
                                    <input type="file" className="form-control" id="exampleInputEmail1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Interests</label>
                                    <textarea type="text" className="form-control" id="exampleInputEmail1" />
                                    <div id="emailHelp" className="form-text">Example Php, Python, JavaScript</div>
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddCourse;