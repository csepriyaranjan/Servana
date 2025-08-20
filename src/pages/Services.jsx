import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

export default function Services() {
  const serviceCategories = [
    {
      title: "Web Development",
      description: "Modern, responsive websites tailored for your business goals.",
      services: [
        {
          name: "Custom Websites",
          description: "From landing pages to enterprise-grade sites.",
          features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"]
        },
        {
          name: "E-Commerce",
          description: "Build online stores that scale with your business.",
          features: ["Shopping Carts", "Payment Integration", "Inventory Management", "Analytics Dashboard"]
        }
      ]
    },
    {
      title: "App Development",
      description: "High-performance mobile apps for iOS and Android.",
      services: [
        {
          name: "iOS & Android Apps",
          description: "Native and cross-platform mobile applications.",
          features: ["React Native / Flutter", "User-Friendly UI", "Push Notifications", "App Store Deployment"]
        },
        {
          name: "Progressive Web Apps",
          description: "Web apps that work offline and feel like native apps.",
          features: ["Installable Apps", "Offline Support", "Lightweight", "Cross-Device Compatible"]
        }
      ]
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive designs that engage and convert.",
      services: [
        {
          name: "Product Design",
          description: "From wireframes to polished prototypes.",
          features: ["User Research", "Wireframing", "Prototyping", "Interaction Design"]
        },
        {
          name: "Brand Identity",
          description: "Consistent design language across platforms.",
          features: ["Logos", "Style Guides", "Iconography", "Design Systems"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-33 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('https://images.pexels.com/photos/8867426/pexels-photo-8867426.jpeg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Simple, scalable solutions to bring your digital ideas to life.
          </p>
        </div>
      </section>

      {/* Services */}
      <main className="py-20">
        {serviceCategories.map((category, i) => (
          <section key={i} className={`py-16 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, j) => (
                  <div
                    key={j}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 border border-gray-100"
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-5">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f, k) => (
                        <li key={k} className="flex items-center text-gray-700">
                          <span className="text-blue-600 mr-2">✔</span> {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/startproject" className="w-full px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition flex items-center justify-center">
                      Start Project <span className="ml-2">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
