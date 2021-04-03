import React from "react";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
    Link,
} from "@material-ui/core";
import { apiCallAuth } from "../../services/api";

class RegisterStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            error: ""
        };
        this.handleChange = (e) => {
            return this.setState({ [e.target.name]: e.target.value });
        };
        this.handleSubmit = (e) => {
            e.preventDefault();
            const {
                name,
                email,
                password
            } = this.state;
            const data = { name, email, password };
            apiCallAuth("post", "/signup", data)
                .then(async (response) => {
                    console.log(response);
                    return await this.setState({ success: true, disabled: true, error: '' });
                })
                .catch((err) => {
                    console.log(err);
                    return this.setState({ error: err.response.data.error.message });
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
                            <label>First Name</label>
                            <input type="text" name="first-name" placeholder="First Name" />
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input type="text" name="last-name" placeholder="Last Name" />
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input type="checkbox" tabindex="0" className="hidden" />
                                <label>I agree to the Terms and Conditions</label>
                            </div>
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
