import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Online Learning</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <a className="nav-link" href="#">Courses</a>

            <div class="dropdown">
              <a class="nav-link dropdown-toggle " href="#" role="
              " data-bs-toggle="dropdown" aria-expanded="false">
                Teacher   
              </a>
              <ul class="dropdown-menu">
                {}
                <li><Link className="dropdown-item" to="/teacher/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/teacher/register">Register</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/teacher/dashboard">Dashboard</Link></li>
                <li><Link className="dropdown-item" to="/teacher/logout">Logout</Link></li>
              </ul>
            </div>
            
            <Link className="nav-link" to="/about">About</Link>
            
            <div class="dropdown">
              <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User   
              </a>
              <ul class="dropdown-menu">
                <li><Link className="dropdown-item" to="/user/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/user/register">Register</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/user/dashboard">Dashboard</Link></li>
                <li><Link className="dropdown-item" to="/user/login">Logout</Link></li>


              </ul>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;