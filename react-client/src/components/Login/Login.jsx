import React from 'react';
import Axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  logIn() {
    const { username, password } = this.state;
    console.log(username, password, 'login');
    // axios.post('/api/login', {
    //   username: username,
    //   password: password
    // })
    //   .then((response) => {

    //   });
  }

  signUp() {
    const { username, password } = this.state;
    console.log(username, password, 'signup');
    // axios.post('/api/signUp', {
    //   username: username,
    //   password: password
    // })
    //   .then((response) => {

    //   });
  }

  render() {
    const { logIn, signUp } = this.props;
    return (
      <div>
        <input type="text" placeholder="Username..." onChange={(event) => { this.setState({ username: event.target.value }); }} />
        <input type="text" placeholder="Password..." onChange={(event) => { this.setState({ password: event.target.value }); }} />
        <button type="button" onClick={this.logIn}>Log-in</button>
        <button type="button" onClick={this.signUp}>Sign-up</button>
      </div>
    );
  }
}

export default Login;
