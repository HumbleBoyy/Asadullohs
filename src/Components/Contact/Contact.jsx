import { t } from "i18next"
import "./contact.css"
import { FaLocationDot, FaPhoneVolume, FaTelegram } from "react-icons/fa6"
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
       <section className='contact' id='contact'>
          <div className='container'>
              <div className="contact_title_wrapper">
                 <h2 className="contact_title">{t("Navbar.contact")}</h2>
              </div>


            <div className="contact_form_wrapper">
                <div className="contact_info">
                   <div className="info_box">
                       <div className="icons"><b></b><FaLocationDot className="contact_icon"/></div>
                       <div className="info_text_wrapper">
                          <h3 className="address">{t("Contact.address")}</h3>
                       </div>
                   </div>
                   <div className="info_box">
                       <div className="icons"><b></b><FaPhoneVolume className="contact_icon"/></div>
                       <div className="info_text_wrapper">
                          <h3 className="address">{t("Contact.phoneNumb")}</h3>
                          <p className="phone_email">+998 (94) 236 00 36</p>
                       </div>               
                   </div>
                   <div className="info_box">
                       <div className="icons"><b></b><MdEmail className="contact_icon"/></div>
                       <div className="info_text_wrapper">
                          <h3 className="address">{t("Contact.email")}</h3>
                          <p className="phone_email">asadullohabdurakhmon1.1@gmail.com</p>
                       </div>               
                   </div>
                </div>

                <div className="contact_form">

                </div>
            </div>
          </div>
       </section>
    </>
  )
}

export default Contact
