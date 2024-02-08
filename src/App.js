import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";


// import AsideBar from "./Asidebare/AsideBar";

import NavbarAcu from "./Pages/Acueil/Navbar/Navbar";
import Acueil from "./Pages/Acueil/Acueil";
import AcueilSide from "./Pages/Acueil/Acueil-side";

import NavbarAPROPOS from "./Pages/APropos/Navbar/Navbar";
import APropos from './Pages/APropos/APropos'

import NavbarCompetence from "./Pages/Competence/Navbar/Navbar";
import NavbarExperience from "./Pages/Experience/Navbar/Navbar";
import NavbarContact from "./Pages/Contact/Navbar/Navbar";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          
          element={
            <div className="m-0 p-0 d-flex">
              <div className="col-2 border">
                <AcueilSide />
              </div>
              <div className="col-10 p-0">
                <NavbarAcu />
               <Acueil />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/APropos"
          element={
            <div className="m-0 p-0 d-flex">
              <div className="col-2 border">
                <AcueilSide />
              </div>
              <div className="col-10 p-0">
                <NavbarAPROPOS />
                <APropos />
              </div>
            </div>
          }
        />
        <Route
          path="/Competence"
          element={
            <div className="m-0 p-0 d-flex">
              <div className="col-2 border">
                <AcueilSide />
              </div>
              <div className="col-10 p-0">
                <NavbarCompetence />
                Competence
              </div>
            </div>
          }
        />

        <Route
          path="/Experience"
          element={
            <div className="m-0 p-0 d-flex">
              <div className="col-2 border">
                <AcueilSide />
              </div>
              <div className="col-10 p-0">
                <NavbarExperience />
                Experience
              </div>
            </div>
          }
        />
        <Route
          path="/Contact"
          element={
            <div className="m-0 p-0 d-flex">
              <div className="col-2 border">
                <AcueilSide />
              </div>
              <div className="col-10 p-0">
                <NavbarContact />
                Contact
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
