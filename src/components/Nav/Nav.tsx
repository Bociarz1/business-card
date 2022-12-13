import { useLanguageContext } from "../../context/LanguageContext";
import "../Nav/Nav.css";

type EventType = React.MouseEvent<HTMLElement>;

const navScrolling = (event: EventType) => {
  const target = event.target as HTMLDivElement;
  switch (target.id) {
    case "welcome":
      const welcomeElement = document.querySelector(
        ".app-container-welcome"
      ) as HTMLParagraphElement
      welcomeElement.scrollIntoView();
      break;
    case "about":
      const aboutElement = document.querySelector(".app-container-about") as HTMLParagraphElement
      aboutElement.scrollIntoView();
      break;
    case "highlights":
      const highlightsElement = document.querySelector(
        ".app-container-slider" 
      ) as HTMLParagraphElement
      highlightsElement.scrollIntoView();
      break;
    case "project":
      const projectElement = document.querySelector(
        ".app-container-projects"
      ) as HTMLParagraphElement
      projectElement.scrollIntoView();
      break;
    case "contact":
      const contactElement = document.querySelector(
        ".app-container-contact" 
      ) as HTMLParagraphElement
      contactElement.scrollIntoView();
      break;
    default:
      break;
  }
};

function Nav() {
  const {toogle, language:{english}, language:{polish}} = useLanguageContext()
  document.addEventListener('scroll', () => {
    let element = document.querySelector('.app-nav') as HTMLElement
    if (scrollY > .015* window.innerHeight) {
      element.style.animationName = 'navUp'
    }
    else if (scrollY < .015* window.innerHeight) {
      element.style.animationName = 'navDown'
    }
  })
  return (
    <div className="app-nav" data-aos="fade-down" data-aos-duration="2000">
      <div className="app-nav-textcontainer">
        <p onClick={navScrolling} id="welcome">
        {toogle ? english.nav.welcome : polish.nav.welcome}
        </p>
        <p onClick={navScrolling} id="about">
        {toogle ? english.nav.about : polish.nav.about}
        </p>
        <p onClick={navScrolling} id="highlights">
        {toogle ? english.nav.toolkit : polish.nav.toolkit}
        </p>
        <p onClick={navScrolling} id="project">
        {toogle ? english.nav.projects : polish.nav.projects}
        </p>
        <p onClick={navScrolling} id="contact">
        {toogle ? english.nav.contact : polish.nav.contact}
        </p>
      </div>
    </div>
  );
}

export default Nav;
