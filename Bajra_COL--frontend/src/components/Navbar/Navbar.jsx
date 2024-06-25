import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/bajra_col--logo.png";
import { DarkMode } from "../import";
import { useEffect, useRef } from "react";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/what-we-do", name: "WHAT WE DO" },
  { path: "/portfolio", name: "OUR WORK" },
  { path: "/jobs", name: "Careers" },
  { path: "/trainee", name: "TRAINEESHIP" },
];

const Navbar = () => {
  const location = useLocation();
  const navbarToggle = useRef(null);

  const isActive = (path) => {
    return location.pathname === path ? 'fw-bold text-light' : 'text-light';
  };

  const handleNavLinkClick = () => {
    if (navbarToggle.current && window.getComputedStyle(navbarToggle.current).display !== 'none') {
      navbarToggle.current.click();
    }
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-main">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="100" height="54" className="d-inline-block align-text-top" />
        </Link>
        <button ref={navbarToggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-uppercase" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item me-1">
                <Link className={`nav-link ${isActive(link.path)}`} to={link.path}>{link.name}</Link>
              </li>
            ))}
            <li className="nav-item border border-light border-2 rounded me-1">
              <Link className={`nav-link ${isActive('/contactus')}`} to="/contactus">Contact Us</Link>
            </li>
            <DarkMode />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
