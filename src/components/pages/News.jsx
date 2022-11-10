import React, {useEffect, useState} from 'react';
import "./news.scss";
import {ReactComponent as Newspaper} from "../../img/newspaper.svg";
import {ReactComponent as Feedback} from "../../img/feedback.svg";
import {ReactComponent as Campaign} from "../../img/campaign.svg";
import {ReactComponent as Calendar} from "../../img/calendar.svg";
import newsCardImg1 from "../../img/home1.png";
import newsCardImg2 from "../../img/food.png";
import newsCardImg3 from "../../img/car1.png";
import newsCardImg4 from "../../img/newsCardImg4.png";
import newsCardImg5 from "../../img/newsCardImg5.png";
import newsCardImg6 from "../../img/newsCardImg6.png";
import newsCardImg7 from "../../img/newsCardImg7.png";
import newsCardImg8 from "../../img/newsCardImg8.png";
import newsCardImg9 from "../../img/newsCardImg9.png";
import newsCardImg10 from "../../img/newsCardImg10.png";
import {ReactComponent as PageArrowLeft} from "../../img/pageArrowLeft.svg";
import {ReactComponent as PageArrowRight} from "../../img/pageArrowRight.svg";
import {ReactComponent as Search} from "../../img/search.svg";
import {Link} from "react-router-dom";
import axios from "axios";

function News() {
    const NewsData = [
        {
            id: 1,
            img: newsCardImg1,
            title: "ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი",
            date: "28 ოქტომბერი",
        },
        {
            id: 2,
            img: newsCardImg2,
            title: "ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან",
            date: "28 ოქტომბერი",
        },
        {
            id: 3,
            img: newsCardImg3,
            title: "ავტომობილის სალონის მოვლის თანამედროვე ხერხები",
            date: "14 ოქტომბერი",
        },
        {
            id: 4,
            img: newsCardImg4,
            title: "ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან",
            date: "28 ოქტომბერი",
        },
        {
            id: 5,
            img: newsCardImg5,
            title: "ავტომობილის სალონის მოვლის თანამედროვე ხერხები",
            date: "14 ოქტომბერი",
        },
        {
            id: 6,
            img: newsCardImg6,
            title: "ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან",
            date: "9 ნოემბერი",
        },
        {
            id: 7,
            img: newsCardImg7,
            title: "ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან",
            date: "19 ივნისი",
        },
        {
            id: 8,
            img: newsCardImg8,
            title: "ავტომობილის სალონის მოვლის თანამედროვე ხერხები",
            date: "20 მაისი",
        },
        {
            id: 9,
            img: newsCardImg9,
            title: "ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან",
            date: "17 აგვისტო",
        },
        {
            id: 10,
            img: newsCardImg10,
            title: "ავტომობილის სალონის მოვლის თანამედროვე ხერხები",
            date: "23 სექტემბერი",
        },

    ];

    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(9);

    useEffect(() => {
        const fetchNews = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
            setNews(res.data);
        };
        fetchNews();
    }, []);

    const nPages = Math.ceil(news.length / newsPerPage)
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

    const nextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    }
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    }
    return (
        <>
            <div className="news-menu"></div>
            <div className="news-header-mobile">
                <div className="news-gradient-top"></div>
                <div className="news-gradient-bottom"></div>
            </div>
            <div className="news-header">

                <div className="news-tabs-search">
                    <div className="news-tabs">
                        <div className="news-tab active"><Newspaper/><span>სიახლეები</span></div>
                        <div className="news-tab"><Feedback/><span>ბლოგი</span></div>
                        <div className="news-tab"><Campaign/><span>აქცია</span></div>
                    </div>
                    <div className="news-search">
                        <div className="news-search-item">
                            <div className="news-form-group">
                                <input className="news-form-control" type="text"
                                       id="search"
                                       placeholder="ჩაწერეთ საძიებო სიტყვა" name="search"
                                /><Search className="news-form-search-icon"/><span
                                className="news-mobile-text">ძიება</span>
                            </div>
                        </div>
                        <div className="news-search-item">
                            <Calendar/><span className="news-mobile-text">დროის პერიოდი</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="news-page-cards news-cards">


                {currentNews.map((data) => (
                    <div className="news-page-card">
                        <Link to={`/news/${data.id}`}>
                            <div className="news-page-card-image">
                                <img src={data.url} alt="CardImage"/>
                            </div>
                            <div className="news-page-card-title"><span>{data.title}</span>
                            </div>
                            <div className="news-page-card-date"><span>{data.title}</span></div>
                        </Link>
                    </div>
                ))}

            </div>

            <div className="d-flex flex-row justify-content-center my-5">
                <ul className="pagination news-pagination">
                    <li className="news-pagination-left">
                        <PageArrowLeft onClick={prevPage}/>

                    </li>
                    გვერდი {currentPage} ({nPages})
                    <li className="news-pagination-right">
                        <PageArrowRight onClick={nextPage}/>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default News;