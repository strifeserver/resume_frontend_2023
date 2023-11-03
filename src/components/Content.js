import AboutMeSection from "../components/AboutMeSection";
import ProjectsSection from "../components/ProjectsSection";
import CreativesMode from "../components/CreativesMode";

const sectionStyle = {
  height: "100vh",
  // Add any other CSS properties you need here
};


function Content() {
  return (
    <div>
      <section id="about_me" >
        <AboutMeSection></AboutMeSection>
      </section>
    </div>
  );
}

export default Content;
