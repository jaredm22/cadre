import CreateCourseForm from "./CreateCourseForm";
import { useParams } from "react-router";
import "./form.scss";

export default function CreateCoursePage() {
  const { id } = useParams();
  console.log(id);

  return <CreateCourseForm studentId={id} />;
}
