import React from 'react';
import home from '../../img/home.svg';
import health from '../../img/health.svg';
import car from '../../img/car.svg';
import flight from '../../img/flight.svg';
import person from '../../img/person.svg';
import personC from '../../img/person2.png';
import star from '../../img/star.svg';
import touch from '../../img/touch.png';
import timer from '../../img/timer.png';
import people from '../../img/people.png';
import awesome from '../../img/awesome.png';
import home1 from '../../img/home1.png';
import food from '../../img/food.png';
import car1 from '../../img/car1.png';

function Home() {
    return (
        <div className='home-container'>

            <div className='card-container'>

                <div className="card">
                    <div className="card-body">
                        <img src={home} alt="home"/>
                        <p>ქონების დაზღვევა</p>
                        <button className='card-btn'>შეძენა</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <img src={health} alt="health"/>
                        <p>ჯანმრთელობის დაზღვევა</p>
                        <button className='card-btn'>შეძენა</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <img src={car} alt="car"/>
                        <p>ავტომობილის დაზღვევა</p>
                        <button className='card-btn'>შეძენა</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <img src={person} alt="person"/>
                        <p>პასუხისმგებლობის დაზღვევა</p>
                        <button className='card-btn'>შეძენა</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <img src={flight} alt="flight"/>
                        <p>სამოგზაურო დაზღვევა</p>
                        <button className='card-btn'>შეძენა</button>
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
                        <img src={personC} alt="personC"/>
                        <p>მომხმარებლის კმაყოფილების 96%-იანი დონე</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <img src={star} alt="star"/>
                        <p>მაღალრეიტინგული გადამზღვევი კომპანიები</p>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-body">
                        <img src={touch} alt="touch"/>
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
                        <img src={people} alt="people"/>
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
                <span> ყველა სიახლე
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.986"
                         height="20.986" viewBox="0 0 20.986 20.986">
                        <path id="Path_398" data-name="Path 398" d="M13.339,0V13.339H0"
                              transform="translate(10.493) rotate(45)"
                              fill="none" stroke="#707070" stroke-width="3"/>
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default Home;