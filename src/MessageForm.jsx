import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
     alert('Message Sent Successfully');
    // try {
    //   // Make sure the URL points to your XAMPP server
    //   // const response = await axios.post('http://localhost/my-php-backend/submit.php', {
    //   //   name,
    //   //   message,
    //   // });
    //   alert('Message Sent Successfully', response.data);
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };

 

  return (
    <div className="container w-25 py-2 mt-5 border border-4 rounded-4 px-3 message_form">
      <h3 className='text-info text-center'>Message Me</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label"><b>Name</b></label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name'
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label"><b>Message</b></label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Type your message'
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default App;
