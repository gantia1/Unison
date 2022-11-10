import React, {useEffect} from 'react';
import {ReactComponent as HomeImg} from "../../img/home.svg";
import {ReactComponent as Health} from "../../img/health.svg";
import {ReactComponent as Car} from "../../img/car.svg";
import {ReactComponent as Flight} from "../../img/flight.svg";
import {ReactComponent as Person} from "../../img/person.svg";
import {ReactComponent as PersonC} from "../../img/person2.svg";
import {ReactComponent as Star} from "../../img/star.svg";
import {ReactComponent as Touch} from "../../img/touch.svg";
import timer from '../../img/timer.png';
import {ReactComponent as People} from "../../img/people.svg";
import awesome from '../../img/awesome.png';
import home1 from '../../img/home1.png';
import food from '../../img/food.png';
import car1 from '../../img/car1.png';
import {Link} from "react-router-dom";


function Home() {
    useEffect(() => {
        scrollTop();
    }, []);

    function scrollTop() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <div className='home-container'>

            <div className='home-card-container'>

                <div className="home-card">
                    <div className="home-card-body">
                        <HomeImg/>
                        <p>ქონების დაზღვევა</p>
                        <button className='home-card-btn'>შეძენა</button>
                    </div>
                </div>

                <div className="home-card">
                    <div className="home-card-body">
                        <Health/>
                        <p>ჯანმრთელობის დაზღვევა</p>
                        <button className='home-card-btn'>შეძენა</button>
                    </div>
                </div>

                <div className="home-card">
                    <div className="home-card-body">
                        <Car/>
                        <p>ავტომობილის დაზღვევა</p>
                        <button className='home-card-btn'>შეძენა</button>
                    </div>
                </div>

                <div className="home-card">
                    <div className="home-card-body">
                        <Person/>
                        <p>პასუხისმგებლობის დაზღვევა</p>
                        <button className='home-card-btn'>შეძენა</button>
                    </div>
                </div>

                <div className="home-card">
                    <div className="home-card-body">
                        <Flight/>
                        <p>სამოგზაურო დაზღვევა</p>
                        <button className='home-card-btn'>შეძენა</button>
                    </div>
                </div>

            </div>
            <div className="mobile-sos">
                <button>SOS</button>
            </div>
            <div className='mobile-line'>
                <hr/>
            </div>
            <div className='advantages-text'>უპირატესობები</div>

            <div className='advantages-container'>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <PersonC/>
                        <p>მომხმარებლის კმაყოფილების 96%-იანი დონე</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <Star/>
                        <p>მაღალრეიტინგული გადამზღვევი კომპანიები</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <Touch/>
                        <p>თანამედროვე ელექტრონული სერვისები</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <img src={timer} alt="timer"/>
                        <p>ზარალის დარეგულირების უმოკლესი ვადები</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <People/>
                        <p>კორპორატიული კლიენტების ფართო სპექტრი</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <img src={awesome} alt="awesome"/>
                        <p>გუნდის პროფესიონალიზმი და მრავალწლიანი გამოცდილება</p>
                    </div>
                </div>
            </div>

            <div className='mobile-line'>
                <hr/>
            </div>

            <div className='news-text'>სიახლეები</div>

            <div className='news-container'>

                <div className="news-card">
                    <div className="news-body">
                        <img src={home1} alt="home1"/>
                        <div className='lg-text'>ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი</div>
                        <div className='sm-text'>6 ნოემბერი</div>
                    </div>
                </div>

                <div className="news-card">
                    <div className="news-body">
                        <img src={food} alt="food"/>
                        <div className='lg-text'>ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან</div>
                        <div className='sm-text'>28 ოქტომბერი</div>
                    </div>
                </div>

                <div className="news-card">
                    <div className="news-body">
                        <img src={car1} alt="car1"/>
                        <div className='lg-text'>ავტომობილის სალონის მოვლის თანამედროვე ხერხები</div>
                        <div className='sm-text'>14 ოქტომბერი</div>
                    </div>
                </div>

            </div>
            <div className="all-news">
                <Link to="/news" onClick={scrollTop}>
                    <span> ყველა სიახლე
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.986"
                         height="20.986" viewBox="0 0 20.986 20.986">
                        <path id="Path_398" data-name="Path 398" d="M13.339,0V13.339H0"
                              transform="translate(10.493) rotate(45)"
                              fill="none" stroke="#707070" strokeWidth="3"/>
                    </svg>
                </span>
                </Link>
            </div>
        </div>
    );
}

export default Home;