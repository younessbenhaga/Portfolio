import React from "react";
import "./Acueil.css";
import profile from "./../../img/profile.jpg";

function Acueil() {
  return (
    <section className="border shadow-sm">
      <div className="row d-flex">
        <div className="part-1 col-12 col-md-6 border">
          <h4 className="p-4 text-center my-3">
            Bienvenue sur mon portfolio en ligne ! Je suis Younes Benhaga, un
            passionné de la technologie et des réseaux. <br />Explorez les différentes
            sections pour en apprendre davantage sur mon parcours académique,
            mes compétences en programmation, mes expériences professionnelles,
            et bien plus encore.
          </h4>
        </div>
        <div className="part-2 col-12 col-md-6 border">
          <img src={profile} width={"100%"} alt="..." />
        </div>
      </div>
    </section>
  );
}

export default Acueil;
