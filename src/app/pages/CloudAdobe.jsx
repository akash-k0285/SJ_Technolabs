import { Link } from "react-router-dom";
import {
  Cloud,
  Server,
  Settings,
  BarChart,
  Target,
  Mail,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function CloudAdobe() {
  const cloudServices = [
    {
      icon: Cloud,
      provider: "Amazon Web Services (AWS)",
      logo: "AWS",
      services: [
        "EC2, Lambda, ECS, EKS for compute",
        "S3, EBS, Glacier for storage",
        "RDS, DynamoDB, ElastiCache for databases",
        "CloudFormation, CDK for infrastructure",
        "CloudFront, Route53 for networking",
        "IAM, KMS, WAF for security",
      ],
      specialties: "Certified AWS Solutions Architects & DevOps Engineers",
    },
    {
      icon: Server,
      provider: "Microsoft Azure",
      logo: "Azure",
      services: [
        "Virtual Machines, App Service, Functions",
        "Blob Storage, Azure Files, Data Lake",
        "SQL Database, Cosmos DB, Redis Cache",
        "Azure DevOps, ARM Templates",
        "Azure AD, Key Vault, Security Center",
        "AKS, Container Instances",
      ],
      specialties: "Microsoft Certified Azure Administrators & Architects",
    },
    {
      icon: Settings,
      provider: "Google Cloud Platform (GCP)",
      logo: "GCP",
      services: [
        "Compute Engine, Cloud Functions, GKE",
        "Cloud Storage, Persistent Disk",
        "Cloud SQL, Firestore, BigQuery",
        "Cloud Build, Deployment Manager",
        "Cloud IAM, Cloud KMS",
        "Cloud CDN, Cloud Load Balancing",
      ],
      specialties: "Google Cloud Certified Professionals",
    },
  ];

  const cloudCapabilities = [
    {
      title: "Cloud Migration",
      description: "Seamless migration of legacy applications to cloud with minimal downtime",
    },
    {
      title: "Cloud-Native Development",
      description: "Building scalable applications leveraging serverless and microservices",
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated pipelines, infrastructure as code, and continuous delivery",
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Architecting solutions across multiple cloud providers for redundancy",
    },
    {
      title: "Cost Optimization",
      description: "Right-sizing resources and implementing cost-effective architectures",
    },
    {
      title: "24/7 Managed Services",
      description: "Proactive monitoring, maintenance, and support for cloud infrastructure",
    },
  ];

  const adobeServices = [
    {
      icon: FileText,
      title: "Adobe Experience Manager (AEM)",
      description: "Enterprise content management system for websites, mobile apps, and forms",
      offerings: [
        "AEM Sites implementation & migration",
        "Component development & templates",
        "Digital asset management (DAM)",
        "Forms & workflows",
        "Multi-site management",
        "Content fragments & experience fragments",
      ],
    },
    {
      icon: BarChart,
      title: "Adobe Analytics",
      description: "Web and mobile analytics with real-time insights and customer intelligence",
      offerings: [
        "Implementation & data layer setup",
        "Custom reporting & dashboards",
        "Segment creation & analysis",
        "Attribution modeling",
        "Mobile app analytics",
        "Integration with other Adobe tools",
      ],
    },
    {
      icon: Target,
      title: "Adobe Target",
      description: "A/B testing, multivariate testing, and AI-powered personalization",
      offerings: [
        "A/B and multivariate testing",
        "Automated personalization",
        "Recommendations engine",
        "Visual Experience Composer",
        "Server-side targeting",
        "Integration with Analytics",
      ],
    },
    {
      icon: Mail,
      title: "Adobe Campaign & Journey Optimizer",
      description: "Marketing automation and omnichannel customer journey orchestration",
      offerings: [
        "Campaign design & execution",
        "Email marketing automation",
        "Customer journey mapping",
        "Cross-channel orchestration",
        "Real-time decisioning",
        "Personalized messaging at scale",
      ],
    },
  ];

  const adobeCapabilities = [
    "Certified Adobe Experience Cloud experts",
    "End-to-end implementation services",
    "Custom component & plugin development",
    "Third-party system integrations",
    "Performance optimization & tuning",
    "Training & knowledge transfer",
    "Ongoing support & managed services",
    "AEM as a Cloud Service migrations",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cloud & Adobe Solutions
            </h1>
            <p className="text-xl text-gray-300">
              Expert implementation and managed services for leading cloud platforms and Adobe Experience Cloud
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Solutions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified professionals with deep expertise across AWS, Azure, and Google Cloud Platform
            </p>
          </div>

          <div className="space-y-12">
            {cloudServices.map((cloud, index) => {
              const Icon = cloud.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {cloud.provider}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium">
                        {cloud.specialties}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cloud.services.map((service, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-2 text-gray-700"
                      >
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud Capabilities */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Service Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions from strategy to implementation and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adobe Experience Cloud */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Adobe Experience Cloud
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Digital Experience Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end Adobe solutions for creating exceptional customer experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {adobeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  <div className="space-y-2">
                    {service.offerings.map((offering, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-2 text-gray-700"
                      >
                        <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{offering}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Adobe Products */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Additional Adobe Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customer Journey Analytics (CJA)
                </h3>
                <p className="text-gray-600 mb-4">
                  Cross-channel analytics powered by Adobe Experience Platform for comprehensive customer insights
                </p>
                <ul className="space-y-2">
                  {[
                    "Unified data analysis",
                    "Cross-channel attribution",
                    "Real-time dashboards",
                    "Predictive analytics",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AEM Guides
                </h3>
                <p className="text-gray-600 mb-4">
                  Component content management system (CCMS) for technical documentation at scale
                </p>
                <ul className="space-y-2">
                  {[
                    "DITA-based authoring",
                    "Multi-format publishing",
                    "Translation management",
                    "Version control",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adobe Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Us for Adobe Solutions?
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {adobeCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white border border-gray-200 rounded-lg p-4"
                >
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seamless Cloud + Adobe Integration
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We specialize in integrating Adobe Experience Cloud with cloud infrastructure for optimal performance, scalability, and reliability
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "AEM on AWS, Azure, or GCP",
                "Adobe Analytics with Cloud Data",
                "Adobe Campaign + Cloud Messaging",
              ].map((integration, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
                >
                  <p className="font-medium">{integration}</p>
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
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss your cloud migration or Adobe implementation project
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-medium shadow-lg text-lg"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}