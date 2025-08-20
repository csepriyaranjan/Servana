import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-700">
                Startup • Enterprise Standards
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Build with
              <span className="block text-gray-600">Precision</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              We're a startup that operates with enterprise-level precision.
              Clean, efficient solutions that scale with your ambitions.
            </p>

            {/* Modern Links */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Primary Link */}
              <Link to="/startproject" className="px-6 py-3 cursor-pointer rounded-xl bg-gray-900 text-white font-medium shadow-lg hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200">
                Start Project
              </Link>

              {/* Secondary Link */}
              <Link  to="/works" className="px-6 py-3 cursor-pointer rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 hover:scale-105 active:scale-95 transition-all duration-200">
                View Works
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg"
                alt="Professional workspace"
                className="w-full h-[500px] object-cover object-bottom"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Projects
                  </div>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
