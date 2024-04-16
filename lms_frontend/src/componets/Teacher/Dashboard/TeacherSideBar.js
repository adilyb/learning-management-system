import { Link } from "react-router-dom";

function TeacherSideBar() {
    return (

        <div className="card">
            <h5 className="card-header">Dashboard</h5>
            <div className="list-group list-group-flush">

                <Link to="/teacher/mycourse" class="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/add-course" class="list-group-item list-group-item-action">Add Course</Link>
                <Link to="/teacher/profile-setting" class="list-group-item list-group-item-action">Profile Settings</Link>
                <Link to="/teacher/change-password" class="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/teacher/logout" class="list-group-item list-group-item-action text-danger">Logout</Link>

            </div>
        </div>

    );
}

export default TeacherSideBar;