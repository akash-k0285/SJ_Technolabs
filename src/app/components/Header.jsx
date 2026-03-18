import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">SJ</span>
            </div>
            <span className="text-xl font-semibold">SJ Technolabs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 ml-10">
            {/* Home */}
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                isActive("/")
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 px-3 py-2 text-gray-300 hover:bg-slate-800 hover:text-white rounded-md cursor-pointer"
              >
                Services
                <ChevronDown size={16} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full mt-2 left-0 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-lg flex flex-col z-50">
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="px-4 py-2 hover:bg-slate-700"
                  >
                    Our services
                  </Link>

                  <Link
                    to="/industries"
                    onClick={() => setServicesOpen(false)}
                    className="px-4 py-2 hover:bg-slate-700"
                  >
                    Industries
                  </Link>

                  <Link
                    to="/technologies"
                    onClick={() => setServicesOpen(false)}
                    className="px-4 py-2 hover:bg-slate-700"
                  >
                    Technologies
                  </Link>

                  <Link
                    to="/cloud-adobe-solutions"
                    onClick={() => setServicesOpen(false)}
                    className="px-4 py-2 hover:bg-slate-700"
                  >
                    Cloud & Adobe Solutions
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1 px-3 py-2 text-gray-300 hover:bg-slate-800 hover:text-white rounded-md cursor-pointer"
              >
                Company
                <ChevronDown size={16} />
              </button>

              {aboutOpen && (
                <div className="absolute top-full mt-2 left-0 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg flex flex-col z-50">
                  <Link
                    to="/about"
                    onClick={() => setAboutOpen(false)}
                    className="px-4 py-2 hover:bg-slate-700"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setAboutOpen(false)}
                    className="px-4 py-2 hover:bg-slate-700"
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            {/* Our Plans */}
            {/* <Link
              to="/plans"
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                isActive("/plans")
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              Our Plans
            </Link> */}
          </div>

          {/* CTA Button (Extreme Right) */}
          <div className="hidden lg:block ml-auto">
            <a
              href="https://calendly.com/khankureakash0285/for-website"
              target="_blank"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2.5 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all font-medium shadow-lg"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden ml-auto p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-800"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 hover:bg-slate-800 rounded-md"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 hover:bg-slate-800 rounded-md"
              >
                About Us
              </Link>

              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 hover:bg-slate-800 rounded-md"
              >
                Services
              </Link>

              <Link
                to="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 hover:bg-slate-800 rounded-md"
              >
                Industries
              </Link>

              <Link
                to="/technologies"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 hover:bg-slate-800 rounded-md"
              >
                Technologies
              </Link>

              <Link
                to="/cloud-adobe-solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 hover:bg-slate-800 rounded-md"
              >
                Cloud & Adobe Solutions
              </Link>

              {/* <Link
                to="/plans"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 hover:bg-slate-800 rounded-md"
              >
                Our Plans
              </Link> */}

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 hover:bg-slate-800 rounded-md"
              >
                Contact Us
              </Link>

              <a
                href="https://calendly.com/khankureakash0285/for-website"
                target="_blank"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2.5 rounded-lg text-center font-medium mt-2"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
