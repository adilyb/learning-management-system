import { useParams } from "react-router-dom";

function CourseDetail() {
    
let {course_id}=useParams();

    return (
        <div>Course ID {course_id}</div>
    );
  }
  
  export default CourseDetail;