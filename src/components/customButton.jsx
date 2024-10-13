import { Link } from "react-router-dom";

export default function CustomButton({ text = "Create Task" }) {
    return (
      <Link to="/add-task" className="btn">
        {text}
      </Link>
    );
  }
  