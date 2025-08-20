import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">
          Learn how we handle your data with transparency and care. Your privacy is important to us.
        </p>

        <div className="space-y-8 text-gray-700 text-left md:text-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
            <p>
              What information we collect from you and why we collect it to provide and improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Data Usage</h2>
            <p>
              How we use the collected data to enhance user experience, provide personalized services, and improve our offerings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
            <p>
              Measures we take to protect your information and ensure that your data remains safe and secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Third-Party Sharing</h2>
            <p>
              Circumstances under which we may share your information with trusted partners and service providers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
