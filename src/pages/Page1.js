import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Page1.css';

// Page1
import AppStoreButton from '../assets/page4/iOS-download-button-COPY@.png'
import PlayStoreButton from '../assets/page4/Android-Download-Button-COPY@.png'
import DiscordButton from '../assets/page1/Discord_normal@.png'
import FacebookButton from '../assets/page1/Facebook_normal@.png'
import TwitterButton from '../assets/page1/X_normal@.png'
import InstagramButton from '../assets/page1/Instagram_normal@.png'
import YoutubeButton from '../assets/page1/Youtube_normal@.png'
import EDlogo from '../assets/page1/ED-logo@.png'
import EDname from '../assets/page1/Easley-Dunn@.png'
import Movie from '../assets/page1/MoviePlacement.mp4'
import DynamicText from '../assets/page1/Page1_DYNAMIC_TEXT@.png'
import RRtitle from '../assets/page1/Robot-Race-title@.png'
import RRicon from '../assets/page1/RobotRace_icon@.png'
import TourExtreme from '../assets/page1/tour-extreme@.png'
import ShareButton from '../assets/page1/Share_button.png'


const Page1 = () => {
  return (
    <div className="container-fluid g-0 page1">
      <div className='top-bar g-0'>
        <img src={EDlogo} alt='Easley-Dunn logo' className='ed-logo'/>
        <img src={EDname} alt='Easley-Dunn' className='ed-name'/>
        <button 
        className="btn d-block d-md-none me-3" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#socialLinks"
        aria-expanded="false" 
        aria-controls="socialLinks">
        <img src={ShareButton} alt='Share button' className='share-button'/>
        </button>
        <div>
        <a href="https://www.facebook.com/robotrace/" target="_blank" rel="noopener noreferrer">
            <img src={FacebookButton} alt='Facebook button' className='facebook'/></a>
        <a href="https://x.com/EasleyDunnGames" target="_blank" rel="noopener noreferrer">
            <img src={TwitterButton} alt='Twitter Button' className='twitter'/></a>
        <a href="https://www.youtube.com/@easleydunn" target="_blank" rel="noopener noreferrer">
            <img src={YoutubeButton} alt='Youtube Button' className='youtube'/></a>
        <a href="https://www.instagram.com/robot.race.mobile" target="_blank" rel="noopener noreferrer">
            <img src={InstagramButton} alt='Instagram Button' className='instagram' /></a>
        <a href="https://discord.gg/A5TJ2nNn35" target="_blank" rel="noopener noreferrer">
            <img src={DiscordButton} alt='Discord Button' className='discord' /></a>
        </div>
      </div>
      <img src={RRicon} alt='Robot Race Icon' className='img-fluid rr-icon' />
      
      <div className='wrapper d-flex justify-content-center align-items-center g-0'>
        <video src={Movie} autoPlay loop muted playsInline className="background-video"/>
        <img
            src={RRtitle}
            alt='Robot Race Title'
            className='img-fluid rr-title'
        />
        <img
            src={TourExtreme}
            alt='Tour Extreme'
            className='img-fluid tour-extreme'
        />
        
      </div>
      <div className='bottom-section justify-content-center align-items-center g-0'>
        <p className='page1-dynamic-text'>Join in The Competition Now!</p>
        {/* <div className='row d-flex justify-content-center align-items-center'> */}
        {/* <div className="col-auto d-flex justify-content-center align-items-center"> */}
            <a href="https://apps.apple.com/ge/app/robot-race/id539184198#?platform=iphone" target="_blank" rel="noopener noreferrer">
                <img src={AppStoreButton} alt="Apple Store Button" className="img-fluid appstore" />
            </a>
        {/* </div> */}
        {/* <div className="col-auto d-flex justify-content-center align-items-center"> */}
            <a href="https://play.google.com/store/apps/details?id=com.easleydunnproductions.robotrace&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" >
                <img src={PlayStoreButton} alt="Google Playstore Button" className="img-fluid playstore" />
            </a>
        {/* </div> */}
        {/* </div> */}
        
      </div>
    </div>
  );
};

export default Page1;
