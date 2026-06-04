import { motion } from "framer-motion";

export const Services = () => {
  const serviceOfferings = [
    {
      title: "Front-end Engineering",
      icon: "🌐",
      desc: "Building semantic, responsive, and performance-optimized user interfaces. Transforming complex design languages into fluid client-side applications with absolute attention to layout stability, intuitive user interactions, and cross-device responsiveness."
    },
    {
      title: "Back-end Architecture",
      icon: "⚙️",
      desc: "Designing and scaling secure, high-performance server infrastructures. Architecting production-grade REST & GraphQL APIs, managing relational database environments, processing server-side data flows, and implementing robust stateful or stateless security protocols."
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      desc: "Engineering high-performance, cross-platform mobile applications using React Native and Expo. Seamlessly integrating hardware features like high-speed barcode scanners, managing complex local data stores, and implementing real-time data sync."
    }
  ];

  return (
    <section id="services-portfolio" className="bg-light py-5" style={{ fontFamily: "inherit" }}>
      <div className="container px-4 px-md-5">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="text-dark fw-bold position-relative d-inline-block pb-2">
            MY SERVICES
            <span 
              className="position-absolute bottom-0 start-50 translate-middle-x bg-info rounded" 
              style={{ height: "4px", width: "60px" }}
            ></span>
          </h2>
          <p className="text-muted mt-2">Engineered solutions across design lines, client interfaces, and server layers</p>
        </div>

        {/* Services Grid */}
        <div className="row g-4 justify-content-center">
          {serviceOfferings.map((service, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 d-flex" data-aos="fade-up">
              <motion.div 
                className="card border-0 bg-white p-4 p-xl-5 w-100 d-flex flex-column text-center text-lg-start"
                style={{ 
                  borderRadius: "20px",
                  boxShadow: "0 10px 20px 5px rgba(0,0,0,0.4), 0 4px 16px -8px rgba(0,0,0,0.4)"
                }}
                whileHover={{ 
                  y: -6,
                  boxShadow: "0 20px 35px -10px rgba(0,0,0,0.12), 0 6px 20px -6px rgba(0,0,0,0.06)",
                  transition: { duration: 0.2 }
                }}
              >
                {/* Icon Wrapper */}
                <div className="fs-1 mb-3 text-lg-start text-center">
                  {service.icon}
                </div>

                <h4 className="text-dark fw-bold mb-3">
                  {service.title}
                </h4>
                
                <p className="text-secondary small lh-relaxed mb-0 flex-grow-1">
                  {service.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};