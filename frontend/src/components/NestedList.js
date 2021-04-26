import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import logo from "../assets/logo.png";
import "../pages/schedule/calendar.scss";
import { SideNav } from "carbon-components-react";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import DayPicker from "react-day-picker";
import "../pages/schedule/date-picker.scss";

export default function HeaderNav(props) {
  const [open, setOpen] = React.useState(true);
  const [date, setDate] = React.useState(new Date());

  const handleDayClick = async (day) => {
    setDate(day);
    props.parentCallback(day);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <SideNav
      className="nav"
      isFixedNav
      expanded={true}
      isChildOfHeader={false}
      aria-label="Side navigation"
    >
      <List
        component="nav"
        style={{ minHeight: "100vh", display: "block", position: "relative" }}
      >
        <ListItem component="div" className="logo-header">
          <ListItemIcon>
            <img className="logo" src={logo} width="80px" height="80px"></img>
          </ListItemIcon>
          <Link className="nav-link-home" to="/">
            <h2>Cadre</h2>
            <br></br>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            className="nav-link"
            to={{
              pathname: "/schedule/student",
              state: {
                user: props.user,
              },
            }}
          >
            <h4>Calendar</h4>
          </Link>
        </ListItem>

        <ListItem>
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
        </ListItem>

        <ListItem>
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
        </ListItem>

        <ListItem>
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
        </ListItem>

        <ListItem>
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
        </ListItem>

        <ListItem button onClick={handleClick}>
          <h4 className="nav-link">Zoom Links</h4>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={!open} timeout="auto" unmountOnExit>
          <List component="div" className="zoom-link-list" disablePadding>
            {props.user.courses.map((course) => {
              return (
                <ListItem>
                  <a className="nav-zoom-link" href={course.zoomLink}>
                    {course.courseId + " - " + course.courseName}
                  </a>
                </ListItem>
              );
            })}
            {props.user.labs.map((lab) => {
              return (
                <ListItem>
                  <a className="nav-zoom-link" href={lab.zoomLink}>
                    {lab.course.courseId + " | Lab"}
                  </a>
                </ListItem>
              );
            })}
          </List>
        </Collapse>

        {/* <ListItem className="signup-login">
            <Link className="nav-link" to="/signup" style={{color: "white", paddingLeft: "1rem"}}>
                <p>Signup</p>
            </Link>

            <Link className="nav-link" to="/login" style={{color: "white", paddingLeft: "1rem"}}>
                <p>Login</p>
            </Link>
        </ListItem> */}

        <ListItem style={{ position: "absolute", bottom: 50 }}>
          <DayPicker
            onDayClick={(day) => handleDayClick(day)}
            selectedDays={date}
          />
        </ListItem>
      </List>
    </SideNav>
  );
}
