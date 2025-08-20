import React, { useState } from "react";

export default function Support() {
  // List of FAQs
  const faqs = [
    {
      question: "How do I get started with your services?",
      answer:
        "You can get started by signing up, following the setup guide in Documentation, and exploring our tutorials."
    },
    {
      question: "How can I contact support?",
      answer:
        "Reach out via our contact form, email, or live chat. We respond promptly to all queries."
    },
    {
      question: "Where can I find tutorials?",
      answer:
        "Tutorials are available in the Documentation section, covering basic to advanced use cases."
    },
    {
      question: "Do you offer community support?",
      answer:
        "Yes! You can engage with other users, ask questions, and share knowledge in our Community Forum."
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions to reset your password."
    }
  ];

  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Support & FAQs</h1>
        <p className="text-gray-600 mb-12">
          Find answers to common questions below. Click on a question to view the answer.
        </p>

        <div className="text-left md:text-center space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                <span className="text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
