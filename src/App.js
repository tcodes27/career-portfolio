import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BackTopBtn from "./components/BackTopBtn";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
      <Experience />
      <Contact />
      <BackTopBtn />
    </div>
  );
}

export default App;
