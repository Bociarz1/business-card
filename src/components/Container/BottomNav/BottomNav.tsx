import "./BottomNav.css";
import { BsArrowUpCircle } from "react-icons/bs";
import Contact from "./Contact/Contact";
import { useLanguageContext } from "../../../context/LanguageContext";

function BottomNav() {
  const {toogle, language:{english}, language:{polish}} = useLanguageContext()
  const arrowScrolling = () => {
    const welcomeElement: any = document.querySelector(
      ".app-container-welcome"
    );
    welcomeElement.scrollIntoView();
  };
  return (
    <div className="app-container-bottomnav">
      <div className="app-container-bottomnav-text">
        <p>{toogle ? english.bottomNav.headingPart1 : polish.bottomNav.headingPart1}</p>
        <p>
          <span>{toogle ? english.bottomNav.headingPart2 : polish.bottomNav.headingPart2}</span>
        </p>
        <p>{toogle ? english.bottomNav.headingPart3 : polish.bottomNav.headingPart3}</p>
      </div>
      <div className="container-bottomnav-animatedarrow">
        <p>{toogle ? english.bottomNav.backToTop : polish.bottomNav.backToTop}</p>
        <BsArrowUpCircle onClick={arrowScrolling} />
      </div>
      <Contact />
    </div>
  );
}

export default BottomNav;
