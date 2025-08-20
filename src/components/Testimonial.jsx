import React from "react";
export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Servana delivered enterprise-quality solutions with startup speed. Their attention to detail and technical excellence is impressive.",
      author: "Mr Verma",
      title: "CEO, Servano",
      avatar: "/me.jpg"
    },
    {
      quote: "Working with Servana felt like having an in-house enterprise team. Professional, reliable, and incredibly skilled.",
      author: "Vipin",
      title: "Founder, JepairBazaar",
      avatar: "/vipin.jpg"
    },
    {
      quote: "They understand both startup urgency and enterprise requirements. Rare combination of speed and quality.",
      author: "Gaurav Tejpal",
      title: "Principal, AGC Amritsar",
      avatar: "https://media.licdn.com/dms/image/v2/C4E03AQH_KtC0mRbCMg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517762996367?e=1758758400&v=beta&t=pvgnmanOmkVRYjc8YJtwGBFUMyF0628VR897XHvOrBc"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leaders
          </h2>
          <p className="text-lg text-gray-600">
            What our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="mb-6">
                <i className="ri-double-quotes-l text-2xl text-gray-300 mb-4"></i>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
