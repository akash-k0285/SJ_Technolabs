import { Link } from "react-router-dom";
import { Code, Database, Cloud, Layers, CheckCircle } from "lucide-react";

export function Technologies() {
  const techCategories = [
    {
      icon: Code,
      title: "Backend Technologies",
      technologies: [
        { name: "Java", expertise: "Spring Boot, Hibernate, Maven, Gradle" },
        { name: "C# / .NET", expertise: ".NET Core, ASP.NET, Entity Framework" },
        { name: "Node.js", expertise: "Express, NestJS, Socket.io" },
        { name: "Python", expertise: "Django, Flask, FastAPI" },
      ],
    },
    {
      icon: Layers,
      title: "Frontend Technologies",
      technologies: [
        { name: "React", expertise: "React 18, Next.js, Redux, Context API" },
        { name: "Angular", expertise: "Angular 17+, RxJS, NgRx" },
        { name: "Vue.js", expertise: "Vue 3, Vuex, Nuxt.js" },
        { name: "TypeScript", expertise: "Type-safe development across all frameworks" },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      technologies: [
        { name: "PostgreSQL", expertise: "Advanced SQL, query optimization, replication" },
        { name: "MySQL / MariaDB", expertise: "High-availability configurations" },
        { name: "MongoDB", expertise: "Document modeling, aggregation pipelines" },
        { name: "Redis", expertise: "Caching, session management, pub/sub" },
        { name: "DynamoDB", expertise: "NoSQL design patterns, on-demand scaling" },
        { name: "Oracle", expertise: "Enterprise database management" },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      technologies: [
        {
          name: "Amazon Web Services (AWS)",
          expertise: "EC2, Lambda, S3, RDS, DynamoDB, CloudFormation, ECS, EKS",
        },
        {
          name: "Microsoft Azure",
          expertise: "App Service, Functions, Cosmos DB, AKS, DevOps",
        },
        {
          name: "Google Cloud Platform (GCP)",
          expertise: "Compute Engine, Cloud Functions, BigQuery, GKE",
        },
        {
          name: "Docker & Kubernetes",
          expertise: "Container orchestration, service mesh, Helm charts",
        },
      ],
    },
  ];

  const additionalTech = [
    {
      category: "API Development",
      items: ["REST APIs", "GraphQL", "gRPC", "WebSockets", "API Gateway"],
    },
    {
      category: "DevOps & CI/CD",
      items: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD", "Terraform", "Ansible"],
    },
    {
      category: "Testing",
      items: ["Jest", "Cypress", "Selenium", "JUnit", "Pytest", "Postman"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
    },
    {
      category: "Messaging & Events",
      items: ["Apache Kafka", "RabbitMQ", "AWS SNS/SQS", "Azure Service Bus"],
    },
    {
      category: "Monitoring & Logging",
      items: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"],
    },
  ];

  const adobeTech = [
    "Adobe Experience Manager (AEM)",
    "Adobe Analytics",
    "Adobe Target",
    "Adobe Campaign",
    "Adobe Journey Optimizer (AJO)",
    "Customer Journey Analytics (CJA)",
    "AEM Guides",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technologies & Expertise
            </h1>
            <p className="text-xl text-gray-300">
              Modern technology stack with deep expertise across the entire development lifecycle
            </p>
          </div>
        </div>
      </section>

      {/* Adobe Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Adobe Experience Cloud
              </h2>
              <p className="text-xl text-gray-600">
                Certified expertise across the Adobe technology ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adobeTech.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-6 flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building scalable, maintainable applications with industry-leading technologies
            </p>
          </div>

          <div className="space-y-12">
            {techCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.technologies.map((tech, i) => (
                      <div key={i} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {tech.name}
                        </h4>
                        <p className="text-gray-600">{tech.expertise}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Technologies & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive toolset for modern software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalTech.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Patterns */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Architecture & Design Patterns
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building applications with proven architectural patterns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Microservices Architecture",
              "Event-Driven Architecture",
              "Serverless Computing",
              "RESTful API Design",
              "GraphQL APIs",
              "Domain-Driven Design",
              "CQRS & Event Sourcing",
              "Hexagonal Architecture",
            ].map((pattern, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center"
              >
                <CheckCircle className="h-6 w-6 text-cyan-400 mx-auto mb-3" />
                <p className="font-medium">{pattern}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Development Best Practices
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Code Quality
                </h3>
                {[
                  "Clean code principles",
                  "SOLID design principles",
                  "Code reviews and pair programming",
                  "Automated testing (unit, integration, e2e)",
                  "Static code analysis",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Operations & Security
                </h3>
                {[
                  "Infrastructure as Code (IaC)",
                  "Continuous Integration & Deployment",
                  "Security-first development",
                  "Performance optimization",
                  "Comprehensive monitoring & logging",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build with the Right Technology
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Our experts will help you choose the optimal technology stack for your project
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-medium shadow-lg text-lg"
            >
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
