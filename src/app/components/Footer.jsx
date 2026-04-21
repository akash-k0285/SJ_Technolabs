import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  const services = [
    "Digital Platforms",
    "Cloud & Infrastructure",
    "Application Development",
    "DevOps & Automation",
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">SJ</span>
              </div>
              <span className="text-xl font-semibold text-white">
                SJ Technolabs
              </span>
            </div>

            <p className="text-sm mb-4">
              Delivering scalable, secure, and high-performance digital
              platforms for enterprises worldwide.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@sjtechnolabs.com"
                  className="hover:text-blue-400"
                >
                  info@sjtechnolabs.com
                </a>
              </li>

              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-blue-400">
                  +1 (234) 567-890
                </a>
              </li>

              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="hover:text-blue-400">
                  <a
                    href="https://www.google.com/maps/place/Employdemy+solutions/@13.000411,77.618494,15z/data=!4m6!3m5!1s0x3bae170059709971:0x81207e1a30dafad4!8m2!3d13.0005368!4d77.6181075!16s%2Fg%2F11xfccm49g?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    Global Delivery Centers
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} SJ Technolabs. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
