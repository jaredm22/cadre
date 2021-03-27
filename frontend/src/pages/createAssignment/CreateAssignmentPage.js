import CreateAssignmentForm from "./CreateAssignmentForm";
import { useParams } from "react-router";
import "./form.scss";

export default function CreateAssignmentPage() {
  const { id } = useParams();
  console.log(id);

  return <CreateAssignmentForm studentId={id} />;
}
