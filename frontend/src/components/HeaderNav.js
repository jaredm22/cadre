import { SideNav } from "carbon-components-react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CreateCoursePage from "../pages/createCourse/CreateCoursePage";
import LoginPage from "../pages/createCourse/CreateCoursePage";
import SchedulePage from "../pages/schedule/SchedulePage";

const style = {
  paddingLeft: "10px",
};

function HeaderNav() {
  return (
    <div className="App" style={style}>
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation"
      >
        <ul>
          <li>
            <h3>Cadre</h3>
          </li>
          <br></br>

          <li>
            <h4>Calendar</h4>
          </li>

          <li>
            <h4>Courses</h4>
          </li>

          <li>
            <h4>Assignments</h4>
          </li>

          <li>
            <h4>Resources</h4>
          </li>

          <li>
            <h4>Grades</h4>
          </li>
        </ul>

        {/* <Router >
        <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    <h3>Cadre</h3>
                    <br></br>
                  </Link>
                </li>
                <li>
                  <Link to="/createCourse">Create Course</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </div>

          
      </Router>
         */}
      </SideNav>
    </div>
  );
}

export default HeaderNav;
