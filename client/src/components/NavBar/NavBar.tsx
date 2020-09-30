import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../AuthProvider/AuthProvider";

function NavBar() {
  const logout = useLogout();
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Logo
      </Link>
      <button
        onClick={handleOpen}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={!isOpened ? "collapse navbar-collapse" : "navbar-collapse"}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recipes" className="nav-link">
              Search Recipes
            </Link>
          </li>
        </ul>
        <button
          className="btn btn-link navbar-text p-0"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
