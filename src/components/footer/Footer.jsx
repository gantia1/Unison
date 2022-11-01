import React, {useEffect} from 'react';
import unisonLogo from '../../img/unisonLogo.svg';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';
import youtube from '../../img/youtube.png';
import {Link} from "react-router-dom";

function Footer() {
    useEffect(() => {
        scrollTop();
    }, []);

    function scrollTop() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-list">
                    <ul>
                        <li className='footer-list-item'><img className='footer-logo' src={unisonLogo} alt="logo"/></li>
                        <li className='footer-list-item'><Link to="/about-us" onClick={scrollTop}>ჩვენს შესახებ</Link>
                        </li>
                        <li className='footer-list-item'><a href="#">კარიერა</a></li>
                        <li className='footer-list-item'><a href="#">პარტნიორები</a></li>
                    </ul>
                    <ul>

                        <li className='footer-list-item'><strong>ინფორმაცია</strong></li>
                        <li className='footer-list-item'><a href="#">სიახლეები</a></li>
                        <li className='footer-list-item'><a href="#">საინფორმაციო ფურცელი</a></li>
                        <li className='footer-list-item'><a href="#">სამედიცინო პროვაიდერები</a></li>
                        <li className='footer-list-item'><a href="#">ხელშეკრულებები</a></li>
                        <li className='footer-list-item footer-text'>უნისონი © ყველა უფლება დაცულია, 2021</li>
                    </ul>
                    <ul>
                        <li className='footer-list-item'><strong>დახმარება</strong></li>
                        <li className='footer-list-item'><Link to='/contact' onClick={scrollTop}>კონტაქტი</Link></li>
                        <li className='footer-list-item'><a href="#">მომხმარებლის ხმა</a></li>
                        <li className='footer-list-item'><a href="#">ხშირად დასმული კითხვები</a></li>
                        <li className='footer-list-item'><a href="#">მონაცემთა დაცვა</a></li>
                    </ul>
                    <ul>
                        <li className='footer-list-item'><strong>სოციალური ქსელები</strong></li>
                        <li className='footer-list-item'><a href='#'><img className='footer-img' src={facebook}
                                                                          alt="facebook"/> Facebook</a></li>
                        <li className='footer-list-item'><a href="#"><img className='footer-img' src={instagram}
                                                                          alt="instagram"/> Instagram</a></li>
                        <li className='footer-list-item'><a href="#"><img className='footer-img' src={linkedin}
                                                                          alt="linkedin"/> Linkedin</a></li>
                        <li className='footer-list-item'><a href="#"><img className='footer-img' src={youtube}
                                                                          alt="youtube"/> Youtube</a></li>
                    </ul>

                </div>
            </div>
        </div>

    );
}

export default Footer;


