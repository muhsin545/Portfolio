import './App.css';
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Home/Footer';
import ContactMe from './Components/ContactMe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Projects from './Components/Home/MyProjects/Projects';
import Me from './Components/Home/MyProjects/Me';
import Review from './Components/Home/Review';
import NotFound from './Components/NotFound/NotFound';
import ProjectDetails from './Components/Home/MyProjects/ProjectDetails';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/project">
            <Projects></Projects>
          </Route>
          <Route path="/project/:id">
            <ProjectDetails></ProjectDetails>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/me">
            <Me></Me>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/contact">
            <ContactMe></ContactMe>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
