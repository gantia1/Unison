import {ReactComponent as Georgian} from "../../img/ka.svg";
import en from '../../img/en.png';
import ru from '../../img/ru.png';
import arrow from '../../img/arrow.svg';
import phone from '../../img/phone.svg';
import {Link} from "react-router-dom";
import agent from "../../img/agent.png";

function Index() {

    return (
        <div className="header">

            <div className='maxWidth-header'>
                <ul>
                    <li><Link to="/" className='nav-item'>მთავარი</Link></li>
                    <li><Link to="/about-us" className='nav-item'>ჩვენს შესახებ</Link></li>
                    <li><a href="#" className='nav-item'>სიახლეები</a></li>
                    <li><a href="#" className='nav-item'>პარტნიორები</a></li>
                    <li><Link to="/contact" className='nav-item'>კონტაქტი</Link></li>
                    <li className='dropdown'> SOS
                        <div className="dropdown-content">
                            <div className='dropdown-text'><a href='#'>მოხდა სადაზღვეო შემთხვევა</a></div>
                            <div className="dropdown-text"><a href='#'>შემთხვევის სტატუსის შემოწმება</a></div>
                        </div>
                    </li>
                </ul>

                <div className="dropdown-lang" style={{marginRight: '5%'}}>
                    <ul>

                        <li className='choose-lang'>
                            <a href="#">
                                <Georgian/><span>ქართული</span>
                                <img className='lang-img img-arrow' src={arrow} alt='arrow'/>
                            </a>
                            <div className='lang'>

                                <div className='lang-a'>
                                    <a href='#'> <img className='lang-img' src={en} alt='lang-img'/> English </a>
                                </div>

                                <div className='lang-a'>
                                    <a href='#'><img className='lang-img' src={ru} alt='lang-img'/> Русский</a>
                                </div>

                            </div>
                        </li>

                        <li>
                            <div className='phone-border'>
                                <div className='phone'><a href="tel:0322991991">ცხელი ხაზი <img src={phone}
                                                                                                alt='phone'/> 2 911 911</a>
                                </div>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>
            <div className="agent">
                <div className='connect-agent'>
                    <div><img src={agent} alt="agent"/></div>
                    აგენტთან დაკავშირება
                </div>
            </div>
        </div>

    );
}

export default Index;