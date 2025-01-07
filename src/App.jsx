import AboutSection from "./components/AboutSection";
import ContactPage from "./components/ContactPage";
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
      <ContactPage />
    </div>
  );
};

export default App;
