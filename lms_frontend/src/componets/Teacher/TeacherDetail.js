function TeacherDetail(){
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>John Doe</h3>
                    <p>A card is a flexible and extensible content container. It includes options for headers and footers,
                        a wide variety of content, contextual background colors, and powerful display options.
                        If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails.
                        Similar functionality to those components is available as modifier classes for cards.</p>
                    <p className="fw-bold">Skills: <a href="#">Python, Django, go</a></p>
                    <p className="fw-bold"><a href="#">Python full stack development</a></p>
                    <p className="fw-bold">Rating: 4.5/5</p>
                </div>
            </div>

            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    Course List
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">Python Full stack developemnt</li>
                    <li className="list-group-item list-group-item-action">Mern stack</li>
                    <li className="list-group-item list-group-item-action">AI/ML</li>
                    <li className="list-group-item list-group-item-action">Web developemnt</li>
                    <li className="list-group-item list-group-item-action">full stack</li>

                </ul>
            </div>
            {/* Course Videos end*/}


            {/* Related Courses */}
            <h3 className="pb-1 my-4 mt-5">Related Teachers</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src="/logo512.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="/logo512.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="/logo512.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="/logo512.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>
                {/* Related Courses end*/}
            </div>
        </div>
    );
}

export default TeacherDetail;