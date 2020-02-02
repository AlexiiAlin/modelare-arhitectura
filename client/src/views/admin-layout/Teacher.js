import React from "react";
import { connect } from "react-redux";
// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import Table from "components/Tables/TeacherTeaching.js";

import { userActions, alertActions } from "_actions";

import { history } from "_helpers";

class Teacher extends React.Component {
  componentDidMount() {
    let pathName = history.location.pathname.split("/");
    let teacherId = pathName[pathName.length - 1];
    this.props.getTeacher(teacherId);
  }
  componentWillUnmount() {
    this.props.clearAlerts();
  }
  render() {
    const { teacher, loading, alert } = this.props;
    console.log(teacher);
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {loading ? (
            <Row className="justify-content-center">
              <Col md="8">
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              </Col>
            </Row>
          ) : (
            <Row>
              <Col md="5">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">
                      {teacher && teacher.firstName}{" "}
                      {teacher && teacher.lastName} is teaching
                    </h3>
                  </CardHeader>
                  <Table classSubjects={teacher && teacher.classSubjects} />
                  <CardFooter className="bg-secondary">
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-class-name"
                          >
                            Class
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-class-name"
                            placeholder="Class Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-subject"
                          >
                            Subject
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-subject"
                            placeholder="Subject"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button color="primary">Add new class</Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="7">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">
                          {teacher && teacher.firstName}{" "}
                          {teacher && teacher.lastName} details
                        </h3>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                First name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={teacher && teacher.firstName}
                                id="input-first-name"
                                placeholder="First name"
                                type="text"
                                name="firstName"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Last name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={teacher && teacher.lastName}
                                id="input-last-name"
                                placeholder="Last name"
                                type="text"
                                name="lastName"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />
                      {/* Address */}
                      <h6 className="heading-small text-muted mb-4">
                        Credentials
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email address
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-email"
                                defaultValue={teacher && teacher.email}
                                placeholder="email@example.com"
                                type="email"
                                name="email"
                                autoComplete="new-email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                    <hr className="my-4" />
                    <div className="text-center">
                      <Button color="primary">Save changes</Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  const { loading, teacher } = state.users;
  return { teacher, loading, alert };
}

const actionCreators = {
  getTeacher: userActions.getTeacher,
  clearAlerts: alertActions.clear
};

const connectedTeacher = connect(
  mapState,
  actionCreators
)(Teacher);
export default connectedTeacher;
