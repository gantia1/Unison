import React, {useEffect} from 'react';
import {ReactComponent as FooterLogo} from "../../img/unisonLogo.svg";
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
                        <li className='footer-list-item footer-logo'>
                            <Link to="/" onClick={scrollTop}><FooterLogo/></Link>
                        </li>
                        <li className='footer-list-item'><Link to="/about-us" onClick={scrollTop}>ჩვენს შესახებ</Link>
                        </li>
                        <li className='footer-list-item'><Link to="#">კარიერა</Link></li>
                        <li className='footer-list-item'><Link to="/partners" onClick={scrollTop}>პარტნიორები</Link>
                        </li>
                    </ul>
                    <ul>

                        <li className='footer-list-item'><strong>ინფორმაცია</strong></li>
                        <li className='footer-list-item'><Link to="/news" onClick={scrollTop}>სიახლეები</Link></li>
                        <li className='footer-list-item'><Link to="#">საინფორმაციო ფურცელი</Link></li>
                        <li className='footer-list-item'><Link to="#">სამედიცინო პროვაიდერები</Link></li>
                        <li className='footer-list-item'><Link to="#">ხელშეკრულებები</Link></li>
                        <li className='footer-list-item footer-text'>უნისონი © ყველა უფლება დაცულია, 2021</li>
                    </ul>
                    <ul>
                        <li className='footer-list-item'><strong>დახმარება</strong></li>
                        <li className='footer-list-item'><Link to='/contact' onClick={scrollTop}>კონტაქტი</Link></li>
                        <li className='footer-list-item'><Link to="#">მომხმარებლის ხმა</Link></li>
                        <li className='footer-list-item'><Link to="#">ხშირად დასმული კითხვები</Link></li>
                        <li className='footer-list-item'><Link to="#">მონაცემთა დაცვა</Link></li>
                    </ul>
                    <ul>
                        <li className='footer-list-item'><strong>სოციალური ქსელები</strong></li>
                        <li className='footer-list-item'><Link to="#"><img className='footer-img' src={facebook}
                                                                           alt="facebook"/> Facebook</Link></li>
                        <li className='footer-list-item'><Link to="#"><img className='footer-img' src={instagram}
                                                                           alt="instagram"/> Instagram</Link></li>
                        <li className='footer-list-item'><Link to="#"><img className='footer-img' src={linkedin}
                                                                           alt="linkedin"/> Linkedin</Link></li>
                        <li className='footer-list-item'><Link to="#"><img className='footer-img' src={youtube}
                                                                           alt="youtube"/> Youtube</Link></li>
                    </ul>

                </div>
            </div>
        </div>

    );
}

export default Footer;


