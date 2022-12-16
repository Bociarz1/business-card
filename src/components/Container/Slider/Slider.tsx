import "./Slider.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { AiFillHtml5 as Html } from "react-icons/ai";
import { DiCss3 as Css } from "react-icons/di";
import {
  SiJavascript as Js,
  SiTypescript as Ts,
  SiReact as React,
  SiRedux as Redux,
  SiMaterialui as Mui,
} from "react-icons/si";
import { useLanguageContext } from "../../../context/LanguageContext";

const slideImages = [
  {
    style: { backgroundColor: "#E44D26", height: "100%" },
    caption: "HTML5",
    sign: <Html />,
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
  },
  {
    style: { backgroundColor: "#264DE4", height: "100%" },
    caption: "CSS3",
    sign: <Css />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    style: { backgroundColor: "#F7DF1E", height: "100%" },
    caption: "JAVASCRIPT",
    sign: <Js />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    style: { backgroundColor: "#3178C6", height: "100%" },
    caption: "TYPESCRIPT",
    sign: <Ts />,
    url: 'https://www.typescriptlang.org/'
  },
  {
    style: { backgroundColor: "#00D8FF", height: "100%" },
    caption: "REACT",
    sign: <React />,
    url: 'https://reactjs.org/docs/getting-started.html'
  },
];

const routing = (url: string) => {
window.open(url)
}

function Slider() {
  const {toogle, language:{english}, language:{polish}} = useLanguageContext()
  return (
    <div
      className="app-container-slider"
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-once="true">
      <div className="app-container-slider-heading">
        <div>{toogle ? english.slider.mainHeading : polish.slider.mainHeading}</div>
        <h1>{toogle ? english.slider.heading : polish.slider.heading}</h1>
        <p>{toogle ? english.slider.paragraph : polish.slider.paragraph}</p>
      </div>
      <section className='wrap' style={{display: 'flex', flexWrap: 'wrap'}}>
        <div className="container-slider-slide">
          <Fade duration= {1000}>
            {slideImages.map((slideImage, index) => (
              <div
                className="each-slide"
                key={index}
                style={{ height: "50vh", width: "100%" }}>
                <div style={slideImage.style}>
                  <div className="slideheading">
                    <div>{slideImage.sign}</div>
                    <p>{slideImage.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="app-container-slider-technologies">
          <Html onClick={()=> routing(slideImages[0].url)} style={{color: '#E44D26'}}/>
          <Css onClick={()=> routing(slideImages[1].url)} style={{color: '#264DE4'}}/>
          <Js onClick={()=> routing(slideImages[2].url)} style={{color: '#F7DF1E'}}/>
          <Ts onClick={()=> routing(slideImages[3].url)} style={{color: '#3178C6'}}/>
          <React onClick={()=> routing(slideImages[4].url)} style={{color: '#00D8FF'}}/>
        </div>
      </section>
    </div>
  );
}

export default Slider;
