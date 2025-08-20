import React from "react";

export default function CaseStudies() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h1>
        <p className="text-gray-600 mb-12">
          Explore real-world examples of how our solutions have helped clients succeed across various industries. Learn from their challenges and achievements.
        </p>

        <div className="space-y-8 text-gray-700 text-left md:text-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Retail</h2>
            <p>
              Increased online sales by 35% using our e-commerce optimization tools. Implemented personalized recommendations and dynamic pricing strategies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Healthcare</h2>
            <p>
              Reduced patient data errors by 50% through secure electronic medical record management. Streamlined appointment scheduling and patient communication.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <p>
              Improved student engagement by 40% using advanced Learning Management Systems (LMS) and interactive online courses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Finance</h2>
            <p>
              Automated financial reporting and compliance checks, saving clients 20+ hours per week and improving accuracy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Logistics</h2>
            <p>
              Optimized delivery routes and inventory management, reducing operational costs by 25% and improving delivery times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
