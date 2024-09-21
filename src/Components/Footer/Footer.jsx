import React from 'react'
import "./footer.css"
import { t } from 'i18next'
const Footer = () => {
  return (
    <>
       <section className='footer'>
          <div className="footer_text_wrapper">
              <p className='footer_text'>{t("footer.text")}</p>
          </div>
       </section>
    </>
  )
}

export default Footer
