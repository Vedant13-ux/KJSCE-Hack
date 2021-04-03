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
import Chats from './Chat/chats'

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state={uid:"60685381b839e9392b6cef67"}
        this.setUser=(r)=>{
            console.log(r)
            this.setState({uid:r._id})
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={props => <Landing {...props} />} />
                    <Route exact path="/chat/:id" render={props => <Chat key={props.match.params.id} {...props} uid={this.state.uid} />} />
                    <Route exact path="/login" render={props => <Login setUser={this.setUser} {...props} />} />
                    <Route exact path="/signup" render={props => <Signup  {...props} />} />
                    <Route exact path="/chats" render={props => <Chats key={props.match.params.id} uid={this.state.uid} {...props} />} />
                    <Route exact path="/verify-email/:token" render={props => <EmailVerification setUser={this.setUser} {...props} />} />
                    
                    
                    <Route exact path="/blog" render={props => <Blog {...props} />} />
                    <Route exact path="/course" render={props => <Course {...props} />} />
                    <Route exact path="*" render={props => <div>Not Found</div>} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);
