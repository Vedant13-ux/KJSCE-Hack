import React, {useState , useEffect} from 'react';
import '../../index2.css';
import Logo from '../../images/helping_mind_logo1.png';

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
                    <li><a href="/">Discussions</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Login/SignUp</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Nav;