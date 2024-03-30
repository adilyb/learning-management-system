import { Link } from "react-router-dom";
import SideBar from "./SideBar";
function MyFavoriteCourse() {
    return (

        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <SideBar />      
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

export default MyFavoriteCourse;