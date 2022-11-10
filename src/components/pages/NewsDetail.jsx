import React from 'react';
import newsCardImg1 from "../../img/home1.png";
import newsCardImg2 from "../../img/car1.png";
import newsCardImg3 from "../../img/food.png";
import newsCardImg4 from "../../img/newsCardImg8.png";
import newsCardImg5 from "../../img/newsCardImg4.png";
import newsCardImg6 from "../../img/newsCardImg5.png";
import newsCardImg8 from "../../img/newsCardImg7.png";
import newsCardImg9 from "../../img/newsCardImg9.png";
import newsCardImg10 from "../../img/newsCardImg10.png";


function NewsDetail() {

    return (
        <>
            <div className="news-detail-menu"></div>
            <div className="news-detail-header-mobile">
                <div className="news-detail-gradient-top"></div>
                <div className="news-detail-gradient-bottom"></div>
            </div>
            <div className="news-card-detail d-flex">

                <div className="news-card-detail-left">
                    <img src={newsCardImg1} alt="Card-Image"/>
                    <div className="news-card-detail-title">
                        <span>ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი</span>
                    </div>
                    <div className="news-card-detail-date"><span>28 ოქტომბერი</span></div>
                    <div className="news-card-detail-text">

                        <div>
                            <p>
                                ჰაერის ხარისხი - ჰაერში არსებული მავნე მინარევები არა მარტო ფილტვებზე, არამედ მთელ
                                ორგანიზმზე მოქმედებს. განსაკუთრებით ზარალდება გულსისხლძარღვთა, რეპროდუქციული
                                სისტემა,
                                თირკმელები. ყოველწლიურად პლანეტის რამოდენიმე მილიონი ადამიანი ფილტვის კიბოს,
                                რესპირატორული
                                და გულსისხძლარღვთა სისტემის დაავადებებით იღუპება.
                            </p>
                            <p>
                                ბოლო პერიოდამდე ქალაქის ჰაერის დაბინძურების ძირითად მიზეზად ტრანსპორტი ითვლებდა,
                                მაგრამ
                                ამერიკელი მეცნიერების კვლევამ აჩვენა ატმოსფეროზე საყოფაცხოვრებო დამაბინძურებლების
                                უარყოფითი
                                გავლენა, რომელსაც ყოველდღიურად ვხმარობთ - მელანი, კოსმეტიკა, სარეცხი საშუალებები და
                                ა.შ.
                            </p>
                            <p>
                                ჯანდაცვის მსოფლიო ორგანიზაციის ექსპერტები მცირედ დასახლებულ პუნქტებში ჰაერის
                                ხარისხის
                                გაუარესებაზეც საუბრობენ. ამას ხელს უწყობს არაეკოლოგიური საწვავი, რომლითაც გასათბობად
                                სარგებლობენ. ვთქვათ, თუ ირგვლივ ტყეა, მაგრამ სახლი დგას საავტომობილო გზაზე,
                                დაბინძურებულია
                                არა მარტო ჰაერი, ნიადაგიც - მძიმე ლითონებით. მეცნიერების აზრით, ტყვიის მომატებული
                                ფონი
                                ნარჩუნდება გზიდან 120 მეტრში.
                            </p>
                            <p> სტრესში ყოველთვის დიდი ქალაქია დამნაშავე?</p>
                            <p>
                                უსახური მშენებლობები სტრესის ერთ-ერთი ფაქტორია. კველვის შედეგების მიხედვით,
                                ერთფეროვნება
                                ადამიანის ფსიქიკაზე უარყოფითად მოქმედებს. სხვა კვლევებმა, რომელიც ფსიქიკაზე
                                არქიტექუტრის
                                გავლენას სწავლობდა აჩვენა, რომ მოწესრიგებული, მაგრამ ბანალური პეიზაჟიც ადამიანს
                                უბედურად
                                აქცევს. ასე, რომ ქალაქური გარემო, საინტერესო დიზაინერული გადაწყვეტილებით, ამ
                                თვალსაზრისით
                                უკეთესია, ვიდრე კოტეჯური დასახლება ერთნაირი სახლების რიგით.
                            </p>
                        </div>
                    </div>

                    <div className="news-detail-bottom-img">
                        <div><img src={newsCardImg6} alt="news-image"/></div>
                        <div><img src={newsCardImg4} alt="news-image"/></div>
                        <div><img src={newsCardImg8} alt="news-image"/></div>
                        <div><img src={newsCardImg9} alt="news-image"/></div>
                        <div><img src={newsCardImg10} alt="news-image"/></div>
                        <div><img src={newsCardImg5} alt="news-image"/></div>
                    </div>

                </div>

                <div className="news-card-detail-right">
                    <div className="other-news-cards"><p>მსგავსი სიახლეები</p>

                        <div className="news-side-card">
                            <div className="news-side-card-image">
                                <img src={newsCardImg2} alt="Card-Image"/>
                            </div>
                            <div className="news-side-card-title">
                                ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან
                            </div>
                            <div className="news-side-card-date">28 ოქტომბერი</div>
                        </div>

                        <div className="news-side-card">
                            <div className="news-side-card-image">
                                <img src={newsCardImg3} alt=""/>
                            </div>
                            <div className="news-side-card-title">
                                ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან
                            </div>
                            <div className="news-side-card-date">28 ოქტომბერი</div>
                        </div>
                        <div className="news-side-card">
                            <div className="news-side-card-image">
                                <img src={newsCardImg4} alt=""/>
                            </div>
                            <div className="news-side-card-title">
                                ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან
                            </div>
                            <div className="news-side-card-date">28 ოქტომბერი</div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}

export default NewsDetail