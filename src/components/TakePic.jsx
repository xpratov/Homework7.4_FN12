import React, { useRef, useState } from 'react';
import ToPic from './ToPic';

const TakePic = () => {
  const [imgData, setImgData]=useState(null)
  const [isDo, setIsDo]=useState(false)
  const videoRef = useRef();
  const canvasRef = useRef();

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error('Xatolik:', error);
      });
  };
  startCamera()
  const takePicture = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const img_data = canvasRef.current.toDataURL('image/png');
    setImgData(img_data)
    setIsDo(!isDo)
  };
  
  return (
    <div className='take_pic'>
      <video ref={videoRef} style={{display: isDo?"none":"block"}} autoPlay></video>
      <canvas ref={canvasRef} style={{ display:isDo?"block":"none" }}></canvas>
      <button className='takebtn' onClick={takePicture}>{isDo?"Boshqatdan olish":"Rasmga olish"}</button>
      <ToPic img64={imgData}/>
    </div>
  );
};

export default TakePic;
