/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';
import SplashCursor from './SplashCursor';

const App: React.FC = () => {
  return (  
    <>
      {/* <div className="landing-container">
        <SplashCursor />
        <div className="hero-section">
          <h1>Welcome to Our Platform</h1>
          <p>Discover amazing presentations and collaborate with others</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="features-section">
          <div className="feature">
            <div className="feature-icon">🚀</div>
            <h2>Fast Loading</h2>
            <p>Access presentations instantly with our optimized platform</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔒</div>
            <h2>Secure Sharing</h2>
            <p>Share your content safely with robust security features</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h2>Mobile Friendly</h2>
            <p>Access your presentations on any device, anywhere</p>
          </div>
        </div>
      </div> */}
       <div className="iframe-container">
        <iframe 
          src="https://phj.maxhealthcare.in/phj/BLKH.1016902?key=0E602F4D-D7EC-465B-9F2B-909B65F7828B&sessionId=143257036&userId=48018&type=phj"
          title="PHJ Content"
          width="100%" 
          height="100%" 
        ></iframe>
      </div>
    </>
  );
};

export default App;
