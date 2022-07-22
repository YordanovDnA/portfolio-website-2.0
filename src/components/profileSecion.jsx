import React from "react";
import ReactImageAppear from "react-image-appear";
import IliyanYordnaov from "../imgs/profile/IliyanYordanov.jpg";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileSection = () => {
  return (
    <React.Fragment>
      <div className="profileImgWrapper">
        <ReactImageAppear
          className="profileImg"
          src={IliyanYordnaov}
          animation="fadeInLeft"
        />
        <span id="profileImgDots" className="dotsEffect"></span>
      </div>
      <h1 className="text-center mt-3">Iliyan Yordanov</h1>
      <h6 className="text-center text-secondColor">Front end developer</h6>
      <div className="col-12 mt-4 d-flex justify-content-center">
        <a
          rel="noopener noreferrer"
          href="https://www.facebook.com/MR.ILIYAN.YORDANOV/"
          target="_blank"
        >
          <FontAwesomeIcon className="socialMediaIcons" icon={faFacebook} />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/iliyan-yordanov-957992171/"
          target="_blank"
        >
          <FontAwesomeIcon className="socialMediaIcons" icon={faLinkedin} />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/YordanovDnA"
          target="_blank"
        >
          <FontAwesomeIcon className="socialMediaIcons" icon={faGithub} />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://codepen.io/iliyan-yordanov"
          target="_blank"
        >
          <FontAwesomeIcon className="socialMediaIcons" icon={faCodepen} />
        </a>
      </div>
      <div className="container mt-4">
        <h3 className="ml-2">Skills</h3>
        <span className="badge bg-blue text-dark ml-2">HTML 5</span>
        <span className="badge bg-blue text-dark ml-2">CSS 3</span>
        <span className="badge bg-blue text-dark ml-2">JavaScript</span>
        <span className="badge bg-blue text-dark ml-2">jQuery</span>
        <span className="badge bg-blue text-dark ml-2">Git</span>
        <span className="badge bg-blue text-dark ml-2">Heroku-cli</span>
        <span className="badge bg-blue text-dark ml-2">
          <abbr title="Amazon Web Services">AWS</abbr>
        </span>
        <span className="badge bg-blue text-dark ml-2">Webpack</span>
        <span className="badge badge-warning ml-2">React</span>
        <span className="badge badge-warning ml-2">Redux</span>
        <span className="badge badge-warning ml-2">NodeJS</span>
        <span className="badge badge-warning ml-2">Express</span>

        <a
          href="https://drive.google.com/u/1/uc?id=1XvieqfFfkRqZIIqcwPDzLK9iyc3GsS_i&export=download"
          className="btn btn-outline-light mt-4 mx-auto d-block w-100"
          type="button"
        >
          Download CV
        </a>
      </div>
    </React.Fragment>
  );
};

export default ProfileSection;
