import { Outlet, Link } from "react-router-dom";
import { Footer } from "./Layout";
// import App from "./chat/App";


import cbt_image from "./Images/cbt_image.png";
import chat_img from "./Images/chat_img.jpg";
import ecommerce from "./Images/ecommerce.png";


export const Projects = () => {
  return (
    <>
    <section id="projects2" className="projects" data-aos="fade-up">
            <h3 className="text-info text-center mt-4 "><b>MY PROJECTS</b></h3><br />
            <div className="sect5">
      

            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                 <Link to="/biology01"><img src={cbt_image} alt="rock" className="d-block" style={{width:"100%", height:"300px"}} /></Link>
                  <div class="carousel-caption d-none d-md-block">
                    <h2 className="text-black">Exam Page</h2>
                     <p className="text-black">Write your exams</p>
                    
                  </div>
                </div>
                <div class="carousel-item">
                 <a href="https://chat-frontend-flame-six.vercel.app/"><img src={chat_img} alt="chat_img" className="d-block" style={{width:"100%", height:"300px"}} /></a>
                  <div class="carousel-caption d-none d-md-block">
                     <h2 className="text-black">Chat App</h2>
                     <p className="text-black">Chat with your friends</p>
                  </div>
                </div>
                <div class="carousel-item">
                 <Link to="/ecommerce"><img src={ecommerce} alt="e-commerce" className="d-block" style={{width:"100%", height:"300px"}} /></Link>
                  <div class="carousel-caption d-none d-md-block">
                    <h2 className="text-black">Ecommerce Website</h2>
                     <p className="text-black">Shop with us</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>
       
          </section>
          {/* <!-- projects ends here --> */}

          <Footer />
    <Outlet />
    </>
  )
}
