import CreateCourseForm from "./CreateCourseForm";
import { useParams } from "react-router";
import "./form.scss";

export default function CreateCoursePage(props) {
  return <CreateCourseForm studentId={props.location.state.user.id} />;
}
