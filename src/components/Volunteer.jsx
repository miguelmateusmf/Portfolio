import React from "react";
import ImgESN from "../images/esn_logo_big.png";
import ImgESNCluj from "../images/cmcluj.jpg";
import ImgESNToulouse from "../images/sweptl.jpg";
import ImgESNCb from "../images/pncb.jpg";

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
          <img src={ImgESNCluj} alt="profile" width={300}></img>
        </div>
        <div className="second-intro">
          <img
            src={ImgESNToulouse}
            alt="profile"
            className="desktopOnly"
            width={300}
          ></img>
          <div className="second-aid">
            <h1 className="para-border">My experience</h1>
            <p className="size para-border">
              In my first year, I participated in the organization of local
              events for the Erasmus students in Castelo Branco, went to several
              training and statutory events and I joined the team that made EGM
              Portugal 2022 - the first edition of EGM, an event where we
              gathered over 700 participants. In my second year, I decided to
              challenge myself further and thus I became my section's Events
              Manager. As an Events Manager, I was responsible for all local
              events happening in Castelo Branco, and by leading a team of 7
              people we managed to organize 20 local events throughout the year,
              for 100+ Erasmus students. As my last challenge of the mandate, I
              was the Main Organizer of a national event in Castelo Branco.
            </p>
          </div>
          <img
            src={ImgESNToulouse}
            alt="profile"
            className="mobileOnly"
            width={300}
          ></img>
        </div>
        <div className="second-intro">
          <div className="second-aid">
            <h1 className="para-border">How does it influence my work life</h1>
            <p className="size para-border">
              In ESN I was able to develop a lot of different skills. While
              working in distinct environments and with various goals I improved
              my communication, teamwork, and problem-solving skills, and the
              way I organize my work. I also learned how to manage a team and
              resolve conflicts. ESN has been a new way for me to connect with
              people. This has been a great experience, where I'm constantly
              learning and improving the way I work. I believe the way I grow in
              ESN is extremely beneficial to me and it positively impacts my
              career.
            </p>
          </div>
          <img src={ImgESNCb} alt="profile" width={300}></img>
        </div>
      </div>
    </div>
  );
}
