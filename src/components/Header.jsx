import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/aboutus" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white/40 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-semibold text-gray-900"
            style={{ fontFamily: "Pacifico, serif" }}
          >
            <svg
              width="250"
              height="50"
              viewBox="85 0 270 88"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                transform="matrix(0.17350095177664976,0,0,0.17350095177664976,0,0)"
                fill="#111111"
              >
                <path
                  d="M512,256c0,141.375-114.625,256-256,256c106.031,0,192-85.969,192-192s-85.969-192-192-192S64,213.969,64,320  
      s85.969,192,192,192C114.625,512,0,397.375,0,256S114.625,0,256,0S512,114.625,512,256z 
      M256,256c-70.688,0-128,57.313-128,128  
      c0,66.281,50.563,120.156,115.094,126.688C213.938,504.719,192,478.938,192,448c0-35.344,28.656-64,64-64s64,28.656,64,64  
      c0,30.938-21.938,56.719-51.094,62.688C333.438,504.156,384,450.281,384,384C384,313.313,326.688,256,256,256z"
                />
              </g>
              <g
                transform="matrix(2.5564557834039197,0,0,2.5564557834039197,106.69918711310763,12.422237350610617)"
                fill="#111111"
              >
                <path
                  d="M4.86 16.87 q1.42 0.57 2.6 0.57 q1.24 0 1.97 -0.48 t0.73 -1.14 q0 -0.54 -0.43 -0.88 t-1.09 -0.51 t-1.74 -0.37 
      q-1.44 -0.24 -2.64 -0.62 t-2.18 -1.32 t-0.98 -2.54 q0 -2.36 1.73 -3.39 t4.07 -1.03 q1.8 0 3.13 0.49 t2.65 1.47 l-1.76 2.4 
      q-0.98 -0.7 -2.04 -1.1 t-2.1 -0.4 q-0.92 0 -1.72 0.33 t-0.8 1.11 q0 0.48 0.41 0.77 t0.9 0.42 t1.59 0.37 l0.72 0.14 
      q1.66 0.32 2.75 0.71 t1.89 1.31 t0.8 2.56 q0 2.22 -1.57 3.38 t-4.25 1.16 q-3.92 0 -6.6 -2.28 l1.68 -2.42 q0.86 0.72 2.28 1.29 z 
      M18.84 11.38 l7 0 l0 2.76 l-7 0 l0 3.12 l7.92 0 l0 2.74 l-11.08 0 l0 -14.62 l11.08 0 l0 2.74 l-7.92 0 l0 3.26 z 
      M29.7 20 l0 -14.62 l6.5 0 q1.56 0 2.76 0.64 t1.86 1.8 t0.66 2.64 q0 1.58 -0.8 2.82 t-2.18 1.82 q1.42 1.8 3.78 4.9 l-3.78 0 
      q-1.28 -1.6 -3.5 -4.56 l-2.16 0 l0 4.56 l-3.14 0 z M36.2 12.7 q0.82 0 1.48 -0.59 t0.66 -1.65 q0 -0.86 -0.46 -1.6 
      t-1.68 -0.74 l-3.36 0 l0 4.58 l3.36 0 z M49.34 20.36 l-7.38 -14.96 l3.48 0 l3.9 8.08 l3.92 -8.08 l3.5 0 z 
      M62.38 4.92 l8.02 15.08 l-3.46 0 l-1.16 -2.24 l-6.82 0 l-1.12 2.24 l-3.48 0 z M64.26 15.06 l-1.88 -3.82 l-1.86 3.82 l3.74 0 z 
      M75.22 20 l-3.14 0 l0 -15.08 l10.08 8.92 l0 -8.44 l3.16 0 l0 15.06 l-10.1 -8.78 l0 8.32 z 
      M95.04 4.92 l8.02 15.08 l-3.46 0 l-1.16 -2.24 l-6.82 0 l-1.12 2.24 l-3.48 0 z M96.92 15.06 l-1.88 -3.82 l-1.86 3.82 l3.74 0 z"
                />
              </g>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-gray-900 transition font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex">
            <Link to="/startproject" className="cursor-pointer w-full px-4 py-2 bg-gray-900 text-white rounded-lg">
                Get Started
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiOutlineX className="text-2xl text-gray-800" />
            ) : (
              <HiOutlineMenu className="text-2xl text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-slideDown">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 hover:text-gray-900 font-medium py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/startproject" className="mt-3 cursor-pointer w-full px-4 py-2 bg-gray-900 text-white rounded-lg">
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
