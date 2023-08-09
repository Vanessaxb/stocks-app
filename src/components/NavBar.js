import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Styles from "../pages/Styles.module.css";
import { Link, NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="navbar">
      <Link to="/">
        <div>Home</div>
      </Link>

      <Link to="/stocks">
        <div>Stocks List</div>
      </Link>

      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
}
