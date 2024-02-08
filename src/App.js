import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavbarAcu from "./Pages/Acueil/Navbar/Navbar";
import Acueil from "./Pages/Acueil/Acueil";

// ----------APropos
import NavbarAPROPOS from "./Pages/APropos/Navbar/Navbar";
import APropos from "./Pages/APropos/APropos";

// ----------Comptence
import NavbarCompetence from "./Pages/Competence/Navbar/Navbar";
import Comptence from "./Pages/Competence/Competence";

// ----------Experience
import NavbarExperience from "./Pages/Experience/Navbar/Navbar";
import Experience from "./Pages/Experience/Experience";
import ExperiencePhone from "./Pages/Experience/ExperiencePhone"

//-------------Project
import Project from "./Pages/Project/Project";
import NavbarProject from "./Pages/Project/Navbar/Navbar";

//--------------Contact
import NavbarContact from "./Pages/Contact/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="row m-0 p-0 d-flex">
              <div className="col-2 p-0 d-none d-md-block" id="act-1">
                <NavbarAcu />
              </div>
              <div
                className="col-10 p-1 d-none d-md-flex flex-column justify-content-center"
                id="act-2"
              >
                <Acueil />
              </div>
              <div
                className="col-12  d-flex d-md-none flex-column justify-content-center"
                id="act-3"
              >
                <NavbarAcu />
                <Acueil />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/APropos"
          element={
            <div className="row m-0 p-0 d-flex">
              <div className="col-2 p-0 d-none d-md-block" id="act-1">
                <NavbarAPROPOS />
              </div>
              <div
                className="col-10 p-1 d-none d-md-flex flex-column justify-content-center"
                id="act-2"
              >
                <APropos />
              </div>
              <div
                className="col-12  d-flex d-md-none flex-column justify-content-center"
                id="act-3"
              >
                <NavbarAPROPOS />
                <APropos />
              </div>
            </div>
          }
        />
        <Route
          path="/Competence"
          element={
            <div className="row m-0 p-0 d-flex">
              <div className="col-2 p-0 d-none d-md-block" id="act-1">
                <NavbarCompetence />
              </div>
              <div
                className="col-10 p-1 d-none d-md-flex flex-column justify-content-center"
                id="act-2"
              >
                <Comptence />
              </div>
              <div
                className="col-12  d-flex d-md-none flex-column justify-content-center"
                id="act-3"
              >
                <NavbarCompetence />
                <Comptence />
              </div>
            </div>
          }
        />

        <Route
          path="/Experience"
          element={
            <div className="row m-0 p-0 d-flex">
              <div className="col-2 p-0 d-none d-md-block" id="act-1">
                <NavbarExperience />
              </div>
              <div
                className="col-10 p-1 d-none d-md-flex flex-column justify-content-center"
                id="act-2"
              >
                <Experience />
              </div>
              <div
                className="col-12  d-flex d-md-none flex-column justify-content-center"
                id="act-3"
              >
                <NavbarExperience />
                <ExperiencePhone />
              </div>
            </div>
          }
        />
        <Route
          path="/Project"
          element={
            <div className="row m-0 p-0 d-flex">
              <div className="col-2 p-0 d-none d-md-block" id="act-1">
                <NavbarProject />
              </div>
              <div
                className="col-10 p-1 d-none d-md-flex flex-column justify-content-center"
                id="act-2"
              >
                <Project />
              </div>
              <div
                className="col-12  d-flex d-md-none flex-column justify-content-center"
                id="act-3"
              >
                <NavbarProject />
                <Project />
              </div>
            </div>
          }
        />
        <Route
          path="/Contact"
          element={
            <div className="row m-0 p-0 d-flex">
              <div className="col-2 p-0 d-none d-md-block" id="act-1">
                <NavbarContact />
              </div>
              <div
                className="col-10 p-1 d-none d-md-flex flex-column justify-content-center"
                id="act-2"
              >
                <Contact />
              </div>
              <div
                className="col-12  d-flex d-md-none flex-column justify-content-center"
                id="act-3"
              >
                <NavbarContact />
                <Contact />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
