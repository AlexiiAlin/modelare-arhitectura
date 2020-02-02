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
  FormGroup,
  Input,
  Form
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import Table from "components/Tables/Classes.js";

import { classActions } from "_actions";

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classObj: {
        name: ""
      },
      submitted: false
    };
  }
  componentDidMount() {
    this.props.getAllClasses();
  }
  handleChange = event => {
    const { name, value } = event.target;
    const { classObj } = this.state;
    this.setState({
      classObj: {
        ...classObj,
        [name]: value
      }
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { classObj } = this.state;
    if (classObj.name) {
      this.props.createClass(classObj);
    }
  };
  render() {
    const { classes, alert, registering } = this.props;
    const { classObj, submitted } = this.state;
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">
                    Here are the Classes in your school.
                  </h3>
                </CardHeader>
                <Table classes={classes.items} />
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      {alert.message && (
                        <Col md="12">
                          <Alert color={alert.type}>{alert.message}</Alert>
                        </Col>
                      )}
                      <Col md="6">
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            id="input-class"
                            placeholder="Class"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <Button color="secondary" type="submit">
                          Add new Class{" "}
                          {registering && (
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                          )}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

function mapState(state) {
  const { classes, alert } = state;
  const { registering } = state.classes;
  return { classes, alert };
}

const actionCreators = {
  getAllClasses: classActions.getAllClasses,
  createClass: classActions.createClass
};

const connectedClasses = connect(
  mapState,
  actionCreators
)(Classes);
export default connectedClasses;
