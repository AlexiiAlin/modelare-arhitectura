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
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Students extends React.Component {
  render() {
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
                    Here are all of your Students from your Physics course from
                    11th Grade
                  </h3>
                  <h6 className="text-muted mb-0">
                    (Soon) check your Students from previous years on this
                    course
                  </h6>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Student</th>
                      <th scope="col">No. Grades</th>
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
                      <td>has 4 grades</td>
                      <td>with and average of 9</td>
                      <td className="text-right">
                        <Button color="default">Manage Grades</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jon Doe</td>
                      <td>has 3 grades</td>
                      <td>with and average of 7</td>
                      <td className="text-right">
                        <Button color="default">Manage Grades</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Students;
