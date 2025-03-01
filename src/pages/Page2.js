import React, {useRef} from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page2.css';

// Page2
import TopMov from '../assets/page2/Page2_Movie_Top.mp4'
import MiddleMov from '../assets/page2/Page2_Movie_Middle.mp4'
import BottomMov from '../assets/page2/Page2_Movie_Bottom.mp4'

const Page2 = () => {

  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Opacity for top section
  const topOpacity = useTransform(scrollYProgress, (value) => {
    const bounds = topRef.current?.getBoundingClientRect();
    if (!bounds) return 0;
    const visibleHeight = Math.min(window.innerHeight, bounds.bottom) - Math.max(0, bounds.top);
    return Math.max(0, Math.min(1, visibleHeight / bounds.height));
  });

  // Opacity for middle section
  const middleOpacity = useTransform(scrollYProgress, (value) => {
    const bounds = middleRef.current?.getBoundingClientRect();
    if (!bounds) return 0;
    const visibleHeight = Math.min(window.innerHeight, bounds.bottom) - Math.max(0, bounds.top);
    return Math.max(0, Math.min(1, visibleHeight / bounds.height));
  });

  // Opacity for bottom section
  const bottomOpacity = useTransform(scrollYProgress, (value) => {
    const bounds = bottomRef.current?.getBoundingClientRect();
    if (!bounds) return 0;
    const visibleHeight = Math.min(window.innerHeight, bounds.bottom) - Math.max(0, bounds.top);
    return Math.max(0, Math.min(1, visibleHeight / bounds.height));
  });

  return (
    <div className="container-fluid g-0 page2">
        <motion.div ref={topRef} style={{ opacity: topOpacity }} className='row d-flex justify-content-center p-3 g-0'>
            
            <video src={TopMov} className='col-12 col-sm-6 d-flex justify-content-center align-items-center p-3' autoPlay loop muted playsInline/>
            
            <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-items-start p-4'>
                <p className='headings'>Compete with Friends in Multiplayer Mode</p>
                <p className='content'>Battle across dynamic maps and take down your opponents<br/>with weapons, speed, and strategy in this action-packed<br/>series of worlds across the universe. Unlock new weapons<br/>and show your friends who's the top bot in any world.</p>
            </div>
        </motion.div>
        <motion.div ref={middleRef} style={{ opacity: middleOpacity }} className='row d-flex justify-content-center p-3 g-0'>
            <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-items-start p-4 order-2 order-md-1'>
                <p className='headings'>Secret Pathways on each Level to Make you Transform</p>
                <p className='content'>Each dimensional gateway world has a number of secrets<br/>hidden - find the secret pathways to make your robotic<br/>body transform into a plane or a car! How many shortcuts<br/>can you find to help you win the race?</p>
            </div>
            <video src={MiddleMov} className='col-12 col-sm-6 d-flex justify-content-center align-items-center p-3 order-1 order-md-2' autoPlay loop muted playsInline/>
            
        </motion.div>
        <motion.div ref={bottomRef} style={{ opacity: bottomOpacity }} className='row d-flex justify-content-center p-3 g-0'>
            <video src={BottomMov} className='col-12 col-sm-6 d-flex justify-content-center align-items-center p-3' autoPlay loop muted playsInline/>
            <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-items-start p-4'>
                <p className='headings'>Free your Union by Becoming the Champion</p>
                <p className='content'>Become the hero for your robot family in the wake of the<br/>post-apocalyptic future. Save your entire clan from demise<br/>by leveling up, racing in the interdimensional circuit and rise<br/>to become the legend!</p>
            </div>
        </motion.div>
    </div>
  );
};

export default Page2;
