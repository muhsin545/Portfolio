import './App.css';
import Navbar from './Components/Home/Navbar';
import Projects from './Components/Home/MyProjects/Projects';
import Review from './Components/Home/Review';
import Footer from './Components/Home/Footer';
import AboutMe from './Components/Home/MyProjects/AboutMe';
import Me from './Components/Home/MyProjects/Me';
import ContactMe from './Components/ContactMe';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Me></Me>
      <Review></Review>
      <ContactMe></ContactMe>
      <Footer></Footer>

    </div>
  );
}

export default App;
