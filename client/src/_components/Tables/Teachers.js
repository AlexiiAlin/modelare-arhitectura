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

class Teachers extends React.Component {
  state = {
    page: 1,
    noOfRows: 10
  };
  getTeachers(teachers) {
    const { page, noOfRows } = this.state;
    let start = noOfRows * (page - 1) + 1;
    let end = page * noOfRows;
    return (
      teachers &&
      teachers.map((prop, key) => {
        if (key + 1 < start || key + 1 > end) {
          return;
        }
        return (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{prop.firstName + " " + prop.lastName}</td>
            <td>
              teaches {prop.noClasses} class
              {prop.noClasses !== 1 ? "es" : ""}
            </td>
            <td className="text-right">
              <Link to={"/admin/teacher/" + prop.id}>
                <Button color="default">Edit Teacher</Button>
              </Link>
            </td>
          </tr>
        );
      })
    );
  }
  getPagination() {
    const { teachers } = this.props;
    const { noOfRows, page } = this.state;
    const noOfPages = (teachers && Math.ceil(teachers.length / noOfRows)) || 1;
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
              <th scope="col">Teacher</th>
              <th scope="col">No. Classes</th>
              <th scope="col" className="text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{this.getTeachers(this.props.teachers)}</tbody>
        </Table>
        <Container>
          <Row className="justify-content-center text-center">
            {this.getPagination()}
          </Row>
        </Container>
      </>
    );
  }
}

export default Teachers;
