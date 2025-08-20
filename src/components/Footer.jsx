import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"; 
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        "Strategy & Consulting",
        "Custom Development",
        "Digital Products",
        "Scale & Growth",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact"],
    },
    {
      title: "Resources",
      links: ["Case Studies", "Support", "Privacy Policy"],
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3
              className="text-2xl font-semibold mb-4 text-white"
              style={{ fontFamily: "Pacifico, serif" }}
            >
              <svg
                width="150"
                height="30"
                viewBox="85 0 270 88"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="matrix(0.17350095177664976,0,0,0.17350095177664976,0,0)"
                  fill="#ffffff"
                >
                  <path d="M512,256c0,141.375-114.625,256-256,256c106.031,0,192-85.969,192-192s-85.969-192-192-192S64,213.969,64,320  
      s85.969,192,192,192C114.625,512,0,397.375,0,256S114.625,0,256,0S512,114.625,512,256z 
      M256,256c-70.688,0-128,57.313-128,128  
      c0,66.281,50.563,120.156,115.094,126.688C213.938,504.719,192,478.938,192,448c0-35.344,28.656-64,64-64s64,28.656,64,64  
      c0,30.938-21.938,56.719-51.094,62.688C333.438,504.156,384,450.281,384,384C384,313.313,326.688,256,256,256z" />
                </g>
                <g
                  transform="matrix(2.5564557834039197,0,0,2.5564557834039197,106.69918711310763,12.422237350610617)"
                  fill="#ffffff"
                >
                  <path d="M4.86 16.87 q1.42 0.57 2.6 0.57 q1.24 0 1.97 -0.48 t0.73 -1.14 q0 -0.54 -0.43 -0.88 t-1.09 -0.51 t-1.74 -0.37 
      q-1.44 -0.24 -2.64 -0.62 t-2.18 -1.32 t-0.98 -2.54 q0 -2.36 1.73 -3.39 t4.07 -1.03 q1.8 0 3.13 0.49 t2.65 1.47 l-1.76 2.4 
      q-0.98 -0.7 -2.04 -1.1 t-2.1 -0.4 q-0.92 0 -1.72 0.33 t-0.8 1.11 q0 0.48 0.41 0.77 t0.9 0.42 t1.59 0.37 l0.72 0.14 
      q1.66 0.32 2.75 0.71 t1.89 1.31 t0.8 2.56 q0 2.22 -1.57 3.38 t-4.25 1.16 q-3.92 0 -6.6 -2.28 l1.68 -2.42 q0.86 0.72 2.28 1.29 z 
      M18.84 11.38 l7 0 l0 2.76 l-7 0 l0 3.12 l7.92 0 l0 2.74 l-11.08 0 l0 -14.62 l11.08 0 l0 2.74 l-7.92 0 l0 3.26 z 
      M29.7 20 l0 -14.62 l6.5 0 q1.56 0 2.76 0.64 t1.86 1.8 t0.66 2.64 q0 1.58 -0.8 2.82 t-2.18 1.82 q1.42 1.8 3.78 4.9 l-3.78 0 
      q-1.28 -1.6 -3.5 -4.56 l-2.16 0 l0 4.56 l-3.14 0 z M36.2 12.7 q0.82 0 1.48 -0.59 t0.66 -1.65 q0 -0.86 -0.46 -1.6 
      t-1.68 -0.74 l-3.36 0 l0 4.58 l3.36 0 z M49.34 20.36 l-7.38 -14.96 l3.48 0 l3.9 8.08 l3.92 -8.08 l3.5 0 z 
      M62.38 4.92 l8.02 15.08 l-3.46 0 l-1.16 -2.24 l-6.82 0 l-1.12 2.24 l-3.48 0 z M64.26 15.06 l-1.88 -3.82 l-1.86 3.82 l3.74 0 z 
      M75.22 20 l-3.14 0 l0 -15.08 l10.08 8.92 l0 -8.44 l3.16 0 l0 15.06 l-10.1 -8.78 l0 8.32 z 
      M95.04 4.92 l8.02 15.08 l-3.46 0 l-1.16 -2.24 l-6.82 0 l-1.12 2.24 l-3.48 0 z M96.92 15.06 l-1.88 -3.82 l-1.86 3.82 l3.74 0 z" />
                </g>
              </svg>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md text-sm leading-relaxed">
              A company that serves with elegance, intelligence, and trust in technology.
            </p>
            <div className="flex space-x-4 text-gray-300">
              <a href="https://www.linkedin.com/in/csepriyaranjan/"><FaLinkedin className="text-lg cursor-pointer hover:text-white transition-colors" /></a>
              <a href="https://x.com/csepriyaranjan"><FaTwitter className="text-lg cursor-pointer hover:text-white transition-colors" /></a>
              <a href="https://github.com/csepriyaranjan"><FaGithub className="text-lg cursor-pointer hover:text-white transition-colors" /></a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={
                        section.title.toLowerCase() === "services"
                          ? "/services"
                          : `/${link.toLowerCase().replace(/\s+/g, "")}`
                      }
                      className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Servana. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
