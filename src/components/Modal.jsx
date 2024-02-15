import React, { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import TakePic from './TakePic';

const Modal_img = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Yangi darsni boshlash
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute',borderRadius: "10px", top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Darsni hozir boshlaysizmi?
          </Typography>
          <TakePic/>
          <Button className='closebtn' onClick={handleClose} variant="contained" sx={{ mt: 2, ml: 15}}>Yopish</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Modal_img;
