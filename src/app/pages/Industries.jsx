import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Store,
  Radio,
  Building,
  Heart,
  Factory,
  Film,
  GraduationCap,
  Plane,
  CheckCircle,
} from "lucide-react";

export function Industries() {
  const industries = [
    {
      icon: ShoppingCart,
      name: "E-commerce",
      description: "Scalable platforms, personalized experiences, and omnichannel solutions for online retailers",
      solutions: [
        "Adobe Commerce (Magento) implementation",
        "Headless commerce architectures",
        "Payment gateway integrations",
        "Inventory management systems",
      ],
    },
    {
      icon: Store,
      name: "Retail",
      description: "Digital transformation for brick-and-mortar stores with unified commerce experiences",
      solutions: [
        "Point-of-sale systems",
        "Customer loyalty programs",
        "Supply chain optimization",
        "In-store digital experiences",
      ],
    },
    {
      icon: Radio,
      name: "Telecommunications",
      description: "Customer management platforms, billing systems, and network optimization solutions",
      solutions: [
        "Customer portal development",
        "Billing and subscription management",
        "Network analytics dashboards",
        "IoT platform integration",
      ],
    },
    {
      icon: Building,
      name: "Banking & Financial Services",
      description: "Secure, compliant digital banking and wealth management solutions",
      solutions: [
        "Online banking platforms",
        "Mobile payment applications",
        "Fraud detection systems",
        "Regulatory compliance tools",
      ],
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "HIPAA-compliant patient portals, telemedicine, and healthcare management systems",
      solutions: [
        "Electronic health records (EHR)",
        "Telemedicine platforms",
        "Patient engagement portals",
        "Healthcare analytics",
      ],
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Industry 4.0 solutions, supply chain management, and production optimization",
      solutions: [
        "Manufacturing execution systems",
        "Supply chain visibility",
        "Predictive maintenance",
        "Quality management systems",
      ],
    },
    {
      icon: Film,
      name: "Media & Entertainment",
      description: "Content management, streaming platforms, and audience engagement solutions",
      solutions: [
        "Digital asset management",
        "Video streaming platforms",
        "Content delivery networks",
        "Audience analytics",
      ],
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Learning management systems, student portals, and educational technology platforms",
      solutions: [
        "Learning management systems (LMS)",
        "Student information systems",
        "Virtual classroom platforms",
        "Educational content delivery",
      ],
    },
    {
      icon: Plane,
      name: "Travel & Hospitality",
      description: "Booking systems, customer experience platforms, and hospitality management solutions",
      solutions: [
        "Booking and reservation systems",
        "Property management systems",
        "Guest experience portals",
        "Travel analytics platforms",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-300">
              Delivering specialized technology solutions across diverse industries with deep domain expertise
            </p>
          </div>
        </div>
      </section>

      {/* Industry Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Enterprises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our industry-specific expertise helps organizations navigate complex challenges and achieve their business goals
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                      {industry.description}
                    </p>
                    <div className="space-y-3">
                      <p className="font-semibold text-gray-900">Key Solutions:</p>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-12 flex items-center justify-center h-80">
                      <Icon className="h-32 w-32 text-slate-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Cross-Industry Capabilities
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Beyond industry-specific expertise, we bring proven capabilities that apply across all sectors:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Digital Experience Platforms",
                  description: "Adobe Experience Cloud implementation for personalized customer journeys",
                },
                {
                  title: "Cloud Infrastructure",
                  description: "Multi-cloud architecture design and implementation (AWS, Azure, GCP)",
                },
                {
                  title: "Data & Analytics",
                  description: "Business intelligence, data warehousing, and advanced analytics",
                },
                {
                  title: "Mobile Solutions",
                  description: "Native and cross-platform mobile applications for iOS and Android",
                },
                {
                  title: "API & Integration",
                  description: "Microservices architecture and third-party system integrations",
                },
                {
                  title: "Security & Compliance",
                  description: "Enterprise-grade security, data privacy, and regulatory compliance",
                },
                {
                  title: "DevOps & Automation",
                  description: "CI/CD pipelines, infrastructure as code, and automated testing",
                },
                {
                  title: "AI & Machine Learning",
                  description: "AI-ready architectures and intelligent automation solutions",
                },
              ].map((capability, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss how our industry expertise can drive your business forward
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-medium shadow-lg text-lg"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
