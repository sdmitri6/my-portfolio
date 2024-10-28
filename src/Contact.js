import React, { useState, useRef, useEffect } from 'react';
import './contact.css'; 

import facebookIcon from './img/2175193.png'; 
import instagramIcon from './img/38-instagram-2-512.webp'; 
import githubIcon from './img/github.png'; 

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [isWebcamActive, setIsWebcamActive] = useState(false); 
  const [webcamPermissionGranted, setWebcamPermissionGranted] = useState(false); // Нэмэлт хувьсагч
  const videoRef = useRef(null) 
  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setIsWebcamActive(true);
        setWebcamPermissionGranted(true);
      } catch (error) {
        console.error('Error accessing webcam:', error);
        setWebcamPermissionGranted(false);
      }
    };
  
    if (webcamPermissionGranted && isSubmitted) {
      startWebcam();
    }
  
    return () => {
      const videoElement = videoRef.current; // Copy the ref to a variable here
  
      if (videoElement && videoElement.srcObject) {
        const stream = videoElement.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        videoElement.srcObject = null;
      }
      setIsWebcamActive(false);
    };
  }, [webcamPermissionGranted, isSubmitted]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); 

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      {!isSubmitted ? (
        <>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>

          <div className="social-media">
            <a href="https://www.facebook.com/profile.php?id=100074429585360" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="icon" />
            </a>
            <a href="https://www.instagram.com/simo.nmny/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="icon" />
            </a>
            <a href="https://github.com/sdmitri6" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
          </div>
        </>
      ) : (
        <div className="webcam-container">
          <video ref={videoRef} autoPlay className="webcam" playsInline muted />
          <p>;-</p>
          {isWebcamActive && <p className="happy-hacking">Happy Hacking!</p>}
        </div>
      )}
    </div>
  );
};

export default Contact;
