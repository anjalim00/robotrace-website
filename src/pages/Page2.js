import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page2.css';

// Page2
import TopMov from '../assets/page2/Page2_Movie_Top.mp4'
import MiddleMov from '../assets/page2/Page2_Movie_Middle.mp4'
import BottomMov from '../assets/page2/Page2_Movie_Bottom.mp4'
import TopText from '../assets/page2/Page2_TextBlock_Upper@.png'
import MiddleText from '../assets/page2/Page2_TextBlock_Middle@.png'
import BottomText from '../assets/page2/Page2_TextBlock_Lower@.png'

const Page2 = () => {
  return (
    <div className="container-fluid g-0 page2">
        <div className='row d-flex justify-content-center p-3 g-0'>
            
            <video src={TopMov} className='col-12 col-sm-6 d-flex justify-content-center align-items-center p-3' autoPlay loop muted playsInline/>
            
            <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-items-start p-4'>
                <p className='headings'>Compete with Friends in Multiplayer Mode</p>
                <p className='content'>Battle across dynamic maps and take down your opponents<br/>with weapons, speed, and strategy in this action-packed<br/>series of worlds across the universe. Unlock new weapons<br/>and show your friends who's the top bot in any world.</p>
            </div>
        </div>
        <div className='row d-flex justify-content-center p-3 g-0'>
            <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-items-start p-4 order-2 order-md-1'>
                <p className='headings'>Secret Pathways on each Level to Make you Transform</p>
                <p className='content'>Each dimensional gateway world has a number of secrets<br/>hidden - find the secret pathways to make your robotic<br/>body transform into a plane or a car! How many shortcuts<br/>can you find to help you win the race?</p>
            </div>
            <video src={MiddleMov} className='col-12 col-sm-6 d-flex justify-content-center align-items-center p-3 order-1 order-md-2' autoPlay loop muted playsInline/>
            
        </div>
        <div className='row d-flex justify-content-center p-3 g-0'>
            <video src={BottomMov} className='col-12 col-sm-6 d-flex justify-content-center align-items-center p-3' autoPlay loop muted playsInline/>
            <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-items-start p-4'>
                <p className='headings'>Free your Union by Becoming the Champion</p>
                <p className='content'>Become the hero for your robot family in the wake of the<br/>post-apocalyptic future. Save your entire clan from demise<br/>by leveling up, racing in the interdimensional circuit and rise<br/>to become the legend!</p>
            </div>
        </div>
    </div>
  );
};

export default Page2;
