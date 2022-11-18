import {ReactComponent as Georgian} from "../../img/svg/ka.svg";
import en from '../../img/png/en.png';
import ru from '../../img/png/ru.png';
import arrow from '../../img/svg/arrow.svg';
import {ReactComponent as Phone} from "../../img/svg/phone.svg";
import {ReactComponent as Agent} from "../../img/svg/agent.svg";
import {Link} from "react-router-dom";

function Index() {

    return (
        <div className="header">

            <div className='maxWidth-header'>
                <ul>
                    <li><Link to="/" className='nav-item'>მთავარი</Link></li>
                    <li><Link to="/about-us" className='nav-item'>ჩვენს შესახებ</Link></li>
                    <li><Link to="/news" className='nav-item'>სიახლეები</Link></li>
                    <li><Link to="/partners" className='nav-item'>პარტნიორები</Link></li>
                    <li><Link to="/contact" className='nav-item'>კონტაქტი</Link></li>
                    <li className='dropdown'> SOS
                        <div className="dropdown-content">
                            <div className='dropdown-text'><Link to='#'>მოხდა სადაზღვეო შემთხვევა</Link></div>
                            <div className="dropdown-text"><Link to='#'>შემთხვევის სტატუსის შემოწმება</Link></div>
                        </div>
                    </li>
                </ul>

                <div className="dropdown-lang" style={{marginRight: '5%'}}>
                    <ul>

                        <li className='choose-lang'>
                            <Link to="#">
                                <Georgian/><span>ქართული</span>
                                <img className='lang-img img-arrow' src={arrow} alt='arrow'/>
                            </Link>
                            <div className='lang'>

                                <div className='lang-a'>
                                    <Link to='#'><img className='lang-img' src={en} alt='lang-img'/> English </Link>
                                </div>

                                <div className='lang-a'>
                                    <Link to='#'><img className='lang-img' src={ru} alt='lang-img'/> Русский</Link>
                                </div>

                            </div>
                        </li>

                        <li>
                            <div className='phone-border'>
                                <div className='phone'><a href="tel:0322991991">ცხელი ხაზი <Phone/> 2 911 911</a>
                                </div>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>
            <div className="agent">
                <div className='connect-agent'>
                    <div><Agent/></div>
                    აგენტთან დაკავშირება
                </div>
            </div>
        </div>

    );
}

export default Index;