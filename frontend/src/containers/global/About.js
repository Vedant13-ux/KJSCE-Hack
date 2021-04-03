import React from 'react';
import Tree from '../../images/undraw_working_remotely_jh40.svg';
import '../../index2.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


export default function About() {
    return (
        <div className="about">
            <div className="container">
                <h1 className="intro">Get help. Get better.</h1>
                <div className="self">
                    <p>
                    No matter what's troubling you,
                     get the support you need, right here, right now.
                    </p>
                    <p>
                    Seeking Help is a Sign of  <del>Weakness</del>  STRENGTH.
                    </p>
                    <div className="btn">
                        <Button className="btn_specific"
                        variant="outlined"
                        color="primary">
                            Chat Now!
                        </Button>
                        <Button className="btn_specific"
                         variant="outlined"
                          color="primary">
                            Book Appointment
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container">
                <img
                 className="container_image"
                 src={Tree}
                 alt="Tree"
                ></img>
            </div>
        </div>
    )
}
