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
import axios from 'axios';
import { toast } from 'react-toastify';

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

      const sendMessage = (event) => {
        event.preventDefault();
        const token = "7725839839:AAHa2kiQaP6qKzbKONITba9S4lnzDFl9-0s";
        const chat_id = 5560455535;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value;
        const userName = document.getElementById("username").value;
        const phone_num = document.getElementById("phone_num").value;
        const message = document.getElementById("message").value;

        const messageContent = `User Information\n
         Name: ${name}\n
         UserName: ${userName}\n
         Phone: ${phone_num}\n
         Message: ${message}\n
        `

        axios({
          url: url,
          method: "POST",
          data: {
              chat_id: chat_id,
              text: messageContent,
          }
      })
      .then((res) => {
          toast.success(t("Contact.toast"));
  
          form.reset()
  
          handleClose();
      })
      .catch((error) => {
          toast.error(t("Contact.toastError"));
      });
      }
  return (
    <>

    <section className='modal'>
        <div className="container">
            <div className="telegram_btn_wrapper">
                <div className="telegram_btn" onClick={handleOpen}>
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
                    <form className="inputs_wrapper" onSubmit={sendMessage}>
                    <div className="modal_header_title_wrapper">
                      <h2 className='modal_title'>{t("Modal.viaTelegram")}</h2>
                    </div>
                        <div className="inputBox">
                            <input type="text" required="required" className="form_input modal_input" id='name'/>
                            <span className="form_span modal_span">{t("Contact.name")}</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" required="required" className="form_input modal_input" id='username'/>
                            <span className="form_span modal_span">{t("Modal.TelegramUsename")}</span>
                        </div>
                        <div className="inputBox">
                            <input type="number" required="required" className="form_input modal_input" id='phone_num'/>
                            <span className="form_span modal_span">{t("Modal.phone")}</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required" name="message" className="form_input modal_input"  id='message'/>
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
