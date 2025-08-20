import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to Build Something Great?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your project. We combine startup agility with
          enterprise-grade execution.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/startproject"
            className="px-6 py-3 cursor-pointer rounded-xl bg-black text-white font-semibold shadow-md hover:shadow-lg hover:bg-gray-800 transition-all"
          >
            Start your project
          </Link>
          <a
            href="tel:+919565264562"
            className="px-6 py-3 cursor-pointer rounded-xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all inline-block"
          >
            Schedule a Call
          </a>
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-4">Get in touch</p>
          <div className="flex flex-col sm:flex-row justify-center items-center text-gray-700 text-lg font-medium">
            <a
              href="mailto:team.servana@gmail.com"
              className="hover:text-gray-900 transition-colors"
            >
              team.servana@gmail.com
            </a>

            {/* Divider */}
            <span className="hidden sm:inline-block mx-6 text-gray-400">|</span>

            <a
              href="tel:+919565264562"
              className="hover:text-gray-900 transition-colors"
            >
              +91 9565264562
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
