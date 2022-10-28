import React, {useRef} from 'react';
import './pages.scss';
import aboutUsCard1 from '../../img/aboutUsCard1.png';
import aboutUsCard2 from '../../img/aboutUsCard2.png';
import aboutUsCard3 from '../../img/aboutUsCard3.png';
import aboutUsCard4 from '../../img/aboutUsCard4.png';
import aboutUsCard5 from '../../img/aboutUsCard5.png';
import aboutUsCard6 from '../../img/aboutUsCard6.png';
import aboutUsCard7 from '../../img/aboutUsCard7.png';
import aboutUsCard8 from '../../img/aboutUsCard8.png';
import mission from '../../img/mission.png';
import standart from '../../img/standart.png';
import value from '../../img/value.png';
import annual from '../../img/annual.png';
import {Accordion, Container, Form} from "react-bootstrap";

function AboutUs() {
    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    return (
        <>
            <div className='about-us-menu'>
                <Container className='mb-5'>
                    <Accordion>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>ჩვენს შესახებ</Accordion.Header>
                            <Accordion.Body>
                                სადაზღვევო კომპანია „უნისონი“ დაფუძნდა 2011 წელს და დროის მცირე მონაკვეთში ქართული
                                სადაზღვევო
                                ბაზრის
                                ერთ-ერთი თვალსაჩინო მოთამაშედ იქცა. სადაზღვევო სფეროში, მენეჯმენტის მრავალწლიანი
                                გამოცდილებითა
                                და
                                პროფესიონალიზმით, ძლიერი საერთაშორისო პარტნიორებითა და მრავალფეროვანი პროდუქტებით
                                „უნისონმა“
                                სწრაფად
                                და ადვილად მოიპოვა მომხმარებლის ნდობა და ბაზრის სოლიდური წილი. უნისონი წარმოადგენს
                                დამოუკიდებელ,
                                სხვა ბიზნესებთან არააფილირებულ სადაზღვევო კომპანიას, რაც მომხმარებელს მეტი თავისუფალი
                                არჩევანის
                                საშუალებას აძლევს. უნისონი მომხმარებელს სთავაზობს მაღალი ხარისხის მომსახურებას,
                                პროვაიდრების
                                თავისუფალ არჩევანსა და კონკურენტუნარიან ფასებს.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>მისია</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>ღირებულებები</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>სტანდარტი</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Container>
            </div>

            <div className="about-us">

                <div className="about-us-top">
                    <div className="about-us-gradient-top"></div>
                    <div className="about-us-gradient-bottom"></div>
                    <h1 className="about-us-top-text">ჩვენს შესახებ</h1>
                </div>

                <div className="about-us-description">
                    <p className='about-us-description-text'>
                        სადაზღვევო კომპანია „უნისონი“ დაფუძნდა 2011 წელს და დროის მცირე მონაკვეთში ქართული სადაზღვევო
                        ბაზრის
                        ერთ-ერთი თვალსაჩინო მოთამაშედ იქცა. სადაზღვევო სფეროში, მენეჯმენტის მრავალწლიანი გამოცდილებითა
                        და
                        პროფესიონალიზმით, ძლიერი საერთაშორისო პარტნიორებითა და მრავალფეროვანი პროდუქტებით „უნისონმა“
                        სწრაფად
                        და ადვილად მოიპოვა მომხმარებლის ნდობა და ბაზრის სოლიდური წილი. უნისონი წარმოადგენს დამოუკიდებელ,
                        სხვა ბიზნესებთან არააფილირებულ სადაზღვევო კომპანიას, რაც მომხმარებელს მეტი თავისუფალი არჩევანის
                        საშუალებას აძლევს. უნისონი მომხმარებელს სთავაზობს მაღალი ხარისხის მომსახურებას, პროვაიდრების
                        თავისუფალ არჩევანსა და კონკურენტუნარიან ფასებს.
                    </p>
                </div>

                <div className="about-us-h1">
                    <h1>უნისონის ისტორია</h1>
                    <div className='card-arrow-left' onClick={() => scroll(-700)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path id="arrow-right-circle"
                                  d="M22,12A10,10,0,1,1,12,2,10,10,0,0,1,22,12M6,13h8l-3.5,3.5,1.42,1.42L17.84,12,11.92,6.08,10.5,7.5,14,11H6Z"
                                  transform="translate(22 22) rotate(180)" fill="#006a9f"/>
                        </svg>
                    </div>
                    <div className='card-arrow-right' onClick={() => scroll(700)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path id="arrow-right-circle"
                                  d="M22,12A10,10,0,1,1,12,2,10,10,0,0,1,22,12M6,13h8l-3.5,3.5,1.42,1.42L17.84,12,11.92,6.08,10.5,7.5,14,11H6Z"
                                  transform="translate(-2 -2)" fill="#006a9f"/>
                        </svg>
                    </div>
                </div>

                <div className="about-us-top-cards" ref={ref}>

                    <div className="about-us-top-card">

                        <div className="about-us-top-card-history">
                            <div className="year">2011</div>
                            <div className="dotted-line"></div>
                            <div className="year-dot"></div>
                        </div>

                        <div className="about-us-top-card-image"><img src={aboutUsCard1} alt="aboutUsCard1"/></div>
                        <div className="about-us-top-card-description">
                            <div>
                                <p>უნისონი დაარსდა და საერთაშორისო გადამზღვევ კომპანიებთან ურთიერთობამ, საშუალება მოგვცა
                                    პირველივე დღიდან წარმოგვედგინა პროდუქციის მრავალფეროვანი სპექტრი</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-top-card">

                        <div className="about-us-top-card-history">
                            <div className="year">2012</div>
                            <div className="dotted-line"></div>
                            <div className="year-dot"></div>
                        </div>

                        <div className="about-us-top-card-image"><img src={aboutUsCard2} alt="aboutUsCard2"/></div>
                        <div className="about-us-top-card-description">
                            <div>
                                <p>უნისონი იღებს აკრედიტაციას აზერბაიჯანის სახელმწიფოს ფინანსთა სამინისტროს მიერ და
                                    ინიშნება
                                    ბაქო-თბილისი ჯეიჰანის მილსადენის ექსკლუზიურ მზღვეველად</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-top-card">

                        <div className="about-us-top-card-history">
                            <div className="year">2013</div>
                            <div className="dotted-line"></div>
                            <div className="year-dot"></div>
                        </div>

                        <div className="about-us-top-card-image"><img src={aboutUsCard3} alt="aboutUsCard3"/></div>
                        <div className="about-us-top-card-description">
                            <div>
                                <p>უნისონი აფართოებს მომსახურების არეალს და ხსნის წარმომადგენლობით ოფისებს ბათუმსა და
                                    ფოთში</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-top-card">

                        <div className="about-us-top-card-history">
                            <div className="year">2015</div>
                            <div className="dotted-line"></div>
                            <div className="year-dot"></div>
                        </div>

                        <div className="about-us-top-card-image"><img src={aboutUsCard4} alt="aboutUsCard4"/></div>
                        <div className="about-us-top-card-description">
                            <div>
                                <p>უნისონი - სადაზღვევო ბაზარზე პირველი - ნერგავს მობილურ აპლიკაციას, იწყებს ონლაინ
                                    გაყიდვებს</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-top-card">

                        <div className="about-us-top-card-history">
                            <div className="year">2016</div>
                            <div className="dotted-line"></div>
                            <div className="year-dot"></div>
                        </div>

                        <div className="about-us-top-card-image"><img src={aboutUsCard5} alt="aboutUsCard5"/></div>
                        <div className="about-us-top-card-description">
                            <div>
                                <p>უნისონი აზღვევს საქართველოს საჰაერო სივრცეს, იწყებს თანამშრომლობას იუსტიციის სახლთან
                                    და
                                    უმსხვილეს ავიაკომპანიასთან სამოგზაურო დაზღვევის მიმართულებით.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-top-card">

                        <div className="about-us-top-card-history">
                            <div className="year">2017</div>
                            <div className="dotted-line"></div>
                            <div className="year-dot"></div>
                        </div>

                        <div className="about-us-top-card-image"><img src={aboutUsCard6} alt="aboutUsCard6"/></div>
                        <div className="about-us-top-card-description">
                            <div>
                                <p>უნისონი აზღვევს ქვეყნის მასშტაბით უმსხვილეს ინდუსტრიულ ჯგუფს „ჯორჯიან მანგანეზს“</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-top-card">

                        <div className="about-us-top-card-history">
                            <div className="year">2019</div>
                            <div className="dotted-line"></div>
                            <div className="year-dot"></div>
                        </div>

                        <div className="about-us-top-card-image"><img src={aboutUsCard7} alt="aboutUsCard7"/></div>
                        <div className="about-us-top-card-description">
                            <div>
                                <p>უნისონი ანაზღაურებს, აღმოსავლეთ ევროპის მასშტაბით, ერთ-ერთ ყველაზე მსხვილ ზარალს 73
                                    მლნ. აშშ. დოლარის ოდენობით.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-top-card">

                        <div className="about-us-top-card-history">
                            <div className="year">2020</div>
                            <div className="year-dot"></div>
                        </div>

                        <div className="about-us-top-card-image"><img src={aboutUsCard8} alt="aboutUsCard8"/></div>
                        <div className="about-us-top-card-description">
                            <div>
                                <p>უნისონი უზრუნველყოფს პანდემიის შედეგად დამდგარი გამოწვევის ეფექტურად მართვას, ყველა
                                    სერვისის დისტანციურ მიწოდებას</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="about-us-h">
                    <h1>უნისონი დღეს</h1>
                </div>

                <div className="about-us-bottom-cards">
                    <div className="about-us-bottom-cards-row">

                        <div className="about-us-bottom-card">
                            <div className="about-us-bottom-img">
                                <img src={mission} alt="mission"/>
                            </div>
                            <div className="about-us-bottom-card-title">მისია</div>
                            <div className="about-us-bottom-card-text">
                                <div><p>ჩვენი მისიაა ხელი შევუწყოთ ფინანსურ დაცულობასა და სტაბილურობას; თქვენთან ერთად
                                    მუდმივად ვიზრუნოთ ცხოვრების გამარტივებასა და სიმშვიდეზე.</p></div>
                            </div>
                        </div>
                        <div className="about-us-bottom-card">
                            <div className="about-us-bottom-img">
                                <img src={standart} alt="standart"/>
                            </div>
                            <div className="about-us-bottom-card-title">სტანდარტი</div>
                            <div className="about-us-bottom-card-list">
                                <div className='bottom-card-list'>
                                    <ul>
                                        <li>პროფესიონალიზმი</li>
                                        <li>განვითარება</li>
                                        <li>სიძლიერე</li>
                                    </ul>
                                    <ul>
                                        <li>სტაბილურობა</li>
                                        <li>სანდოობა</li>
                                        <li>მრავალფეროვნება</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="about-us-bottom-card">
                            <div className="about-us-bottom-img">
                                <img src={value} alt="value"/>
                            </div>
                            <div className="about-us-bottom-card-title">ღირებულებები</div>
                            <div className="about-us-bottom-card-text">
                                <div>
                                    <p>ჩვენ ვქმნით კომპანიას, რომელიც მაღალპროფესიონალური სადაზღვევო სერვისებითა და
                                        ურთიერთობის გამორჩეული სტილით, თქვენი გრძელვადიანი და სანდო პარტნიორია.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="annual">
                    <div className="annual-title">წლიური ანგარიშები</div>
                    <Container className='w-50'>
                        <Form.Select>
                            <option>2022</option>
                            <option value="2020">2021</option>
                            <option value="2019">2020</option>
                            <option value="2018">2019</option>
                            <option value="2017">2018</option>
                            <option value="2016">2017</option>
                            <option value="2015">2016</option>
                            <option value="2014">2015</option>
                            <option value="2013">2014</option>
                            <option value="2012">2013</option>
                            <option value="2011">2012</option>
                            <option value="2010">2011</option>
                            <option value="2010">2010</option>
                        </Form.Select>
                    </Container>

                    <div className="annual-files">

                        <div className="annual-file">
                            <img src={annual} alt="annual"/>
                            <h3>I კვარტალი</h3>
                            <h4>2022 წელი</h4>
                            <div className='annual-download'>
                                <svg id="file_download_black_24dp" xmlns="http://www.w3.org/2000/svg" width="20"
                                     height="20"
                                     viewBox="0 0 20 20">
                                    <path id="Path_241" data-name="Path 241" d="M0,0H20V20H0Z" fill="none"></path>
                                    <path id="Path_242" data-name="Path 242"
                                          d="M15,7.588H12.143V3H7.857V7.588H5l5,5.353ZM5,14.471V16H15V14.471Z"></path>
                                </svg>
                                <span>გადმოწერა</span>
                            </div>
                        </div>

                        <div className="annual-file">
                            <img src={annual} alt="annual"/>
                            <h3>II კვარტალი</h3>
                            <h4>2022 წელი</h4>
                            <div className='annual-download'>
                                <svg id="file_download_black_24dp" xmlns="http://www.w3.org/2000/svg" width="20"
                                     height="20"
                                     viewBox="0 0 20 20">
                                    <path id="Path_241" data-name="Path 241" d="M0,0H20V20H0Z" fill="none"></path>
                                    <path id="Path_242" data-name="Path 242"
                                          d="M15,7.588H12.143V3H7.857V7.588H5l5,5.353ZM5,14.471V16H15V14.471Z"></path>
                                </svg>
                                <span>გადმოწერა</span>
                            </div>
                        </div>

                        <div className="annual-file">
                            <img src={annual} alt="annual"/>
                            <h3>III კვარტალი</h3>
                            <h4>2022 წელი</h4>
                            <div className='annual-download'>
                                <svg id="file_download_black_24dp" xmlns="http://www.w3.org/2000/svg" width="20"
                                     height="20"
                                     viewBox="0 0 20 20">
                                    <path id="Path_241" data-name="Path 241" d="M0,0H20V20H0Z" fill="none"></path>
                                    <path id="Path_242" data-name="Path 242"
                                          d="M15,7.588H12.143V3H7.857V7.588H5l5,5.353ZM5,14.471V16H15V14.471Z"></path>
                                </svg>
                                <span>გადმოწერა</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>

    );
}

export default AboutUs;