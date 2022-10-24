import React, {useState} from "react";
import headerImg from '../../img/unisonLogo.svg';
import toggle from '../../img/toggle.svg';
import {Modal} from "react-bootstrap";
import uniLogo from "../../img/uniLogo.svg";
import close from "../../img/close.svg";
import toggleIcon from "../../img/toggleIcon.png";
import toggleIcon1 from "../../img/toggleIcon1.svg";
import toggleIcon2 from "../../img/toggleIcon2.svg";
import agent from "../../img/agent.png";
import phone1 from "../../img/phone1.svg";
import './mobile.scss';
import closeWhite from '../../img/closeWhite.svg';


function MobileHeader() {
    const [show, setShow] = useState(false);
    const [showSos, setShowSos] = useState(false);

    return (

        <>
            <div>
                <div className="mobile-header-gradient"></div>
                <div className="mobile-header">
                    <div className="mobile-header-img"><img src={headerImg} alt="mobile-img"/></div>
                    <div className='toggle' onClick={() => setShow(true)}><img src={toggle} alt="toggle"/></div>
                </div>
            </div>

            <Modal show={show} fullscreen={"xxl-down"} onHide={() => setShow(false)}>
                <Modal.Body>
                    <div className='toggle1 '>
                        <div className="toggle-header">
                            <div className="toggle-title">
                                <div style={{height: "100px"}}>
                                    <img className='toggle-logo' src={uniLogo} alt="uniLogo"/>
                                    <img className='toggle-close' src={close} alt="close"
                                         onClick={() => setShow(false)}/>
                                </div>
                            </div>
                        </div>
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
                                <div>
                                    <li className="mobile-toggle-list-item" style={{marginTop: "67px"}}>
                                        <img src={toggleIcon} alt=""/> ფიზიკური პირებისთვის
                                        <div className='toggle-arrow'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="20.986" viewBox="0 0 20.986 20.986">
                                                <path id="Path_398" data-name="Path 398" d="M13.339,0V13.339H0"
                                                      transform="translate(10.493) rotate(45)"
                                                      fill="none" stroke="#EE303C" stroke-width="3"/>
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
                                                      fill="none" stroke="#EE303C" stroke-width="3"/>
                                            </svg>
                                        </div>
                                    </li>
                                </div>
                            </div>
                            <div>
                                <li className="mobile-toggle-list-item">
                                    <img src={toggleIcon2} alt=""
                                         style={{width: "16px", height: "20px"}}/> სავალდებულო
                                    დაზღვევა
                                    <div className='toggle-arrow'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                             height="20.986" viewBox="0 0 20.986 20.986">
                                            <path id="Path_398" data-name="Path 398" d="M13.339,0V13.339H0"
                                                  transform="translate(10.493) rotate(45)"
                                                  fill="none" stroke="#EE303C" stroke-width="3"/>
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
                                <li><a href="#">ჩვენ შესახებ</a></li>
                                <li><a href="#">პარტნიორები</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">სიახლეები</a></li>
                                <li><a href="#">კონტაქტი</a></li>
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
                                        <a href='#'> <img src={phone1} alt="phone1"/> 2 991 991</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/*modal sos*/}
            <Modal backdrop={true} size="sm" show={showSos} onHide={() => setShowSos(false)} aria-labelledby="contained-modal-title-vcenter"
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
        </>
    );
}

export default MobileHeader;