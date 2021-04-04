import Nav from '../containers/global/Nav';
import About from '../containers/global/About';
import '../index2.css';
import Footer from '../containers/global/Footer';
import Experts from './Experts'


function Landing(props) {
    return (
        <div className="landing">
            <Nav user={props.user} logout={props.logout} />
            <About />
            <Experts />
            <Footer />
        </div>
    )
}

export default Landing;