import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Chat from './Chat/Test'

import '../index2.css'
import Landing from '../components/Landing'

class Main extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={props => <Landing {...props} />} />
                    <Route path="/chat/:id" render={props => <Chat key={props.match.params.id} {...props} uid="60685381b839e9392b6cef67" />} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);
