import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <footer class="footer">
      <a href="mailto:vildan-guenay@hotmail.com" className="footerLink">
        vildan-guenay@hotmail.com
      </a>
      <ul class="socialList">
        <li className="socialListItem">
          <a href="https://www.google.com/" className="socialListLink">
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
        </li>
        <li className="socialListItem">
          <a href="https://www.google.com/" className="socialListLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
          </a>
        </li>
        <li className="socialListItem">
          <a href="https://www.google.com/" className="socialListLink">
            <i>
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
