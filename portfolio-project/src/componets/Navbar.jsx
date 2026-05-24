import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">

        <Link to="/MyPortfolio-/" className="brand">
          <span>NIKOLAS KAERN</span>
        </Link>

        <input
          type="checkbox"
          id="menu-toggle"
          className="menu-toggle"
        />

        <label htmlFor="menu-toggle" className="hamburger">
          <span></span>
        </label>

        <ul className="menu">
          <li>
            <Link to="/MyPortfolio-/">Works</Link>
          </li>

          <li>
            <Link to="/MyPortfolio-/resume">Resume</Link>
          </li>

          <li>
            <Link to="/MyPortfolio-/about">About</Link>
          </li>

          <li>
            <Link to="/MyPortfolio-/contact">Contact</Link>
          </li>
        </ul>

      </div>
    </header>
  );
}

export default Navbar;