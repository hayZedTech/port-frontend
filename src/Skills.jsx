import { Outlet } from "react-router-dom";
import { Footer } from "./Layout";

export const Skills = () => {
  return (
    <>
      <section id="skills2" className="skills py-0 bg-light" data-aos="fade-up">
        <div className="container">
          <h3 className="text-center text-info mb-5 fw-bold">
            MY SKILLS
          </h3>

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
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
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

                  {/* MongoDB & Mongoose */}
                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/mongodb.png" alt="MongoDB" width="28" className="me-2" />
                      MongoDB & Mongoose
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  {/* Socket.io */}
                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/socketio.png" alt="Socket.io" width="28" className="me-2" />
                      Real-time Communication (Socket.io)
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  {/* Deployment */}
                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/deploy.png" alt="Deployment" width="28" className="me-2" />
                      Deployment (Vercel · Render)
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/git.png" alt="Git" width="28" className="me-2" />
                      Git & GitHub
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      <img src="/icons/stripe.png" alt="Stripe" width="28" className="me-2" />
                      Stripe API · SaaS Dashboard
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "95%" }}></div>
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
                      Wireframing · User Flows · Prototyping
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      Design Systems · Accessibility (WCAG)
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="d-flex align-items-center fw-semibold">
                      Figma (Prototyping, Interactive Components)
                    </span>
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div>
                    <span className="d-flex align-items-center fw-semibold">
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
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{ width: "90%" }}></div>
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
        </div>

        <Footer />
        <Outlet />
      </section>
    </>
  );
};
