import SideBar from "./SideBar";

function MyCourse() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <SideBar />      
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            Dashboard
                        </div>

                    </div>
                </section>
            </div>

        </div>
    );
}

export default MyCourse;