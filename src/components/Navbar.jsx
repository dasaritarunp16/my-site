import { NavLink } from "react-router-dom";

export default function Navbar() {
  const link = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
       <img 
        src="/Alpharetta.png" 
        alt="Alpharetta High School" 
        className="brand-logo" 
      />
      
        <nav className="nav-links">
          <NavLink to="/" className = {link}>Home</NavLink>
          <NavLink to="/about-us" className={link}>About Us</NavLink>
          
          <NavLink to="/membership" className={link}>Membership</NavLink>
        </nav>
      </div>
    </header>
  );
}

  