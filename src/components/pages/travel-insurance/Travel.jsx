import React from "react";
import '../../../styles/pages.scss';
import {ReactComponent as TravelImg} from "../../../img/svg/travelSvg.svg";
import {ReactComponent as FlightUp} from "../../../img/svg/flight.svg";
import {ReactComponent as FlightDown} from "../../../img/svg/flightdown.svg";
import {ReactComponent as FlightClass} from "../../../img/svg/flightClass.svg";
import {ReactComponent as Arrow} from "../../../img/svg/travelArrow.svg";
import {Link} from "react-router-dom";

function Travel() {
    return (
        <div className="pages-header">
            <div className="travel-menu">
                <div className="contact-gradient-top"></div>
                <div className="contact-gradient-bottom"></div>
            </div>

            <div className="travel-top">
                <div className="travel-top-left-side">
                    <div className="travel-top-title"><h1>სამოგზაურო დაზღვევა</h1></div>

                    <div className="travel-top-text">
                        <div className="travel-top-description">
                            <TravelImg/>
                            <p>
                                სამოგზაურო დაზღვევა არის საუკეთესო გზა შენი ფინანსების დასაცავად,
                                ლორემ იპსუმ დაკავშირებული გაუთვალისწინებელი დანახარჯებისგან.
                            </p>
                        </div>
                        <div className="travel-top-description">
                            <TravelImg/>
                            <p> ჩვენ გთავაზობთ ყველაზე დაბალ ტარიფებს </p>
                        </div>
                        <div className="travel-top-description">
                            <TravelImg/>
                            <p>იფიქრე მოგზაურობის კომფორტზე, ლორემ იპსუმ სხვა დანარჩენი მოგვანდე ჩვენ</p>
                        </div>
                    </div>
                </div>

                <div className="travel-top-right-side">
                    <div className="travel-cards">

                        <div className="travel-card">
                            <FlightUp/>
                            <h4>ქვეყანაში შემომსვლელთათვის</h4>
                            <p>
                                ზოგადი აღწერა ლორემ იპსუმ დოლორ სიტ ამეტ. კასტილიის სიარულში დაბრუნდებოდა, გაიყვანს
                                ნავთის. მოისროლა სოციალისტებმა სხვაგანაც სიარულში ხტოდნენ. ოცნებამ კლინიკას ნატეხების,
                                ბოლომდინ საწოლს წუწნე თავისადმი აღწევს ტლანქი.
                            </p>
                            <Link to="#">სრულად ნახვა <Arrow/></Link>
                        </div>

                        <div className="travel-card">
                            <FlightDown/>
                            <h4>ქვეყნიდან გამსვლელთათვის</h4>
                            <p>
                                ზოგადი აღწერა ლორემ იპსუმ დოლორ სიტ ამეტ. კასტილიის სიარულში დაბრუნდებოდა, გაიყვანს
                                ნავთის. მოისროლა სოციალისტებმა სხვაგანაც სიარულში ხტოდნენ. ოცნებამ კლინიკას ნატეხების,
                                ბოლომდინ საწოლს წუწნე თავისადმი აღწევს ტლანქი.
                            </p>
                            <Link to="/travel/travel-detail">სრულად ნახვა <Arrow/></Link>
                        </div>

                        <div className="travel-card">
                            <FlightClass/>
                            <h4>VIP</h4>
                            <p>
                                ზოგადი აღწერა ლორემ იპსუმ დოლორ სიტ ამეტ. კასტილიის სიარულში დაბრუნდებოდა, გაიყვანს
                                ნავთის. მოისროლა სოციალისტებმა სხვაგანაც სიარულში ხტოდნენ. ოცნებამ კლინიკას ნატეხების,
                                ბოლომდინ საწოლს წუწნე თავისადმი აღწევს ტლანქი.
                            </p>
                            <Link to="#">სრულად ნახვა <Arrow/></Link>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}

export default Travel;