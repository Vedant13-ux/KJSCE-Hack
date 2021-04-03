import React, { Component } from 'react'
import { apiCallAuth } from '../../services/api'


class Emailverification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVerified: false,
            emailToken: this.props.match.params.token,
            status: 'Your Email is Being Verified ...'
        }
    }
    componentWillMount() {
        console.log(this.state.emailToken)
        apiCallAuth('get', '/verify-email/' + this.props.match.params.token, "")
            .then(async () => {
                await this.setState({
                    status: 'Email Verification Completed. Redirecting to KJSCE Connect.'
                });
                this.props.history.push('/newuser')

            })
            .catch(async err => {
                await this.setState({ status: 'Email Verification Failed. Reload the page or try to Signup again.' || err.message });
            })
    }
    render() {
        const content = this.state.status;
        return (
            <div className="emailVerification container" style={{ textAlign: "center" }} >
                <h1>{content}</h1>
            </div >
        )

    }
}
export default Emailverification;

