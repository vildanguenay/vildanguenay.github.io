import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <footer class="footer">
      <a href="mailto:vildan-guenay@hotmail.com" className="footerLink">
        vildan-guenay@hotmail.com
      </a>
      <ul class="socialList">
        <li className="socialListItem">
          <a
            href="https://www.linkedin.com/in/vildan-guenay"
            className="socialListLink"
          >
            <i>
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </a>
        </li>
        <li className="socialListItem">
          <a href="https://github.com/vildanguenay" className="socialListLink">
            <i>
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
        </li>
        <li className="socialListItem">
          <a
            href="https://www.instagram.com/vildanguenay/"
            className="socialListLink"
          >
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
