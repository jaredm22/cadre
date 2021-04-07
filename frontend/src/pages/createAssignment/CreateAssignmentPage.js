import CreateAssignmentForm from "./CreateAssignmentForm";
import { useLocation } from "react-router";
import "./form.scss";

export default function CreateAssignmentPage() {
  const location = useLocation();

  return <CreateAssignmentForm user={location.state.user} />;
}
