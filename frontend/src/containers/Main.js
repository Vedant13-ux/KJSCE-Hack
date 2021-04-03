import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';


class Main extends React.Component {

    render() {


        return (
            <div>
                <Switch>
                    {/* <Route exact path="/" render={props => <Landing {...props} />} /> */}
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);
