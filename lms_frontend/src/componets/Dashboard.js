import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <div className="card">
                        <h5 className="card-header">Dashboard</h5>
                        <div className="list-group list-group-flush">

                            <Link to="/mycourse" class="list-group-item list-group-item-action">My Courses</Link>
                            <Link to="/my-favorite-course" class="list-group-item list-group-item-action">Favorite Courses</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Recommended Courses</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Profile Settings</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Change Password</Link>
                            <Link to="/login" class="list-group-item list-group-item-action text-danger">Logout</Link>

                        </div>
                    </div>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <td>PHP Development</td>
                                    <td><Link to="/">Suraj Kumar</Link></td>
                                    <td>
                                        <button className="btn btn-danger active">Delete</button>
                                    </td>

                                </tbody>

                            </table>
                        </div>

                    </div>
                </section>
            </div>

        </div>
    );
}

export default Dashboard;