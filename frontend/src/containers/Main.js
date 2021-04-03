import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Chat from './Chat/Test'
import Login from './Auth/Login'

import '../index2.css' 
import Landing from '../components/Landing'

class Main extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={props => <Landing {...props} />} />
                    <Route exact path="/test" render={props => <Chat {...props} />} />
                    <Route exact path="/login" render={props => <Login {...props} />} />


                    <Route exact path="*" render={props => <div>Not Found</div>} />


                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);
