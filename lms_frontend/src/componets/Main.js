import Home from './Home.js';                                           
import Header from './Header.js';                                           
import Footer from './Footer.js';
import About from './About.js';
import CourseDetail from './CourseDetail.js';
import Login from './Login.js'
import Register from './Register.js'
import Dashboard from './Dashboard.js'

import {Routes as Switch, Route} from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />


      </Switch>
      <Footer />
    </div>

  );
}

export default Main;
