import { Outlet, NavLink, Link } from "react-router-dom"; // Swapped Link for NavLink where needed
import { useState } from "react";

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top py-3 shadow-sm">
        <div className="container">
          {/* Brand Logo */}
          <Link className="navbar-brand fw-bold fs-4 text-info tracking-tight" to="/" onClick={handleClose}>
            Azeez
          </Link>

          {/* Responsive Hamburger Menu Toggler Button */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            onClick={handleToggle}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapse Menu Items Panel */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto gap-2 pt-3 pt-md-0 align-items-md-center">
              
              {/* Home Link */}
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link fw-medium px-3 py-2 rounded transition-all ${
                      isActive ? "bg-secondary text-white fw-bold" : "text-white-50"
                    }`
                  } 
                  to="/" 
                  end // Prevents home matching other sub-routes like /about
                  onClick={handleClose}
                >
                  Home
                </NavLink>
              </li>

              {/* About Link */}
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link fw-medium px-3 py-2 rounded transition-all ${
                      isActive ? "bg-secondary text-white fw-bold" : "text-white-50"
                    }`
                  } 
                  to="/about" 
                  onClick={handleClose}
                >
                  About
                </NavLink>
              </li>

              {/* Services Link */}
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link fw-medium px-3 py-2 rounded transition-all ${
                      isActive ? "bg-secondary text-white fw-bold" : "text-white-50"
                    }`
                  } 
                  to="/services" 
                  onClick={handleClose}
                >
                  Services
                </NavLink>
              </li>

              {/* Skills Link */}
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link fw-medium px-3 py-2 rounded transition-all ${
                      isActive ? "bg-secondary text-white fw-bold" : "text-white-50"
                    }`
                  } 
                  to="/skills" 
                  onClick={handleClose}
                >
                  Skills
                </NavLink>
              </li>

              {/* Projects Link */}
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link fw-medium px-3 py-2 rounded transition-all ${
                      isActive ? "bg-secondary text-white fw-bold" : "text-white-50"
                    }`
                  } 
                  to="/projects" 
                  onClick={handleClose}
                >
                  Projects
                </NavLink>
              </li>

              {/* Dynamic Contact Button */}
              <li className="nav-item ms-md-2">
                <NavLink 
                  className={({ isActive }) => 
                    `btn btn-sm px-4 py-2 rounded-pill fw-semibold shadow-sm transition-all ${
                      isActive 
                        ? "btn-info text-white shadow" // Full standout color when active on /contacts
                        : "btn-outline-info text-info bg-transparent border-1" // Standard clean outline frame when on other pages
                    }`
                  } 
                  to="/contacts" 
                  onClick={handleClose}
                >
                  Contact Me
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Main Container Mounting Render Matrix */}
      <main className="min-vh-100 bg-light">
        <Outlet />
      </main>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-dark border-top border-secondary py-4 mt-auto">
      <div className="container text-center">
        <p className="text-secondary small mb-0 tracking-wide">
          Developed by <span className="text-white fw-medium">Azeez Ololade</span> &copy; 2026
        </p>
      </div>
    </footer>
  );
};