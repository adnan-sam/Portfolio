import React, { useState } from 'react';
import resume from '../../assets/AdnanSameer_Resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

const CTA = () => {

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    // Simulate the download process with a delay (you can replace this with actual download logic)
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000); // 3 seconds delay (adjust as needed)
  };

  return (
    <div className='cta'>
        <a href={resume} download onClick={handleDownloadClick} className={`btn ${isDownloading ? 'downloading' : ''}`}>
        {isDownloading ? 'Downloading...' : 'Resume'}
        </a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA