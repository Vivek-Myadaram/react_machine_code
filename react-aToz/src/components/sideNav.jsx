// components/Sidebar.js
import { NavLink } from "react-router";
import "./sidebar.css"; // for styling

const Sidebar = () => {
  return (
    <div className="sidebar text-center py-2 text-2xl">
      <NavLink to="hooks">Hooks</NavLink>
      <NavLink to="react19">React 19</NavLink>
    </div>
  );
};

export default Sidebar;
