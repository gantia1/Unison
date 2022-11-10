import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import HomePage from "./components/home/HomePage";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Contact from "./components/pages/contactUs/Contact";
import News from "./components/pages/news/News";
import NewsDetail from "./components/pages/news/NewsDetail";
import Partners from "./components/pages/partners/Partners";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path='' element={
                        <HomePage/>
                    }/>
                    <Route
                        path='/about-us'
                        element={<AboutUs/>}
                    />

                    <Route path='/contact'
                           element={<Contact/>}
                    />

                    <Route path='/news'
                           element={<News/>}
                    />
                    <Route path='/news/:dateId'
                           element={<NewsDetail/>}
                    />
                    <Route path='/partners'
                           element={<Partners/>}
                    />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
