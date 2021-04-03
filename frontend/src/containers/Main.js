import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Chat from './Chat/test'
import '../index2.css'

class Main extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    {/* <Route exact path="/" render={props => <Landing {...props} />} /> */}
                    <Route exact path="/test" render={props => <Chat {...props} />} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);
