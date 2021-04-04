import React, { useEffect } from 'react';
import SimpleAccordion from './SimpleAccordian';
import '../index2.css';
import Nav from '../containers/global/Nav';
import Footer from '../containers/global/Footer';

function QnA(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="faq_container">
            <Nav user={props.user} logout={props.logout} />
            <div id="faq" className="qna">
                <h1 className="qna_title">Frequently Asked Questions:-  </h1>
                <SimpleAccordion />
            </div>
            <Footer />
        </div>
    )
}

export default QnA
