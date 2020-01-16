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
import { Card, CardHeader, Table, Container, Row } from "reactstrap";
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
                    Here are the subjects and classes that you are teaching this
                    year.
                  </h3>
                  <h6 className="text-muted mb-0">
                    (Soon) check your classes and subjects from previous years
                  </h6>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Subject</th>
                      <th scope="col">Class</th>
                      <th scope="col">No. Students</th>
                      <th scope="col" className="text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Mathematics</th>
                      <td>10th Grade</td>
                      <td>30 students</td>
                      <td className="text-right">
                        <a
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          className="text-white font-weight-bold h4"
                        >
                          Manage students and grades
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Physics</th>
                      <td>9th Grade</td>
                      <td>25 students</td>
                      <td className="text-right">
                        <a
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          className="text-white font-weight-bold h4"
                        >
                          Manage students and grades
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Physics</th>
                      <td>11th Grade</td>
                      <td>23 students</td>
                      <td className="text-right">
                        <a
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          className="text-white font-weight-bold h4"
                        >
                          Manage students and grades
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Subjects;
