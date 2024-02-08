// import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import close from "../img/icons8-close.svg";
// import menu from "../img/icons8-menu.svg";

function Navbar() {
  //   const [isOpen, toggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <a className="navbar-brand fs-6 ps-4" href="/">
          Benhaga
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown" >
          <ul
            className="nav nav-pills nav-fill gap-2 p-1 small rounded-5 shadow-sm w-100 flex-column flex-md-row border"
            id="pillNav2"
            role="tablist"
          >
            <Link  to="/" className="nav-item" role="presentation">
              <button
               
                className="nav-link active rounded-5"
                id="home-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Accuiel
              </button>
            </Link>
            <Link to="/APropos" className="nav-item" role="presentation">
              <button
                
                className="nav-link rounded-5"
                id="profile-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
              >
                A Propos
              </button>
            </Link>
            <Link to="/Competence" className="nav-item" role="presentation">
              <button
              
              
                className="nav-link rounded-5"
                id="contact-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Competence
              </button>
            </Link>
            <Link to="/Experience" className="nav-item" role="presentation">
              <button
              
                className="nav-link rounded-5"
                id="contact-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Experience
              </button>
            </Link>
            <Link  to="/Contact" className="nav-item" role="presentation">
              <button
             
                className="nav-link rounded-5"
                id="contact-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Contact
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
