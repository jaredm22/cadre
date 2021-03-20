import { SideNav } from "carbon-components-react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
        <h3>Cadre</h3>
        <br></br>
        <h4>Courses</h4>
        <h4>Zoom Links</h4>
        <h4>Assignments</h4>
        <h4>Resources</h4>
      </SideNav>
    </div>
  );
}

export default HeaderNav;
