import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';

import Div from './Div';

import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      userLogged: false,
      adminLogged: false,
      error: false,
      errorMessage: '',
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignIn(e) {
    const {
      email,
      password,
    } = this.state;

    fetch('/api/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.error) {
          this.setState({ error: true, errorMessage: data.error });
        } else if (data.user === 'admin@admin.com') {
          this.setState({ adminLogged: true });
        } else {
          this.setState({ userLogged: true });
        }
      })
      .catch(err => console.log(err));

    e.preventDefault();
  }

  onSignUp(e) {
    const {
      email,
      password,
    } = this.state;

    fetch('/api/signup', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.error) {
          this.setState({ error: true, errorMessage: data.error });
        } else {
          this.setState({ userLogged: true });
        }
      })
      .catch(err => console.log(err));

    e.preventDefault();
  }


  handleEvent(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      userLogged,
      adminLogged,
      error,
      errorMessage,
      email,
    } = this.state;

    let redirectUser = null;

    if (error) {
      redirectUser = <Chip color="secondary" label={errorMessage} style={styles.chip} />;
    }

    if (adminLogged) {
      redirectUser = (
        <Redirect
          to={{
            pathname: '/employer',
            state: { email },
          }}
        />
      );
    }

    if (userLogged) {
      redirectUser = (
        <Redirect
          to={{
            pathname: '/employee',
            state: { email },
          }}
        />
      );
    }

    return (
      <Div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="display3" gutterBottom style={styles.title}>
              FMBM Job Listing Board
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={24}
          >
            <Grid item>
              <Card style={styles.card}>
                <form onSubmit={this.onSignUp}>
                  <TextField
                    label="Email"
                    type="email"
                    required
                    onChange={this.handleEvent}
                    name="email"
                  />
                  <TextField
                    label="Password"
                    type="password"
                    required
                    onChange={this.handleEvent}
                    name="password"
                  />
                  <Button type="submit" variant="contained" color="secondary" style={styles.button}>Sign Up</Button>
                </form>
              </Card>
            </Grid>
            <Grid item>
              <Card style={styles.card}>
                <form onSubmit={this.onSignIn}>
                  <TextField
                    label="Email"
                    type="email"
                    required
                    onChange={this.handleEvent}
                    name="email"
                  />
                  <TextField
                    label="Password"
                    type="password"
                    required
                    onChange={this.handleEvent}
                    name="password"
                  />
                  <Button type="submit" variant="outlined" color="secondary" style={styles.button}>Sign In</Button>
                </form>
              </Card>
            </Grid>
          </Grid>
          {redirectUser}
        </Grid>
      </Div>
    );
  }
}

export default Login;
