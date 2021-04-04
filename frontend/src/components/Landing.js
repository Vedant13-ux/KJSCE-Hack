import React, { useState, useEffect } from 'react';
import Nav from '../containers/global/Nav';
import About from '../containers/global/About';
import QnA from './QnA';
import '../index2.css';
import Footer from '../containers/global/Footer';
import BlogCard from './BlogCard';
import Experts from './Experts'


function Landing(props) {
    return (
        <div className="landing">
            <Nav user={props.user} history={props.history} />
            <About />
            <Experts />
            <Footer />
        </div>
    )
}

export default Landing;