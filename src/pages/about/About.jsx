import React from "react";
import { BsPersonFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import { Animate } from "react-simple-animate";
import "./about.scss";
import { FaDatabase, FaReact, FaHtml5,  FaJs } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Sowbaranika Eswari",
  },
  {
    label: "Age",
    value: "31",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "sati.sow@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 8870201466",
  },
];

const jobSummary =
`Passionate and driven developer eager to leverage skills in the MERN stack, having hands-on
experience in building robust applications. Proficient in React for crafting intuitive and
dynamic user interfaces, coupled with Node.js for scalable backend solutions. Familiarity with
MongoDB for efficient data management.`
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsPersonFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>MERN Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
             
              <div>
              <FaReact size={60} color="var( --yellow-theme-main-color)"/>
              </div>
              
              <div>
              <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
              <FaHtml5 size={60} color="var( --yellow-theme-main-color)" />
              </div>
              
              <div>
              <FaJs size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;