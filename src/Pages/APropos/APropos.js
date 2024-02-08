import React from "react";
import "./APropos.css";
import logo1 from "./../../img/trace.svg";

function APropos() {
  return (
    <section className="APropos border shadow-sm d-flex flex-column">
      <div className="part-3 text-center">
        <img src={logo1} width={"30%"} alt="..." />
      </div>
      <div className="part-4 border align-self-end">
        <h5 className="p-3 text-center align-self-end">
          Je m'appelle Younes Benhaga et je suis actuellement étudiant en
          licence professionnelle en Réseaux et Télécommunications à Rabat. Mon
          parcours académique comprend une deuxième année en BTS Al Idrissi
          Agadir, spécialisé en Systèmes et Réseaux Informatiques, ainsi qu'une
          attestation du baccalauréat en Sciences et Technologies Electrique au
          lycée Ibn Soulayman Rasmouki de Tiznit. Passionné par les technologies
          de l'information, j'ai également acquis une expérience pratique lors
          de stages professionnels.
        </h5>
      </div>
    </section>
  );
}

export default APropos;
