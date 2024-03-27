import Home from './Home.js';                                           
import Header from './Header.js';                                           
import Footer from './Footer.js';
import About from './About.js';


import {Routes as Switch, Route} from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Switch>
      <Footer />

      
    </div>

  );
}

export default Main;
