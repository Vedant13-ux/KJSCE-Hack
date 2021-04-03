import React from 'react';
import '../../index2.css';
import Logo from '../../images/helping_mind_logo1.png';
import { Link } from 'react-router-dom';

function Nav(){

    // const [show , handleShow] = useState(false);


    return(
        <div className={"navbar"}>
            <img
                className="logo"
                src={Logo}
                alt="Helping Mind logo"    
            />
            <nav className="navlink">
                <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/course">Course</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default Nav;