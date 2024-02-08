import { motion } from "framer-motion";
import space from "./../../img/Project/space.webp";
import form from "./../../img/Project/form.webp";
import tracker from "./../../img/Project/addressTracker.webp";
import advice from "./../../img/Project/advice.webp";
import Newslettre from "./../../img/Project/Newsletter.webp";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Project() {
  return (
    <div className="Project shadow-sm mx-md-4">
      <motion.section className="h-100">
        <div className="containerProj">
          <div className="wrapper flex-column flex-md-row">
            <div className="imageContainer">
              <img src={space} alt="..." />
            </div>
            <motion.div className="textContainer">
              <h2>Space tourism multi-page website</h2>
              <p>
              Compétences mises en œuvre : HTML5, Tailwind CSS, JAVASCRIPT.
              </p>
              <motion.a
                className="btn btn-dark"
                href="https://younessbenhaga.github.io/space-tourism/index.html"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                See Demo
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section className="h-100">
        <div className="containerProj">
          <div className="wrapper flex-column flex-md-row">
            <div className="imageContainer">
              <img src={form} alt="..." />
            </div>
            <motion.div className="textContainer">
              <h2>Multi-step form</h2>
              <p>
              Compétences mises en œuvre : HTML5, BOOTSTRAP, JAVASCRIPT.
              </p>
              <motion.a
                className="btn btn-dark"
                href="https://younessbenhaga.github.io/multi-step-form/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                See Demo
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section className="h-100">
        <div className="containerProj">
          <div className="wrapper flex-column flex-md-row">
            <div className="imageContainer">
              <img src={tracker} alt="..." />
            </div>
            <motion.div className="textContainer">
              <h2>IP Address Tracker</h2>
              <p>
              Compétences mises en œuvre : HTML5, BOOTSTRAP, JAVASCRIPT, API.
              </p>
              <motion.a
                className="btn btn-dark"
                href="https://younessbenhaga.github.io/ip-address-tracker/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                See Demo
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section className="h-100">
        <div className="containerProj">
          <div className="wrapper flex-column flex-md-row">
            <div className="imageContainer">
              <img src={advice} alt="..." />
            </div>
            <motion.div className="textContainer">
              <h2>Advice generator app</h2>
              <p>
              Compétences mises en œuvre : HTML5, BOOTSTRAP, JAVASCRIPT, API.
              </p>
              <motion.a
                className="btn btn-dark"
                href="https://younessbenhaga.github.io/Advice-generator/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                See Demo
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section className="h-100">
        <div className="containerProj">
          <div className="wrapper flex-column flex-md-row">
            <div className="imageContainer">
              <img src={Newslettre} alt="..." />
            </div>
            <motion.div className="textContainer">
              <h2>Newsletter sign-up form</h2>
              <p>
              Compétences mises en œuvre : HTML5, BOOTSTRAP, JAVASCRIPT.
              </p>
              <motion.a
                className="btn btn-dark"
                href="https://younessbenhaga.github.io/Newsletter-sign-up-form/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                See Demo
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.div className="to_bottom">
        <motion.i
          initial={{ transform: "translateY(-50px)" }}
          animate={{ transform: "translateY(0px)" }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <MdKeyboardDoubleArrowDown />
        </motion.i>
      </motion.div>
    </div>
  );
}
