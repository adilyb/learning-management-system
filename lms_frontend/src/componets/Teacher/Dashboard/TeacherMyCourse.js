import TeacherSideBar from "./TeacherSideBar";

function MyCourse() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSideBar />      
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