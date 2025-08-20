import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import { handlerError, handlerSuccess } from "../utils";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // handle form field change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // strict email validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Indian phone validation: +91 or 10-digit only (starting with 6-9)
  const validatePhone = (phone) => {
    return /^(\+91[\-\s]?)?[6-9]\d{9}$/.test(phone);
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      handlerError("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      handlerError("Please enter a valid Indian phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);

      if (response.status === 200) {
        handlerSuccess("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Error:", err);
      handlerError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Have questions or ideas? Let’s connect and make something amazing together.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        {/* Left Side - Contact Info */}
        <div className="space-y-10">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mr-6 text-xl">
              <FiMapPin />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-1">Visit Us</h3>
              <p className="text-gray-700">
                Amritsar Group of Colleges, Amritsar <br /> Punjab, India
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mr-6 text-xl">
              <FiPhone />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-1">Call Us</h3>
              <p className="text-gray-700">+91 7209658250</p>
              <p className="text-gray-500">Mon - Fri: 1:00 PM - 11:00 PM</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mr-6 text-xl">
              <FiMail />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-1">Email Us</h3>
              <p className="text-gray-700">team.servana@gmail.com</p>
              <p className="text-gray-500">We reply within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="mt-2 w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                required
                className="mt-2 w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message..."
                required
                className="mt-2 w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
           <ToastContainer />
        </div>
      </div>
    </section>
  );
}
