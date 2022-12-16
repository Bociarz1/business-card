import { useLanguageContext } from "../../../../../context/LanguageContext";
import "./ProjectItem.css";

function ProjectItem() {
  const {toogle, language:{english}, language:{polish}} = useLanguageContext()
  return (
    <a href="https://github.com/Bociarz1"><div className="app-container-projects-listofprojects-projectitem">
      <div className="app-container-projects-listofprojects-projectitem-image"></div>
      <h1>GITHUB</h1>
      <p>{toogle ? english.github.description : polish.github.description}</p>
    </div>
    </a>
  );
}

export default ProjectItem;
