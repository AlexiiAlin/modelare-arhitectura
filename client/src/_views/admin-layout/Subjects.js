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
import Header from "_components/Headers/Header.js";

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
                    Here are the Subjects that are thought in your school.
                  </h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Subject</th>
                      <th scope="col">No. Classes</th>
                      <th scope="col">No. Students</th>
                      <th scope="col">No. Teachers</th>
                      <th scope="col" className="text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mathematics</td>
                      <td>
                        there are 103 classes where Mathematics is thought
                      </td>
                      <td>2781 students</td>
                      <td>31 teachers</td>
                      <td className="text-right">
                        <a
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          className="text-white font-weight-bold h4"
                        >
                          Manage subject
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Physics</td>
                      <td>there are 74 classes where Physics is thought</td>
                      <td>1998 students</td>
                      <td>22 teachers</td>
                      <td className="text-right">
                        <a
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          className="text-white font-weight-bold h4"
                        >
                          Manage subject
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
                          id="input-subject"
                          placeholder="Subject"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <Button color="secondary">Add new subject</Button>
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
