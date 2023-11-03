import Nav from "./components/Nav";
import "./index.css";
import ListProjects from "./components/ListProjects";
import ActionSection from "./components/ActionSection";
import Footer from "./components/Footer";

function Project() {
  return (
    <>
      <Nav /> 
      <ListProjects />
      <ActionSection />
      <Footer />
    </>
  );
}

export default Project;
