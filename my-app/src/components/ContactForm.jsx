import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData, 
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending the data to an API.
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-white">Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full px-4 py-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-white">Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full px-4 py-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-white">Message</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className="w-full px-4 py-2 border rounded-md"
          rows="5"
          required
        />
      </div>
      <button 
        type="submit" 
        className="px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
