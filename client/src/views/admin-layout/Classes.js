import React from "react";
import { connect } from "react-redux";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  FormGroup,
  Input
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import Table from "components/Tables/Classes.js";

import { classActions } from "_actions";

class Classes extends React.Component {
  componentDidMount() {
    this.props.getAllClasses();
  }
  render() {
    const { classes, alert } = this.props;
    // const { user, submitted } = this.state;
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
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <Button color="secondary">Add new Class</Button>
                    </Col>
                  </Row>
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
  return { classes, alert };
}

const actionCreators = {
  getAllClasses: classActions.getAllClasses
};

const connectedClasses = connect(
  mapState,
  actionCreators
)(Classes);
export default connectedClasses;
