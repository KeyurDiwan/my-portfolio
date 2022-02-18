import React from "react";
import styled from "styled-components";

import onnbike from '../../assets/homepa.png'
// import sudoku from '../../assets/sudoku.png'
import shope from '../../assets/shope.png'
import app from '../../assets/app.png'
import game from '../../assets/shooting.PNG'
import slack from '../../assets/Slack.PNG'

function Project() {
  return (
    <MainPro id="project">
      <Body>
        <h1>Projects</h1>

        
        <Box>

          {/* onbikes */}
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={onnbike} alt="Not Found" />
            </div>
            <div className="detail-card">
              <h2>ONN Bikes Rental App Clone</h2>
              <p> 
                In this website, user can book any vehicle for a rent.
                <br/>
               
                This website is built with HTML, CSS, JavaScript.  
              </p>
            </div>
          

              <a
              href="https://github.com/KeyurDiwan/onnBikes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="github"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
     

              <a
              href="https://keyurdiwan.github.io/onnBikes/home.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="heroku"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
        
            
            {/* <a
              href="https://keyurdiwan.github.io/onnBikes/home.html"
              target="_blank"
              rel="noopener noreferrer" > <button style={{
                  "padding":" 0.7rem 2rem 0.7rem 2rem",
                  "color": "white",
                  "background-color": "rgba(67, 172, 247, 0.96)",
                  "box-shadow": '0 18.2571px 21.6157px -15.9059px #3189f4',
                  "border": "0px",
                  "border-radius": "3rem",
                  "letter-spacing": "0.1rem",
                  "font-size": "1rem",
                  "font-weight": "bolder",
  
              }} >
                View Live Demo
              </button> </a>
            

             <a
              href="https://github.com/KeyurDiwan/onnBikes"
              target="_blank"
              rel="noopener noreferrer" > <button style={{
                  "padding":" 0.7rem 2rem 0.7rem 2rem",
                  "color": "white",
                  "background-color": "rgba(67, 172, 247, 0.96)",
                  "box-shadow": '0 18.2571px 21.6157px -15.9059px #3189f4',
                  "border": "0px",
                  "border-radius": "3rem",
                  "letter-spacing": "0.1rem",
                  "font-size": "1rem",
                  "font-weight": "bolder",
  
              }} >
                View Source Code
              </button> </a> */}
           
          </InnerBox>

               {/* google */}
          <InnerBox data-aos="zoom-in">
            <div>
              <img src="https://user-images.githubusercontent.com/89068106/151971308-7a727370-5519-4355-9aa9-6c2a8667561e.png" alt="Not Found" />
            </div>
            <div className="detail-card">
              <h2> Google Clone </h2>
              <p>
              In This website user can search
              anything and it shows results using 
              Google CustomSearch API. 
              
                 <br/>
                This game is built with NextJs, TailwindCSS 
              </p>
            </div>
          
            
              <a
              href="https://github.com/KeyurDiwan/google-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="github"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
          

              <a
              href="https://googleclone-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="heroku"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
           

          </InnerBox>

         
              {/* 2d game */}
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={game} alt="Not Found" />
            </div>
            <div className="detail-card">
              <h2> Shooting Game </h2>
              <p>
                2D Shooting Game 
                <br />
                <br />
                This game is built with HTML, Canvas, CSS, JavaScript. 
              </p>
            </div>

              <a
              href="https://github.com/KeyurDiwan/Shooting-Game"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="github"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
           

              <a
              href="https://keyurdiwan.github.io/Shooting-Game/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="heroku"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
       


           {/* <a
              href="https://keyurdiwan.github.io/Shooting-Game/index.html"
              target="_blank"
              rel="noopener noreferrer" > <button style={{
                  "padding":" 0.7rem 2rem 0.7rem 2rem",
                  "color": "white",
                  "background-color": "rgba(67, 172, 247, 0.96)",
                  "box-shadow": '0 18.2571px 21.6157px -15.9059px #3189f4',
                  "border": "0px",
                  "border-radius": "3rem",
                  "letter-spacing": "0.1rem",
                  "font-size": "1rem",
                  "font-weight": "bolder",
  
              }} >
                View Live Demo
              </button> </a>
            

             <a
              href="https://github.com/KeyurDiwan/Shooting-Game"
              target="_blank"
              rel="noopener noreferrer" > <button style={{
                  "padding":" 0.7rem 2rem 0.7rem 2rem",
                  "color": "white",
                  "background-color": "rgba(67, 172, 247, 0.96)",
                  "box-shadow": '0 18.2571px 21.6157px -15.9059px #3189f4',
                  "border": "0px",
                  "border-radius": "3rem",
                  "letter-spacing": "0.1rem",
                  "font-size": "1rem",
                  "font-weight": "bolder",
  
              }} >
                View Source Code
              </button> </a> */}
          </InnerBox>
         
        </Box>


        <Box>
       
        {/* shoppe4reebok */}
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={shope} alt="Not Found" />
            </div>
            <div className="detail-card">
              <h2>Shop4Reebok Clone</h2>
              <p>
              In this website, user can buy all products of reebok.
                <br/>
               
                This website is built with HTML, CSS, JavaScript.  
              </p>
            </div>

              <a
              href="https://github.com/KeyurDiwan/shop4reebok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="github"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
      

              <a
              href="https://keyurdiwan.github.io/shop4reebok/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="heroku"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
         

            {/* <a
              href="https://keyurdiwan.github.io/shop4reebok/"
              target="_blank"
              rel="noopener noreferrer" > <button style={{
                  "padding":" 0.7rem 2rem 0.7rem 2rem",
                  "color": "white",
                  "background-color": "rgba(67, 172, 247, 0.96)",
                  "box-shadow": '0 18.2571px 21.6157px -15.9059px #3189f4',
                  "border": "0px",
                  "border-radius": "3rem",
                  "letter-spacing": "0.1rem",
                  "font-size": "1rem",
                  "font-weight": "bolder",
  
              }} >
                View Live Demo
              </button> </a>
            

             <a
              href="https://github.com/KeyurDiwan/shop4reebok"
              target="_blank"
              rel="noopener noreferrer" > <button style={{
                  "padding":" 0.7rem 2rem 0.7rem 2rem",
                  "color": "white",
                  "background-color": "rgba(67, 172, 247, 0.96)",
                  "box-shadow": '0 18.2571px 21.6157px -15.9059px #3189f4',
                  "border": "0px",
                  "border-radius": "3rem",
                  "letter-spacing": "0.1rem",
                  "font-size": "1rem",
                  "font-weight": "bolder",
  
              }} >
                View Source Code
              </button> </a> */}
          </InnerBox>
          
              {/* slack */}
        <InnerBox data-aos="zoom-in">
            <div>
              <img src={slack} alt="Not Found" />
            </div>
            <div className="detail-card">
              <h2>Slack Clone</h2>
              <p>
                In This website we can chat with people
                <br />
                 This website is built with ReactJs, NodeJS, Express, CSS, gstrm.io.
              </p>
            </div>

              <a
              href="https://github.com/KeyurDiwan/Slack-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="github"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
        

              <a
              href="https://slack-clone-gstrm.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="heroku"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
         
            {/* <a
              href="https://slack-clone-gstrm.netlify.app/"
              target="_blank"
              rel="noopener noreferrer" > <button style={{
                  "padding":" 0.7rem 2rem 0.7rem 2rem",
                  "color": "white",
                  "background-color": "rgba(67, 172, 247, 0.96)",
                  "box-shadow": '0 18.2571px 21.6157px -15.9059px #3189f4',
                  "border": "0px",
                  "border-radius": "3rem",
                  "letter-spacing": "0.1rem",
                  "font-size": "1rem",
                  "font-weight": "bolder",
  
              }} >
                View Live Demo
              </button> </a>
            

             <a
              href="https://github.com/KeyurDiwan/Slack-clone"
              target="_blank"
              rel="noopener noreferrer" > <button style={{
                  "padding":" 0.7rem 2rem 0.7rem 2rem",
                  "color": "white",
                  "background-color": "rgba(67, 172, 247, 0.96)",
                  "box-shadow": '0 18.2571px 21.6157px -15.9059px #3189f4',
                  "border": "0px",
                  "border-radius": "3rem",
                  "letter-spacing": "0.1rem",
                  "font-size": "1rem",
                  "font-weight": "bolder",
  
              }} >
                View Source Code
              </button> </a> */}
          </InnerBox>

          {/* water  reminder*/}
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={app} alt="Not Found" />
            </div>
            <div className="detail-card">
              <h2>Water Reminder App</h2>
              <p>
                water reminder is an application with main function
                is to help us keep water tracker. 
                <br />
              This app built with Kotlin
              </p>
            </div>

              <a
              href="https://github.com/KeyurDiwan/Water-Reminder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="github"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
          

              <a
              href="https://drive.google.com/file/d/1_4MfRUZAACguTKjjArUnBw3DICmCfmDo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="heroku"
                type="logo"
                size="md"
                animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
       
             {/* <a
              href="https://drive.google.com/file/d/1_4MfRUZAACguTKjjArUnBw3DICmCfmDo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer" > <button style={{
                  // "padding":" 0.7rem 2rem 0.7rem 2rem",
                  "color": "white",
                  "background-color": "rgba(67, 172, 247, 0.96)",
                  "box-shadow": '0 18.2571px 21.6157px -15.9059px #3189f4',
                  "border": "0px",
                  "border-radius": "3rem",
                  "letter-spacing": "0.1rem",
                  "font-size": "0.5rem",
                  "font-weight": "bolder",
  
              }} >
                View Live Demo
              </button> </a>
            

             <a
              href="https://github.com/KeyurDiwan/Water-Reminder"
              target="_blank"
              rel="noopener noreferrer" > <button style={{
                  // "padding":" 0.7rem 2rem 0.7rem 2rem",
                  "color": "white",
                  "background-color": "rgba(67, 172, 247, 0.96)",
                  "box-shadow": '0 18.2571px 21.6157px -15.9059px #3189f4',
                  "border": "0px",
                  "border-radius": "3rem",
                  "letter-spacing": "0.1rem",
                  "font-size": "0.5rem",
                  "font-weight": "bolder",
  
              }} >
                View Source Code
              </button> </a> */}
          </InnerBox>
        </Box>

          

      </Body>
    </MainPro>
  );
}

