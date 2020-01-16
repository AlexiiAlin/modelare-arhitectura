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
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Card, CardBody, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center">
                <Link to="/auth/admin-login">
                  <Button className="my-4" color="primary" type="button">
                    Admin Login
                  </Button>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/auth/teacher-login">
                  <Button className="my-4" color="primary" type="button">
                    Teacher Login
                  </Button>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/auth/student-login">
                  <Button className="my-4" color="primary" type="button">
                    Student Login
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Login;
