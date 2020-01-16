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
  Alert,
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

class Grades extends React.Component {
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
                    Here are the Grades of Jeniffer Dusting on the Physics
                    course from 11th Grade
                  </h3>
                  <h6 className="text-muted mb-0">
                    (Soon) check the history of Jeniffer Dusting's Physics
                    grades
                  </h6>
                  <br />
                  <Alert color="default">
                    <strong>Note!</strong> The Grades you see, are the final
                    ones after you've last modified them.
                  </Alert>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Score</th>
                      <th scope="col">Date added</th>
                      <th scope="col">Date modified</th>
                      <th scope="col" className="text-right grades-actions">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>You gave an 8</td>
                      <td>on {new Date().toLocaleDateString()}</td>
                      <td>
                        and it was last modified on{" "}
                        {new Date().toLocaleDateString()}
                      </td>
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
                      <td>You gave an 9</td>
                      <td>on {new Date().toLocaleDateString()}</td>
                      <td>
                        and it was last modified on{" "}
                        {new Date().toLocaleDateString()}
                      </td>
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
                      <td>You gave an 10</td>
                      <td>on {new Date().toLocaleDateString()}</td>
                      <td>
                        and it was last modified on{" "}
                        {new Date().toLocaleDateString()}
                      </td>
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
                      <td>You gave an 9</td>
                      <td>on {new Date().toLocaleDateString()}</td>
                      <td>
                        and it was last modified on{" "}
                        {new Date().toLocaleDateString()}
                      </td>
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
                      <td>The current average is 9</td>
                      <td colSpan="3"></td>
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

export default Grades;