export default Project;

const MainPro = styled.div`
  padding: 100px 0;
`;

const Body = styled.div`
  margin: 0 auto;
  max-width: 1240px;
 
  h1 {
    font-family: "Space Grotesk";
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 840px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 999px) {
    h1 {
      text-align: center;
    }
  }
  @media screen and (max-width: 590px){
    margin-left: 20px;
    margin-right: 20px;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 999px) {
    flex-flow: wrap;
    align-items: center;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
  }
`;
const InnerBox = styled.div`
  border: 0px;
  margin: 1rem;
  flex: 1;
  border-radius:2rem;
  border-radius: 12.8028px;
    background-color: ${props=>props.theme.cardColor};
    box-shadow: ${props=>props.theme.cardShadow};
    width: 100%;
text-align:left;
padding: 2rem 1rem;
  

  img {
    width: 95%;
   
    
 
    border-radius:1rem;
  }
  .detail-card {
    padding: 1rem;
    text-align:left;
  }

  box-icon{
    margin-left:4%
    
  }
  button {
    border: 0px;
    background-color:  rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
    padding: 0.99rem 1.2rem;
    color: white;
    border-radius:2rem;
    margin-bottom: 1rem;
    font-size:1.4rem;
    font-family: 'Space Grotesk', sans-serif;
  } 
  a {
    text-decoration: none;
  }
  p{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.95rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  h2{
  font-size: 1.4rem;
   font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 1rem;
  }
`;
