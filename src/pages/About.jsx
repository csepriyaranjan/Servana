import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaXTwitter, FaGlobe } from "react-icons/fa6";

export default function About() {
  const team = [
    {
      name: "Vipin Kumar",
      role: "CEO",
      quote: "Leading with vision and purpose, I strive to keep our team inspired and focused.",
      avatar: "https://avatars.githubusercontent.com/u/166358641?v=4",
      socials: {
        github: "https://github.com/csevipinmenon",
        linkedin: "https://www.linkedin.com/in/vipin-kumar-04581431a/",
        twitter: "https://x.com/VMemon49238?t=J8UdyXfRgYBRev-hew0pSA&s=08",
        portfolio: "https://vipinkumar.vercel.app/"
      }
    },
    {
      name: "Priyaranjan",
      role: "Founder",
      quote: "Turning ideas into reality is my passion, making sure innovation meets execution.",
      avatar: "https://avatars.githubusercontent.com/u/183178893?s=400&u=4852ae748587eb28c93b92f0c23757cffd722c93&v=4",
      socials: {
        github: "https://github.com/csepriyaranjan",
        linkedin: "https://www.linkedin.com/in/csepriyaranjan",
        twitter: "https://x.com/csepriyaranjan",
        portfolio: "https://csepriyaranjan.github.io/protfolio/"
      }
    },
    {
      name: "Saurabh Paswan",
      role: "CTO & Co-Founder",
      quote: "Building robust and cutting-edge solutions is at the heart of everything I do.",
      avatar: "https://avatars.githubusercontent.com/u/187754515?v=4",
      socials: {
        github: "https://github.com/csesaurabhpaswan",
        linkedin: "https://www.linkedin.com/in/csesaurabhpaswan/",
        twitter: "https://x.com/Saurabh956526",
        portfolio: "https://csesaurabhpaswan.github.io/portfolio/"
      }
    },
    {
      name: "Saroj Kumar",
      role: "COO",
      quote: "Operational excellence that empower teams and accelerate innovation.",
      avatar: "https://avatars.githubusercontent.com/u/200264803?v=4",
      socials: {
        github: "https://github.com/sarojkumar419",
        linkedin: "#",
        twitter: "https://x.com/saroj0793202?t=a0JsaoEs897WrkyKfvtvJw&s=08",
        portfolio: "#"
      }
    },
    {
      name: "Vishal Arya",
      role: "BDM",
      quote: "Driving strategic growth and building lasting client relationships to scale success.",
      avatar: "https://i.ibb.co/gbMCYxP6/Screenshot-2025-08-23-000747.png",
      socials: {
        github: "https://github.com/VishalAarya89",
        linkedin: "https://www.linkedin.com/in/vishal-kumar-69132a22a/",
        twitter: "#",
        portfolio: "#"
      }
    }
  ];

  return (
    <section className="py{18 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are passionate about building scalable, user-friendly, and
            innovative digital solutions that empower businesses and delight
            users.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Team working"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team brings together creativity, technology, and strategy to
              deliver top-quality products. From startups to enterprises, we
              help businesses grow and succeed in the digital age.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To provide innovative, reliable, and scalable solutions that
              transform ideas into reality while creating meaningful impact for
              clients worldwide.
            </p>

            <Link to="/startproject" className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition">
              Start Project
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 mt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">About Our Team</h2>
          <p className="mt-4 text-gray-600">Meet the leaders driving our vision and innovation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <img 
                src={member.avatar} 
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4"
              />
              <div className="font-semibold text-gray-900 text-lg">{member.name}</div>
              <div className="text-gray-500 text-sm mb-4">{member.role}</div>
              <p className="text-gray-700 italic">"{member.quote}"</p>
              {/* Social Icons */}
              <div className="flex mt-4 justify-center space-x-4 text-gray-600">
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  <FaGithub size={18} />
                </a>
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  <FaLinkedin size={18} />
                </a>
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  <FaXTwitter size={18} />
                </a>
                <a href={member.socials.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
                  <FaGlobe size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
}
