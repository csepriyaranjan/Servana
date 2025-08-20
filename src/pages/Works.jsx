import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import servano from "../assets/servano.png";
import jepair from "../assets/jepair.png";
import eva from "../assets/eva.png";

export default function Works() {
  const works = [
    {
      id: 1,
      title: "Servano - Car Service Booking",
      description:
        "A full-stack MERN web application that allows users to book car services online. Features include service selection, vehicle management, booking confirmation, and an admin dashboard for service tracking.",
      image: servano,
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      link: "https://servano.vercel.app",
    },
    {
      id: 2,
      title: "JepairBazaar - Online Repair Marketplace",
      description:
        "A modern e-commerce style platform where users can book and manage repair services. Designed to connect customers with reliable repair providers while offering a smooth booking and tracking experience.",
      image: jepair,
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://jepairbazaar.shop",
    },
    {
      id: 3,
      title: "EVA - Voice Assistant",
      description:
        "An AI-powered voice assistant built with React and speech recognition. EVA supports voice commands, text inputs, and AI-powered responses — designed for productivity and seamless user interaction.",
      image: eva,
      tech: ["React", "TailwindCSS", "SpeechRecognition", "Python"],
      link: "https://evaai-voiceassistant.vercel.app",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Projects on Demand
          </h2>
          <p className="mt-3 text-gray-600">
            A showcase of the digital solutions we’ve built for clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.id}
              className="bg-white shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={work.image}
                alt={work.title}
                className="h-full w-full object-cover rounded-t-2xl"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{work.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tech.map((t, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
