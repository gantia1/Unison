import React, {useEffect} from "react";
import unisonLogo from '../../img/unisonLogo.svg';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';
import youtube from '../../img/youtube.png';
import './mobile.scss';
import {Link} from "react-router-dom";

function MobileFooter() {
    useEffect(() => {
        scrollTop();
    }, []);

    function scrollTop() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <div className='mobile-footer'>
            <div className="mobile-footer-container">
                <div className="mobile-footer-list-text">
                    <Link to="/" onClick={scrollTop}>
                        <img src={unisonLogo} alt="logo" width="151px"/>
                    </Link>
                </div>
                <ul className="mobile-footer-list">
                    <li><Link to="/about-us" onClick={scrollTop}>ჩვენს შესახებ</Link></li>
                    <li><Link to="#">კარიერა</Link></li>
                    <li><Link to="/partners" onClick={scrollTop}>პარტნიორები</Link></li>
                </ul>
                <div className="mobile-footer-list-text">ინფორმაცია</div>
                <ul className="mobile-footer-list">
                    <li><Link to="/news" onClick={scrollTop}>სიახლეები</Link></li>
                    <li><Link to="#">ხელშეკრულებები</Link></li>
                    <li><Link to="#">საინფორმაციო ფურცელი</Link></li>
                    <li><Link to="#">სამედიცინო პროვაიდერები</Link></li>
                </ul>
                <div className="mobile-footer-list-text">დახმარება</div>
                <ul className="mobile-footer-list">
                    <li><Link to="/contact" onClick={scrollTop}>კონტაქტი</Link></li>
                    <li><Link to="#">მონაცემთა დაცვა</Link></li>
                    <li><Link to="#">მომხმარებლის ხმა</Link></li>
                    <li><Link to="#">ხშირად დასმული კითხვები</Link></li>
                </ul>
                <ul className="mobile-footer-list">
                    <li className="footer-container-list-item"><Link to="#">
                        <img className="mobile-footer-img" src={facebook} alt="facebook"/>Facebook</Link>
                    </li>
                    <li className="footer-container-list-item"><Link to="#">
                        <img className="mobile-footer-img" src={instagram} alt="instagram"/>Instagram</Link>
                    </li>
                    <li className="footer-container-list-item"><Link to="#">
                        <img className="mobile-footer-img" src={youtube} alt="youtube"/>Youtube</Link>
                    </li>
                    <li className="footer-container-list-item"><Link to="#">
                        <img className="mobile-footer-img" src={linkedin} alt="linkedin"/>Linkedin</Link>
                    </li>
                </ul>
                <div style={{fontSize: "14px", color: "#707070"}}>უნისონი © ყველა უფლება დაცულია, 2021</div>
            </div>
        </div>
    );
}

export default MobileFooter;