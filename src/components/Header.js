import React, { useState } from 'react';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';
import './Header.css';
import MenuIcon from '../assets/page1/Share_button.png';
import CloseIcon from '../assets/page1/Back_button.png';

import DiscordButton from '../assets/page1/Discord_normal@.png';
import FacebookButton from '../assets/page1/Facebook_normal@.png';
import TwitterButton from '../assets/page1/X_normal@.png';
import InstagramButton from '../assets/page1/Instagram_normal@.png';
import YoutubeButton from '../assets/page1/Youtube_normal@.png';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="md" className="custom-navbar mt-4">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleShow}
            className="custom-toggle"
          >
            <img src={MenuIcon} alt="Menu" className="menu-icon" />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header className="justify-content-center">
              <button className="custom-close-btn" onClick={handleClose}>
                <img src={CloseIcon} alt="Close Menu" className="close-icon" />
              </button>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                className="ms-2 mt-5 text-white text-center"
              >
                Follow Us Now
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="container">
                <Container fluid>
                  {/* For larger screens: single row */}
                  <div className="d-none d-md-flex row justify-content-end align-items-center w-100 mx-0 px-0">
                    <div className="col-auto">
                      <a
                        href="https://www.facebook.com/robotrace/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={FacebookButton}
                          alt="Facebook button"
                          className="social-icon"
                        />
                      </a>
                    </div>
                    <div className="col-auto">
                      <a
                        href="https://x.com/EasleyDunnGames"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={TwitterButton}
                          alt="Twitter Button"
                          className="social-icon"
                        />
                      </a>
                    </div>
                    <div className="col-auto">
                      <a
                        href="https://www.youtube.com/@easleydunn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={YoutubeButton}
                          alt="Youtube Button"
                          className="social-icon"
                        />
                      </a>
                    </div>
                    <div className="col-auto">
                      <a
                        href="https://www.instagram.com/robot.race.mobile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={InstagramButton}
                          alt="Instagram Button"
                          className="social-icon"
                        />
                      </a>
                    </div>
                    <div className="col-auto">
                      <a
                        href="https://discord.gg/A5TJ2nNn35"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={DiscordButton}
                          alt="Discord Button"
                          className="social-icon"
                        />
                      </a>
                    </div>
                  </div>
                  {/* For smaller screens: two rows: first row with 3 items and second row with 2 items */}
                  <div className="d-flex d-md-none flex-column">
                    <div className="row justify-content-center">
                      <div className="col-auto m-2">
                        <a
                          href="https://www.facebook.com/robotrace/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={FacebookButton}
                            alt="Facebook button"
                            className="social-icon"
                          />
                        </a>
                      </div>
                      <div className="col-auto m-2">
                        <a
                          href="https://x.com/EasleyDunnGames"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={TwitterButton}
                            alt="Twitter Button"
                            className="social-icon"
                          />
                        </a>
                      </div>
                      <div className="col-auto m-2">
                        <a
                          href="https://www.youtube.com/@easleydunn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={YoutubeButton}
                            alt="Youtube Button"
                            className="social-icon"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2">
                      <div className="col-auto m-2">
                        <a
                          href="https://www.instagram.com/robot.race.mobile"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={InstagramButton}
                            alt="Instagram Button"
                            className="social-icon"
                          />
                        </a>
                      </div>
                      <div className="col-auto m-2">
                        <a
                          href="https://discord.gg/A5TJ2nNn35"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={DiscordButton}
                            alt="Discord Button"
                            className="social-icon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

// ------CORRECT------
