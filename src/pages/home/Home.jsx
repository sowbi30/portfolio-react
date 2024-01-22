import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import resumePDF from "../../images/SOWBARANIKA ESWARI_G_CV.pdf";
import profilePhoto from "../../images/profile.jpg"; 
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.target = "_blank";
    link.download = "SOWBARANIKAESWARI.pdf";
    link.click();
  };

  return (
    <section id="home" className="home">
      <PageHeaderContent
        headerText="Hi there!!!"
        // icon={<BsInfoCircleFill size={40} />}
      />
      <div className="home__photo-wrapper">
        <img
          src={profilePhoto}
          alt="Profile"
          className="home__profile-photo"
        />
      </div>
      <div className="home__text-wrapper">
        <h4>
         I'm Sowbaranika Eswari
          <br />
          Mern Stack developer
        </h4>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__buttons">
          <div className="home__contact-me">
            <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          </div>
          <div className="home__download-cv">
            <button onClick={handleDownloadCV}>Download CV</button>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
