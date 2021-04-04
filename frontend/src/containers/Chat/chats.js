import React from "react";
import Navbar from "../global/Nav";
import { apiCall } from "../../services/api";
import { Link } from 'react-router-dom'

export default class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
  }
  componentDidMount() {
    apiCall("get", "/appointment/getall/" + this.props.uid).then((v) => {
      console.log(v);
      this.setState({ appointments: v });
    });
  }
  render() {
    return (
      <div id="chat">
        <Navbar user={this.props.user} logout={this.props.logout}></Navbar>
        <div className="app" id="experience">
          {this.state.appointments.map((e, i) => {
            return (
              <Link to={"/chat/" + e._id} style={{ textDecoration: 'none' }}>
                <div className="experience-ele project-ele">
                  <h4 style={{ margin: "0px", padding: "0px" }}>
                    {"Appointment at " + e.time}
                  </h4>
                  <p style={{ margin: "0px", padding: "0px" }}>
                    {new Date(e.date).toDateString()}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
