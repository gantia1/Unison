import React, {useState} from "react";
import './partners.scss';
import {ReactComponent as Shopping} from "../../img/shipping.svg";
import {ReactComponent as Public} from "../../img/public.svg";
import {ReactComponent as Store} from "../../img/store.svg";
import newsCardImg1 from "../../img/home1.png";
import newsCardImg2 from "../../img/food.png";
import newsCardImg3 from "../../img/car1.png";
import newsCardImg4 from "../../img/newsCardImg4.png";
import newsCardImg5 from "../../img/newsCardImg5.png";
import newsCardImg6 from "../../img/newsCardImg6.png";
import newsCardImg7 from "../../img/newsCardImg7.png";
import {Container, Modal} from "react-bootstrap";
import {ReactComponent as PartnerClose} from "../../img/partnerClose.svg";
import {ReactComponent as PartnersImg1} from "../../img/partnersImg1.svg";
import {ReactComponent as PartnersImg2} from "../../img/partnersImg2.svg";
import {ReactComponent as PartnersImg3} from "../../img/partnersImg3.svg";
import {ReactComponent as PartnersImg4} from "../../img/partnersImg4.svg";
import {ReactComponent as PartnersImg5} from "../../img/partnersImg5.svg";

function Partners() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <div className="partners">
                <div className="partners-header">
                    <div className="partners-gradient-top"></div>
                    <div className="partners-gradient-bottom"></div>
                </div>

                <div className="partners-content">

                    <div className="partners-header-text"><span>პარტნიორები</span></div>
                    <div className="partners-tabs">
                        <div className="partners-tab">
                            <div><Shopping/></div>
                            <span>გადამზიდავები</span>
                        </div>
                        <div className="partners-tab">
                            <div><Public/></div>
                            <span>საერთაშორისო ბროკერები</span>
                        </div>
                        <div className="partners-tab active">
                            <div><Store/></div>
                            <span>სერვის ცენტრები</span>
                        </div>
                    </div>

                    <div className="partners-cards">

                        <div className="partner-card">
                            <img src={newsCardImg1} alt="cardImage" onClick={handleShow}/>
                            <div className="partner-card-title"><span>შპს თეგეტა მოტორსი</span></div>
                            <div className="partner-card-address">
                                <span>თბილისი; დ. აღმაშენებლის ხეივანი მე-12 კმ, #5</span>
                            </div>
                        </div>

                        <div className="partner-card">
                            <div className="special-offer-container">
                                <div className="special-offer"><span>-15%</span></div>
                                <div className="special-offer-triangle"></div>
                            </div>
                            <img src={newsCardImg2} alt="cardImage"/>
                            <div className="partner-card-title"><span>შპს ტოიოტა ცენტრი თეგეტა</span></div>
                            <div className="partner-card-address"><span>თბილისი; უნივერსიტეტის ქუჩა #6</span></div>
                        </div>

                        <div className="partner-card">
                            <img src={newsCardImg3} alt="cardImage"/>
                            <div className="partner-card-title"><span>შპს სითი გარაჟი</span></div>
                            <div className="partner-card-address"><span>თბილისი; ქსნის ქ. #48ა</span></div>
                        </div>

                        <div className="partner-card">
                            <img src={newsCardImg4} alt="cardImage"/>
                            <div className="partner-card-title"><span>ავტო დეტალ სერვისი</span></div>
                            <div className="partner-card-address"><span>თბილისი, მარატ ნოზაძის ქ. 109</span></div>
                        </div>

                        <div className="partner-card">
                            <img src={newsCardImg5} alt="cardImage"/>
                            <div className="partner-card-title"><span>ავტოექსპერტიზა</span></div>
                            <div className="partner-card-address">
                                <span>ქ.თბილისი, დიდი დიღომი, კათოლიკოს აბრაჰამ I-ის 27</span></div>
                        </div>

                        <div className="partner-card">
                            <img src={newsCardImg6} alt="cardImage"/>
                            <div className="partner-card-title"><span>ი/მ ჯონი ჟორჟოლიანი</span></div>
                            <div className="partner-card-address"><span>ქუთაისი, ჯავახიშვილის 63 ა</span></div>
                        </div>

                        <div className="partner-card">
                            <div className="special-offer-container">
                                <div className="special-offer">
                                    <span className="special-offer-title">სპეციალური შეთავაზება</span>
                                    <div className="special-offer-triangle"
                                         style={{transform: "translate(20px, 42px)"}}></div>
                                </div>
                            </div>
                            <img src={newsCardImg7} alt="cardImage"/>
                            <div className="partner-card-title"><span>აჭარა მოტორსი</span></div>
                            <div className="partner-card-address"><span>ბობოყვათი</span></div>
                        </div>

                    </div>
                </div>
            </div>


            <Container>
                <Modal className="partners-modal" show={show} onHide={handleClose}>
                    <Modal.Header className="partners-modal-header">
                        <img className="partners-modal-img" src={newsCardImg1} alt="modalImage"/>
                        <div className="partners-modal-close" onClick={handleClose}><PartnerClose/></div>

                    </Modal.Header>
                    <div className="modal-special-offer-container">
                        <div className="modal-special-offer" style={{transform: "translateX(6px)"}}><span>-15%</span>
                        </div>
                        <div className="special-offer-triangle" style={{transform: "translate(11px, 57px)"}}></div>
                    </div>
                    <Modal.Body className="partners-modal-body">

                        <span className="partners-modal-head"><p>შპს ტოიოტა ცენტრი თეგეტა</p></span>
                        <span className="partners-modal-title"><PartnersImg1/><p>შეთავაზება</p></span>
                        <span className="partners-modal-text">
                        <p className="partners-modal-description">ჩვენი პარტნიორის, ტოიოტა ცენტრ თეგეტას სერვისებით,
                        შეგიძლიათ ისარგებლოთ სპეციალური პირობეით,
                        კერძოდ 15%-იანი ფასდაკლებით.</p>
                    </span>
                        <span className="partners-modal-title"><PartnersImg2/><p>მომსახურების პირობები</p></span>
                        <span className="partners-modal-text">
                        <p className="partners-modal-description">გამოყენებით ვღებულობთ იმაზე მეტ-ნაკლებად
                            სწორი გადანაწილების ტექსტს, ვიდრე ერთიდაიგივე
                            გამეორებადი სიტყვებია ხოლმე. შედეგად, ტექსტი ჩვეულებრივ
                            ინგლისურს გავს, მისი წაითხვა კი შეუძლებელია.</p>
                    </span>
                        <span className="partners-modal-text">
                      <div><PartnersImg3/></div>
                        <p>“ტოიოტა ცენტრი თეგეტა” წარმოადგენს
                            ტოიოტას ოფიციალურ დილერს საქართველოში.
                            ცენტრი, რომელიც მოიცავს ადმინისტრაციულ
                            ოფისს, შოურუმსა და სერვისს</p>
                    </span>
                        <span className="partners-modal-text">
                      <div><PartnersImg4/></div>
                        <p>www.toyota-tegeta.ge</p>
                    </span>
                        <span className="partners-modal-text">
                        <PartnersImg5/>
                        <p>თბილისი; უნივერსიტეტის ქუჩა #6</p>
                    </span>
                    </Modal.Body>
                </Modal>
            </Container>

        </>
    );
}

export default Partners;