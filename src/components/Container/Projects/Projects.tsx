import { useLanguageContext } from "../../../context/LanguageContext";
import ListOfProjects from "./ListOfProjects/ListOfProjects";
import "./Projects.css";

function Projects() {
  const {toogle, language:{english}, language:{polish}} = useLanguageContext()
  return (
    <>
      <div
        className="app-container-projects"
        data-aos="fade-up"
        data-aos-once="true">
        <div className="app-container-projects-text">
          <div className="app-container-projects-button">{toogle ? english.projects.mainHeading : polish.projects.mainHeading}</div>
          <h1>{toogle ? english.projects.heading : polish.projects.heading}</h1>
          <p>
          {toogle ? english.projects.paragraph : polish.projects.paragraph}
          </p>
          <ListOfProjects />
        </div>
        <div className="app-container-projects-heading">
        {toogle ? english.projects.containerHeading : polish.projects.containerHeading}
        </div>
      </div>
    </>
  );
}

export default Projects;
