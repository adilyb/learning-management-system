import { Link } from "react-router-dom";

function Home() {
  return (

    <div className="container mt-4">
      {/* Latest Courses */}
      
      <h3 className="pb-1 mb-4">Latest Courses<Link to="/all-course"><a className="float-end">See All</a></Link></h3>
       

      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <Link to='/detail/1'> <img src="logo192.png" className="card-img-top" alt="..." /></Link>
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
        <div className="col-md-3">
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
        <div className="col-md-3">
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
        <div className="col-md-3">
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
      {/* Latest Courses end*/}

      {/* Popular Courses */}
      <h3 className="pb-1 my-4 mt-5">Popular Courses <a href="#" className="float-end">See All</a></h3>

      <div className="row">
        <div className="col-md-3">
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
        <div className="col-md-3">
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
        <div className="col-md-3">
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
        <div className="col-md-3">
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
      {/* Poplar Courses end*/}

      {/* Popular teachers */}
      <h3 className="pb-1 my-4 mt-5">Popular Teachers <a href="#" className="float-end">See All</a></h3>

      <div className="row">
        <div className="col-md-3">
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
        <div className="col-md-3">
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
        <div className="col-md-3">
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
        <div className="col-md-3">
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
      {/* Poplar teachers end*/}

      {/* Student testimonials*/}
      <h3 className="pb-1 my-4 mt-5">Student Testimonials</h3>

      <div id="carouselExampleCaptions" class="carousel slide bg-dark text-white py-5" style={{textAlign:"center"}} >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <figure>
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div class="carousel-item">
            <figure>
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div class="carousel-item">
            <figure>
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* Student testimonials end*/}

    </div>
  );
}

export default Home;