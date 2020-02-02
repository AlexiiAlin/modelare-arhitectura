import React from "react";
import { Link } from "react-router-dom";
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
  Form,
  FormGroup,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
// core components

class TeacherTeaching extends React.Component {
  state = {
    page: 1,
    noOfRows: 10
  };
  getTeachers(classSubjects) {
    const { page, noOfRows } = this.state;
    let start = noOfRows * (page - 1) + 1;
    let end = page * noOfRows;
    return (
      classSubjects &&
      classSubjects.map((prop, key) => {
        if (key + 1 < start || key + 1 > end) {
          return;
        }
        return (
          <tr key={key}>
            <td>{classSubjects.subject.name}</td>
            <td>{classSubjects.class.name}</td>
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
              <th scope="col">Subject</th>
              <th scope="col">Class</th>
              <th scope="col" className="text-right grades-actions">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{this.getTeachers(this.props.classSubjects)}</tbody>
        </Table>
        <Container>
          <Row className="justify-content-center text-center">
            {this.getPagination(this.props.classSubjects)}
          </Row>
        </Container>
      </>
    );
  }
}

export default TeacherTeaching;
