import React, { useState, useEffect } from 'react';
import ExpertCard from './ExpertCard';
import '../index2.css';
import Nav from '../containers/global/Nav';
import Footer from '../containers/global/Footer'
import ExpertInfo from './ExpertInfo';
function ExpertsPage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="course">
            <Nav user={props.user} history={props.history} />
            <div className="course_wrap">
                <div className="course_title">
                    <h1>----- Our Experts -----</h1>
                </div>

                <div className="course_card">
                    <div className="expertCard"><ExpertCard /></div>
                    <div className="expertCard"><ExpertCard /></div>
                    <div className="expertCard"><ExpertCard /></div>
                    <div className="expertCard"><ExpertCard /></div>
                    <div className="expertCard"><ExpertCard /></div>
                    <div className="expertCard"><ExpertCard /></div>
                </div>

            </div>


            <Footer />
        </div>



    )
}

export default ExpertsPage