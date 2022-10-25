import logo from '../../img/Logo.svg';
import health from '../../img/health.svg';
import car from '../../img/car.svg';
import person from '../../img/person.svg';
import flight from '../../img/flight.svg';

function Menu() {
    return (
        <div className='menu'>
            <div className="maxWidth-menu">
                <ul>
                    <li>
                        <div>
                            <img className='menu-logo' src={logo} alt="logo"/>
                        </div>
                    </li>

                    <li>
                        <div className='menu-list'>ფიზიკური პირებისთვის
                            <div className="menu-dropdown">

                                <div><a href='#'>
                                    <svg id="health_and_safety_black_48dp" xmlns="http://www.w3.org/2000/svg"
                                         xmlns="http://www.w3.org/1999/xlink" width="48" height="48"
                                         viewBox="0 0 48 48">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1"
                                                            gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#58b0e3"/>
                                                <stop offset="1" stop-color="#005287"/>
                                            </linearGradient>
                                        </defs>
                                        <rect id="Rectangle_5" data-name="Rectangle 5" width="48" height="48"
                                              fill="none"/>
                                        <path id="Path_29" data-name="Path 30"
                                              d="M17,24H12V18h5V13h6v5h5v6H23v5H17ZM20,2,4,8V20.18C4,30.28,10.82,39.7,20,42c9.18-2.3,16-11.72,16-21.82V8ZM32,20.18c0,8-5.1,15.4-12,17.66C13.1,35.58,8,28.2,8,20.18v-9.4l12-4.5,12,4.5Z"
                                              transform="translate(4 2)" fill="url(#linear-gradient)"/>
                                    </svg>
                                    ინდივიდუალური ჯამრთელობის
                                    დაზღვევა </a>
                                </div>
                                <div><a href='#'>
                                    <svg id="directions_car_filled_black_48dp" xmlns="http://www.w3.org/2000/svg"
                                         xmlns="http://www.w3.org/1999/xlink" width="48" height="48"
                                         viewBox="0 0 48 48">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1"
                                                            gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#58b0e3"/>
                                                <stop offset="1" stop-color="#005287"/>
                                            </linearGradient>
                                        </defs>
                                        <g id="Group_11" data-name="Group 11">
                                            <rect id="Rectangle_4" data-name="Rectangle 4" width="48" height="48"
                                                  fill="none"/>
                                        </g>
                                        <g id="Group_13" data-name="Group 13" transform="translate(6 10)">
                                            <g id="Group_12" data-name="Group 12">
                                                <path id="Path_29" data-name="Union 4"
                                                      d="M-772-656a2.006,2.006,0,0,1-2-2v-2h-24v2a2.006,2.006,0,0,1-2,2h-2a2.006,2.006,0,0,1-2-2v-16l4.16-11.98A3.007,3.007,0,0,1-797-688h22a2.987,2.987,0,0,1,2.84,2.02L-768-674v16a2.006,2.006,0,0,1-2,2Zm-28-8h28v-10h-28Zm1.62-14h24.74l-2.08-6H-796.3Zm18.38,9a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1-780-669Zm-18,0a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1-798-669Z"
                                                      transform="translate(804 688)" fill="url(#linear-gradient)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    ავტოდაზღვევა - პაკეტები</a></div>

                                <div>
                                    <a href='#'>
                                        <svg id="how_to_reg_black_24dp" xmlns="http://www.w3.org/2000/svg"
                                             xmlns="http://www.w3.org/1999/xlink" width="48" height="48"
                                             viewBox="0 0 48 48">
                                            <defs>
                                                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1"
                                                                gradientUnits="objectBoundingBox">
                                                    <stop offset="0" stop-color="#58b0e3"/>
                                                    <stop offset="1" stop-color="#005287"/>
                                                </linearGradient>
                                            </defs>
                                            <path id="Path_219" data-name="Path 219" d="M0,0H48V48H0Z" fill="none"/>
                                            <path id="Path_29" data-name="Path 220"
                                                  d="M19,20a8,8,0,1,0-8-8A8,8,0,0,0,19,20ZM19,8a4,4,0,1,1-4,4A4.012,4.012,0,0,1,19,8ZM7,32c.4-1.26,5.14-3.36,9.92-3.88l4.08-4A18.681,18.681,0,0,0,19,24c-5.34,0-16,2.68-16,8v4H21l-4-4ZM38.2,21,27.94,31.34,23.8,27.18,21,30l6.94,7L41,23.82Z"
                                                  transform="translate(3 4)" fill="url(#linear-gradient)"/>
                                        </svg>
                                        მძღოლის
                                        პასუხისმგებლობის დაზღვევა
                                    </a>
                                </div>
                                <div><a href='#'>
                                    <svg id="flight_takeoff_black_48dp" xmlns="http://www.w3.org/2000/svg"
                                         xmlns="http://www.w3.org/1999/xlink" width="48" height="48"
                                         viewBox="0 0 48 48">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1"
                                                            gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#58b0e3"/>
                                                <stop offset="1" stop-color="#005287"/>
                                            </linearGradient>
                                        </defs>
                                        <path id="Path_28" data-name="Path 28" d="M0,0H48V48H0Z" fill="none"/>
                                        <path id="Path_29" data-name="Path 29"
                                              d="M3.16,34.43h38v4h-38ZM42.3,15.71a2.993,2.993,0,0,0-3.68-2.12L28,16.43,14.2,3.57,10.34,4.59l8.28,14.34L8.68,21.59,4.74,18.51l-2.9.78,5.18,8.98,33.14-8.86a3.044,3.044,0,0,0,2.14-3.7Z"
                                              transform="translate(1.84 3.57)" fill="url(#linear-gradient)"/>
                                    </svg>
                                    სამოგზაურო დაზღვევა</a>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li>
                        <div className='menu-list'>იურიდიული პირებისთვის</div>
                    </li>
                    <li>
                        <div className='menu-list'>სავალდებულო დაზღვევა</div>
                    </li>
                </ul>


                <div className='nav-menu' style={{marginRight: '3%'}}>


                    <ul>
                        <li>
                            <div className='cabinet-img'>
                                <svg id="Component_8_11" data-name="Component 8 – 11" xmlns="http://www.w3.org/2000/svg"
                                     width="62" height="62" viewBox="0 0 62 62">
                                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="31" cy="31" r="31" fill="#f2f2f2"/>
                                    <g id="_24px-2" data-name="24px-2" transform="translate(13 13)">
                                        {/*<path id="Path_35" data-name="Path 35" d="M0,0H36V36H0Z" fill="none"/>*/}
                                        <path id="Path_36" data-name="Path 36"
                                              d="M18,7.325A3.675,3.675,0,1,1,14.325,11,3.675,3.675,0,0,1,18,7.325m0,15.75c5.2,0,10.675,2.555,10.675,3.675v1.925H7.325V26.75c0-1.12,5.478-3.675,10.675-3.675M18,4a7,7,0,1,0,7,7A7,7,0,0,0,18,4Zm0,15.75c-4.673,0-14,2.345-14,7V32H32V26.75C32,22.1,22.673,19.75,18,19.75Z"
                                              fill="#707070"/>
                                    </g>
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className='cabinet'>ჩემი კაბინეტი</div>
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    );
}

export default Menu;