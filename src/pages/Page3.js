import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page3.css';

// Page3

import LBimg from '../assets/page3/Leaderboard_Mockup@.png'
import Separator from '../assets/page3/Diagonal-Seperator@.png'
import UpdateImg1 from '../assets/page3/Post-Art@.png'
import UpdateImg2 from '../assets/page3/Post2-Art@.png'
import UpdateImg3 from '../assets/page3/Post3-Art@.png'


const Page3 = () => {
  return (
    <div className="container-fluid g-0 page3">
        {/* <div className='row g-0'>
            <div className='col-5 p-5 g-0 align-items-start'>
                <p className='lb-title'>Leaderboard</p>
                <p className='lb-text'>It's a race to the end, but which one will be the hero?</p>
                <div class="button-container">
                    <button class="custom-button">View All Leaderboards</button>
                </div>
            </div>
            <div className='col-7 d-flex justify-content-center align-items-center g-0 p-5'>
                <img
                    src={LBimg}
                    alt='Leaderboard Mockup'
                    className='img-fluid w-100'
                /> 
            </div>
        </div> */}
        <img
                src={Separator}
                alt='Separator image'
                className='separator'
            />
        <p className='news-updates'>NEWS and UPDATES</p>
        <div className='row g-0 p-3'>
            <div className='col-4 d-flex justify-content-center align-items-center p-3'>
                <img
                    src={UpdateImg1}
                    className='w-100 post1'
                />
            </div>
            <div className='col-4 d-flex justify-content-center align-items-center p-3'>
                <img
                    src={UpdateImg2}
                    className='w-100 post2 glass glass--1'
                />
            </div>
            <div className='col-4 d-flex justify-content-center align-items-center p-3'>
                <img
                    src={UpdateImg3}
                    className='w-100 post3'
                />
            </div>
        </div>
        <div className='row p-3 g-0'>
            <div className='col-4 text-left px-4'>
                <p className='date-line'>January 25th, 2025 <span className='ht-1'>Discord Opinion</span></p>
                <h4 className='heading'>Is Sci-Fi Scary?</h4>
                <p className='p-content'>Come to our new Discord Server and let us know if you think Science Fiction should be a cautionary tale. just good plain fun, or both!</p>
            </div>
            <div className='col-4 text-left px-4'>
                <p className='date-line'>January 15th, 2025 <span className='ht-2'>Proposed Skins</span></p>
                <h4 className='heading'>What the Future Looks like</h4>
                <p className='p-content'>Let us show you some of the proposed robot skins for future releases - come share your opinion or just let us know what you want!</p>
            </div>
            <div className='col-4 text-left px-4'>
                <p className='date-line'>January 13th, 2025 <span className='ht-3'>Launch Date</span></p>
                <h4 className='heading'>New Looks, More Fun</h4>
                <p className='p-content'>After years of development, we are re-releasing Robot Race with a new wagering system and other new additions every month - join our Discord server to discover our plans for new updates, levels and robots!</p>
            </div>
        </div>
    </div>
  );
};

export default Page3;
