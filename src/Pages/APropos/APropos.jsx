import React from "react";
import logo1 from "./../../img/trace.svg";

function APropos() {
  return (
    <div className="APropos shadow d-flex flex-column mx-md-4">
      <div className="part-3 text-center">
        <img src={logo1} width={"30%"} alt="..." />
      </div>
      <div className="part-4 align-self-end">
        <h5 className="p-3 text-center align-self-end">
        Je m'appelle Younes Benhaga et je suis un freelancer passionné par les technologies de l'information. Mon parcours académique comprend une licence professionnelle en Réseaux et Télécommunications à Rabat, ainsi qu'une deuxième année en BTS Al Idrissi Agadir, spécialisé en Systèmes et Réseaux Informatiques. De plus, j'ai obtenu une attestation du baccalauréat en Sciences et Technologies Électriques au lycée Ibn Soulayman Rasmouki de Tiznit.
        </h5>
      </div>
    </div>
  );
}

export default APropos;
