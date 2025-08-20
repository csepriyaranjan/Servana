import React from "react";

export default function StatsSection() {
  const stats = [
    {
      number: "99.9%",
      label: "Uptime",
      description: "Enterprise-grade reliability"
    },
    {
      number: "< 2s",
      label: "Load Time",
      description: "Optimized performance"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Always available"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built for Scale
          </h2>
          <p className="text-lg text-gray-600">
            Enterprise standards from day one
          </p>
        </div>

        {/* Centered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
