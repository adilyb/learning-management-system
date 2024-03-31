import { useParams } from "react-router-dom";

function CourseDetail() {

    let { course_id } = useParams();

    return (

        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p>A card is a flexible and extensible content container. It includes options for headers and footers,
                        a wide variety of content, contextual background colors, and powerful display options.
                        If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails.
                        Similar functionality to those components is available as modifier classNamees for cards.</p>
                    <p className="fw-bold">Course By: <a href="/teacher-detail/1">Teacher 1</a></p>
                    <p className="fw-bold">Duration: 3 Hours 30 Minutes</p>
                    <p className="fw-bold">Total Enrolled: 456 Students</p>
                    <p className="fw-bold">Rating: 4.5/5</p>
                </div>
            </div>

            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    Course Videos
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minutes</span>
                            <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModel1"><i className="bi bi-play-fill"></i></button>
                        </span>


                        <div className="modal fade " id="videoModel1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Video</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="modal-body">
                                            <div className="ratio ratio-16x9">
                                                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>









                    <li className="list-group-item">A second item
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minutes</span>
                            <button className="btn btn-sm btn-danger"><i className="bi bi-play-fill"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">A third item
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minutes</span>
                            <button className="btn btn-sm btn-danger"><i className="bi bi-play-fill"></i></button>
                        </span>
                    </li>
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

export default CourseDetail;