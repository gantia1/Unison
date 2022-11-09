import React, {useState} from "react";
import toggle from '../../img/toggle.svg';
import {Modal, Offcanvas} from "react-bootstrap";
import {ReactComponent as UnisonLogo} from "../../img/uniLogo.svg";
import {ReactComponent as Close} from "../../img/close.svg";
import toggleIcon from "../../img/toggleIcon.png";
import toggleIcon1 from "../../img/toggleIcon1.svg";
import toggleIcon2 from "../../img/toggleIcon2.svg";
import agent from "../../img/agent.png";
import phone1 from "../../img/phone1.svg";
import './mobile.scss';
import closeWhite from '../../img/closeWhite.svg';
import home1 from "../../img/home1.svg";
import health1 from '../../img/health1.svg';
import car1 from '../../img/car1.svg';
import person1 from '../../img/person1.svg';
import flight1 from '../../img/flight1.svg';
import {Link, useLocation} from "react-router-dom";
import {ReactComponent as backArrow} from "../../img/arrow.svg";


function MobileHeader() {
    const [show, setShow] = useState(false);
    const [showSos, setShowSos] = useState(false);
    const [showSideMenu, setShowSideMenu] = useState(false);
    const location = useLocation();

    function removeHeaderGradient() {
        if (location.pathname === "/contact" || location.pathname === "/news" || location.pathname === "/news/1" || location.pathname === "/partners") {
            return " ";
        } else {
            return "mobile-header-gradient";
        }
    }

    function addHeader() {
        if (location.pathname === "/contact" || location.pathname === "/news" || location.pathname === "/news/1" || location.pathname === "/partners") {
            return "mobile-header-contact";
        } else {
            return "mobile-header";
        }
    }

    function addBackButton() {
        if (location.pathname === "/news/1") {
            return "back-to-news";
        } else {
            return "back-to-news-disabled";
        }
    }

    return (

        <>
            <div>
                <div
                    className={removeHeaderGradient()}></div>
                <div className={addHeader()}>
                    <div>
                        <div className={addBackButton()}>
                            <Link to="/news">
                                <svg id="arrow_back_black_24dp" xmlns="http://www.w3.org/2000/svg" width="32"
                                     height="32"
                                     viewBox="0 0 32 32">
                                    <path id="Path_282" data-name="Path 282" d="M0,0H32V32H0Z" fill="none"/>
                                    <path id="Path_283" data-name="Path 283"
                                          d="M28,14.5H9.745L18.13,6.115,16,4,4,16,16,28l2.115-2.115L9.745,17.5H28Z"
                                          fill="#fff"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="mobile-header-img">

                        <Link to="/">
                            <img className='header-img'
                                 src={location.pathname === "/contact" ? "/static/media/Logo.4da6a64797e0640a78e09adb1aff6ee1.svg" : location.pathname === "/news" ? "/static/media/Logo.4da6a64797e0640a78e09adb1aff6ee1.svg" : location.pathname === "/news/1" ? "/static/media/Logo.4da6a64797e0640a78e09adb1aff6ee1.svg" : location.pathname === "/partners" ? "/static/media/Logo.4da6a64797e0640a78e09adb1aff6ee1.svg" : "/static/media/unisonLogo.67e6ca38c569dc486c43deaec1c5ba4e.svg"}
                                 alt="mobile-img"/>
                        </Link>
                    </div>
                    <div className='toggle' onClick={() => setShow(true)}><img src={toggle} alt="toggle"/></div>
                </div>
            </div>

            <Offcanvas className='toggle-header-offcanvas' placement='end' show={show}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <div className="toggle-logo"><UnisonLogo/></div>
                        <div className="toggle-close" onClick={() => setShow(false)}><Close/></div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='toggle1'>

                        <div className="toggle-body">
                            <div className="myCabinet-nav">
                                <a href="#">
                                    <svg id="Component_8_12" data-name="Component 8 – 12"
                                         xmlns="http://www.w3.org/2000/svg"
                                         width="62"
                                         height="62" viewBox="0 0 62 62">
                                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="31" cy="31" r="31"
                                                fill="#006A9F"></circle>
                                        <g id="_24px-2" data-name="24px-2" transform="translate(13 13)">
                                            <path id="Path_35" data-name="Path 35" d="M0,0H36V36H0Z"
                                                  fill="#006A9F"></path>
                                            <path id="Path_36" data-name="Path 36" fill="#fff"
                                                  d="M18,7.325A3.675,3.675,0,1,1,14.325,11,3.675,3.675,0,0,1,18,7.325m0,15.75c5.2,0,10.675,2.555,10.675,3.675v1.925H7.325V26.75c0-1.12,5.478-3.675,10.675-3.675M18,4a7,7,0,1,0,7,7A7,7,0,0,0,18,4Zm0,15.75c-4.673,0-14,2.345-14,7V32H32V26.75C32,22.1,22.673,19.75,18,19.75Z"></path>
                                        </g>
                                    </svg>
                                    <div className="myCabinet">ჩემი კაბინეტი</div>
                                </a>
                                <div className="sos-toggle-menu" onClick={() => setShowSos(true)}>SOS</div>
                            </div>

                            <div className="mobile-toggle-list">
                                <div onClick={() => setShowSideMenu(true)}>
                                    <li className="mobile-toggle-list-item" style={{marginTop: "67px"}}>
                                        <img src={toggleIcon} alt=""/> ფიზიკური პირებისთვის
                                        <div className='toggle-arrow'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="20.986" viewBox="0 0 20.986 20.986">
                                                <path id="Path_398" data-name="Path 398" d="M13.339,0V13.339H0"
                                                      transform="translate(10.493) rotate(45)"
                                                      fill="none" stroke="#EE303C" strokeWidth="3"/>
                                            </svg>
                                        </div>
                                    </li>
                                </div>
                                <div>
                                    <li className="mobile-toggle-list-item">
                                        <img src={toggleIcon1} alt=""/> იურიდიული პირებისთვის
                                        <div className='toggle-arrow'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="20.986" viewBox="0 0 20.986 20.986">
                                                <path id="Path_398" data-name="Path 398" d="M13.339,0V13.339H0"
                                                      transform="translate(10.493) rotate(45)"
                                                      fill="none" stroke="#EE303C" strokeWidth="3"/>
                                            </svg>
                                        </div>
                                    </li>
                                </div>
                            </div>
                            <div>
                                <li className="mobile-toggle-list-item">
                                    <img src={toggleIcon2} alt="" style={{width: "16px", height: "20px"}}/>
                                    სავალდებულო დაზღვევა
                                    <div className='toggle-arrow'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                             height="20.986" viewBox="0 0 20.986 20.986">
                                            <path id="Path_398" data-name="Path 398" d="M13.339,0V13.339H0"
                                                  transform="translate(10.493) rotate(45)"
                                                  fill="none" stroke="#EE303C" strokeWidth="3"/>
                                        </svg>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div className="connect-agent-toggle">
                            <img src={agent} alt="phone-icon"/><p>აგენტთან დაკავშირება</p>
                        </div>
                        <div className="mobile-toggle-middle-list">
                            <ul>
                                <li><Link to="/about-us" onClick={() => setShow(false)}>ჩვენს შესახებ</Link></li>
                                <li><Link to="/partners" onClick={() => setShow(false)}>პარტნიორები</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="/news" onClick={() => setShow(false)}>სიახლეები</Link></li>
                                <li><Link to="/contact" onClick={() => setShow(false)}>კონტაქტი</Link></li>
                            </ul>
                        </div>
                        <div className="mobile-toggle-bottom-list">
                            <ul>
                                <li className="active">
                                    <div className="indicator"></div>
                                    ქართული
                                </li>
                                <li className=""> English</li>
                                <li className=""> Русский</li>
                            </ul>

                            <div className="mobile-toggle-bottom-phone">
                                <ul>
                                    <li>ცხელი ხაზი</li>
                                    <li>
                                        <a href="tel:0322991991"> <img src={phone1} alt="phone1"/> 2 991 991</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>


            {/*modal sos*/}
            <Modal backdrop={true} size="sm" show={showSos} onHide={() => setShowSos(false)}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>

                <div className="sos-modal">
                    <div className="sos-modal-content">
                        <div className="sos-modal-header">
                            <div className="sos-modal-title">
                                SOS
                                <img onClick={() => setShowSos(false)} src={closeWhite} alt="close"/>
                            </div>
                        </div>
                        <div className="sos-modal-body">
                            <hr/>
                            <a href='#'>მოხდა სადაზღვევო შემთხვევა</a>
                            <hr/>
                            <a href="#">შემთხვევის სტატუსის შემოწმება</a>
                        </div>
                    </div>
                </div>
            </Modal>

            {/*side menu*/}

            <Offcanvas className='side-menu' placement='end' show={showSideMenu} backdrop="static">
                <Offcanvas.Header>
                    <div className="side-menu-close" onClick={() => setShowSideMenu(false)}><Close/></div>
                </Offcanvas.Header>
                <Offcanvas.Body className='side-menu-body'>
                    <div className="side-menu-text">

                        <div className='side-menu-list'>
                            <img src={home1} alt="home1"/>
                            ქონების დაზღვევა
                        </div>

                        <div className='side-menu-list'>
                            <img src={health1} alt="health1"/>
                            ინდივიდუალური ჯანმრთელობის დაზღვევა
                        </div>

                        <div className='side-menu-list'>
                            <img src={car1} alt="car1"/>
                            ავტოდაზღვევა - პაკეტები
                        </div>

                        <div className='side-menu-list'>
                            <img src={person1} alt="person1"/>
                            მძღოლის პასუხისმგებლობის დაზღვევა
                        </div>
                        <div className='side-menu-list'>
                            <img src={flight1} alt="flight1"/>
                            სამოგზაურო დაზღვევა
                        </div>


                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MobileHeader;