import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Slider from "./Slider/Slider";
import Projects from "./Projects/Projects";
import BottomNav from "./BottomNav/BottomNav";
import './Container.css'

function Container() {
  return (
    <div className="app-container">
      <Welcome />
      <About />
      <Slider />
      <Projects />
      <BottomNav />
    </div>
  );
}

export default Container;
