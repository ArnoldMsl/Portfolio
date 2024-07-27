import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.arnoldmasselin.fr/', formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      console.log('Email sent:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Au boulot !</h2>
        <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">Vous êtes convaincu et souhaitez que nous travaillions ensemble ? À vous de jouer !</p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Votre E-mail</label>
            <input type="email" name="email" className="
            shadow-sm bg-gray-50 border border-gray-300 
            text-sm text-primarycolor rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="vous-savez-quoi-faire@mail.com"
              value={formData.email} onChange={handleChange} required></input>
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Votre nom</label>
            <input type="text" name="name" className="text-primarycolor block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="À qui ai-je l'honneur ?"
              value={formData.name} onChange={handleChange} required></input>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-gray-400">Votre message</label>
            <textarea name="message" rows="6" className="text-primarycolor block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Comment puis-je vous aider ?"
              value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">C'est parti !</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
