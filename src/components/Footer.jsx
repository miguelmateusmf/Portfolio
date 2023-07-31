import React from "react";
import ImgLinkedin from "../images/linkedin.png";
import ImgEmail from "../images/email.png";
import ImgGithub from "../images/github.png";
import ImgDoc from "../images/documents.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footeraid">
        <div className="desktopOnly">Contacts: </div>
        <ul className="horizontal-list">
          <li>
            <a href="https://www.linkedin.com/in/miguel-franganito/">
              <img src={ImgLinkedin} alt="profile" width="26px"></img>
            </a>
          </li>
          <li>
            <a href="mailto:miguelmmfranganito@outlook.com">
              <img src={ImgEmail} alt="profile" width="26px"></img>
            </a>
          </li>
        </ul>
      </div>
      <div className="footeraid">
        <div className="desktopOnly">GitHub and CV: </div>
        <ul className="horizontal-list">
          <li>
            <a href="https://github.com/miguelmateusmf">
              <img src={ImgGithub} alt="profile" width="26px"></img>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/106cykxjxK2mkVj0Qjs0Fp59lTH2m0VG6/view?usp=sharing">
              <img src={ImgDoc} alt="profile" width="26px"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
