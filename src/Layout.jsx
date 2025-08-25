import { Outlet, Link } from "react-router-dom";
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
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
          <div className="navbar-brand">Azeez</div>

          {/* Toggler button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapse wrapper */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ul_link">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleClose}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleClose}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services" onClick={handleClose}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills" onClick={handleClose}>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects" onClick={handleClose}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts" onClick={handleClose}>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="bg-black mt-5 mb-0">
        <p className="text-white text-center py-3 h6">
          Developed by Azeez Ololade &copy;2025
        </p>
      </footer>
    </>
  );
};
