import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";
// core components
import Header from "_components/Headers/Header.js";

class Teacher extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col md="6">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Jessica Jones details</h3>
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
                        <Col md="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Jessica"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Jones"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-grade-name"
                            >
                              Grade
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="8th grade"
                              id="input-grade-name"
                              placeholder="Grade"
                              type="text"
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
                        <Col lg="6">
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
                              placeholder="jesse@example.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Password
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              type="Password"
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
            <Col md="6">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Jessica Jones grades</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Score</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Date added</th>
                      <th scope="col">Date modified</th>
                      <th scope="col" className="text-right grades-actions">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8</td>
                      <td>Mathematics</td>
                      <td>{new Date().toLocaleDateString()}</td>
                      <td>{new Date().toLocaleDateString()}</td>
                      <td className="text-right">
                        <Button color="info" size="sm">
                          Change
                        </Button>
                        <Button color="danger" size="sm">
                          Delete
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Mathematics</td>
                      <td>{new Date().toLocaleDateString()}</td>
                      <td>{new Date().toLocaleDateString()}</td>
                      <td className="text-right">
                        <Button color="info" size="sm">
                          Change
                        </Button>
                        <Button color="danger" size="sm">
                          Delete
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Mathematics</td>
                      <td>{new Date().toLocaleDateString()}</td>
                      <td>{new Date().toLocaleDateString()}</td>
                      <td className="text-right">
                        <Button color="info" size="sm">
                          Change
                        </Button>
                        <Button color="danger" size="sm">
                          Delete
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Mathematics</td>
                      <td>{new Date().toLocaleDateString()}</td>
                      <td>{new Date().toLocaleDateString()}</td>
                      <td className="text-right">
                        <Button color="info" size="sm">
                          Change
                        </Button>
                        <Button color="danger" size="sm">
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardBody className="bg-secondary">
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-grade"
                          placeholder="Grade"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-subject"
                          placeholder="Subject"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <Button color="primary">Add new Grade</Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Teacher;
