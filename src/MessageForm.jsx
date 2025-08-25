import { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // spinner state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start spinner

    try {
      const response = await axios.post(
        "https://port-backend-dday.onrender.com/app",
        {
          name,
          message,
        }
      );

      alert("Message Sent Successfully: " + response.data.message);
      setName("");
      setMessage("");
    } catch (error) {
      alert("Error submitting form: " + error.message);
    } finally {
      setLoading(false); // stop spinner after request finishes
    }
  };

  return (
    <div
      className="container w-100 w-md-50 py-2 mt-5 border border-4 rounded-4 px-3 message_form"
      style={{ maxWidth: "400px" }}
    >
      <h3 className="text-info text-center">Message Me</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <b>Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            <b>Message</b>
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary d-flex align-items-center justify-content-center"
          style={{ minWidth: "140px" }}
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm text-light me-2"
                role="status"
                aria-hidden="true"
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  borderWidth: "0.15em",
                }}
              ></span>
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default App;
