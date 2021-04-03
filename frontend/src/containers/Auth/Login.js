import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Alert from "@material-ui/lab/Alert";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }
    this.handleChange = (e) => {
      return this.setState({ [e.target.name]: e.target.value });
    };
    this.handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)
      const { email, password } = this.state
      const data = { email, password }
      console.log(data)
      this.props.loginUser(data)
        .then((result) => {
          console.log('Logged In')
          return this.props.history.push('/home');
        }).catch((err) => {
          return this.setState({ error: err.response.data.error.message });
        })
    }
  }
  render() {
    const paperStyle = {
      padding: 20,
      height: "65vh",
      width: 340,

      margin: "20px auto",
    };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const btnstyle = { margin: "35px 0" };
    const textFieldStyle = { margin: "15px 0" };
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Email"
              placeholder="Enter Email"
              style={textFieldStyle}
              fullWidth
              required
              name="email"
              onChange={this.handleChange}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              name="password"
              onChange={this.handleChange}

            />
            <Typography>
              Don't have an account? <Link href="/register">Sign Up</Link>
            </Typography>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Sign in
        </Button>
          </form>
          {/* <Typography style={assistStyle}>
          <Link href="#">Forgot password ?</Link>
        </Typography> */}

          {this.state.error !== "" && (
            <Alert severity="error">{this.state.error}</Alert>
          )}
        </Paper>
      </Grid>

    );
  }
};

export default Login;
