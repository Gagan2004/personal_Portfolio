// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",   // replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"     // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 md:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">Contact Me</h1>
      <p className="text-gray-300 mb-10 text-lg">
        Feel free to reach out using the form below!
      </p>

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          type="submit"
          className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition duration-300"
        >
          Send Message
        </button>
        {messageSent && (
          <p className="text-green-400 font-semibold mt-3">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
