import { motion } from "framer-motion";
import App from "./MessageForm"; // Your custom contact form component

import phone1 from "./Images/phone1.png";
import email1 from "./Images/email1.png";
import facebook from "./Images/facebook.png";
import insta1 from "./Images/insta1.png";
import linkendin from "./Images/linkendin.png";
import whatsapp from "./Images/whatsapp.png";

export const Contacts = () => {
  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/azeez-ololade-musa-b0b20925b", img: linkendin },
    { name: "WhatsApp", href: "https://wa.me/2348072178062", img: whatsapp },
    { name: "Instagram", href: "https://www.instagram.com/azeez.m59/", img: insta1 },
    { name: "Facebook", href: "https://web.facebook.com/", img: facebook }
  ];

  return (
    <section id="contacts-portfolio" className="bg-light py-5 min-vh-100" style={{ fontFamily: "inherit" }}>
      <div className="container px-4 px-md-5">
        
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="text-dark fw-bold position-relative d-inline-block pb-2">
            GET IN TOUCH
            <span 
              className="position-absolute bottom-0 start-50 translate-middle-x bg-info rounded" 
              style={{ height: "4px", width: "60px" }}
            ></span>
          </h2>
          <p className="text-muted mt-2">Available for collaborations, full-time engineering placements, or technical consultations</p>
        </div>

        {/* Dual Pillar Interface Grid */}
        <div className="row g-5 align-items-stretch mt-2">
          
          {/* Direct Communication Info Hub */}
          <div className="col-12 col-lg-5 d-flex flex-column justify-content-between" data-aos="fade-up">
            <div 
              className="card border-0 bg-white p-4 p-xl-5 w-100 h-100 d-flex flex-column justify-content-between"
              style={{ 
                borderRadius: "20px",
                boxShadow: "0 10px 20px 5px rgba(0,0,0,0.4), 0 4px 16px -8px rgba(0,0,0,0.4)"
              }}
            >
              <div>
                <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.4rem" }}>Contact Details</h4>
                <p className="text-secondary small mb-5">
                  Drop a fast message using the communication nodes or submission field layout. I respond to production alignment inquiries within a 24-hour window.
                </p>

                {/* Direct Connect Elements */}
                <div className="mb-4">
                  <motion.a 
                    href="tel:+2348072178062" 
                    className="d-flex align-items-center text-dark text-decoration-none p-3 rounded border bg-light"
                    whileHover={{ scale: 1.02, borderColor: "#0dcaf0", backgroundColor: "#fff" }}
                    transition={{ duration: 0.15 }}
                  >
                    <img src={phone1} alt="Phone" width="24" className="me-3" />
                    <div>
                      <small className="text-muted d-block" style={{ fontSize: "0.75rem" }}>Voice / Call Channel</small>
                      <span className="fw-semibold">+234 807 217 8062</span>
                    </div>
                  </motion.a>
                </div>

                <div className="mb-5">
                  <motion.a 
                    href="mailto:ololadeazeez.m@gmail.com" 
                    className="d-flex align-items-center text-dark text-decoration-none p-3 rounded border bg-light"
                    whileHover={{ scale: 1.02, borderColor: "#0dcaf0", backgroundColor: "#fff" }}
                    transition={{ duration: 0.15 }}
                  >
                    <img src={email1} alt="Email" width="24" className="me-3" />
                    <div>
                      <small className="text-muted d-block" style={{ fontSize: "0.75rem" }}>Secure Electronic Mail</small>
                      <span className="fw-semibold text-break">ololadeazeez.m@gmail.com</span>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Network Platforms Wrapper */}
              <div>
                <h5 className="text-dark fw-bold mb-3 text-uppercase tracking-wider" style={{ fontSize: "0.8rem" }}>
                  Professional Streams
                </h5>
                <div className="d-flex flex-wrap gap-3">
                  {socials.map((platform, index) => (
                    <motion.a
                      key={index}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-light border rounded d-flex align-items-center justify-content-center"
                      style={{ width: "50px", height: "50px" }}
                      whileHover={{ 
                        scale: 1.1, 
                        borderColor: "#0dcaf0", 
                        backgroundColor: "#fff",
                        boxShadow: "0 8px 15px rgba(0,0,0,0.05)" 
                      }}
                      title={platform.name}
                    >
                      <img src={platform.img} alt={platform.name} width="26" height="26" className="object-contain" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Message Form Box Column */}
          <div className="col-12 col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <div 
              className="card border-0 bg-white p-4 p-md-5 h-100"
              style={{ 
                borderRadius: "20px",
                boxShadow: "0 10px 20px 5px rgba(0,0,0,0.4), 0 4px 16px -8px rgba(0,0,0,0.4)"
              }}
            >
              <h4 className="text-dark fw-bold mb-4" style={{ fontSize: "1.4rem" }}>Send A Direct Message</h4>
              
              {/* Dynamic form mounting spot */}
              <App />
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};