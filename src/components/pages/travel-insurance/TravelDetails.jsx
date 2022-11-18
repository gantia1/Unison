import React, {useState} from "react";
import {ReactComponent as Price} from "../../../img/svg/price.svg";
import {ReactComponent as ArrowForward} from "../../../img/svg/arrowForward.svg";
import {ReactComponent as ArrowBack} from "../../../img/svg/arrowBack.svg";
import {ReactComponent as QuestionMark} from "../../../img/svg/questionMark.svg";
import {ReactComponent as AddCircle} from "../../../img/svg/add.svg";


import {Form} from "react-bootstrap";

function TravelDetails() {
    const [completedStep, setCompletedStep] = useState(1);
    const [activeTab, setActiveTab] = useState(1);

    const handleClick = (id) => {
        setActiveTab(id);
    };


    const handleIdIncrease = () => {
        if (completedStep <= 5) {
            console.log(completedStep);
            setCompletedStep(completedStep + 1);
        }
    }
    const handleIdDecrease = () => {
        if (completedStep >= 2) {
            console.log(completedStep);
            setCompletedStep(completedStep - 1);
        }
    }


    return (
        <>
            <div className="news-menu"></div>
            <div className="news-header-mobile">
                <div className="news-gradient-top"></div>
                <div className="news-gradient-bottom"></div>
            </div>

            <div className="travel-detail">

                <div className="travel-detail-left-side">

                    <div>
                        <h3>სამოგზაურო დაზღვევა</h3>
                        <p><span>ქვეყნიდან გამსვლელთათვის</span> / პოლისის დეტალები</p>
                    </div>


                    {completedStep === 1 ? (
                        <div>
                            <div className="travel-tabs d-flex my-4">
                                <span className={`travel-standart ${activeTab === 1 && 'active'}`}
                                      onClick={() => handleClick(1)}><h5>სტანდარტული პოლისი</h5></span>
                                <span
                                    className={`travel-standart ${activeTab === 2 && 'active'}`}
                                    onClick={() => handleClick(2)}><h5>მულტი პოლისი</h5></span>
                            </div>

                            <div className="travel-form">
                                <div className="travel-form-input">
                                    <label htmlFor="travelStart">მოგზაურობის დასაწყისი</label>
                                    <input className="form-control h-75" type="date" placeholder="მოგზაურობის დასაწყისი"
                                           id="travelStart"
                                           name="travelStart"/>
                                </div>

                                <div className="travel-form-input">
                                    <label htmlFor="travelStart">მოგზაურობის დასაწყისი</label>
                                    <input className="form-control h-75" type="date" placeholder="მოგზაურობის დასაწყისი"
                                           id="travelStart"
                                           name="travelStart"/>
                                </div>
                            </div>

                        </div>
                    ) : completedStep === 2 ? (
                        <div>
                            <div className="travel-form  mt-3">
                                <div className="travel-form-input w-100">
                                    <p className="mb-2">სამოგზაურო ქვეყნები</p>
                                    <Form.Select className="h-75" aria-label="Default select example">
                                        <option>ევროპა</option>
                                        <option value="1">ევროპა</option>
                                        <option value="2">ევროპა</option>
                                        <option value="3">ევროპა</option>
                                    </Form.Select>
                                </div>

                                <div className="travel-form-input w-100">
                                    <p className="mb-2">დაზღვევის ვალუტა</p>
                                    <Form.Select className="h-75" aria-label="Default select example">
                                        <option>$ აშშ დოლარი</option>
                                        <option value="1">$ აშშ დოლარი</option>
                                        <option value="2">$ აშშ დოლარი</option>
                                        <option value="3">$ აშშ დოლარი</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <div className='d-flex w-100'>
                                <div className="travel-step-two-bottom">
                                    <h6>დაზღვევის ლიმიტი</h6>
                                    <p>50’000$</p>
                                </div>
                                <div className="travel-step-two-bottom">
                                    <h6>ფრანშიზა<QuestionMark/></h6>
                                    <p>80$</p>
                                </div>
                            </div>

                        </div>
                    ) : completedStep === 3 ? (
                            <div className="travel-step-three-cards">

                                <div className="travel-step-three-card mb-3">
                                    <strong>გიორგი დათებაშვილი</strong>
                                    <p>12.00 $</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="baggage1"/>
                                        <label className="form-check-label" htmlFor="baggage1">
                                            ბარგის დაზღვევა
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input mt-3" type="checkbox" value=""
                                               id="flight1" checked/>
                                        <label className="form-check-label mt-3" htmlFor="flight1" >
                                            ფრენის დაზღვევა
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input my-3" type="checkbox" value=""
                                               id="covid19"/>
                                        <label className="form-check-label  my-3" htmlFor="covid19">
                                            COVID-19
                                        </label>
                                    </div>

                                </div>

                                <div className="travel-step-three-card mb-3">
                                    <strong>ნანა ბრეგვაძე</strong>
                                    <p>18.00 $</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="baggage"/>
                                        <label className="form-check-label" htmlFor="baggage">
                                            ბარგის დაზღვევა
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input mt-3" type="checkbox" value=""
                                               id="flight"/>
                                        <label className="form-check-label mt-3" htmlFor="flight">
                                            ფრენის დაზღვევა
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input mt-3" type="checkbox" value=""
                                               id="covid"/>
                                        <label className="form-check-label mt-3" htmlFor="covid">
                                            COVID-19
                                        </label>
                                    </div>

                                </div>


                                <div className="travel-step-three-card ">
                                    <div className="travel-circle">
                                        <div className="add-circle">
                                            <AddCircle/>
                                        </div>
                                        <h6>დაზღვეული პირის დამატება</h6>
                                    </div>
                                </div>

                            </div>

                        )
                        : null}


                </div>

                <div className="travel-detail-right-side">


                    <div className="stepper-wrapper">
                        <div className={`stepper-item ${completedStep === 1 ? 'completed' : "completed"}`}>
                            <div className="step-counter">1</div>
                        </div>
                        <div className={`stepper-item ${completedStep >= 2 ? 'completed' : null}`}>
                            <div className="step-counter">2</div>
                        </div>
                        <div className={`stepper-item ${completedStep >= 3 ? 'completed' : null}`}>
                            <div className="step-counter">3</div>
                        </div>
                        <div className={`stepper-item ${completedStep >= 4 ? 'completed' : null}`}>
                            <div className="step-counter">4</div>
                        </div>
                        <div className={`stepper-item ${completedStep >= 5 ? 'completed' : null}`}>
                            <div className="step-counter">5</div>
                        </div>
                    </div>

                    <div className="travel-price">
                        <span className="travel-premium"><Price/><h5>პრემიის ღირებულება</h5></span>
                        <span>
                        <p>პრემიის სრული ღირებულება</p>
                        <p>12.00 $</p>
                        </span>
                    </div>
                    <div className="travel-detail-right-side-btn">
                        <button onClick={handleIdIncrease} className="travel-forward-btn">შემდეგი<ArrowForward/>
                        </button>
                        <button onClick={handleIdDecrease} className="travel-back-btn"><ArrowBack/>უკან</button>
                    </div>
                </div>

            </div>

        </>
    );
}

export default TravelDetails;