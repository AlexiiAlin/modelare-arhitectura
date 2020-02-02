import React from "react";
import { connect } from "react-redux";
// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Form,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";
// core components

class ClassDetails extends React.Component {
  state = {
    page: 1,
    noOfRows: 10
  };
  getStudents(students) {
    const { page, noOfRows } = this.state;
    let start = noOfRows * (page - 1) + 1;
    let end = page * noOfRows;
    return (
      students &&
      students.map((prop, key) => {
        if (key + 1 < start || key + 1 > end) {
          return;
        }
        return (
          <tr key={key}>
            <td>
              {prop.firstName} {prop.lastName}
            </td>
            <td className="text-right">
              <Button color="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
        );
      })
    );
  }
  getPagination(classSubjects) {
    const { noOfRows, page } = this.state;
    const noOfPages =
      (classSubjects && Math.ceil(classSubjects.length / noOfRows)) || 1;
    let newArray = [...Array(noOfPages).keys()];
    return (
      <Pagination>
        {newArray.map((prop, key) => {
          return (
            <PaginationItem key={key}>
              <PaginationLink
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ page: key + 1 });
                }}
              >
                {key + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </Pagination>
    );
  }
  render() {
    return (
      <>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student</th>
              <th scope="col" className="text-right grades-actions">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{this.getStudents(this.props.students)}</tbody>
        </Table>
        <Container>
          <Row className="justify-content-center text-center">
            {this.getPagination(this.props.students)}
          </Row>
        </Container>
      </>
    );
  }
}

export default ClassDetails;
