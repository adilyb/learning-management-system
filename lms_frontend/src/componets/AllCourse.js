import { Link } from "react-router-dom";
function AllCourse() {
    return (
        <div className="container mt-4">
            {/* Latest Courses */}

            <h3 className="pb-1 mb-4">Latest Courses </h3>

            <div className="row">
                <div className="col-md-3 mt-5">
                    <div className="card">
                        <Link to='/detail/1'> <img src="logo192.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-5">
                    <div className="card">
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-5">
                    <div className="card">
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-5">
                    <div className="card">
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-md-3 mt-5">
                    <div className="card">
                        <Link to='/detail/1'> <img src="logo192.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-5">
                    <div className="card">
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-5">
                    <div className="card">
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-5">
                    <div className="card">
                        <img src="logo192.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default AllCourse;