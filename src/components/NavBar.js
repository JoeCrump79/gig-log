import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/shows">All Shows</NavLink> |{" "}
      <NavLink to="/add-show">Add New Show</NavLink>
    </nav>
  );
}

export default NavBar;
