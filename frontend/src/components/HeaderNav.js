import { SideNav } from "carbon-components-react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CreateCoursePage from "../pages/createCourse/CreateCoursePage";
import LoginPage from "../pages/createCourse/CreateCoursePage";
import SchedulePage from "../pages/schedule/SchedulePage";
import "../features/calendar/calendar.scss";

function HeaderNav() {
  return (
    <div className="App">
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation"
      >
        <nav className="nav">
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
      </SideNav>
    </div>
  );
}

export default HeaderNav;
