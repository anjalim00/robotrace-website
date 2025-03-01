import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page3.css';
import { Carousel, Modal, Button, Dropdown } from 'react-bootstrap';
import TableComponent from "../component/TableComponent";
import FullLeaderboard from "../component/FullLeaderboard";

// Page3 Assets
import Separator from '../assets/page3/Diagonal-Seperator@.png'
import UpdateImg1 from '../assets/page3/Post-Art@.png'
import UpdateImg2 from '../assets/page3/Post2-Art@.png'
import UpdateImg3 from '../assets/page3/Post3-Art@.png'

const Page3 = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedMap, setSelectedMap] = useState("All Maps");

  return (
    <div className="container-fluid g-0 page3">
        <div className='row g-0'>
            <div className='col-5 p-5 g-0'>
                <p className='lb-title'>Leaderboard</p>
                <p className='lb-text'>It's a race to the end, but which one will be the hero?</p>
                <div class="button-container">
                    <button class="custom-button" onClick={() => setShowModal(true)}>View All Leaderboards</button>
                </div>
            </div>
            <div className='col-7 g-0 '>
                <div>
                    <TableComponent/>
                </div>
            </div>
        </div>
        <img src={Separator} alt="Separator image" className="separator" />
        <p className="news-updates">NEWS and UPDATES</p>

        <Carousel interval={5000} wrap={true} pause={false} indicators={true} controls={false}>
            {/* Slide 1 */}
            <Carousel.Item>
                <div className="row px-5 pb-5 d-flex align-items-center justify-content-center">
                    <div className="col-md-6 d-flex justify-content-center align-items-center p-4 news1i">
                        <img src={UpdateImg1} className="w-100 post1" alt="News 1" />
                    </div>
                    <div className="col-md-6 text-left px-4 news1t">
                        <p className="date-line">January 25th, 2025 <span className="ht-1">Discord Opinion</span></p>
                        <h4 className="heading">Is Sci-Fi Scary?</h4>
                        <p className="p-content">
                            Come to our new Discord Server and let us know if you think Science Fiction should be a cautionary tale, just good plain fun, or both!
                        </p>
                    </div>
                </div>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
                <div className="row px-5 pb-5 d-flex align-items-center justify-content-center">
                    <div className="col-md-6 d-flex justify-content-center align-items-center p-4 news2i">
                        <img src={UpdateImg2} className="w-100 post2 glass glass--1" alt="News 2" />
                    </div>
                    <div className="col-md-6 text-left px-4 news2t">
                        <p className="date-line">January 15th, 2025 <span className="ht-2">Proposed Skins</span></p>
                        <h4 className="heading">What the Future Looks Like</h4>
                        <p className="p-content">
                            Let us show you some of the proposed robot skins for future releases - come share your opinion or just let us know what you want!
                        </p>
                    </div>
                </div>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
                <div className="row px-5 pb-5 d-flex align-items-center justify-content-center">
                    <div className="col-md-6 d-flex justify-content-center align-items-center p-4 news3i">
                        <img src={UpdateImg3} className="w-100 post3" alt="News 3" />
                    </div>
                    <div className="col-md-6 text-left px-4 news3t">
                        <p className="date-line">January 13th, 2025 <span className="ht-3">Launch Date</span></p>
                        <h4 className="heading">New Looks, More Fun</h4>
                        <p className="p-content">
                            After years of development, we are re-releasing Robot Race with a new wagering system and other new additions every month - join our Discord server to discover our plans for new updates, levels, and robots!
                        </p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Full Leaderboard</Modal.Title>
                    <Dropdown className="ms-3">
                        <Dropdown.Toggle variant="secondary">
                            {selectedMap}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setSelectedMap("All Maps")}>All Maps</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectedMap("Map 1")}>Map 1</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectedMap("Map 2")}>Map 2</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectedMap("Map 3")}>Map 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Modal.Header>
                <Modal.Body>
                    <FullLeaderboard />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
        </Modal>
    </div>
  );
};

export default Page3;
