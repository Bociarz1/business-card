import "../Welcome/Welcome.css";
import { BsArrowDownCircle } from "react-icons/bs";
import { useLanguageContext } from "../../../context/LanguageContext";

function Welcome() {
  const {
    toogle,
    setToogle,
    language: { english },
    language: { polish },
  } = useLanguageContext();

  const arrowScrolling = () => {
    const aboutElement = document.querySelector(
      ".app-container-about"
    ) as HTMLElement;
    aboutElement.scrollIntoView();
  };
  return (
    <div className="app-container-welcome">
      <div className="app-welcome-language">
        <div
          className="english"
          style={{ color: `${toogle ? "#FAED26" : "#fff"}`}} onClick={() => setToogle(true)}>
          ENGLISH
        </div>
        <div
          className="polish"
          style={{ color: `${!toogle ? "#FAED26" : "#fff"}` }} onClick={() => setToogle(false)}>
          POLSKI
        </div>
      </div>
      <div
        className="app-container-welcome-myname"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-once="true">
        <p>Adrian</p>
        <p>Turowski</p>
      </div>
      <div className="app-container-welcome-animatedtext">
        <div className="app-container-welcome-animatedtext-frontend">
          <p>F</p>
          <p>r</p>
          <p>o</p>
          <p>n</p>
          <p>t</p>
          <p>-</p>
          <p>e</p>
          <p>n</p>
          <p>d</p>
        </div>
        <div className="app-container-welcome-animatedtext-developer">
          <p>D</p>
          <p>e</p>
          <p>v</p>
          <p>e</p>
          <p>l</p>
          <p>o</p>
          <p>p</p>
          <p>e</p>
          <p>r</p>
        </div>
      </div>
      <div
        className="app-container-welcome-animatedarrow"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true">
        <p>
          {toogle
            ? english.welcome.scrollToExplore
            : polish.welcome.scrollToExplore}
        </p>
        <BsArrowDownCircle onClick={arrowScrolling} />
      </div>
    </div>
  );
}

export default Welcome;
