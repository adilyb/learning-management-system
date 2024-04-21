import {Routes as Switch, Route} from 'react-router-dom';

import Home from './Home.js';                                           
import Header from './Header.js';                                           
import Footer from './Footer.js';
import About from './About.js';
import CourseDetail from './CourseDetail.js';
import AllCourse from './AllCourse.js';
import PopularCourse from './PopularCourse.js';
import PopularTeacher from './PopularTeacher.js';
import CategoryDetail from './CategoryDetail.js';



// user routes
import Login from './User/Authentication/Login.js'
import Register from './User/Authentication/Register.js'
import Dashboard from './User/Dashboard/Dashboard.js'
import MyCourse from './User/Dashboard/MyCourse.js';
import MyFavoriteCourse from './User/Dashboard/MyFavoriteCourse.js';
import RecommendedCourse from './User/Dashboard/RecommendedCourse.js';
import ProfileSetting from './User/Dashboard/ProfileSetting.js';
import ChangePassword from './User/Dashboard/ChangePassword.js'

// teacher routes
import TeacherLogin from './Teacher/Authentication/TeacherLogin.js'
import TeacherLogout from './Teacher/Authentication/TeacherLogout.js'
import TeacherRegister from './Teacher/Authentication/TeacherRegister.js'
import TeacherDashboard from './Teacher/Dashboard/TeacherDashboard.js'
import TeacherMyCourse from './Teacher/Dashboard/TeacherMyCourse.js';
import TeacherProfileSetting from './Teacher/Dashboard/TeacherProfileSetting.js';
import TeacherChangePassword from './Teacher/Dashboard/TeacherChangePassword.js'
import TeacherDetail from './Teacher/TeacherDetail.js'
import AddCourse from './Teacher/Dashboard/AddCourse.js';
import AddChapter from './Teacher/Dashboard/AddChapter.js';
import CourseChapter from './Teacher/Dashboard/CourseChapter.js';

function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>

        {/* home page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/all-course" element={<AllCourse />} />
        <Route path="/popular-course" element={<PopularCourse />} />
        <Route path="/popular-teacher" element={<PopularTeacher />} />
        <Route path="/category-detail" element={<CategoryDetail />} />


        {/* User */}
        <Route path="user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/mycourse" element={<MyCourse />} />
        <Route path="/user/my-favorite-course" element={<MyFavoriteCourse />} />
        <Route path="/user/recommended-course" element={<RecommendedCourse />} />
        <Route path="/user/profile-setting" element={<ProfileSetting />} />
        <Route path="/user/change-password" element={<ChangePassword />} />

        {/* Teacher */}
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/logout" element={<TeacherLogout />} />
        <Route path="/teacher/register" element={<TeacherRegister />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/mycourse" element={<TeacherMyCourse />} />
        <Route path="/teacher/profile-setting" element={<TeacherProfileSetting />} />
        <Route path="/teacher/change-password" element={<TeacherChangePassword />} />
        <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/add-chapter/:course_id/" element={<AddChapter />} />
        <Route path="/all-chapter/:course_id/" element={<CourseChapter />} />



      </Switch>
      <Footer />
    </div>

  );
}

export default Main;
