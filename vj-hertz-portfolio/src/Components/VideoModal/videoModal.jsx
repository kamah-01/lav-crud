import React from 'react';
import './videoModal.css';

function VideoModal({ videoUrl, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Player"
        ></iframe> */}
               <video width="50%" height="50%" controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default VideoModal;
