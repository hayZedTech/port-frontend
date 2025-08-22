import { Outlet, Link } from "react-router-dom";
import { Footer } from "./Layout";
import App from "./MessageForm";


import phone1 from "./Images/phone1.png";
import email1 from "./Images/email1.png";
import facebook from "./Images/facebook.png";
import insta1 from "./Images/insta1.png";
import linkendin from "./Images/linkendin.png";
import whatsapp from "./Images/whatsapp.png";





export const Contacts = () => {
  return (
    <>
    <section id="contacts2" className="Contacts text-center">
      <h3 className="text-info text-center my-4 "><b>MY CONTACT</b></h3><br />
      <div className="row text-black" id="">
        <h4 className="col-sm my-3">
          <a href="tel:+2348072178062" className="text-black text-decoration-none">
            <img src={phone1} alt="" width="25px" /> 08072178062</a>
        </h4>

        <h4 className="col-sm mt-4"> 
          <a href="mailto:ololadeazeez.m@gmail.com" className="text-black text-decoration-none">
            <img src={email1} alt="" width="25px"  /> 
            <i>ololadeazeez.m@gmail.com</i></a></h4>
      </div>

      <div className="mt-5 sect1b">
                <a href="https://web.facebook.com/" className="text-decoration-none"><img src={facebook} alt="" width={"55px"} className="p-2 " /> </a>

                <a href="https://www.instagram.com/azeez.m59/" className="text-decoration-none mx-4"><img src={insta1} alt="" width={"55px"} className="p-2 " /> </a>

                <a href="https://www.linkedin.com/in/azeez-ololade-musa-b0b20925b" className="text-decoration-none"><img src={linkendin} alt="" width={"55px"} className="p-1 " /> </a>

                <a href="https://wa.me/08072178062" className="text-decoration-none ms-4"><img src={whatsapp} alt="" width={"55px"} className="p-2 " /> </a>
              </div>
              {/* links ends here */}

             
      </section>

            <div>
               
                <App />
              </div>

    
    <Footer />
    <Outlet />
    </>
  )
}
