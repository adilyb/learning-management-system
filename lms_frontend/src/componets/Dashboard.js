import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <div className="card">
                        <h5 className="card-header">Dashboard</h5>
                        <div className="list-group list-group-flush">

                            <Link to="/" class="list-group-item list-group-item-action">My Courses</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Favorite Courses</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Recommented Courses</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Profile Settings</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Change Password</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Logout</Link>

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
                                        <button className="btn btn-primary">Delete</button>
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