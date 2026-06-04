import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

// Image Assets
import prof1 from "./Images/prof1.jpg";
import phone1 from "./Images/phone1.png";
import email1 from "./Images/email1.png";
import facebook from "./Images/facebook.png";
import insta1 from "./Images/insta1.png";
import linkendin from "./Images/linkendin.png";
import whatsapp from "./Images/whatsapp.png";

// Subsection Section Components
import { About } from "./About";
import { Services } from "./Services";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contacts } from "./Contacts";
import { Footer } from "./Layout";

export const Home = () => {
  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/azeez-ololade-musa-b0b20925b", img: linkendin },
    { name: "WhatsApp", href: "https://wa.me/2348072178062", img: whatsapp },
    { name: "Instagram", href: "https://www.instagram.com/azeez.m59/", img: insta1 },
    { name: "Facebook", href: "https://web.facebook.com/", img: facebook }
  ];

  // Text Cascade Stagger Configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Gap between item reveal
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="bg-light py-5 min-vh-100 d-flex align-items-center" style={{ fontFamily: "inherit" }}>
        <div className="container px-4 px-md-5">
          <div className="row align-items-center justify-content-center g-5">
            
            {/* Profile Image Column */}
            <div className="col-12 col-md-5 text-center order-first order-md-last">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="position-relative d-inline-block"
              >
                {/* Micro-Interaction Ambient Floating Aura Background */}
                <motion.div 
                  className="position-absolute top-50 start-50 translate-middle rounded-circle"
                  style={{
                    width: "calc(100% + 24px)",
                    height: "calc(100% + 24px)",
                    background: "linear-gradient(135deg, #0dcaf0 0%, #0d6efd 100%)",
                    zIndex: 0,
                    opacity: 0.15
                  }}
                  animate={{
                    scale: [1, 1.04, 1],
                    opacity: [0.15, 0.22, 0.15]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                {/* Floating Avatar Frame */}
                <motion.img 
                  src={prof1} 
                  alt="Azeez Ololade Profile" 
                  className="img-fluid rounded-circle position-relative shadow-lg border border-4 border-white" 
                  style={{ 
                    maxWidth: "320px", 
                    width: "100%", 
                    height: "auto", 
                    aspectRatio: "1/1", 
                    objectFit: "cover",
                    zIndex: 1
                  }} 
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>

            {/* Profile Text Typography Column */}
            <div className="col-12 col-md-7 text-center text-md-start">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span 
                  variants={itemVariants}
                  className="text-info text-uppercase tracking-widest fw-bold mb-2 d-block" 
                  style={{ letterSpacing: "2px", fontSize: "0.9rem" }}
                >
                  Welcome to my engineering space
                </motion.span>
                
                <motion.h2 variants={itemVariants} className="text-secondary fw-normal mb-1">Hello, I'm</motion.h2>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-dark fw-black display-3 mb-2 tracking-tight" 
                  style={{ fontWeight: "900" }}
                >
                  AZEEZ OLOLADE
                </motion.h1>
                
                <motion.h3 variants={itemVariants} className="text-muted fw-semibold fs-3 mb-4">
                  Full Stack Developer & Mentor
                </motion.h3>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-secondary mb-4 max-w-xl fs-5 lh-base" 
                  style={{ maxWidth: "560px" }}
                >
                  Architecting robust backend processing systems, responsive user interfaces, and high-performance cross-platform mobile environments.
                </motion.p>

                {/* Functional Interactive Trigger Node */}
                <motion.div variants={itemVariants} className="mb-5">
                  <motion.button 
                    type="button" 
                    className="btn btn-info text-white px-4 py-2.5 rounded-5 shadow-sm fw-bold border-0" 
                    data-bs-toggle="modal" 
                    data-bs-target="#myModal"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 25px -5px rgba(13,202,240,0.5)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Info
                  </motion.button>
                </motion.div>

                {/* Social Channels Dock */}
                <motion.div variants={itemVariants}>
                  <div className="d-flex justify-content-center justify-content-md-start gap-3">
                    {socials.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                        style={{ width: "50px", height: "50px" }}
                        whileHover={{ 
                          scale: 1.15, 
                          y: -4,
                          borderColor: "#0dcaf0", 
                          boxShadow: "0 10px 20px rgba(13,202,240,0.15)" 
                        }}
                        whileTap={{ scale: 0.95 }}
                        title={social.name}
                      >
                        <img 
                          src={social.img} 
                          alt={social.name} 
                          width="24" 
                          height="24" 
                          className="p-0.5 object-contain" 
                        />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-white" data-aos="fade-up">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light" data-aos="fade-up">
        <Services />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-white" data-aos="fade-up">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light" data-aos="fade-up">
        <Projects />
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-5 bg-white" data-aos="fade-up">
        <Contacts />
      </section>
    
      {/* Global Page Footer Component */}
      <Footer />

      {/* Embedded Global Modal Target Element */}
      <div className="modal fade" id="myModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div 
            className="modal-content border-0 bg-white" 
            style={{ 
              borderRadius: "20px", 
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)" 
            }}
          >
            {/* Modal Header */}
            <div className="modal-header border-0 pt-4 px-4 pb-2">
              <h4 className="modal-title text-dark fw-bold">Contact Info</h4>
              <button 
                type="button" 
                className="btn-close shadow-none" 
                data-bs-dismiss="modal" 
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body px-4 py-3">
              <p className="text-secondary small mb-4">
                Feel free to reach out for collaborations, freelance projects, or full-time opportunities.
              </p>
              
              <div className="d-flex flex-column gap-3">
                {/* Phone Link Box */}
                <a 
                  href="tel:+2348072178062" 
                  className="d-flex align-items-center text-dark text-decoration-none p-3 rounded border bg-light"
                  style={{ transition: "all 0.15s ease-in-out" }}
                >
                  <img src={phone1} alt="" width="24px" className="me-3 object-contain" />
                  <div>
                    <small className="text-muted d-block" style={{ fontSize: "0.75rem", fontWeight: "500" }}>
                      Voice / Call Channel
                    </small>
                    <span className="fw-semibold">08072178062</span>
                  </div>
                </a>

                {/* Email Link Box */}
                <a 
                  href="mailto:ololadeazeez.m@gmail.com" 
                  className="d-flex align-items-center text-dark text-decoration-none p-3 rounded border bg-light"
                  style={{ transition: "all 0.15s ease-in-out" }}
                >
                  <img src={email1} alt="" width="24px" className="me-3 object-contain" />
                  <div>
                    <small className="text-muted d-block" style={{ fontSize: "0.75rem", fontWeight: "500" }}>
                      Secure Electronic Mail
                    </small>
                    <span className="fw-semibold text-break">ololadeazeez.m@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer border-0 pb-4 px-4 pt-2">
              <button 
                type="button" 
                className="btn btn-light text-secondary border px-4 py-2 rounded-pill fw-semibold btn-sm" 
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};