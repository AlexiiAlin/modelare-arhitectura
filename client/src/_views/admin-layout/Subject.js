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
import Header from "_components/Headers/Header.js";

class Teacher extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col md="12">
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
                    <Col md="4">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-subject"
                          placeholder="Class Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-subject"
                          placeholder="Teacher Email"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
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