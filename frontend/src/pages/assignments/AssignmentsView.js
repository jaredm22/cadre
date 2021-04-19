import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Content } from "carbon-components-react";
import HeaderNav from "../../features/HeaderNav";
import "./assignments.css";

export default function AssignmentsView(props) {
  const location = useLocation();

  return (
    <div className="App">
      <HeaderNav user={location.state.user} />
      <Content className="assignments-container">fsdf</Content>
    </div>
  );
}
