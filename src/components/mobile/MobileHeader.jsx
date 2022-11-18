import React, {useState} from "react";
import {Modal, Offcanvas} from "react-bootstrap";
import {ReactComponent as Toggle} from "../../img/svg/toggle.svg";
import {ReactComponent as UnisonLogo} from "../../img/svg/uniLogo.svg";
import {ReactComponent as Close} from "../../img/svg/close.svg";
import {ReactComponent as ToggleIcon} from "../../img/svg/toggleIcon.svg";
import {ReactComponent as ToggleIcon1} from "../../img/svg/toggleIcon1.svg";
import {ReactComponent as ToggleIcon2} from "../../img/svg/toggleIcon2.svg";
import {ReactComponent as Agent} from "../../img/svg/agent.svg";
import {ReactComponent as Phone1} from "../../img/svg/phone1.svg";
import {ReactComponent as CloseWhite} from "../../img/svg/closeWhite.svg";
import {ReactComponent as Home1} from "../../img/svg/home1.svg";
import {ReactComponent as Health} from "../../img/svg/health1.svg";
import {ReactComponent as Car} from "../../img/svg/car1.svg";
import {ReactComponent as Person} from "../../img/svg/person1.svg";
import {ReactComponent as Flight} from "../../img/svg/flight1.svg";
import './mobile.scss'
import {Link, useLocation} from "react-router-dom";

function MobileHeader() {
    const [show, setShow] = useState(false);
    const [showSos, setShowSos] = useState(false);
    const [showSideMenu, setShowSideMenu] = useState(false);
    const location = useLocation();

    function removeHeaderGradient() {
        if (location.pathname === "/" || location.pathname === "/about-us") {
            return "mobile-header-gradient";
        } else {
            return " ";
        }
    }

    function addHeader() {
        if (location.pathname === "/" || location.pathname === "/about-us") {
            return "mobile-header";
        } else {
            return "mobile-header-contact";
        }
    }

    function changeHeaderImage() {
        if (location.pathname === "/" || location.pathname === "/about-us") {
            return "/static/media/unisonLogo.67e6ca38c569dc486c43deaec1c5ba4e.svg";
        } else {
            return "/static/media/Logo.4da6a64797e0640a78e09adb1aff6ee1.svg"
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
                                 src={changeHeaderImage()}
                                 alt="mobile-img"/>
                        </Link>
                    </div>
                    <div className='toggle' onClick={() => setShow(true)}>
                        <Toggle/>
                    </div>
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
                                <Link to="#">
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
                                </Link>
                                <div className="sos-toggle-menu" onClick={() => setShowSos(true)}>SOS</div>
                            </div>

                            <div className="mobile-toggle-list">
                                <div onClick={() => setShowSideMenu(true)}>
                                    <li className="mobile-toggle-list-item" style={{marginTop: "67px"}}>
                                        <ToggleIcon/> <span>ფიზიკური პირებისთვის</span>
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
                                        <ToggleIcon1/> <span>იურიდიული პირებისთვის</span>
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
                                    <ToggleIcon2/>
                                    <span>სავალდებულო დაზღვევა</span>
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
                            <Agent/><p>აგენტთან დაკავშირება</p>
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
                                        <a href="tel:0322991991"> <Phone1/> 2 991 991</a>
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
                                <span>SOS</span>
                                <CloseWhite onClick={() => setShowSos(false)}/>
                            </div>
                        </div>
                        <div className="sos-modal-body">
                            <hr/>
                            <Link to='#'>მოხდა სადაზღვევო შემთხვევა</Link>
                            <hr/>
                            <Link to="#">შემთხვევის სტატუსის შემოწმება</Link>
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
                            <Home1/>
                            <span>ქონების დაზღვევა</span>
                        </div>

                        <div className='side-menu-list'>
                            <Health/>
                            <span>ინდივიდუალური ჯანმრთელობის დაზღვევა</span>
                        </div>

                        <div className='side-menu-list'>
                            <Car/>
                            <span>ავტოდაზღვევა - პაკეტები</span>
                        </div>

                        <div className='side-menu-list'>
                            <Person/>
                            მძღოლის პასუხისმგებლობის დაზღვევა
                        </div>
                        <div className='side-menu-list'>
                            <Flight/>
                            <span>სამოგზაურო დაზღვევა</span>
                        </div>


                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MobileHeader;