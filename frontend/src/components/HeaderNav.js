import React from "react";
import { SideNav, Row, Column, Grid } from "carbon-components-react";
import { Link } from "react-router-dom";
import "../pages/schedule/calendar.scss";
import logo from "../assets/logo.png";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function HeaderNav(props) {
  return (
    <div className="App">
      <SideNav
        className="nav"
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation"
      >
        <Grid>
          <Column>
            {/* <div style={{display: "flex", flexDirection: "row"}}>
              <img
                  className="logo"
                  src={logo}
                  width="80px"
                  height="80px"
                ></img>
                <Link className="nav-link-home" to="/">
                  <h3>Cadre</h3>
                  <br></br>
                </Link>
            </div> */}
            <Row className="title">
              <Column>
                <img
                  className="logo"
                  src={logo}
                  width="80px"
                  height="80px"
                ></img>
              </Column>

              <Column>
                <Link className="nav-link-home" to="/">
                  <h3>Cadre</h3>
                  <br></br>
                </Link>
              </Column>
            </Row>

            <Row>
              <Link
                className="nav-link"
                to={{
                  pathname: "/schedule/student",
                  state: {
                    user: props.user,
                  },
                }}
              >
                <h4>Schedule</h4>
              </Link>
            </Row>

            <Row>
              <Link
                className="nav-link"
                to={{
                  pathname: "/assignments",
                  state: {
                    user: props.user,
                  },
                }}
              >
                <h4>Assignments</h4>
              </Link>
            </Row>

            <Row>
              <Link
                className="nav-link"
                to={{
                  pathname: "/exams",
                  state: {
                    user: props.user,
                  },
                }}
              >
                <h4>Exams</h4>
              </Link>
            </Row>

            <Row>
              <Link
                className="nav-link"
                to={{
                  pathname: "/createCourse",
                  state: {
                    user: props.user,
                  },
                }}
              >
                <h4>Create Course</h4>
              </Link>
            </Row>

            <Row>
              <Link
                className="nav-link"
                to={{
                  pathname: "/createAssignment",
                  state: {
                    user: props.user,
                  },
                }}
              >
                <h4>Create Assignment</h4>
              </Link>
            </Row>

            <Row>
              <Link className="nav-link" to="/signup">
                <h4>Signup</h4>
              </Link>
            </Row>

            <Row>
              <Link className="nav-link" to="/login">
                <h4>Login</h4>
              </Link>
            </Row>

            <Row></Row>
          </Column>
        </Grid>
      </SideNav>
    </div>
  );
}

export default HeaderNav;
