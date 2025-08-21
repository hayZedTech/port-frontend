import { Outlet } from "react-router-dom";
import { Footer } from "./Layout";


export const About = () => {
  return (
    <>
    <section id="about2" className="about mx-5" data-aos="fade-up">
      
      <div class="text-black">
          <h3 className="text-info text-center mb-4"><b>ABOUT ME</b></h3>
      <h2 className="text-center my-3"> Full Stack Developer</h2>
          <h5 class="">
         I possess a diverse skill set that allows me to handle both front-end and back-end development tasks. My ability to work on the entire technology stack, from designing user interfaces to managing databases and server-side logic, makes me a versatile and valuable asset in any development team.
         being a full stack developer empowers me to create robust, scalable, and user-friendly applications while offering flexibility and efficiency in the development process.
          </h5>
  </div>

</section>
 {/* about ends here */}


 <Footer />

 <Outlet />
 
    </>
  )
}


