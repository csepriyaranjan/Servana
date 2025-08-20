import React from "react";
import {
  FiZap,
  FiCode,
  FiSmartphone,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const services = [
    {
      icon: <FiZap className="text-2xl text-gray-700" />,
      title: "Strategy & Consulting",
      description:
        "Enterprise-grade strategic planning with startup agility. We help you make the right decisions fast.",
    },
    {
      icon: <FiCode className="text-2xl text-gray-700" />,
      title: "Custom Development",
      description:
        "Clean, scalable code built to enterprise standards. Modern architecture that grows with your business.",
    },
    {
      icon: <FiSmartphone className="text-2xl text-gray-700" />,
      title: "Digital Products",
      description:
        "User-centric design meets robust engineering. Products that users love and systems that never break.",
    },
    {
      icon: <FiTrendingUp className="text-2xl text-gray-700" />,
      title: "Scale & Growth",
      description:
        "Infrastructure and processes designed for rapid scaling. From prototype to enterprise in record time.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Startup speed with enterprise quality. We deliver solutions that are
            both innovative and reliable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <Link to="/services" className="group w-56 flex items-center cursor-pointer justify-center gap-2 px-8 py-3 rounded-xl bg-gray-900 text-white font-medium shadow-md hover:shadow-lg hover:bg-gray-800 transition-all duration-300">
            View All Services
            <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
