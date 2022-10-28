import React from "react";
import unisonLogo from '../../img/unisonLogo.svg';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';
import youtube from '../../img/youtube.png';
import './mobile.scss';
import {Link} from "react-router-dom";

function MobileFooter() {
    return (
        <div className='mobile-footer'>
            <div className="mobile-footer-container">
                <div className="mobile-footer-list-text"><img
                    src={unisonLogo} alt="logo" width="151px"/></div>
                <ul className="mobile-footer-list">
                    <li><Link to="/about-us">ჩვენს შესახებ</Link></li>
                    <li><a href="#">კარიერა</a></li>
                    <li><a href="#">პარტნიორები</a></li>
                </ul>
                <div className="mobile-footer-list-text">ინფორმაცია</div>
                <ul className="mobile-footer-list">
                    <li><a href="#">სიახლეები</a></li>
                    <li><a href="#">ხელშეკრულებები</a></li>
                    <li><a href="#">საინფორმაციო ფურცელი</a></li>
                    <li><a href="#">სამედიცინო პროვაიდერები</a></li>
                </ul>
                <div className="mobile-footer-list-text">დახმარება</div>
                <ul className="mobile-footer-list">
                    <li><a href="#">კონტაქტი</a></li>
                    <li><a href="#">მონაცემთა დაცვა</a></li>
                    <li><a href="#">მომხმარებლის ხმა</a></li>
                    <li><a href="#">ხშირად დასმული კითხვები</a></li>
                </ul>
                <ul className="mobile-footer-list">
                    <li className="footer-container-list-item"><a href="#">
                        <img className="mobile-footer-img" src={facebook} alt="facebook"/>Facebook</a>
                    </li>
                    <li className="footer-container-list-item"><a href="#">
                        <img className="mobile-footer-img" src={instagram} alt="instagram"/>Instagram</a>
                    </li>
                    <li className="footer-container-list-item"><a href="#">
                        <img className="mobile-footer-img" src={youtube} alt="youtube"/>Youtube</a>
                    </li>
                    <li className="footer-container-list-item"><a href="#">
                        <img className="mobile-footer-img" src={linkedin} alt="linkedin"/>Linkedin</a>
                    </li>
                </ul>
                <div style={{fontSize: "14px", color: "#707070"}}>უნისონი © ყველა უფლება დაცულია, 2021</div>
            </div>
        </div>
    );
}

export default MobileFooter;