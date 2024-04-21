import { Link } from "react-router-dom";
function AllCourse() {
    return (
        <div className="container mt-4">
            {/* all Courses */}

            <h3 className="pb-1 mb-4">All Courses</h3>

            <div className="row">
            <div className="col-md-3 mt-4">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> <a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> <a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> <a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> <a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>
        </div>
            </div>

            <div className="row">
            <div className="col-md-3 mt-4">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> <a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> <a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> <a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <img src="logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> <a href="#">Course title</a></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
          </div>
        </div>
            </div>
            {/* all course end */}

            {/* pagination start */}
            <nav aria-label="Page navigation example ">
                <ul class="pagination justify-content-center mt-5">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/* pagination end */}
        </div>
    );
}


export default AllCourse;