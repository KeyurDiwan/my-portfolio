import React from "react";
import styled from "styled-components";
// import { ReactComponent as Css } from "../../assets/css-3.svg";

function Footer() {
  return (
    <FooterPage>
      <FooterDiv>
        <div>
          <h2>Keyur Diwan</h2>
          <p>
            {" "}

  

            <a
              href="https://www.linkedin.com/in/keyur-diwan-889a59189/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="linkedin"
              type="logo"
              size="md"
               animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>

          <a
              href="https://github.com/KeyurDiwan"
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
              href="https://twitter.com/Keval_Diwan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="twitter"
              type="logo"
              size="md"
               animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
          </a>
          
         


            {/* <a
              href="https://web.facebook.com/curtis.ayoposi.3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="facebook"
                type="logo"
                size="md"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a> */}
            {/* <a
              href="https://www.youtube.com/channel/UCU_r3L-K7rw0As7J8K2Zt6g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                name="youtube"
                size="md"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a> */}
            {/* <a
              href="https://twitter.com/Keval_Diwan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="twitter"
                type="logo"
                size="md"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a> */}
            {/* <a
              href="https://www.instagram.com/curpra_code/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="instagram"
                type="logo"
                size="md"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>{" "} */}
          </p>
         
        </div>
      </FooterDiv>
    </FooterPage>
  );
}
export default Footer;
// const IC = styled.div`
// display: flex;

// flex-direction: row;

// box-icon {
//   margin-left: 50px;
 
// }
// `

const FooterPage = styled.div`
 background-color: ${props=>props.theme.pageBackground};
  box-shadow: 0px -4px 3px 0px rgb(146 207 250 / 96%);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  /* width:100%; */
`;
const FooterDiv = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  text-align: center;
  margin-top: 2rem;
  /* width: 100%; */

  @media screen and (max-width: 1024px) {
    margin-left: 70px !important;
    margin-right: 70px !important;
  }
  @media screen and (max-width: 890px) {
    margin-left: 70px !important;
    margin-right: 70px !important;
  }
  @media screen and (min-width: 690px) {
   div{ 
     margin-left: 70px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
   }
  }
  @media screen and (max-width: 490px){
    p{
      margin-top:1.5rem;
    }
  }
  div {
    padding-top: 2rem;
    
  }
  h2 {
    font-family: 'Space Grotesk', sans-serif;
    margin-bottom: 1.5rem;
  }
  p a {
    margin-left: 1.5rem;
  }
`;

// const P = styled.p`
//   font-family: 'Space Grotesk', sans-serif;
//   padding-bottom:1.5rem;
// `;
