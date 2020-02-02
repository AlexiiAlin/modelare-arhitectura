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
import Header from "components/Headers/Header.js";

class Classes extends React.Component {
  state = {
    page: 1,
    noOfRows: 10
  };
  getClasses(classes) {
    const { page, noOfRows } = this.state;
    let start = noOfRows * (page - 1) + 1;
    let end = page * noOfRows;
    return (
      classes &&
      classes.map((prop, key) => {
        if (key + 1 < start || key + 1 > end) {
          return;
        }
        return (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{classes.name}</td>
            <td>{classes.noStudents}</td>
            <td>{classes.noTeachers}</td>
            <td>{classes.noSubjects}</td>
            <td className="text-right">
              <Link to={"/admin/class/" + prop.id}>
                <Button color="default">Edit Teacher</Button>
              </Link>
            </td>
          </tr>
        );
      })
    );
  }
  getPagination(classes) {
    const { noOfRows, page } = this.state;
    const noOfPages = (classes && Math.ceil(classes.length / noOfRows)) || 1;
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
        <Table className="align-items-center table-dark table-flush" responsive>
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
          <tbody>{this.getClasses(this.props.classes)}</tbody>
        </Table>
        <Container>
          <Row className="justify-content-center text-center">
            {this.getPagination(this.props.classes)}
          </Row>
        </Container>
      </>
    );
  }
}

export default Classes;
