import { Link } from "react-router-dom";

function SideBar() {
    return (

        <div className="card">
            <h5 className="card-header">Dashboard</h5>
            <div className="list-group list-group-flush">

                <Link to="/user/mycourse" class="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/user/my-favorite-course" class="list-group-item list-group-item-action">Favorite Courses</Link>
                <Link to="/user/recommended-course" class="list-group-item list-group-item-action">Recommended Courses</Link>
                <Link to="/user/profile-setting" class="list-group-item list-group-item-action">Profile Settings</Link>
                <Link to="/user/change-password" class="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/user/login" class="list-group-item list-group-item-action text-danger">Logout</Link>

            </div>
        </div>

    );
}

export default SideBar;