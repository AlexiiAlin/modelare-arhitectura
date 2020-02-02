import React from "react";
import { connect } from "react-redux";
// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import Table from "components/Tables/Teachers.js";

import { userActions, alertActions } from "_actions";

class Teachers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: ""
      },
      submitted: false
    };
  }
  componentDidMount() {
    this.props.getAllTeachers();
  }

  handleChange = event => {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.email) {
      this.props.createTeacher(user);
    }
  };
  render() {
    const { users, registering, alert } = this.props;
    const { user, submitted } = this.state;
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col>
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">
                    Here are all of the Teachers from your School.
                  </h3>
                </CardHeader>
                <Table teachers={users.items} />
                <CardBody className="bg-secondary">
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      <Col md="12">
                        {alert.message && (
                          <Alert color={alert.type}>{alert.message}</Alert>
                        )}
                      </Col>
                      <Col md="4">
                        <FormGroup
                          className={
                            submitted && !user.firstName ? "has-danger" : ""
                          }
                        >
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup
                          className={
                            submitted && !user.lastName ? "has-danger" : ""
                          }
                        >
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup
                          className={
                            submitted && !user.email ? "has-danger" : ""
                          }
                        >
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Email"
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <Button color="default" type="submit">
                          Add new teacher{" "}
                          {registering && (
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                          )}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

function mapState(state) {
  const { users, alert } = state;
  const { registering } = state.users;
  return { users, registering, alert };
}

const actionCreators = {
  getAllTeachers: userActions.getAllTeachers,
  createTeacher: userActions.createTeacher
};

const connectedTeachers = connect(
  mapState,
  actionCreators
)(Teachers);
export default connectedTeachers;
