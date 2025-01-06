import AboutSection from "./components/AboutSection";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
};

export default App;
