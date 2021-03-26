import { Row, Column, Button } from "carbon-components-react";
import { Link } from "react-router-dom";
import "./home.css";

export default function HomePage(props) {
  return (
    <div className="home">
      <Link to="/login">
        <h2>Cadre</h2>
      </Link>
    </div>
  );
}
