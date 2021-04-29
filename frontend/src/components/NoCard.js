import React from "react";
import "../pages/schedule/calendar.scss";

export default function NoCard(props) {
  return (
    <div className="no">
      <div>
        <h4>No {props.type}</h4>
      </div>
    </div>
  );
}
