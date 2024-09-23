import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import './modal.css'
import { FaTelegramPlane } from 'react-icons/fa';
import { t } from 'i18next';
import { IoSend } from 'react-icons/io5';
import { MdCancelScheduleSend } from "react-icons/md";

const Modales = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '2px solid #000',
      boxShadow: 100,
      };
  return (
    <>

    <section className='modal'>
        <div className="container">
            <div className="telegram_btn_wrapper">
                <div className="telegram_btn" onClick={setOpen}>
                  <FaTelegramPlane  className='telegram_icon'/>
                </div>
            </div>
        </div>
    </section>
   <div>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="Modal_box">
          <div className="contact_formModal">
                    <form className="inputs_wrapper">
                    <div className="modal_header_title_wrapper">
                      <h2 className='modal_title'>{t("Modal.viaTelegram")}</h2>
                    </div>
                        <div className="inputBox">
                            <input type="text" required="required" className="form_input modal_input"/>
                            <span className="form_span modal_span">{t("Contact.name")}</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" required="required" className="form_input modal_input"/>
                            <span className="form_span modal_span">{t("Modal.TelegramUsename")}</span>
                        </div>
                        <div className="inputBox">
                            <input type="number" required="required" className="form_input modal_input"/>
                            <span className="form_span modal_span">{t("Modal.phone")}</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required" name="message" className="form_input modal_input" />
                            <span className="form_span modal_span">{t("Contact.message")}</span>
                        </div>
                        <div className="inputBox modal_box_btns">
                        <button onClick={handleClose} className="submit_btn modal_btn red_one">{t("Modal.cancel")}<MdCancelScheduleSend /></button>
                            <button type="submit" className="submit_btn modal_btn">{t("Contact.send")}<IoSend /></button>
                        </div>
                    </form>
                </div>
        </Box>
      </Modal>
      </div>
    </>
  )
}

export default Modales
