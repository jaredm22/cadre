import AssignmentsView from "./AssignmentsView";
import { useLocation } from "react-router";

export default function CreateAssignmentPage() {
  const location = useLocation();

  return <AssignmentsView user={location.state.user} />;
}
