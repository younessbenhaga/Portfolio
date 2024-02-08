import { Link } from "react-router-dom";
import profile from "./../../../img/profile.jpg";

function Navbar() {
  return (
    <>
      <div className="profile d-none d-md-flex">
        <img src={profile} alt="profile" />
        <div className="info">
          <span className="name">Benhaga Younes</span>
          <span className="job">Student</span>
        </div>
      </div>
      <div className="kra">
        <nav className="navbar navbar-expand-md">
          <div className="container" id="cont-nav">
            <a className="navbar-brand fs-6 ps-4" href="/">
              <div className="profile1">
                <img src={profile} alt="profile" />
              </div>
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

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul
                className="nav nav-pills gap-2 p-1 small flex-column w-100"
                id="pillNav2"
                role="tablist"
              >
                <Link to="/" className="nav-item" role="presentation">
                  <button
                    className="nav-link rounded-5"
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
                    className="nav-link active rounded-5"
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
                <Link to="/Project" className="nav-item" role="presentation">
                  <button
                    className="nav-link rounded-5"
                    id="contact-tab2"
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Project
                  </button>
                </Link>
                <Link to="/Contact" className="nav-item" role="presentation">
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
      </div>
    </>
  );
}

export default Navbar;
