import React from "react";
import Curtis_Resume from "../../assets/keyur_diwan_resume.pdf";
import styled from "styled-components";
// import about from "../../assets/abc.svg";
import img from "../../assets/img.jpg";
import "boxicons";

function About() {
  return (
    <MainAbout id="about">
      <AboutSection>
        <img src={img} alt="about me" />

        <AboutDiv>
          <h1> About Me</h1>
          <p data-aos="fade-left">

            I've always had a natural curiosity for software. As a child,
            I loved to watch tech videos and surf the Internet. My passion for
            Software continued to develop because of which i decide to study
            computer engineering.

            Presently, I am a Developer, specialising in the web development
            and app development arena. I have been developed some Android and
            Web Projects using JavaScript, React, Kotlin, Java etc..
          
            {/* I am a creative FullStack Engineer and Self-Proclaimed genius. I
            have always been passionate about everything related to technology
            and IT, especially the web professions, which I made my career by
            always giving the best of myself as a Web Developer. I also love to
            code things from scratch, and enjoy bringing ideas to life in the
            browser, combining the acquisition of new knowledge with independent
            work on various projects. Aside code I love watching movies and
            travelling to different places. */}
          </p>

          {/* <i class="bx bxs-like bx-fade-down-hover"></i> */}
          <a href={Curtis_Resume} download="Keyur_Diwan-resume">
            <button data-aos="fade-up">Download My Resume</button>
          </a>

           
        </AboutDiv>
      </AboutSection>
    </MainAbout>
  );
}
export default About;
const MainAbout = styled.div`
  padding: 100px 0;
`;

const AboutSection = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 25%;
    margin-right: 30px;
    border-radius: 40%
  }
  @media screen and (max-width: 1024px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 890px) {
    margin-left: 70px;
    margin-right: 70px; 
    flex-direction: column !important;
    img {
    width: 75%;
    margin-right: 0px;
    margin-bottom:3rem;
  }
  }
  @media screen and (max-width: 999px) {
    h1 {
      text-align: center;
    }
  }
  @media screen and (max-width: 590px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (max-width: 350px) {
    a {
      font-size: 0.8rem !important;
    }
  }
`;
// const ImgDiv = styled.div`

// `;
const AboutDiv = styled.div`
  @media screen and (max-width: 590px) {
    p {
      font-size: 0.8rem;
    }
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: bolder;
    font-size: 1.1rem;
  }
  h1 {
   font-family: "Space Grotesk";
    margin-bottom: 2rem;
  }
  p {
    line-height: 2rem;
    font-family: "Space Grotesk", sans-serif;
    margin-bottom: 3rem;
    text-align: justify;
  }
  button {
    padding: 0.7rem 2rem 0.7rem 2rem;
    color: white;
    background-color: rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
    border: 0px;
    border-radius: 3rem;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    font-weight: bolder;
    font-family: "Space Grotesk", sans-serif;

    :hover {
      border: 2px solid rgba(67, 172, 247, 0.96);
      background-color: transparent;
      transition: 0.3s;
      color: rgba(67, 172, 247, 0.96);
    }
    :focus {
      outline: none;
    }
  }
`;
