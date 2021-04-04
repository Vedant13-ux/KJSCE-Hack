import React from "react";
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import { Link } from 'react-router-dom'
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Alert from "@material-ui/lab/Alert";
import { apiCallAuth } from "../../services/api";

class RegisterStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            field: "",
            role: this.props.role,
            error: "",
            success: "",
            disabled: false,
        };
        this.handleChange = (e) => {
            return this.setState({ [e.target.name]: e.target.value });
        };
        this.handleSubmit = (e) => {
            e.preventDefault();
            const {
                name,
                email,
                password,
                field
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
            width: 340,
            margin: "20px auto",
        };

        return (
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant="caption" gutterBottom>
                            Please fill this form to create an account.
                    </Typography>
                    </Grid>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            fullWidth
                            disabled={this.state.disabled}
                            label="Name"
                            name="name"
                            placeholder="Enter your name"
                            onChange={this.handleChange}
                            required
                        />
                        <TextField
                            disabled={this.state.disabled}
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            onChange={this.handleChange}
                            required
                        />



                        <TextField
                            disabled={this.state.disabled}
                            name="password"
                            required
                            fullWidth
                            label="Password"
                            placeholder="Enter your password"
                            onChange={this.handleChange}
                            type="password"
                        />
                        <TextField
                            disabled={this.state.disabled}
                            fullWidth
                            label="Confirm Password"
                            placeholder="Confirm your password"
                            onChange={this.handleChange}
                            name="confirm"
                            type="password"
                        />
                        <br></br>

                        {this.state.role === "advisor" &&
                            <div class="grouped fields">
                                <label>Field</label>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="field" checked="checked" value="Cyberbullying Counsellor" onChange={this.handleChange} required />
                                        <label>Cyberbullying Counsellor</label>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="field" value="Normal Counsellor" onChange={this.handleChange} required />

                                        <label>Normal Counsellor</label>
                                    </div>
                                </div>

                            </div>
                        }
                        <Typography style={{ marginRight: "0", marginTop: "10px" }}>
                            Already have an account? <Link to="/login">Sign In</Link>
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ margin: "10px 0" }}
                        >
                            Sign up
                        </Button>

                    </form>
                    {this.state.error !== "" && (
                        <Alert severity="error">{this.state.error}</Alert>
                    )}
                    {this.state.success && (
                        <Alert severity="success">
                            Please click on the link sent to you on your Email.
                        </Alert>
                    )}
                </Paper>
            </Grid>
        );
    }
}

export default RegisterStudents;
