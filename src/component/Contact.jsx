import React, { useState } from 'react';

function Contact() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    // You can add a backend call here to send the form data
  };

  return (
    <div className="container mx-auto py-12 bg-gray-950">
      <h1 className="text-3xl font-bold text-center text-neutral-100  mb-6">ติดต่อ</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 text-neutral-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            rows="4"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-cyan-900 text-white font-semibold rounded-lg hover:bg-cyan-900"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
