import React, {useState, useEffect} from 'react';
import Nav from '../containers/global/Nav';
import About from '../containers/global/About';

function Landing(){
    return (
        <div>
            <Nav />
            <About />
        </div>
    )
}

export default Landing;