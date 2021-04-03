import React from 'react';
import ExpertCard from './ExpertCard';
import '../index2.css';
import Nav from '../containers/global/Nav';
import Footer from '../containers/global/Footer'
import ExpertInfo from './ExpertInfo';

function ExpertsPage() {
    return (
        <div>
            <Nav />
            <div className="course_card">
                <div className="expertCard"><ExpertCard /></div> 
                <div className="expertCard"><ExpertCard /></div>
                <div className="expertCard"><ExpertCard /></div>
                <div className="expertCard"><ExpertCard /></div>
                <div className="expertCard"><ExpertCard /></div>
                <div className="expertCard"><ExpertCard /></div>
            </div>
            <Footer />
        </div>
    )
}

export default ExpertsPage