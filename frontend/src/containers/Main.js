import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Chat from './Chat/Test'
import Login from './Auth/Login'
import Signup from '../containers/Auth/SignupMain'
import EmailVerification from '../containers/Auth/EmailVerification'

import '../index2.css'
import Landing from '../components/Landing'
import Blog from '../components/Blog'
import Course from '../components/Course'
import Questions from './Auth/newAppointment'
import Chats from './Chat/chats'
import ExpertsPage from '../components/ExpertsPage'
import BlogContent from '../components/BlogContent'
import jwtDecode from 'jwt-decode'
import { apiCallAuth } from '../services/api'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: {} };
        this.setToken = (token) => {
            localStorage.setItem("jwtToken", token)
        }
        this.login = (user) => {
            if (user.token != null) {
                this.setToken(user.token);
            }
            return this.setState({ user });
        }
        this.logout = () => {
            this.setState({ user: {} });
            this.props.history.push("/")
            localStorage.clear()
        }
    }
    async componentWillMount() {

        if (Object.keys(this.state.user).length === 0) {
            this.props.history.push("/");
        }
        if ((localStorage.jwtToken)) {
            console.log('Token is there')
            var userId = '';
            try {
                userId = await jwtDecode(localStorage.jwtToken)['_id'];
                console.log(userId);
                apiCallAuth('get', '/user/' + userId, '')
                    .then((result) => {
                        this.login(result)
                    }).catch((err) => {
                        console.log(err);
                    });

            } catch (err) {
                console.log(err);
                await this.logout();
                this.props.history.push('/');
            }
        } else {
            this.props.history.push('/');
        }
        console.log(this.state.user);
    }

    render() {
        if (Object.keys(this.state.user).length === 0) {
            return <div></div>
        }
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={props => <Landing {...props} />} />
                    <Route exact path="/chat/:id" render={props => <Chat key={props.match.params.id} {...props} uid={this.state.user._id} />} />
                    <Route exact path="/login" render={props => <Login login={this.login} {...props} />} />
                    <Route exact path="/signup" render={props => <Signup  {...props} />} />
                    <Route exact path="/chats" render={props => <Chats key={props.match.params.id} uid={this.state.user._id} {...props} />} />
                    <Route exact path="/verify-email/:token" render={props => <EmailVerification login={this.login} {...props} />} />


                    <Route exact path="/blog" render={props => <Blog {...props} />} />
                    <Route exact path="/experts" render={props => <ExpertsPage {...props} />} />
                    <Route exact path="/course" render={props => <Course {...props} />} />
                    <Route exact path="/newuser" render={props => <Questions {...props} />} />
                    <Route exact path="/blogcontent" render={props => <BlogContent {...props} />} />
                    <Route exact path="/newappointment" render={props => <Questions {...props} user={this.state.user} />} />
                    <Route exact path="*" render={props => <div>Not Found</div>} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);
