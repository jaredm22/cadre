import ExamsView from "./ExamsView";
import { useLocation } from "react-router";

export default function ExamsPage() {
  const location = useLocation();

  return <ExamsView user={location.state.user} />;
}
