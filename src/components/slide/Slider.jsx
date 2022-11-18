import slide from "../../img/png/slide.png";
import React from 'react';
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.scss';
import buyOnline from "../../img/png/buyOnline.png";


function Slider() {
    return (
        <>
            <Carousel>
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
        </>
    );
}

export default Slider;

