import { Link } from "react-router-dom";
import {
  Cloud,
  Code,
  Database,
  Boxes,
  GitBranch,
  Workflow,
  BarChart,
  Target,
  Mail,
  Smartphone,
  Settings,
  Shield,
  ArrowRight,
  ChevronsLeftRightEllipsis,
} from "lucide-react";

export function Services() {
  const redirectPath = "/plans";
  const adobeServices = [
    {
      icon: BarChart,
      title: "Adobe Experience Manager (AEM)",
      description:
        "Implementation, migration, component development, and managed services for AEM Sites and Assets",
    },
    {
      icon: Target,
      title: "Adobe Analytics & Target",
      description:
        "Data collection, reporting, audience segmentation, and A/B testing implementation",
    },
    {
      icon: Mail,
      title: "Adobe Campaign & AJO",
      description:
        "Marketing automation, customer journey orchestration, and omnichannel campaign management",
    },
    {
      icon: Workflow,
      title: "Customer Journey Analytics (CJA)",
      description:
        "Cross-channel analytics, data visualization, and customer insights",
    },
    {
      icon: Database,
      title: "AEM Guides",
      description:
        "Component content management system (CCMS) implementation and customization",
    },
    {
      icon: Settings,
      title: "Integration & Migration",
      description:
        "Third-party integrations, data migration, and system modernization",
    },
  ];

  const cloudServices = [
    {
      icon: Cloud,
      title: "Cloud Migration & Modernization",
      description:
        "Seamless migration of legacy applications to AWS, Azure, or GCP with minimal downtime",
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD",
      description:
        "Implementation of automated pipelines, infrastructure as code, and continuous delivery",
    },
    {
      icon: Boxes,
      title: "Microservices & Containers",
      description:
        "Architecture design and implementation using Docker, Kubernetes, and serverless",
    },
    {
      icon: Shield,
      title: "Cloud Security & Compliance",
      description:
        "Security best practices, compliance audits, and identity management",
    },
    {
      icon: Database,
      title: "Cloud-Native Architecture",
      description:
        "Design and build scalable, resilient cloud-native applications",
    },
    {
      icon: Settings,
      title: "Managed Cloud Services",
      description:
        "24/7 monitoring, maintenance, optimization, and support for your cloud infrastructure",
    },
  ];

  const developmentServices = [
    {
      icon: Code,
      title: "Enterprise Web Applications",
      description:
        "Custom web applications built with React, Angular, Vue.js, and modern frameworks",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android",
    },
    {
      icon: Database,
      title: "API Development & Integration",
      description:
        "RESTful and GraphQL APIs, microservices, and third-party system integrations",
    },
    {
      icon: Workflow,
      title: "Legacy System Modernization",
      description:
        "Transform outdated systems into modern, scalable architectures",
    },
    {
      icon: Cloud,
      title: "SaaS Product Development",
      description: "End-to-end development of multi-tenant SaaS platforms",
    },
    {
      icon: Settings,
      title: "Application Support & Maintenance",
      description:
        "Ongoing support, bug fixes, performance optimization, and feature enhancements",
    },
    {
      icon: ChevronsLeftRightEllipsis,
      title: "Web Site Creation",
      description:
        "End-to-end website development, bug fixes, performance optimization, and feature enhancements",
    },
  ];

  const technologies = [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "C#", ".NET", "Node.js"],
    },
    {
      category: "Frontend",
      items: ["React", "Angular", "Vue.js", "TypeScript"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"],
    },
    {
      category: "Cloud",
      items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive technology solutions designed to accelerate your
              digital transformation journey
            </p>
          </div>
        </div>
      </section>

      {/* Adobe Experience Cloud Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Adobe Experience Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-spectrum Adobe services from implementation to managed
              support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adobeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-cloud expertise across AWS, Azure, and Google Cloud Platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/cloud-adobe-solutions"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all font-medium"
            >
              Explore Cloud & Adobe Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Application Development */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Application Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade applications built with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentServices.map((service, index) => {
              const Icon = service.icon;
              const serviceName = service?.title;
              {
                return serviceName == "Web Site Creation" ? (
                  <Link to={redirectPath}>
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern technology stack for building scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/technologies"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all font-medium"
            >
              View All Technologies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Discuss your project requirements with our expert team
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-medium shadow-lg text-lg"
            >
              Start Your Digital Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
