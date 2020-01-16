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
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">
                    Here are the Classes in your school.
                  </h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Class Name</th>
                      <th scope="col">No. Students</th>
                      <th scope="col">No. Teachers</th>
                      <th scope="col">No. Subjects</th>
                      <th scope="col" className="text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>8th grade</td>
                      <td>1390 students</td>
                      <td>15 teachers</td>
                      <td>15 subjects</td>
                      <td className="text-right">
                        <a
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          className="text-white font-weight-bold h4"
                        >
                          Manage class
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>9th grade</td>
                      <td>1391 students</td>
                      <td>16 teachers</td>
                      <td>17 subjects</td>
                      <td className="text-right">
                        <a
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          className="text-white font-weight-bold h4"
                        >
                          Manage class
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardBody>
                  <Row>
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

export default Subjects;
