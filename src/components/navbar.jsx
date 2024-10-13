import { Link } from "react-router-dom";
import CustomButton from "./customButton";

export default function Navbar() {
  return (
    <nav>
      <header>
        <h2>Task Manager</h2>
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li><CustomButton/></li>
      </ul>
    </nav>
  );
}
