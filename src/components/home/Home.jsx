import React, {useEffect} from 'react';
import {ReactComponent as HomeImg} from "../../img/svg/home.svg";
import {ReactComponent as Health} from "../../img/svg/health.svg";
import {ReactComponent as Car} from "../../img/svg/car.svg";
import {ReactComponent as Flight} from "../../img/svg/flight.svg";
import {ReactComponent as Person} from "../../img/svg/person.svg";
import {ReactComponent as PersonC} from "../../img/svg/person2.svg";
import {ReactComponent as Star} from "../../img/svg/star.svg";
import {ReactComponent as Touch} from "../../img/svg/touch.svg";
import {ReactComponent as Timer} from "../../img/svg/timer.svg"
import {ReactComponent as People} from "../../img/svg/people.svg";
import {ReactComponent as Awesome} from "../../img/svg/awesome.svg";
import home1 from '../../img/png/home1.png';
import food from '../../img/png/food.png';
import car1 from '../../img/png/car1.png';
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
            <div className='advantages-text'><h1>უპირატესობები</h1></div>

            <div className='advantages-container'>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <div className="advantages-body-svg"><PersonC/></div>
                        <p>მომხმარებლის კმაყოფილების 96%-იანი დონე</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <div className="advantages-body-svg"><Star/></div>
                        <p>მაღალრეიტინგული გადამზღვევი კომპანიები</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <div className="advantages-body-svg"><Touch/></div>
                        <p>თანამედროვე ელექტრონული სერვისები</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <div className="advantages-body-svg"><Timer/></div>

                        <p>ზარალის დარეგულირების უმოკლესი ვადები</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <div className="advantages-body-svg"><People/></div>
                        <p>კორპორატიული კლიენტების ფართო სპექტრი</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <div className="advantages-body-svg"><Awesome/></div>
                        <p>გუნდის პროფესიონალიზმი და მრავალწლიანი გამოცდილება</p>
                    </div>
                </div>
            </div>

            <div className='mobile-line'>
                <hr/>
            </div>

            <div className='news-text'><h1>სიახლეები</h1></div>

            <div className='news-container'>

                <div className="news-card">
                    <div className="news-body">
                        <img src={home1} alt="home1"/>
                        <div className='lg-text'><p>ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი</p></div>
                        <div className='sm-text'><p>6 ნოემბერი</p></div>
                    </div>
                </div>

                <div className="news-card">
                    <div className="news-body">
                        <img src={food} alt="food"/>
                        <div className='lg-text'><p>ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან</p></div>
                        <div className='sm-text'><p>28 ოქტომბერი</p></div>
                    </div>
                </div>

                <div className="news-card">
                    <div className="news-body">
                        <img src={car1} alt="car1"/>
                        <div className='lg-text'><p>ავტომობილის სალონის მოვლის თანამედროვე ხერხები</p></div>
                        <div className='sm-text'><p>14 ოქტომბერი</p></div>
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