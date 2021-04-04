import React from 'react';
import '../../index2.css';
import Logo from '../../images/helping_mind_logo1.png';
import { Link } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";



class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }
    }

    render() {
        return (
            <div className="navbar">

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
                        <li><Link to="/faq">FAQ</Link></li>
                        {Object.keys(this.state.user).length === 0 &&
                            <li><Link to="/login">Login</Link></li>
                        }
                        {Object.keys(this.state.user).length !== 0 &&
                            <li style={{ display: 'inline-flex', alignItems: 'center', paddingBottom: '10px' }}>
                                <Avatar
                                    style={{ marginRight: '5px' }}
                                    aria-label="recipe"
                                >
                                    {this.props.user.name.slice(0, 1)}
                                </Avatar>
                                <div>{this.state.user.name}</div>
                            </li>
                        }
                        {Object.keys(this.state.user).length !== 0 &&
                            <li >
                                Logout
                            </li>

                        }
                    </ul>
                </nav>

            </div>
        )
    }
}

export default Nav;