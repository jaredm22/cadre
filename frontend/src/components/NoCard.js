import React from "react";
import "../pages/schedule/calendar.scss";

export default function NoCard(props) {
  return (
    <div className="card">
      <div
        className="card-left"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>No {props.type}</h4>
      </div>
    </div>
  );
}
