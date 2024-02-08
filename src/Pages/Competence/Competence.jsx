import React from "react";
import { ReactComponent as C } from "./../../img/langage/c.svg";
import { ReactComponent as Java } from "./../../img/langage/java.svg";
import { ReactComponent as Python } from "./../../img/langage/python.svg";
import { ReactComponent as Php } from "./../../img/langage/php.svg";
import { ReactComponent as Css } from "./../../img/langage/css.svg";
import { ReactComponent as Js } from "./../../img/langage/js.svg";
import { ReactComponent as ReactIcon } from "./../../img/langage/react.svg";
import { ReactComponent as Bootstrap } from "./../../img/langage/bootstrap.svg";
import { ReactComponent as Html } from "./../../img/langage/html.svg";
import { motion } from "framer-motion";

function Comptence() {
  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.8 },
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <motion.section
      className="Comptence shadow d-flex flex-column mx-md-4"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <motion.h4 variants={variants}>Les langages de programmation :</motion.h4>
      <motion.div
        className="programmation-icon text-center"
        variants={variants}
      >
        <i>
          <C id="cwit" />
        </i>
        <i>
          <Java id="cwit" />
        </i>
        <i>
          <Python id="cwit" />
        </i>
        <i>
          <Php id="cwit" />
        </i>
      </motion.div>
      <motion.h4 variants={variants}>
        Les langages de développement web :
      </motion.h4>
      <motion.div
        variants={variants}
        className="programmation-icon text-center"
      >
        <i>
          <Html id="cwit" />
        </i>
        <i>
          <Css id="cwit" />
        </i>
        <i>
          <Js id="cwit" />
        </i>
        <i>
          <Bootstrap id="cwit" />
        </i>
        <i>
          <ReactIcon id="cwit" />
        </i>
      </motion.div>
      <motion.h4 variants={variants}>
        Mes connaissances s'étendent également :
      </motion.h4>
      <motion.ul variants={variants}>
        <motion.li variants={variants}>
          <motion.h6 variants={variants}>
            Au niveau des systèmes informatiques :
          </motion.h6>
          <motion.ul className="Mes-connaissances" variants={variants}>
            <motion.li variants={variants}>
              Choix, installation et test des équipements informatiques ;
            </motion.li>
            <motion.li variants={variants}>
              Dépanner les micro-ordinateurs, les serveurs et le réseau ;
            </motion.li>
            <motion.li variants={variants}>
              Installer et administrer un poste de travail ;
            </motion.li>
            <motion.li variants={variants}>
              Installer et administrer un système d’exploitation réseau ;
            </motion.li>
            <motion.li variants={variants}>
              Installer et administrer les serveurs d’application (messagerie,
              serveur web, ..) ;
            </motion.li>
            <motion.li variants={variants}>
              Suivre et faire évoluer les systèmes d’exploitation ;
            </motion.li>
            <motion.li variants={variants}>
              Assurer un support technique auprès des utilisateurs.
            </motion.li>
          </motion.ul>
        </motion.li>
      </motion.ul>
      <motion.ul variants={variants}>
        <motion.li variants={variants}>
          <motion.h6 variants={variants}>
            Au niveau des réseaux informatiques :
          </motion.h6>
          <motion.ul variants={variants} className="Mes-connaissances">
            <motion.li variants={variants}>
              Concevoir et planifier l’implantation d’un réseau local
              d’entreprise
            </motion.li>
            <motion.li variants={variants}>
              Choix, câblage et test de la connectique et équipements réseau ;
            </motion.li>
            <motion.li variants={variants}>
              Choix et installation d’un serveur et d’un poste de travail sur le
              réseau ;
            </motion.li>
            <motion.li variants={variants}>
              Choix et mise en œuvre de configurations de type client-serveur ;
            </motion.li>
            <motion.li variants={variants}>
              Assurer la gestion et la supervision d’un réseau informatique ;
            </motion.li>
            <motion.li variants={variants}>
              Assurer la sécurité d’un réseau d’entreprise ;
            </motion.li>
            <motion.li variants={variants}>
              Diagnostiquer et résoudre les problèmes du réseau informatique ;
            </motion.li>
            <motion.li variants={variants}>
              Installer, gérer et sécuriser les éléments actifs d’un réseau
              locale ou étendu.
            </motion.li>
          </motion.ul>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
}

export default Comptence;
