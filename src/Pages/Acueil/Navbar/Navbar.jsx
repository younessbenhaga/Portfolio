import { Link } from "react-router-dom";
import profile from "./../../../img/profile.jpg";
import { motion } from "framer-motion";

function Navbar() {
  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.7 },
    },
    hidden: {
      opacity: 0,
    },
  };

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
              <motion.ul
                className="nav nav-pills gap-2 p-1 small flex-column w-100"
                id="pillNav2"
                role="tablist"
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <Link to="/" className="nav-item" role="presentation">
                  <motion.button
                    className="nav-link active rounded-5"
                    id="home-tab2"
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    variants={variants}
                  >
                    Accuiel
                  </motion.button>
                </Link>
                <Link to="/APropos" className="nav-item" role="presentation">
                  <motion.button
                    className="nav-link rounded-5"
                    id="profile-tab2"
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    variants={variants}
                  >
                    A Propos
                  </motion.button>
                </Link>
                <Link to="/Competence" className="nav-item" role="presentation">
                  <motion.button
                    className="nav-link rounded-5"
                    id="contact-tab2"
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    variants={variants}
                  >
                    Competence
                  </motion.button>
                </Link>
                <Link to="/Experience" className="nav-item" role="presentation">
                  <motion.button
                    className="nav-link rounded-5"
                    id="contact-tab2"
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    variants={variants}
                  >
                    Experience
                  </motion.button>
                </Link>
                <Link to="/Project" className="nav-item" role="presentation">
                  <motion.button
                    className="nav-link rounded-5"
                    id="contact-tab2"
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    variants={variants}
                  >
                    Project
                  </motion.button>
                </Link>
                <Link to="/Contact" className="nav-item" role="presentation">
                  <motion.button
                    className="nav-link rounded-5"
                    id="contact-tab2"
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    variants={variants}
                  >
                    Contact
                  </motion.button>
                </Link>
              </motion.ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
