import React, { useState, useEffect } from 'react';
import ExpertCard from './ExpertCard';
import '../index2.css';
import Nav from '../containers/global/Nav';
import Footer from '../containers/global/Footer'
import ExpertInfo from './ExpertInfo';
import { apiCallAuth } from '../services/api'


class ExpertsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experts: []
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        apiCallAuth('get', '/expertsthree', '')
            .then((experts) => {
                this.setState({ experts })
            }).catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (

            <div className="course">
                <Nav user={this.props.user} logout={this.props.logout} />
                <div className="course_wrap">
                    <div className="course_title">
                        <h1>----- Our Experts -----</h1>
                    </div>
                    <div className="course_card">
                        {this.state.experts.map(expert => {
                            return <div className="expertCard"><ExpertCard expert={expert} /></div>
                        })}
                    </div>



                </div>


                <Footer />
            </div>



        )
    }
}

export default ExpertsPage