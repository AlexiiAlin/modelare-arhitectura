import React from "react";
import { connect } from "react-redux";
// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Form,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

import Table from "components/Tables/ClassDetails.js";

import { classActions, alertActions } from "_actions";

class Class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: undefined
      },
      submitted: false
    };
  }
  componentDidMount() {
    let pathName = window.location.href.split("/");
    let classId = pathName[pathName.length - 1];
    if (/\d/.test(classId)) {
    } else {
      window.location.reload();
    }
    this.props.getClass(classId);
  }
  componentWillUnmount() {
    this.props.clearAlerts();
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
    if (user.email) {
      this.props.addNewStudent(this.props.classObj.id, user.email);
    }
  };
  removeStudent = userId => {
    this.props.removeStudent(this.props.classObj.id, userId);
  };
  render() {
    const { alert, classObj } = this.props;
    const { user, submitted } = this.state;
    console.log(classObj);
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {alert.message ? (
            <Alert color={alert.type}>{alert.message}</Alert>
          ) : null}
          <Row>
            <Col md="6">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">{classObj && classObj.name} students</h3>
                </CardHeader>
                <Table
                  students={classObj && classObj.students}
                  removeStudent={this.removeStudent}
                />
                <CardBody className="bg-secondary">
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      <Col md="8">
                        <FormGroup
                          className={
                            submitted && !user.email ? "has-danger" : ""
                          }
                        >
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Email of student"
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <Button color="primary">Add new Student</Button>
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
  const { alert } = state;
  const { classObj } = state.classes;
  return { alert, classObj };
}

const actionCreators = {
  getClass: classActions.getClass,
  addNewStudent: classActions.addNewStudent,
  removeStudent: classActions.removeStudent,
  clearAlerts: alertActions.clear
};

const connectedClass = connect(
  mapState,
  actionCreators
)(Class);
export default connectedClass;
