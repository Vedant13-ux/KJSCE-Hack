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
        this.state = { user: {}, authenticated: false, start: true };
        this.setToken = (token) => {
            localStorage.setItem("jwtToken", token)
        }
        this.login = (user) => {
            if (user.token != null) {
                this.setToken(user.token);
            }
            return this.setState({ user, authenticated: true, start: false });
        }
        this.logout = () => {
            this.setState({ user: {}, authenticated: false, start: false });
            this.props.history.push("/")
            localStorage.clear()
        }
    }
    async componentWillMount() {


        if ((localStorage.jwtToken)) {
            console.log('Token is there')
            var userId = '';
            try {
                userId = await jwtDecode(localStorage.jwtToken)['_id'];
                console.log(userId);
                apiCallAuth('get', '/user/' + userId, '')
                    .then((result) => {
                        this.login(result)
                        console.log(this.state.user);
                    }).catch((err) => {
                        this.setState({ start: false })
                        console.log(err);
                    });

            } catch (err) {
                console.log(err);
                await this.logout();
                this.props.history.push('/');
            }
        } else {
            this.setState({ start: false })
            this.props.history.push('/');
        }

    }

    render() {
        if (this.state.start) {
            return <div></div>
        }
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={props => <Landing {...props} user={this.state.user} logout={this.logout} />} />
                    <Route exact path="/chat/:id" render={props => <Chat key={props.match.params.id} {...props} uid={this.state.user._id} user={this.state.user} logout={this.logout} />} />
                    <Route exact path="/login" render={props => <Login login={this.login} {...props} />} />
                    <Route exact path="/signup" render={props => <Signup  {...props} />} />
                    <Route exact path="/chats" render={props => <Chats key={props.match.params.id} uid={this.state.user._id} {...props} user={this.state.user} logout={this.logout} />} />
                    <Route exact path="/verify-email/:token" render={props => <EmailVerification login={this.login} {...props} user={this.state.user} />} />


                    <Route exact path="/blog" render={props => <Blog {...props} user={this.state.user} logout={this.logout} />} />
                    <Route exact path="/experts" render={props => <ExpertsPage {...props} user={this.state.user} logout={this.logout} />} />
                    <Route exact path="/course" render={props => <Course {...props} user={this.state.user} logout={this.logout} />} />
                    <Route exact path="/newappointment" render={props => <Questions {...props} user={this.state.user} logout={this.logout} />} />
                    <Route exact path="/blogcontent/:id" render={props => <BlogContent {...props} user={this.state.user} logout={this.logout} />} />
                    <Route exact path="/newappointment" render={props => <Questions {...props} user={this.state.user} logout={this.logout} />} />
                    <Route exact path="*" render={props => <div>Not Found</div>} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);
