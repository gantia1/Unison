import {Link, useLocation} from "react-router-dom";
import {ReactComponent as UnisonLogo} from "../../img/svg/Logo.svg";
import {ReactComponent as CabinetImg} from "../../img/svg/component.svg";
import {ReactComponent as Health} from "../../img/svg/health.svg";
import {ReactComponent as Car} from "../../img/svg/car.svg";
import {ReactComponent as Person} from "../../img/svg/person.svg";
import {ReactComponent as Flight} from "../../img/svg/flight.svg";

function Menu() {
    const location = useLocation();

    return (
        <div className={location.pathname === "/" ? 'menu' : 'about-us-menu'}>
            <div className="maxWidth-menu">
                <ul>
                    <li>
                        <div className="menu-logo">
                            <Link to='/'><UnisonLogo/></Link>
                        </div>
                    </li>

                    <li>
                        <div className='menu-list'>
                            <span>ფიზიკური პირებისთვის</span>
                            <div className="menu-dropdown">

                                <div><Link to='#'>
                                    <Health/>
                                    <span>ინდივიდუალური ჯამრთელობის დაზღვევა</span>
                                </Link>
                                </div>
                                <div><Link to='#'>
                                    <Car/>
                                    <span>ავტოდაზღვევა - პაკეტები</span>
                                </Link></div>

                                <div>
                                    <Link to='#'>
                                        <Person/>
                                        <span>მძღოლის პასუხისმგებლობის დაზღვევა</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/travel'>
                                        <Flight/>
                                        <span>სამოგზაურო დაზღვევა</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li>
                        <div className='menu-list'><span>იურიდიული პირებისთვის</span></div>
                    </li>
                    <li>
                        <div className='menu-list'><span>სავალდებულო დაზღვევა</span></div>
                    </li>
                </ul>


                <div className='nav-menu' style={{marginRight: '3%'}}>


                    <ul>
                        <li>
                            <div className='cabinet-img'>
                                <CabinetImg/>
                            </div>
                        </li>
                        <li>
                            <div className='cabinet'><span>ჩემი კაბინეტი</span></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;