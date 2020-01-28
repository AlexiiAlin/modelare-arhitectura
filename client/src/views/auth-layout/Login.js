import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "_helpers";
import { userActions, alertActions } from "_actions";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    // reset login status
    this.props.logout();
    this.state = {
      email: "",
      password: "",
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  }
  render() {
    const { loggingIn, alert } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent">
              <CardTitle className="text-muted text-center mt-2 mb-3">
                Sign in with your credentials
              </CardTitle>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              {alert.message && (
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              )}
              <Form role="form" onSubmit={this.handleSubmit}>
                <FormGroup
                  className={"mb-3" + (submitted && !email ? " has-error" : "")}
                >
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup
                  className={submitted && !password ? "has-error" : ""}
                >
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                  {loggingIn && (
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  )}
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  const { loggingIn } = state.authentication;
  return { loggingIn, alert };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
  clearAlerts: alertActions.clear
};

const connectedLoginPage = connect(
  mapState,
  actionCreators
)(Login);
export default connectedLoginPage;
