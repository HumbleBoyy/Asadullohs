import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import './modal.css'
import { FaTelegramPlane } from 'react-icons/fa';
import { t } from 'i18next';

const Modales = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
      
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
        <Box className="Modal_box">
          <div className="modal_header_title_wrapper">
             <h2 className='modal_title'>{t("Modal.viaTelegram")}</h2>
          </div>
            
            <form className='form_inputs'>
               <div className='input_wrapper'>
                  <input type="text"  placeholder={t("Modal.name")} className='input_itself'required="required"/>
               </div>
               <div className='input_wrapper'>
                  <input type="number"  placeholder={t(`Modal.phoneNumb`)} className='input_itself'required="required"/>
               </div>
               <div className='input_wrapper'>
                  <input type="text"  placeholder={t("Modal.TelegramUsename")} className='input_itself' required="required"/>
               </div>
               <div className='input_wrapper'>
                  <textarea placeholder={t("Modal.message")} className='Textare_itself' required="required"/>
               </div>
            </form>
        </Box>
      </Modal>
      </div>
    </>
  )
}

export default Modales
