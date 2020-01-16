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
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";
import {
  chartOptions,
  parseOptions,
  chartData
} from "variables/student-grades-chart.jsx";

class Grades extends React.Component {
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
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
                    Here are all of your Mathematics grades from this current
                    year
                  </h3>
                  <h6 className="text-muted mb-0">
                    (Soon) check you grades from previous years
                  </h6>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Score</th>
                      <th scope="col">Date</th>
                      <th scope="col" className="text-right grades-actions">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>You got an 8</td>
                      <td>on {new Date().toLocaleDateString()}</td>
                      <td className="text-right">
                        <Button color="default">Appeal</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>You got an 9</td>
                      <td>on {new Date().toLocaleDateString()}</td>
                      <td className="text-right">
                        <Button color="default">Appeal</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Your current average is 8.5</td>
                      <td colSpan="2"></td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Card className="bg-default">
                <CardHeader className="border-0 bg-default">
                  <h3 className="text-white mb-0">
                    Check your progress throught the years here
                  </h3>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    {/* Chart wrapper */}
                    <Line
                      data={chartData.data}
                      options={chartData.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Grades;
