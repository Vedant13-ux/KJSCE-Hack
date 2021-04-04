import React from "react";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

import {
    Grid,
    Paper,
    Avatar,
    Typography,
    Button

} from "@material-ui/core";
import { apiCall } from "../../services/api";

class RegisterStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: "",
            experience: "",
            reachout: "",
            error: ""
        };
        this.handleChange = (e) => {
            return this.setState({ [e.target.name]: e.target.value });
        };
        this.handleSubmit = (e) => {
            e.preventDefault();
            var {
                place,
                experience,
                reachout
            } = this.state;
            const data = { place,counsellor:new URLSearchParams(this.props.location.search).get("cid"), experience, reachout, userId: this.props.user._id, }; 
            apiCall("post", "/appointment/newAppointment", data)
                .then(async (response) => {
                    console.log(response);
                    if (response) this.props.history.push("/chats")
                    return await this.setState({ error: '' });
                })
                .catch((err) => {
                    console.log(err);
                    //return this.setState({ error: err.response.data.error.message });
                });
        };
    }

    render() {
        const headerStyle = { margin: 0 };
        const avatarStyle = { backgroundColor: "#1bbd7e" };
        const paperStyle = {
            padding: "30px 20px",
            width: 500,
            margin: "20px auto",
        };

        return (
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <QueryBuilderIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Appointment</h2>
                        <Typography variant="caption" gutterBottom>
                            Please fill this form in order to make an Appointment.
                        </Typography>
                    </Grid>
                    <form onSubmit={this.handleSubmit} className="ui form" id="questionBlock">
                        <div className="field">
                            <label>At which premise, did you face Bullying?</label>
                            <select onChange={this.handleChange} required name="place">
                                <option value="">Place</option>
                                <option value="At School">At School</option>
                                <option value="At College">At College</option>
                                <option value="At Home">At Home</option>
                                <option value="On Internet">On Internet</option>
                                <option value="At Workplace">At Workplace</option>
                                <option value="Somewhere Else">Somewhere Else</option>


                            </select>
                        </div>
                        <div className="field" >
                            <label>Tell us about yout experience</label>
                            <textarea name="experience" onChange={this.handleChange} required />
                        </div>
                        <div className="field" >
                            <label>How did you reach out to us?</label>
                            <textarea name="reachout" onChange={this.handleChange} required />
                        </div>

                        <Button

                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ margin: "10px 0", left: "50%", transform: "translateX(-50%)" }}
                        >
                            Book
                        </Button>

                    </form>

                </Paper>
            </Grid>
        );
    }
}

export default RegisterStudents;
