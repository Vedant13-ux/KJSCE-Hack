import React, {useState , useEffect} from 'react';
import '../../index2.css';
import Logo from '../../images/helping_mind_logo1.png';

function Nav(){

    const [show , handleShow] = useState(false);

    useEffect(()=>{
            window.addEventListener("scroll", ()=>{
                    if(window.scrollY > 100){
                        handleShow(true);
                    }else handleShow(false);
                }

            );
            return ()=>{
                window.removeEventListener("scroll");   
            }
        }, []);

    return(
        <div className={`navbar ${show && "nav__black"}`}>
            <img
                className="logo"
                src={Logo}
                alt="Helping Mind logo"    
            />
            <nav className="navlink">
                <ul className="links">
                    <li>Discussions</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Login/SignUp</li>
                </ul>
            </nav>

        </div>
    )
}

export default Nav;