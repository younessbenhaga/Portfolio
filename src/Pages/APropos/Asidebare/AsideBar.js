import React from "react";
import "./AsideBar.css";
import profile from "../img/profile.jpg";
// import { useEffect } from "react";
import { FaHashtag } from "react-icons/fa";
import { MdFormatListNumbered } from "react-icons/md";


function AsideBar() {
//   useEffect(() => {
//     const allP = document.querySelectorAll("p");
//     const info = document.querySelector(".info");
//     if (window.screen.width < 778) {
//       for (let index = 0; index < allP.length; index++) {
//         allP[index].style.display = "none";
//       }
//       info.style.display = "none";
//     } else {
//       for (let index = 0; index < allP.length; index++) {
//         allP[index].style.display = "block";
//       }
//       info.style.display = "flex";
//     }
//   }, []);
//   window.addEventListener("resize", function () {
//     const allP = document.querySelectorAll("p");
//     const info = document.querySelector(".info");
//     if (this.screen.width < 778) {
//       for (let index = 0; index < allP.length; index++) {
//         allP[index].style.display = "none";
//       }
//       info.style.display = "none";
//     } else {
//       for (let index = 0; index < allP.length; index++) {
//         allP[index].style.display = "block";
//       }
//       info.style.display = "flex";
//     }
//   });
  return (
    <div>
      <button
        className="btn btn-primary d-md-none asidButton"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive"
        
      >
       <i> <MdFormatListNumbered /></i>
      </button>
      
      <div
        className="offcanvas-md offcanvas-start"
        tabIndex={-1}
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">
           Tite
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <aside>
            <div className="profile">
              <img src={profile} alt="profile" />
              <div className="info">
                <span className="name">Benhaga Younes</span>
                <span className="job">Student</span>
              </div>
            </div>
            <div className="asidbar">
              <div className="square">
                <i>
                  <FaHashtag />
                </i>
                <p>First Project </p>
              </div>
              <div className="square">
                <i>
                  <FaHashtag />
                </i>
                <p>First Project </p>
              </div>
              <div className="square">
                <i>
                  <FaHashtag />
                </i>
                <p>First Project </p>
              </div>
              <div className="square">
                <i>
                  <FaHashtag />
                </i>
                <p>First Project </p>
              </div>
              <div className="square">
                <i>
                  <FaHashtag />
                </i>
                <p>First Project </p>
              </div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default AsideBar;
