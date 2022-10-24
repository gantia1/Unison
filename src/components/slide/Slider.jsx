import slide from "../../img/slide.png";
import React from 'react';
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.scss';
import agent from "../../img/agent.png";
import buyOnline from "../../img/buyOnline.png";




function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={slide}
                        alt="slide"
                    />
                    <Carousel.Caption>
                        <h3>ქონების დაზღვევა</h3>
                        <p>ყველაზე ხელსაყრელი პირობებით</p>
                        <img className='buy-onlineImg' src={buyOnline} alt="buy-online"/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide}
                        alt="slide"
                    />

                    <Carousel.Caption>
                        <h3>ქონების დაზღვევა</h3>
                        <p>ყველაზე ხელსაყრელი პირობებით</p>
                        <img className='buy-onlineImg' src={buyOnline} alt="buy-online"/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide}
                        alt="slide"
                    />

                    <Carousel.Caption>
                        <h3>ქონების დაზღვევა</h3>
                        <p>ყველაზე ხელსაყრელი პირობებით</p>
                        <img className='buy-onlineImg' src={buyOnline} alt="buy-online"/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="agent">
                <div className='connect-agent'>
                    <div><img src={agent} alt="agent"/></div>
                    აგენტთან დაკავშირება
                </div>
            </div>
        </>
    );
}

export default Slider;

