import React, { useState } from "react";

export default function Support() {
  // List of FAQs
  const faqs = [
  {
    question: "What services does Servana offer?",
    answer:
      "Servana provides a range of services including web development,App development and cloud-based solutions. Each service is designed to meet the unique needs of our clients, ensuring quality and efficiency."
  },
  {
    question: "How can I get started with Servana?",
    answer:
      "Getting started is easy! Simply contact our team, and our experts will guide you through the process step by step."
  },
  {
    question: "What makes Servana different from other service providers?",
    answer:
      "At Servana, we prioritize personalized service, cutting-edge technology, and customer satisfaction. Our tailored solutions ensure that each client’s specific goals are achieved effectively."
  },
  {
    question: "Is there a contract required to use Servana's services?",
    answer:
      "No, we offer flexible service agreements to suit your needs. Whether you require a one-time project or ongoing support, we can customize a plan that works for you."
  },
  {
    question: "How can I contact Servana for support?",
    answer:
      "You can reach our support team via email, phone. Our dedicated team is available to assist you with any inquiries or issues."
  },
  {
    question: "What industries does Servana serve?",
    answer:
      "Servana caters to diverse industries including healthcare, education, retail, and technology. Our adaptable solutions make us suitable for a wide range of sectors."
  },
  {
    question: "Are there any testimonials or case studies available?",
    answer:
      "Yes! We provide client testimonials and detailed case studies that showcase how we’ve successfully helped businesses achieve their goals."
  },
  {
    question: "What are the pricing options for Servana's services?",
    answer:
      "Our pricing is transparent and competitive. The cost varies depending on the services you need, and we provide detailed quotes after assessing your requirements."
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

        <div className="text-left space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between">
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
