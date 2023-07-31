import React from "react";
import ImgESN from "../images/esn_logo_big.png";

export default function Loading() {
  return (
    <div>
      <div className="screen intro">
        <h1 className="size2">What is my volunteering about?</h1>
        <img src={ImgESN} alt="ESN logo" className="img-volbig"></img>
      </div>
      <div className="screen vertical-spacing">
        <div className="second-intro">
          <div className="second-aid">
            <h1 className="para-border">What is?</h1>
            <p className="size para-border">
              Erasmus Student Network (ESN) is one of the biggest student
              associations in Europe. We are present in more than 1000 Higher
              Education Institutions from over 40 countries. The network is
              constantly developing and expanding. We have around 15,000 active
              members that are in many sections supported by so called buddies
              mainly taking care of international students. Thus, ESN involves
              around 40,000 young people offering its services to around 350,000
              international students every year.
            </p>
          </div>
          <img src={ImgESN} alt="profile" height={121.88}></img>
        </div>
        <div className="second-intro">
          <img
            src={ImgESN}
            alt="profile"
            className="desktopOnly"
            height={121.88}
          ></img>
          <div className="second-aid">
            <h1 className="para-border">ESN's Mission and Vision</h1>
            <p className="size para-border">
              Enrichment of society through international students.<br></br>
              <br></br>
              By 2025, ESN will be the global network of the Erasmus Generation,
              committed to improving international education and providing
              self-development opportunities to two million young people,
              fostering intercultural understanding and creating positive change
              in society.
            </p>
          </div>
          <img
            src={ImgESN}
            alt="profile"
            className="mobileOnly"
            height={121.88}
          ></img>
        </div>
        <div className="second-intro">
          <div className="second-aid">
            <h1 className="para-border">My experience</h1>
            <p className="size para-border">
              ESN has been a new way for me to connect with people. Through
              being part of it, I've had the opportunity to meet a lot of
              different people from different backgrounds and got the chance to
              improve people's mobility experience. I learned new ways to work,
              communicate and overall it made me grow a lot. I'm very happy to
              call myself an ESNer.
            </p>
          </div>
          <img src={ImgESN} alt="profile" height={121.88}></img>
        </div>
      </div>
    </div>
  );
}
