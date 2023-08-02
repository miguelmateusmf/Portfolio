import React from "react";
import ImgPerfil from "../images/perfil.jpg";
import ImgESN from "../images/esn_star_black.png";
import ImgFD from "../images/coding.png";
import ImgSports from "../images/running.png";

export default function Aboutme() {
  return (
    <div className="screen spacing-about">
      <div className="profile">
        <div className="inner-profile">
          <div className="size  para-border">
            Hi, I am <br></br> <div className="name">Miguel Franganito</div>A
            software developer based in Portugal looking to build digital
            experiences that leave a lasting impression.
          </div>
        </div>
        <img
          src={ImgPerfil}
          alt="profile"
          className="inner-profile profilephoto"
        ></img>
      </div>

      <div className="second-profile">
        <div className="inner-profile add-second">
          <img src={ImgFD} alt="profile" width="26px"></img>
          <h1 className="para-border">Software Developer</h1>
          <p className="size para-border">
            I'm currently learning and exploring within the frontend, backend
            and fullstack development fields, and you can find the projects I
            have worked on on my Projects page!
          </p>
        </div>
        <div className="inner-profile add-second">
          <img src={ImgESN} alt="profile" width="26px"></img>
          <h1 className="para-border">ESN Volunteer</h1>
          <p className="size para-border">
            I'm a volunteer at ESN Castelo Branco, and so far has being one of
            the best experiences of my life. I get to contribute to a large
            community and learn a lot about other fields. You can read more
            about it in my Volunteering page!
          </p>
        </div>
        <div className="inner-profile add-second">
          <img src={ImgSports} alt="profile" width="26px"></img>
          <h1 className="para-border">Sports</h1>
          <p className="size para-border">
            Throught my life I allways practiced sports and they have taught a
            lot. I learned how to be consistent, work has a team, and to set
            long term goals. I practiced basketball, badminton and athletics
            which is my all time favorite.
          </p>
        </div>
      </div>
    </div>
  );
}
