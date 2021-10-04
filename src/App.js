import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import NotFound from './components/NotFound/NotFound'
import CourseDetails from './components/CourseDetails/CourseDetails';
import Enrolled from './components/Enrolled/Enrolled';


function App() {
  return (
    <div className="App">

      {/* router setup  */}
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="/details">
            <CourseDetails></CourseDetails>
          </Route>
          <Route exact path="/enrolled">
            <Enrolled></Enrolled>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
