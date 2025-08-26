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




      <section className="skills" data-aos="fade-up">
    <h3 className="text-info text-center my-4 "><b>MY SKILLS</b></h3>
    <div className="sect4">
      
        <div className="sect4a">
            <div className="container mt-3">
                <span className="text-black h3">
                  <img src={html1} alt="html image" width="25px" />
                  HTML</span>

                <div className="progress">
                  <div className="progress-bar bg-primary progress-bar-striped text-white" style={{width:"100%"}}></div>
                </div>
                <br />

                <span className="text-black h3 css1">
                  <img src={css1} alt="css image" width="55px" id="css2" />
                  CSS</span>
                <div className="progress">
                  <div className="progress-bar bg-primary progress-bar-striped" style={{width:"100%"}}></div>
                </div>
                <br />

                <span className="text-black h3">
                  <img src={js1} alt="" width="35px" />
                  Javascript</span>
                <div className="progress">
                  <div className="progress-bar bg-primary progress-bar-striped" style={{width:"100%"}}></div>
                </div>
                <br />

                <span className="text-black h3">
                  <img src={bootstrap1} alt="bootstrap1 Image" width="35px" />
                  Bootstrap</span>
                <div className="progress">
                  <div className="progress-bar bg-primary progress-bar-striped" style={{width:"100%"}}></div>
                </div>
                <br />

                <span className="text-black h3 j_php1">
                  <img src={jquery1} alt="jquery1 image" width="25px" />
                  JQuery</span>
                <div className="progress">
                  <div className="progress-bar bg-primary progress-bar-striped" style={{width:"100%"}}></div>
                </div>
                <br />

                <span className="text-black h3">
                  <img src={php1} alt="php1 image" width="25px" />
                  PHP and Ajax</span>
                <div className="progress">
                  <div className="progress-bar bg-primary progress-bar-striped" style={{width:"100%"}}></div>
                </div>
                <br />

                <span className="text-black h3 j_php1">
                  <img src={typescript} alt="typescript image" width="25px" />
                  Typescript</span>
                <div className="progress">
                  <div className="progress-bar bg-primary progress-bar-striped" style={{width:"100%"}}></div>
                </div>
                <br />

                <span className="text-black h3 j_php1">
                  <img src={react1} alt="react image" width="25px" />
                  React</span>
                <div className="progress">
                  <div className="progress-bar bg-primary progress-bar-striped" style={{width:"100%"}}></div>
                </div>
                <br />

                  {/* <span className="text-black h3 j_php1">
                                                   <img src={node} alt="react image" width="25px" />
                                                   Node.js</span>
                                   <div className="progress">
                                     <div className="progress-bar bg-primary progress-bar-striped" style={{width:"100%"}}></div>
                                   </div>
                                   <br /> */}
                 
                                   <span className="text-black h3 j_php1">
                                                   <img src={node} alt="react image" width="25px" />
                                                   Backend & Database Management: Node.js · Express · MySQL · PostgreSQL</span>
                                   <div className="progress">
                                     <div className="progress-bar bg-primary progress-bar-striped" style={{width:"100%"}}></div>
                                   </div>

               
              </div>
        </div>

      <div className="sect4b" data-aos="fade-up">
                  
      <div className="container sect4bcon ">
        <p>Communication</p>
        <div className="skills2 ht1">90%</div>
      </div>


      <div className="container sect4bcon">
        <p>Creativity</p>
        <div className="skills2 cs1">95%</div>
      </div>


      <div className="container sect4bcon">
        <p>Teamwork</p>
        <div className="skills2 js1">90%</div>
      </div>


      <div className="container sect4bcon">
        <p>Problem Solving</p>
        <div className="skills2 ph1">90%</div>
      </div><br /><br />
              </div>
          </div>
          {/* <!-- sect4 ends here --> */}
           <span id="project1"></span>

      </section>
      {/* skills ends here */}




      <section className="projects" data-aos="fade-up">
        <h3 className="text-info text-center mt-4 "><b>MY PROJECTS</b></h3><br />
                   <div className="sect5">
             
       
                   <div id="carouselExampleCaptions" className="carousel slide">
                     <div className="carousel-indicators">
                       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                     </div>
                     <div className="carousel-inner">
                       <div className="carousel-item active">
                        <Link to="/biology01"><img src={cbt_image} alt="rock" className="d-block" style={{width:"100%", height:"300px"}} /></Link>
                         <div className="carousel-caption d-none d-md-block">
                           <h2 className="text-black">Exam Page</h2>
                            <p className="text-black">Write your exams</p>
                           
                         </div>
                       </div>
                       <div className="carousel-item">
                        <a href="https://chat-frontend-wslj.vercel.app/"><img src={chat_img} alt="chat_img" className="d-block" style={{width:"100%", height:"300px"}} /></a>
                         <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-black">Chat App</h2>
                            <p className="text-black">Chat with your friends</p>
                         </div>
                       </div>
                       <div className="carousel-item">
                        <Link to="/ecommerce"><img src={ecommerce} alt="e-commerce" className="d-block" style={{width:"100%", height:"300px"}} /></Link>
                         <div className="carousel-caption d-none d-md-block">
                           <h2 className="text-black">Ecommerce Website</h2>
                            <p className="text-black">Shop with us</p>
                         </div>
                       </div>
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                       <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                       <span className="carousel-control-next-icon" aria-hidden="true"></span>
                       <span className="visually-hidden">Next</span>
                     </button>
                   </div>
       
                 </div>
              
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
