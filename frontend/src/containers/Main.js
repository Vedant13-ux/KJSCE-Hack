import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Chat from './Chat/Test'
import Login from './Auth/Login'
import Signup from '../containers/Auth/Signup'
import EmailVerification from '../containers/Auth/EmailVerification'

import '../index2.css'
import Landing from '../components/Landing'
import Blog from '../components/Blog'
import Course from '../components/Course'

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state={uid:"60685381b839e9392b6cef67"}
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={props => <Landing {...props} />} />
                    <Route exact path="/chat/:id" render={props => <Chat key={props.match.params.id} {...props} uid={this.state.uid} />} />

                    <Route exact path="/test" render={props => <Chat {...props} />} />
                    <Route exact path="/login" render={props => <Login {...props} />} />
                    <Route exact path="/signup" render={props => <Signup {...props} />} />
                    <Route exact path="/chat:id" render={props => <Chat key={props.match.params.id} {...props} />} />
                    <Route exact path="/verify-email/:token" render={props => <EmailVerification {...props} />} />
                    <Route exact path="/blog" render={props => <Blog {...props} />} />
                    <Route exact path="/closure" render={props => <Course {...props} />} />
                    <Route exact path="*" render={props => <div>Not Found</div>} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);
