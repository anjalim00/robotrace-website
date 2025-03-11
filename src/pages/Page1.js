import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Page1.css";

// Page1
import AppStoreButton from "../assets/page4/iOS-download-button-COPY@.png";
import PlayStoreButton from "../assets/page4/Android-Download-Button-COPY@.png";
import EDlogo from "../assets/page1/ED-logo@.png";
import EDname from "../assets/page1/Easley-Dunn@.png";
import Movie from "../assets/page1/MoviePlacement.mp4";
import RRicon from "../assets/page1/RobotRace_icon@.png";
import Header from "../components/Header.js";
import Title from '../assets/page1/Title.png';


const Page1 = () => {
  return (
    <div className="container-fluid g-0 page1">
      <Header />
      <div className="top-bar g-0">
        <img src={EDlogo} alt="Easley-Dunn logo" className="ed-logo" />
        <img src={EDname} alt="Easley-Dunn" className="ed-name" />
      </div>
      <img src={RRicon} alt="Robot Race Icon" className="img-fluid rr-icon" />

      <div className="wrapper d-flex justify-content-center align-items-center g-0">
        <video src={Movie} autoPlay loop muted playsInline className="background-video"
        />
        <img src={Title} alt='Robot Race Title' className='img-fluid title' />
        
      </div>
      <div className="bottom-section justify-content-center align-items-center g-0">

        <p className="page1-dynamic-text">Join in The Competition Now!</p>

        <div className='d-flex justify-content-center align-items-center py-5 store-btn'>
          <a href="https://apps.apple.com/ge/app/robot-race/id539184198#?platform=iphone" target="_blank" rel="noopener noreferrer" className="appstore">
            <img src={AppStoreButton} alt="Apple Store Button" className="img-fluid as-img" />
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.easleydunnproductions.robotrace&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="playstore">
            <img src={PlayStoreButton} alt="Google Playstore Button" className="img-fluid ps-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page1;
