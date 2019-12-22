/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import './Login.scss';

function Login({ login }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'username' ? setUsername(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      login(username, password);
    }
  };

  return (
    <div className="signin-form">
      <form name="login-form" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <div className="form-group">
          <input
            onChange={handleChange}
            type="text"
            value={username}
            className={`form-control input-lg${
              submitted && !username ? ' is-invalid' : ''
            }`}
            name="username"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            type="password"
            value={password}
            className={`form-control input-lg${
              submitted && !password ? ' is-invalid' : ''
            }`}
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-success btn-lg btn-block signup-btn"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

function mapState() {
  return {};
}

const actionCreators = {
  login: userActions.login
};

export default connect(mapState, actionCreators)(Login);
