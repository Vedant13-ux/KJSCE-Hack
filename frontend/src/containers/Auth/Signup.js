import React from "react";
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
    Link,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Alert from "@material-ui/lab/Alert";
import { apiCallAuth } from "../../services/api";

class RegisterStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
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
                phoneNumber,
                password,
                year,
                role,
                dept,
            } = this.state;
            const data = { name, email, phoneNumber, password, year, role, dept };
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
                        {this.props.role === "Student" && (
                            <TextField
                                fullWidth
                                disabled={this.state.disabled}
                                label="Phone Number"
                                name="phoneNumber"
                                placeholder="Enter your phone number"
                                onChange={this.handleChange}
                                required
                            />
                        )}


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
                        <Typography style={{ marginRight: "0", marginTop:"10px" }}>
                            Already have an account? <Link href="/login">Sign In</Link>
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ margin: "10px 0", left: "50%", transform: "translateX(-50%)" }}
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
