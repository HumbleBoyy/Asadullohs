import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './modal.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { t } from 'i18next';
import { IoSend } from 'react-icons/io5';
import { MdCancelScheduleSend } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-toastify';

const Modales = () => {
    const [open, setOpen] = useState(false);
    const formRef = useRef(); // Use ref instead of document.getElementById
    
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
  
      const token = "7725839839:AAHa2kiQaP6qKzbKONITba9S4lnzDFl9-0s"; // Replace with actual bot token
      const chat_id = 5560455535;     // Replace with actual chat ID
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
      const form = event.target; // Use the event's target form
      const name = form['name'].value;
      const userName = form['username'].value;
      const phone_num = form['phone_num'].value;
      const message = form['message'].value;
  
      const messageContent = `User Information:\n
           Name: ${name}\n
           UserName: ${userName}\n
           Phone: ${phone_num}\n
           Message: ${message}
          `;
  
      console.log('Sending message content:', messageContent); 
  
      axios({
        method: "POST", 
        url: url,
        data: { 
          "chat_id":chat_id,
          "text": messageContent,
        }
      })
      .then((res) => {
        console.log('Message sent successfully:', res);
        toast.success(t("Contact.toast"));
        form.reset(); 
        handleClose();
      })
      .catch((error) => {
        console.error('Failed to send message:', error.response?.data || error.message);
        toast.error(`${t("Contact.toastError")}: ${error.response?.data?.description || error.message}`);
      });
  };
  

  return (
    <>
      <section className='modal'>
        <div className="container">
          <div className="telegram_btn_wrapper">
            <div className="telegram_btn" onClick={handleOpen}>
              <FaTelegramPlane className='telegram_icon'/>
            </div>
          </div>
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="Modal_box">
          <div className="contact_formModal">
            <form className="inputs_wrapper" ref={formRef} onSubmit={sendMessage}>
              <div className="modal_header_title_wrapper">
                <h2 className='modal_title'>{t("Modal.viaTelegram")}</h2>
              </div>
              <div className="inputBox">
                <input type="text" required="required" className="form_input modal_input" name='name'/>
                <span className="form_span modal_span">{t("Contact.name")}</span>
              </div>
              <div className="inputBox">
                <input type="text" required="required" className="form_input modal_input" name='username'/>
                <span className="form_span modal_span">{t("Modal.TelegramUsename")}</span>
              </div>
              <div className="inputBox">
                <input type="number" required="required" className="form_input modal_input" name='phone_num'/>
                <span className="form_span modal_span">{t("Modal.phone")}</span>
              </div>
              <div className="inputBox">
                <textarea required="required" name="message" className="form_input modal_input"/>
                <span className="form_span modal_span">{t("Contact.message")}</span>
              </div>
              <div className="inputBox modal_box_btns">
                <button type="button" onClick={handleClose} className="submit_btn modal_btn red_one">
                  {t("Modal.cancel")} <MdCancelScheduleSend />
                </button>
                <button type="submit" className="submit_btn modal_btn">
                  {t("Contact.send")} <IoSend />
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Modales;
