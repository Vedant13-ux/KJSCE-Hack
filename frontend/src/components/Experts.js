import React, {useState, useEffect} from 'react';
import Nav from '../containers/global/Nav';
import About from '../containers/global/About';
import QnA from './QnA';
import '../index2.css';
import Footer from '../containers/global/Footer';
import ExpertCard from './ExpertCard'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom'

function Experts() {
    return (
        <div className="expertsSec">
            <h1 className="experts">----- Meet our experts -----</h1>
            <div className="expertDemo">
                <div className="expertCard"><ExpertCard /></div> 
                <div className="expertCard"><ExpertCard /></div>
                <div className="expertCard"><ExpertCard /></div>
            </div>
            <div className="meetExperts">
                <Link to="/experts"><Button className="btn_specific"
                            variant="outlined"
                            color="primary">
                                Meet our experts
                            </Button></Link>
            </div>
        </div>
    )
}

export default Experts