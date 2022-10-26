import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import HomePage from "./components/home/HomePage";
import AboutUs from "./components/pages/AboutUs";


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
                        element=
                            {<AboutUs/>}
                    />


                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
