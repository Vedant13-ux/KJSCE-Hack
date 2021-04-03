import React, {useState, useEffect} from 'react';
import Nav from '../containers/global/Nav';
import About from '../containers/global/About';
import QnA from './QnA';
import '../index2.css';
import Course from './Course';

function Landing(){
    return (
        <div className="landing">
            <Nav />
            <About />
            <Course />
            <QnA />
        </div>
    )
}

export default Landing;