import React, { useState, useEffect } from 'react';
import Nav from '../containers/global/Nav';
import About from '../containers/global/About';
import '../index2.css';
import Footer from '../containers/global/Footer';
import Experts from './Experts'


function Landing(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className="landing">
            <Nav user={props.user} logout={props.logout} />
            <About />
            {/* <Experts /> */}
            <Footer />
        </div>
    )
}

export default Landing;