import './Contact.css'
import { IoIosPhonePortrait } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { useLanguageContext } from '../../../../context/LanguageContext';

function Contact() {
  const {toogle, language:{english}, language:{polish}} = useLanguageContext()
  return ( 
    <div className="app-container-contact" data-aos="fade-up" data-aos-once="true">
      <p>{toogle ? english.bottomNav.contact : polish.bottomNav.contact}</p>
      <div><IoIosPhonePortrait/><br/>+48 726-799-928</div>
      <div><TfiEmail/><br/>adrian.turowski.it@gmail.com</div>
    </div>
    
   );
}

export default Contact;