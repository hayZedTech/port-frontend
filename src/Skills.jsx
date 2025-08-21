import { Outlet } from "react-router-dom";
import { Footer } from "./Layout";

import html1 from "./Images/html1.png";
import css1 from "./Images/css1.png";
import js1 from "./Images/js1.png";
import bootstrap1 from "./Images/bootstrap1.png";
import jquery1 from "./Images/jquery1.png";
import php1 from "./Images/php1.png";
import typescript from "./Images/typescript.png";
import react1 from "./Images/react1.png";



export const Skills = () => {
  return (
    <>
     <section id="skills2" className="skills" data-aos="fade-up">
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
    
       <Footer />
    <Outlet />
    </>
  )
}
