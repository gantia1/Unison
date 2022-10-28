import React from 'react';
import Index from "../header";
import Footer from "../footer/Footer";
import {Outlet} from "react-router-dom";
import {createMedia} from "@artsy/fresnel";
import MobileHeader from "../mobile/MobileHeader";
import MobileFooter from "../mobile/MobileFooter";
import Menu from "../menu/Menu";

function Layout() {

    const {MediaContextProvider, Media} = createMedia({
        breakpoints: {
            sm: 0,
            lg: 1025,
        },
    })
    return (

        <MediaContextProvider>
            <Media at='lg'>
                <Index/>
                <Menu/>
                <Outlet/>
                <Footer/>
            </Media>
            <Media at='sm'>
                <MobileHeader/>
                <Outlet/>
                <MobileFooter/>
            </Media>
        </MediaContextProvider>
    );
}

export default Layout;