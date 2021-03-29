import { SideNav, Row, Column, Grid } from "carbon-components-react";
import { Link } from "react-router-dom";
import "../features/calendar/calendar.scss";
import logo from "./logo.png";

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
              <Link className="nav-link" to={"/createCourse/" + props.id}>
                <h4>Create Course</h4>
              </Link>
            </Row>

            <Row>
              <Link className="nav-link" to={"/createAssignment/" + props.id}>
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
          </Column>
        </Grid>
      </SideNav>
    </div>
  );
}

export default HeaderNav;
