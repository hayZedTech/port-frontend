import { Link, Outlet } from "react-router-dom";
import prof1 from "./Images/prof1.jpg";
import phone1 from "./Images/phone1.png";
import email1 from "./Images/email1.png";
import facebook from "./Images/facebook.png";
import insta1 from "./Images/insta1.png";
import linkendin from "./Images/linkendin.png";
import whatsapp from "./Images/whatsapp.png";
import html1 from "./Images/html1.png";
import css1 from "./Images/css1.png";
import js1 from "./Images/js1.png";
import bootstrap1 from "./Images/bootstrap1.png";
import jquery1 from "./Images/jquery1.png";
import php1 from "./Images/php1.png";
import typescript from "./Images/typescript.png";
import react1 from "./Images/react1.png";
import node from "./Images/node.png";

import cbt_image from "./Images/cbt_image.png";
import chat_img from "./Images/chat_img.jpg";
import ecommerce from "./Images/ecommerce.png";
import App from "./MessageForm";
import { Footer } from "./Layout";
import { Projects } from "./Projects";




export const Home = () => {
  // const d =new Date();
  //  d.getFullYear();
  return (
    <>
    <section className='section1 row pt-5 my-5'>
      <div className="col-sm text-center " >
          <div>
          <img src={prof1} alt="profile image" className='rounded rounded-circle prof_img' />
          </div>
      </div>

      <div className="col-sm prof_text" >
          <div>
          <h2>Hello, I'm</h2>
            <h1 className="fw-bolder"> AZEEZ OLOLADE</h1>
                <h3>Full Stack Developer</h3>

                <button type="button" className="btn btn-info text-white px-4 mt-4" data-bs-toggle="modal" data-bs-target="#myModal"><b>Contact Info</b></button>
 
              <div className="mt-5 sect1b">
                <a href="https://web.facebook.com/" className="text-decoration-none"><img src={facebook} alt="" width={"55px"} className="p-2 " /> </a>
                
                                <a href="https://www.instagram.com/azeez.m59/" className="text-decoration-none mx-4"><img src={insta1} alt="" width={"55px"} className="p-2 " /> </a>
                
                                <a href="https://www.linkedin.com/in/azeez-ololade-musa-b0b20925b" className="text-decoration-none"><img src={linkendin} alt="" width={"55px"} className="p-1 " /> </a>
                
                                <a href="https://wa.me/08072178062" className="text-decoration-none ms-4"><img src={whatsapp} alt="" width={"55px"} className="p-2 " /> </a>
                              </div>
                              {/* links ends here */}
          </div>
      </div>
      </section>
      {/* Home ends here */}


      <section className="about mx-5 my-5" data-aos="fade-up">
      
            <div className="text-black">
                <h3 className="text-info text-center"><b>ABOUT ME</b></h3>
            <h2 className="text-center my-3"> Full Stack Developer</h2>
                <h5 className="">
               I possess a diverse skill set that allows me to handle both front-end and back-end development tasks. My ability to work on the entire technology stack, from designing user interfaces to managing databases and server-side logic, makes me a versatile and valuable asset in any development team.
               being a full stack developer empowers me to create robust, scalable, and user-friendly applications while offering flexibility and efficiency in the development process.
                </h5>
        </div>
    
      </section>
       {/* about ends here */}



       <section className="services"  data-aos="fade-up">
        <h3 className="text-info text-center my-4 "><b>MY SERVICES</b></h3>
        <div className="row sect3 text-center text-black mx-3">

            
            <div className="col-sm sect3a p-4">
                <h3><b>Front-end Developer</b></h3>
                <p>A Junior Web Developer that is familiar with the layers of web development process, including HTML, CSS, Javascript etc. I am also responsible for the visual elements of a website, including layout, design and user interaction.  </p>
            </div>
          


           
           <div className="col-sm sect3c p-4">
              <h3><b>Back-end Developer</b></h3>
              <p>A Junior Web Developer that is responsible for building and maintaining the infrastructure and code that powers a website. I work closely with other developers to ensure that the user interface and backend systems work together seamlessly. </p>
          </div>
         


            
            <div className="col-sm sect3b p-4">
                <h3><b>UI/UX Designer</b></h3>
                <p>
                  Junior UI/UX Designer that is responsible for the look, feel and functionality of digital products and services. I use my knowledge of design principles and user psychology to create intuitive and user-friendly interfaces that enhance the user experience.
                </p>
            </div>
          
           
        </div>

        {/* <!-- sect3 ends here --> */}
    </section>
      {/* <!-- services ends here --> */}




      <section className="skills px-2 px-lg-5 " data-aos="fade-up">
    <h3 className="text-info text-center my-4 "><b>MY SKILLS</b></h3>
    <div className="row g-4">
            {/* Core Development */}
            <div className="col-lg-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h4 className="text-primary fw-bold mb-4">
                    Core Development
                  </h4>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/html1.png" alt="HTML" width="28" className="me-2" />
                      HTML
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/css1.png" alt="CSS" width="28" className="me-2" />
                      CSS
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated  bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/js1.png" alt="JavaScript" width="28" className="me-2" />
                      JavaScript & TypeScript
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/jquery1.png" alt="JQuery" width="28" className="me-2" />
                      JQuery
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/react1.png" alt="React" width="28" className="me-2" />
                      React & Vite
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/bootstrap1.png" alt="Bootstrap" width="28" className="me-2" />
                      Bootstrap
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  {/* PHP & Ajax */}
                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/php1.png" alt="PHP" width="28" className="me-2" />
                      PHP & Ajax
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar  progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/node.png" alt="Node.js" width="28" className="me-2" />
                      Node.js & Express.js
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/sql.png" alt="MySQL" width="28" className="me-2" />
                      MySQL · PostgreSQL
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div>
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/git.png" alt="Git" width="28" className="me-2" />
                      Git & GitHub
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="col-lg-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h4 className="text-primary fw-bold mb-4">
                    UI/UX Design
                  </h4>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      {/* <img src="/icons/design/ux.svg" alt="UX" width="28" className="me-2" /> */}
                      Wireframing · User Flows · Prototyping
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      {/* <img src="/icons/design/ui.svg" alt="UI" width="28" className="me-2" /> */}
                      Design Systems · Accessibility (WCAG)
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      {/* <img src="/icons/design/figma.svg" alt="Figma" width="28" className="me-2" /> */}
                      Figma (Prototyping, Interactive Components)
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div>
                    <span className="d-flex align-items-center fw-semibold">
                      {/* <img src="/icons/design/photoshop.svg" alt="Photoshop" width="28" className="me-2" /> */}
                      Photoshop (UI Asset Optimization, Web Mockups)
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

           {/* Soft Skills Section */}
          <div className="row g-4 mt-5">
            <div className="col-md-3">
              <div className="card shadow-sm border-0 text-center p-3 h-100">
                <img src="/icons/softskills/communication.svg" alt="Communication" width="32" className="mb-2" />
                <h6 className="fw-bold">Communication</h6>
                <div className="progress mt-2">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow-sm border-0 text-center p-3 h-100">
                <img src="/icons/softskills/creativity.svg" alt="Creativity" width="32" className="mb-2" />
                <h6 className="fw-bold">Creativity</h6>
                <div className="progress mt-2">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow-sm border-0 text-center p-3 h-100">
                <img src="/icons/softskills/teamwork.svg" alt="Teamwork" width="32" className="mb-2" />
                <h6 className="fw-bold">Teamwork</h6>
                <div className="progress mt-2">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow-sm border-0 text-center p-3 h-100">
                <img src="/icons/softskills/problem_solving.svg" alt="Problem Solving" width="32" className="mb-2" />
                <h6 className="fw-bold">Problem Solving</h6>
                <div className="progress mt-2">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- sect4 ends here --> */}
           <span id="project1"></span>

      </section>
      {/* skills ends here */}




      <section className="mt-5 pt-5">
       <Projects />
       
    <span id="contact1"></span>
      </section>
      {/* <!-- projects ends here --> */}



      <section className="Contacts text-center">
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
                <br /><br />
                <App />
        </div>

    
     <Footer />
    



    {/* The Modal  */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">

              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h3 className="modal-title text-info">Contact Info</h3>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body">
               
              <div className=" text-black" id="">
        <h4 className="my-3">
          <a href="tel:+2348072178062" className="text-black text-decoration-none">
            <img src={phone1} alt="" width="25px" /> 08072178062</a>
        </h4>

        <h4 className="mt-4"> 
          <a href="mailto:ololadeazeez.m@gmail.com" className="text-black text-decoration-none">
            <img src={email1} alt="" width="25px"  /> 
            <i>ololadeazeez.m@gmail.com</i></a></h4>
      </div>
              </div>

              {/* <!-- Modal footer --> */}
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>

        


        <Outlet />
    </>
  )
}
