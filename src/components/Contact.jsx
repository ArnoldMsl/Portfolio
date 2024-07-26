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

    <section>
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">Au boulot !</h2>
        <p class="mb-8 lg:mb-16 font-light text-center sm:text-xl">Vous êtes convaincu et souhaitez que nous travaillions ensembles ? À vous de jouer !</p>
        <form onSubmit={handleSubmit} class="space-y-8">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
            <input type="email" id="email" class="
            shadow-sm bg-gray-50 border border-gray-300 
            text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="vous-savez-quoi-faire@mail.com"
              value={formData.email} onChange={handleChange} required></input>
          </div>
          <div>
            <label for="name" class="block mb-2 text-sm font-medium">Votre nom</label>
            <input type="text" name="name" class="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="À qui ai-je l'honneur ?"
              value={formData.name} onChange={handleChange} required></input>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium dark:text-gray-400">Your message</label>
            <textarea name="message" rows="6" class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Comment puis-je vous aider ?"
              value={formData.message} onChange={handleChange}></textarea>
          </div>
          <div>
            <label>Pièce-jointe :</label>
            <input className="" type="file" name="file" onChange={handleChange} />
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">C'est parti !</button>
        </form>
      </div>
    </section>




    // <div className="flex-col justify-evenly items-center
    // lg:border-secondaryMinor lg:rounded-lg lg:border-4 lg:border-solid p-4 
    // contactContainer">
    //   <form className="flex-col" onSubmit={handleSubmit}>
    //     <div>
    //       <label>Name:</label>
    //       <input type="text" name="name" value={formData.name} onChange={handleChange} required />
    //     </div>
    //     <div>
    //       <label>Email:</label>
    //       <input type="email" name="email" value={formData.email} onChange={handleChange} required />
    //     </div>
    //     <div>
    //       <label>Message:</label>
    //       <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
    //     </div>
    //     <div>
    //       <label>Attachment:</label>
    //       <input type="file" name="file" onChange={handleChange} />
    //     </div>
    //     <button type="submit">Send</button>
    //   </form>
    // </div>
  );
};

export default Contact;
