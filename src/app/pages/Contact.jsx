import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    plan: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "Adobe Experience Cloud",
    "Cloud Solutions (AWS/Azure/GCP)",
    "Custom Application Development",
    "DevOps & CI/CD",
    "Mobile App Development",
    "API Development & Integration",
    "Legacy System Modernization",
    "Managed Services",
    "Other",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300">
              Ready to start your digital transformation journey? Let's discuss
              how we can help you achieve your goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Talk About Your Project
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our team of experts is ready to discuss your technology needs
                and help you find the right solutions. Whether you're looking to
                implement Adobe Experience Cloud, migrate to the cloud, or build
                custom applications, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@sjtechnolabs.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      info@sjtechnolabs.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Call Us
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      +1 (234) 567-890
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Mon-Fri from 9am to 6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Visit Us
                    </h3>
                    <p className="text-gray-600">
                      SJ Technolabs
                      <br />
                      159, MM Road, Frazer Town, Bengaluru, Karnataka 560005
                    </p>
                    <div
                      style={{
                        position: "relative",
                        top: "20px",
                      }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5510446791827!2d77.61553257358958!3d13.000542014246111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae170059709971%3A0x81207e1a30dafad4!2sEmploydemy%20solutions!5e0!3m2!1sen!2sin!4v1773137768382!5m2!1sen!2sin"
                        width="450"
                        height="250"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">1.</span>
                    <span>Initial consultation to understand your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">2.</span>
                    <span>Detailed proposal with timeline and costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">3.</span>
                    <span>Kickoff meeting with your dedicated team</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  {/* <label
                    htmlFor="plan"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Plan *
                  </label>

                  <select
                    id="plan"
                    name="plan"
                    required
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                  >
                    <option value="">Select one plan</option>
                    <option value="Free">Free</option>
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                    <option value="Enterprise">Enterprise</option>
                  </select> */}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pb-15 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all font-medium shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Global Presence, Local Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              With delivery centers across North America, Europe, and Asia
              Pacific, we provide 24/7 support and services to clients
              worldwide.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <p className="text-gray-700">Global Support Coverage</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  300+
                </div>
                <p className="text-gray-700">Expert Professionals</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-700">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
