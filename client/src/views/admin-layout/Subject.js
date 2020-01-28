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
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class Teacher extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col md="6">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Chemistry is tought in these classes</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Class</th>
                      <th scope="col">Teacher</th>
                      <th scope="col" className="text-right grades-actions">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8th grade</td>
                      <td>Johan Fullman</td>
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
                      <td>9th grade</td>
                      <td>Johan Fullman</td>
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
                      <td>10th grade</td>
                      <td>Johan Fullman</td>
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
                          id="input-subject"
                          placeholder="Class"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <Button color="primary">Add new Class</Button>
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
