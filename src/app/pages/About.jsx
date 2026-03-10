import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, Award, Globe, TrendingUp } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering world-class solutions that exceed expectations",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients as trusted partners in their success",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technologies to solve complex challenges",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Maintaining highest standards in every aspect of our work",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Delivering solutions across borders with local expertise",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Helping clients scale and adapt to changing market demands",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About SJ Technolabs
            </h1>
            <p className="text-xl text-gray-300">
              A leading software consulting firm specializing in Adobe Experience Cloud, cloud technologies, and custom enterprise solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  SJ Technolabs is a premier software consulting firm with over 15 years of experience in delivering innovative technology solutions to enterprises worldwide. We specialize in Adobe Experience Cloud implementations, multi-cloud architectures, and custom application development.
                </p>
                <p>
                  Our team of certified experts combines deep technical knowledge with industry best practices to help organizations achieve their digital transformation goals. We pride ourselves on building long-term partnerships with our clients, understanding their unique challenges, and delivering solutions that drive measurable business outcomes.
                </p>
                <p>
                  With delivery centers across the globe and a team of 300+ professionals, we serve clients across diverse industries including e-commerce, retail, telecommunications, banking, healthcare, and manufacturing.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neSUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzIxNzM2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern office"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower enterprises with scalable, secure, and high-performance digital platforms that drive innovation, enhance customer experiences, and accelerate business growth through cutting-edge technology solutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the most trusted global technology partner for enterprises seeking digital transformation, recognized for our technical excellence, innovation, and commitment to delivering exceptional value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Deep domain knowledge across multiple technology stacks and industries
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Adobe Certified</h3>
                <p className="text-gray-300">
                  Certified experts in AEM, Analytics, Target, Campaign, and Adobe Journey Optimizer
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Cloud Partners</h3>
                <p className="text-gray-300">
                  Official partners with AWS, Microsoft Azure, and Google Cloud Platform
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Agile & DevOps</h3>
                <p className="text-gray-300">
                  Expert implementation of CI/CD pipelines and agile methodologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partner with Us
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's work together to transform your enterprise with innovative technology solutions
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-medium shadow-lg text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
