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
                          <a href="mailto:asadullohabdurakhmon1.1@gmail.com" className="phone_email email_long">asadullohabdurakhmon1.1@gmail.com</a>
                       </div>               
                   </div>
                </div>

                <div className="contact_form">
                    <form className="inputs_wrapper">
                        <h2 className="form_title">{t("Contact.SendAMessage")}</h2>
                        <div className="inputBox">
                            <input type="text" required="required" className="form_input"/>
                            <span className="form_span">{t("Contact.name")}</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" required="required" className="form_input email"/>
                            <span className="form_span">{t("Contact.userEmail")}</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required"  className="form_input"/>
                            <span className="form_span">{t("Contact.message")}</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value={t("Contact.send")} className="submit_btn"/>
                        </div>
                    </form>
                </div>
            </div>
          </div>
       </section>
    </>
  )
}

export default Contact
