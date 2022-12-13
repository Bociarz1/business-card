import { useLanguageContext } from '../../../context/LanguageContext';
import '../About/About.css'

function About() {
  const {toogle, language:{english}, language:{polish}} = useLanguageContext()
  return ( 
    <div className="app-container-about" data-aos="fade-up" data-aos-once="true">
      <div className="app-container-about-text">
        <div className='app-container-about-image'></div>
        <div className="app-container-about-button">{toogle ? english.about.mainHeading : polish.about.mainHeading}</div>
        <h1>{toogle ? english.about.heading : polish.about.heading}</h1>
        <p>{toogle ? english.about.paragraph : polish.about.paragraph} <a href="https://github.com/Bociarz1">github/Bociarz1</a>.</p>
      </div>
      <div className="app-container-about-heading">
      {toogle ? english.about.containerHeading : polish.about.containerHeading}
      </div>
    </div>
   );
}

export default About;