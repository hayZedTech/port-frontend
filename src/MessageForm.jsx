import { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, text: "" }); // Inline notification state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, text: "" });

    const payload = { name, message };

    try {
      // 1. Primary Attempt: Live Production Instance
      await axios.post("https://port-backend-dday.onrender.com/app", payload);

      setStatus({ 
        type: "success", 
        text: "Message sent successfully!" 
      });
      setName("");
      setMessage("");
    } catch (prodError) {
      console.warn("Production server unreachable. Attempting local host fallback context...", prodError.message);

      try {
        // 2. Secondary Fallback Attempt: Localhost Environment
        await axios.post("http://localhost:4000/app", payload);

        setStatus({ 
          type: "success", 
          text: "Message sent successfully!" 
        });
        setName("");
        setMessage("");
      } catch (localError) {
        console.error("All available server connections failed.", localError.message);
        
        // Return structured back-end error if present, otherwise throw generic failure
        setStatus({ 
          type: "danger", 
          text: prodError.response?.data?.message || "Failed to deliver message. Both production and local environments are unreachable." 
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-100 py-2 message_form">
      {/* Dynamic Status Notification Node */}
      {status.type && (
        <div 
          className={`alert alert-${status.type} d-flex align-items-center border-0 small py-2.5 px-3 mb-4`} 
          style={{ borderRadius: "12px" }}
          role="alert"
        >
          <span className="fw-medium">{status.text}</span>
          <button 
            type="button" 
            className="btn-close ms-auto small shadow-none" 
            style={{ fontSize: "0.65rem" }} 
            onClick={() => setStatus({ type: null, text: "" })}
          ></button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="form-label text-dark small fw-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            className="form-control bg-light border-0 py-2.5 px-3 text-dark shadow-none"
            style={{ borderRadius: "12px", fontSize: "0.95rem" }}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="form-label text-dark small fw-semibold mb-2">
            Message Description
          </label>
          <textarea
            className="form-control bg-light border-0 py-2.5 px-3 text-dark shadow-none"
            style={{ borderRadius: "12px", fontSize: "0.95rem", resize: "none" }}
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write out your project requirements or inquiry detail..."
            required
          ></textarea>
        </div>

        {/* Form CTA Submission Trigger */}
        <button
          type="submit"
          className="btn btn-info text-white w-100 py-2.5 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center transition-all"
          disabled={loading}
          style={{ letterSpacing: "0.5px" }}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm text-white me-2"
                role="status"
                aria-hidden="true"
                style={{
                  width: "1.1rem",
                  height: "1.1rem",
                  borderWidth: "0.15em",
                }}
              ></span>
              Processing Dispatch...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default App;