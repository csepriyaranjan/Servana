import React, { useState } from "react";
import axios from "axios";
import { ToastContainer} from "react-toastify";
import { handlerError,handlerSuccess } from "../utils";
import "react-toastify/dist/ReactToastify.css";

export default function StartProject() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    projectName: "",
    projectType: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email" || name === "contact");
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      handlerError("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(formData.contact)) {
      handlerError("Please enter a valid Indian mobile number.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/startproject`,
        formData
      );
      console.log("API Response:", response.data);

      handlerSuccess("Your project request has been submitted!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        projectName: "",
        projectType: "",
        description: "",
      });
    } catch (err) {
      console.error("API Error:", err);
      handlerError("Failed to submit project request. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Let’s Start Your Project
        </h2>
        <p className="text-lg text-center text-gray-600 mb-10">
          Share your details and we’ll get back to you with the best plan.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-2xl p-8"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact No
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Enter your contact number"
            />
          </div>

          {/* Project Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Enter project name"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Type
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option value="">-- Select Type --</option>
              <option value="E-commerce">E-commerce Website</option>
              <option value="Portfolio">Portfolio Website</option>
              <option value="Booking">Booking System</option>
              <option value="Community">Community Platform</option>
              <option value="Custom">Custom Solution</option>
            </select>
          </div>

          {/* Description (Full Width) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Describe your project..."
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto cursor-pointer px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit Project"}
            </button>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </section>
  );
}
