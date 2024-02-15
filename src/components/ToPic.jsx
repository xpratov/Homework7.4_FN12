import React from 'react';

const ToPic = ({img64}) => {
  const downloadImage = () => {
    let data = img64.toString().replace("data:image/png;base64,","");
    let img_data = atob(data);
    let arrayBuffer = new ArrayBuffer(img_data.length);
    let view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < img_data.length; i++) {
      view[i] = img_data.charCodeAt(i) & 0xff;
    }
    let blob = new Blob([arrayBuffer], {type: 'image/jpeg'});
    let url = window.URL.createObjectURL(blob);

    let a = document.createElement('a');
    a.href = url;
    const getCurrentTime = () => {
        const now = new Date();
        const day=now.getSeconds().toString()
        return day;
      };
    a.download = `image${getCurrentTime()}.jpg`;
    
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div>
      <button className='downloadbtn' onClick={downloadImage}>Rasmni yuklab olish</button>
    </div>
  );
};

export default ToPic;
