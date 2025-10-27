import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MoodSwitch 🎨</h1>
      <div className="nav-links">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/chill" className="nav-item">Chill</NavLink>
        <NavLink to="/focus" className="nav-item">Focus</NavLink>
        <NavLink to="/adventure" className="nav-item">Adventure</NavLink>
      </div>
    </nav>
  );
}
