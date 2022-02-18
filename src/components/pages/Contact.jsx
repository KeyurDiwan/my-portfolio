import React from "react";
import styled from "styled-components";


import mail from "../../assets/mail.svg";

function Contact() {
 

  return (
    <ContactDiv id="contact">
   
      <img src={mail} alt="mail" />
      <Box>
        <h1>Contact Me</h1>

        <IT>

        <Icon>

        
            <a
              href="mailto:keyurdiwan009@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="gmail"
                type="logo"
              size="md"
               animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
           
          
          
       
            
          
            <a
              href="tel:+919924664558"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="whatsapp"
                type="logo"
              size="md"
               animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>

              <a
              href="https://www.google.com/maps/@21.7558306,72.1366067,15z/data=!3m1!4b1!4m2!7m1!2e1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                name="location-plus"
                type="solid"
              size="md"
               animation="tada-hover"
                color="rgba(67, 172, 247, 0.96)"
              ></box-icon>
            </a>
       
       
          

            
          
        </Icon>
        
        <Text>

          <h3>keyurdiwan009@gmail.com</h3>
            <h3>+91 9924664558</h3>
            <h3>Bhavnagar, Gujarat</h3>
         
        </Text>

        </IT>

        
        {/* <IC>

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
          
         
        </IC> */}
       
      </Box>
    </ContactDiv>
  );
}

export default Contact;

const Icon = styled.div`
display: flex;
flex-direction: column;
padding: 5% 0;
align-items: start;

box-icon {
 margin: 30% 0;

}
`
const Text = styled.div`
 justify-content: space-between;
 

 h3 {
   margin: 13.5% 7%;
   color:black;
 
   font-family: 'Space Grotesk', sans-serif;
 }


`
// const IC = styled.div`
// display: flex;

// flex-direction: row;

// box-icon {
//   margin-left: 50px;
//   margin-top: 10%
// }
// `


const IT = styled.div`
display: flex;

flex-direction: row
`

const ContactDiv = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 40%;
    margin-left: 30px;
  }
  @media screen and (max-width: 890px) {
    flex-direction: column !important;
    img {
      width: 80%;
      margin-right: 0px;
      margin-bottom: 3rem;
    }
  }
`;
const Box = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  /* height: 90vh; */
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
  h1 {
    font-family: "Space Grotesk";
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 590px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

// const Form = styled.form`
//   margin: 0 auto;
//   max-width: 440px;
//   input {
//     font-family: "Space Grotesk", sans-serif;
//     width: 100%;
//     height: 55px;
//     font-size: 17px;
//     margin-bottom: 15px;
//     border-radius: 9px;
//     padding-left: 10px;
//     border: 2.4px solid;
//     background: transparent;
//     border-color: rgba(67, 172, 247, 0.96);
//     color: ${(props) => props.theme.inputColor};
//   }
//   textarea {
//     font-family: "Space Grotesk", sans-serif;
//     background: transparent;
//     width: 100%;
//     height: 120px;
//     font-size: 20px;
//     margin-bottom: 15px;
//     border: 2.4px solid;
//     border-radius: 9px;
//     resize: none;
//     padding-left: 10px;
//     padding-top: 10px;
//     border-color: rgba(67, 172, 247, 0.96);
//     color: ${(props) => props.theme.inputColor};
//   }
//   input::placeholder {
//     padding-top: 10px;
//     padding-left: 10px;
//     color: rgba(146, 207, 250, 0.96);
//   }
//   textarea::placeholder {
//     padding-top: 10px;
//     padding-left: 10px;
//     color: rgba(146, 207, 250, 0.96);
//   }
//   button {
//     width: 100%;
//     padding: 0.7rem 2.7rem;
//     background-color: white;
//     box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
//     border: 1px solid rgba(146, 207, 250, 0.96);
//      margin-bottom: 15px;
//     border-radius: 3rem;
    
//     text-align: center;
//     color: rgba(146, 207, 250, 0.96);
//     font-size: 20px;
//     font-weight: bold;
//     font-family: "Space Grotesk", sans-serif;
//   }
//   button:focus {
//     outline: none;
//   }
//   input:focus {
//     outline: none;
//   }
//   textarea:focus {
//     outline: none;
//   }
// `;





// rgba(67, 172, 247, 0.96)



//  <Form onSubmit={handleSubmit} data-aos="fade-up">
//           <input
//             type="text"
//             placeholder="Name"
//             id="inpnt"
//             name="name"
//             required
//           />{" "}
//           <br />
//           <input
//             type="email"
//             placeholder="Email"
//             id="inpnt"
//             name="email"
//             required
//           />{" "}
//           <br />
//           <input type="text" placeholder="Subject" id="inpnt" required /> <br />
//           <textarea placeholder="Message" id="inpnt" name="message" required />
//           <button type="submit" disabled={state.submitting}>
//             SUBMIT
//           </button>
//         </Form>