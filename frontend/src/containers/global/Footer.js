import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../images/helping_mind_logo1.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                   <div className="row">
                        <div class="footer-col1">
                            <h3>Useful Links:</h3>
                            <ul>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/course">Courses</Link></li>
                            </ul>
                        </div>
                       <div className="footer-col2">
                           <img src={Logo}/>
                                <p>What mental health needs is more sunlight,
                                     more candor, and more unashamed conversation.</p> 
                       </div>
                        <div class="footer-col3">
                            <h3>Follow Us:</h3>
                            <ul>
                                <li>Github</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                   </div>

                   <hr />   
                   <p className="copyright">Copyright 2021 - HackStreet Boys</p>                
            </div>
        </div>
    )
}

export default Footer
