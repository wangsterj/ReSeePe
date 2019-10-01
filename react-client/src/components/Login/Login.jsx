import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginError: false,
      signUpError: false,
    };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  logIn() {
    const { username, password } = this.state;
    const { loginHandler } = this.props;
    axios.post('/api/login', {
      username,
      password,
    })
      .then((response) => {
        const { isValid, id } = response.data;
        // if a valid login, either redirect or rerender page
        if (isValid) {
          loginHandler(id);
        } else {
          this.setState({ loginError: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  signUp() {
    const { username, password } = this.state;
    // console.log(username, password, 'signup');
    axios.post('/api/signup', {
      username,
      password,
    })
      .then((response) => {
      // if a valid login, either redirect or rerender page
        if (response.data) {
          this.state.signUpError = false;
        } else {
          this.setState({ signUpError: true }, () => this.state.signUpError = false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { logIn, signUp, loggedIn } = this.props;
    const { loginError, signUpError } = this.state;

    // if logged in, don't render!
    if (loggedIn) {
      // return (
      //   <text>Signed in</text>
      // );
      return null;
    }
    return (
      <div>
        Username:
        {' '}
        <input type="text" placeholder="Username..." onChange={(event) => { this.setState({ username: event.target.value }); }} />
        <br />
        Password:
        {' '}
        <input type="password" placeholder="Password..." onChange={(event) => { this.setState({ password: event.target.value }); }} />
        <br />
        <Error>{signUpError ? 'Username already exists!' : (loginError ? 'Not a valid username/password combination!' : '')}</Error>
        <br />
        <Button type="button" onClick={this.logIn}>Log-in</Button>
        <Button type="button" onClick={this.signUp}>Sign-up</Button>
      </div>
    );
  }
}
const Error = styled.text`
  color: red;
  font-size: .85em;
`;
const Button = styled.button`
  margin: 3px;
`;

export default Login;
