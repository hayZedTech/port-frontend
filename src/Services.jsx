import { Outlet } from "react-router-dom";
import { Footer } from "./Layout";

export const Services = () => {
  return (
    <>
    <section id="services2" className="services"  data-aos="fade-up">
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

      <Footer />
      <Outlet />
    </>
  )
}
