import "./style.css";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderSharedIcon from "@mui/icons-material/FolderShared";

function Footer() {
  return (
    <div className="footerContainer">
      <h1 className="footerName">
        This website was made by Matias Delorenzi for learning purposes. You can
        get the full code in my github profile or see more of my projects in my{" "}
        <a href="https://matiasdelorenzi.github.io/portfolio/">portfolio</a>.
      </h1>
      <div className="footerSocials">
        <a
          href="https://github.com/MatiasDelorenzi/netflix-clone-react"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon className="footerSocialsIcon github" />
        </a>
        <a
          href="https://www.linkedin.com/in/matias-delorenzi/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon className="footerSocialsIcon linkedin" />
        </a>
        <a
          href="https://matiasdelorenzi.github.io/portfolio/"
          rel="noreferrer"
          target="_blank"
        >
          <FolderSharedIcon className="footerSocialsIcon portfolio" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
