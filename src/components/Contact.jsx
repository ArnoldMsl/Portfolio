import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'file' ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    if (formData.file) {
      formDataToSend.append('file', formData.file);
    }

    try {
      await axios.post('https://your-backend-endpoint.com/contact', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Message sent successfully');
    } catch (error) {
      alert('Failed to send message');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
      </div>
      <div>
        <label>Attachment:</label>
        <input type="file" name="file" onChange={handleChange} />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
