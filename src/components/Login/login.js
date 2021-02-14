import React, { Component } from 'react';
import './loginStyle.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import loginAction from '../../actions/loginActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
      errorMessage: false,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.authUser(this.state.email, this.state.password);

    setTimeout(() => {
      if (this.props.login.isLoggedIn) {
        this.props.history.push('/dashboard');
      } else {
        this.resetForm();
        this.setState({
          errors: 'invalid email and password',
        });
      }
    });
  };
  resetForm = () => {
    this.setState({
      email: '',
      password: '',
      errors: '',
    });
  };
  keyPress = (e) => {
    if (e.keyCode === 13) {
      this.props.authUser(this.state.email, this.state.password);
    }
  };

  render() {
    const { errors, email, password } = this.state;

    return (
      <div className="card">
        <div id="signinform">
          <form
            className="formWidth"
            onSubmit={this.onSubmit}
            onKeyUp={(e) => this.keyPress(e)}
            style={{ margin: '-65px auto' }}>
            <h4 id="signIntext">
              Sign in to <span id="titleColor1">Employee Dashboard</span>
            </h4>
            <p>Enter your details below.</p>
            <div className="form-group">
              <label className="form-label" for="email">
                EMAIL
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="loginInputEmail1"
                aria-describedby="emailHelp"
                placeholder="E-mail"
                required=""
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" for="password">
                PASSWORD
              </label>

              <input
                name="password"
                type="password"
                className="form-control"
                id="loginPassword"
                placeholder="Password"
                required=""
                value={password}
                onChange={this.onChange}
              />
            </div>
            {this.state.errors && (
              <div class="alert alert-danger" role="alert">
                {errors}
              </div>
            )}
            <div id="btndiv2">
              <button
                type="submit"
                className="btn btn-primary btn-square shadow-sm btnsignin"
                disabled={this.state.email.length === 0 || this.state.password.length === 0}>
                Sign in
              </button>
              <button
                className="btn btn-primary btn-square shadow-sm reset"
                disabled={
                  this.state.email.length === 0 &&
                  this.state.password.length === 0 &&
                  this.state.errors.length === 0
                }
                onClick={this.resetForm}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducers,
});

const mapActionsToProps = {
  authUser: loginAction.authUser,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Login));
