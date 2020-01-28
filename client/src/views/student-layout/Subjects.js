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
import { Button, Card, CardHeader, Table, Container, Row } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

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
                    Here are all of your subjects from this current year
                  </h3>
                  <h6 className="text-muted mb-0">
                    (Soon) check your grades from previous years
                  </h6>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Subject</th>
                      <th scope="col">Teacher</th>
                      <th scope="col">No. Grades</th>
                      <th scope="col">Average</th>
                      <th scope="col" className="text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Mathematics</th>
                      <td>Jone Doe</td>
                      <td>2 grades so far</td>
                      <td>That equal to an average of 8.5</td>
                      <td className="text-right">
                        <Button color="secondary">Check grades</Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">English</th>
                      <td>Jane Dane</td>
                      <td>1 grade so far</td>
                      <td>That equal to an average of 7</td>
                      <td className="text-right">
                        <Button color="secondary">Check grades</Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">German</th>
                      <td>Hans Fullman</td>
                      <td>2 grades so far</td>
                      <td>That equal to an average of 5.5</td>
                      <td className="text-right">
                        <Button color="secondary">Check grades</Button>
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
