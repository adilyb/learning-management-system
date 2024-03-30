import { Link } from "react-router-dom";

function SideBar() {
    return (

        <div className="card">
            <h5 className="card-header">Dashboard</h5>
            <div className="list-group list-group-flush">

                <Link to="/mycourse" class="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/my-favorite-course" class="list-group-item list-group-item-action">Favorite Courses</Link>
                <Link to="/recommended-course" class="list-group-item list-group-item-action">Recommended Courses</Link>
                <Link to="/profile-setting" class="list-group-item list-group-item-action">Profile Settings</Link>
                <Link to="/change-password" class="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/login" class="list-group-item list-group-item-action text-danger">Logout</Link>

            </div>
        </div>

    );
}

export default SideBar;