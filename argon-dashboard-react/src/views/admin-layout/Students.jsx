/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  Container,
  Row,
  Col,
  FormGroup,
  Input
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Subjects extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="mb-0">
                    Here are all of the Students from your School.
                  </h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Student</th>
                      <th scope="col">Class</th>
                      <th scope="col">No. Subjects</th>
                      <th scope="col">No. Gardes</th>
                      <th scope="col">Average</th>
                      <th scope="col" className="text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Jeniffer Dusting</td>
                      <td>is in 8th class</td>
                      <td>enrolled in 13 subjects</td>
                      <td>has 4 grades</td>
                      <td>with and average of 9</td>
                      <td className="text-right">
                        <Button color="default">Edit student</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jon Doe</td>
                      <td>is in 8th class</td>
                      <td>enrolled in 13 subjects</td>
                      <td>has 3 grades</td>
                      <td>with and average of 7</td>
                      <td className="text-right">
                        <Button color="default">Edit student</Button>
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
                          id="input-first-name"
                          placeholder="First Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-last-name"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-email"
                          placeholder="Email"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-password"
                          placeholder="Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <Button color="default">Add new student</Button>
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

export default Subjects;
