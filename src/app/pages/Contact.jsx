import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import video from "../../assets/crowd.mp4";

// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, ...options },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, inView] = useInView();
  const dirs = {
    up: "translateY(28px)",
    left: "translateX(-28px)",
    right: "translateX(28px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0,0)" : dirs[direction],
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function AnimatedStat({ value, label }) {
  const [ref, inView] = useInView();
  const [display, setDisplay] = useState("0");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }
    const suffix = value.replace(/[0-9]/g, "");
    let start = 0;
    const steps = 50;
    const inc = num / steps;
    const timer = setInterval(() => {
      start += inc;
      if (start >= num) {
        setDisplay(value);
        clearInterval(timer);
      } else setDisplay(`${Math.floor(start)}${suffix}`);
    }, 1200 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white border border-gray-200 rounded-xl p-6"
      style={{
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.1)" : "none",
        borderColor: hovered ? "#bfdbfe" : "#e5e7eb",
      }}
    >
      <div
        className="text-4xl font-bold mb-2"
        style={{
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          display: "inline-block",
        }}
      >
        {display}
      </div>
      <p className="text-gray-700">{label}</p>
    </div>
  );
}

// ─── CONTACT INFO ITEM ───────────────────────────────────────────────────────

function ContactItem({ icon: Icon, title, children, delay }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-start space-x-4"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-24px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      <div
        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          transition:
            "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
          transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1)",
          boxShadow: hovered ? "0 8px 20px rgba(59,130,246,0.35)" : "none",
        }}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h3
          className="font-semibold text-gray-900 mb-1"
          style={{
            transition: "color 0.2s ease",
            color: hovered ? "#1d4ed8" : "",
          }}
        >
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

// ─── FLOATING LABEL INPUT ────────────────────────────────────────────────────

function FormField({
  label,
  id,
  name,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  children,
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
        style={{
          transition: "color 0.2s ease",
          color: focused ? "#2563eb" : "",
        }}
      >
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      {children || (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full px-4 py-3 border rounded-lg outline-none transition-all"
          style={{
            borderColor: focused ? "#3b82f6" : "#d1d5db",
            boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.12)" : "none",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          }}
        />
      )}
      {/* Focus underline */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          borderRadius: "0 0 8px 8px",
          background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
          width: focused ? "100%" : "0%",
          transition: "width 0.3s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 800);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
    <>
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes spin-once {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes success-pop {
          0%   { transform: scale(0.8); opacity: 0; }
          70%  { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes send-fly {
          0%   { transform: translate(0,0) rotate(0deg); opacity: 1; }
          100% { transform: translate(40px,-40px) rotate(20deg); opacity: 0; }
        }

        .hero-h1 { opacity: 0; animation: fade-up 0.75s ease 0.1s forwards; }
        .hero-p  { opacity: 0; animation: fade-up 0.75s ease 0.3s forwards; }

        .form-card {
          transition: box-shadow 0.4s ease;
        }
        .form-card:hover {
          box-shadow: 0 32px 64px rgba(0,0,0,0.1);
        }

        .submit-btn {
          background: linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }
        .submit-btn:hover:not(:disabled) {
          transform: scale(1.02);
          box-shadow: 0 8px 24px rgba(6,182,212,0.4);
          filter: brightness(1.08);
        }
        .submit-btn:active:not(:disabled) {
          transform: scale(0.98);
        }

        .success-banner {
          animation: success-pop 0.4s ease forwards;
        }

        .expect-item {
          transition: transform 0.2s ease;
        }
        .expect-item:hover { transform: translateX(4px); }
        .expect-item:hover .expect-num { color: #2563eb; transform: scale(1.15); }
        .expect-num { transition: transform 0.2s ease, color 0.2s ease; display: inline-block; }

        .map-frame {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .map-frame:hover {
          transform: scale(1.01);
          box-shadow: 0 12px 32px rgba(0,0,0,0.12);
        }

        select:focus {
          outline: none;
        }
        textarea:focus {
          outline: none;
        }
      `}</style>

      <div className="bg-white">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 relative overflow-hidden">
          {/* subtle grid overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          {/* 🎥 Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-h1 text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="hero-p text-xl text-gray-300">
                Ready to start your digital transformation journey? Let's
                discuss how we can help you achieve your goals
              </p>
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM & INFO ───────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: info */}
              <FadeIn direction="left">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Let's Talk About Your Project
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Our team of experts is ready to discuss your technology
                    needs and help you find the right solutions. Whether you're
                    looking to implement Adobe Experience Cloud, migrate to the
                    cloud, or build custom applications, we're here to help.
                  </p>

                  <div className="space-y-6">
                    <ContactItem icon={Mail} title="Email Us" delay={100}>
                      <a
                        href="mailto:info@sjtechnolabs.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        info@sjtechnolabs.com
                      </a>
                      <p className="text-gray-600 text-sm mt-1">
                        We'll respond within 24 hours
                      </p>
                    </ContactItem>

                    <ContactItem icon={Phone} title="Call Us" delay={200}>
                      <a
                        href="tel:+1234567890"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                      <p className="text-gray-600 text-sm mt-1">
                        Mon-Fri from 9am to 6pm EST
                      </p>
                    </ContactItem>

                    <ContactItem icon={MapPin} title="Visit Us" delay={300}>
                      <p className="text-gray-600">
                        SJ Technolabs
                        <br />
                        159, MM Road, Frazer Town, Bengaluru, Karnataka 560005
                      </p>
                      <div className="mt-5">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5510446791827!2d77.61553257358958!3d13.000542014246111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae170059709971%3A0x81207e1a30dafad4!2sEmploydemy%20solutions!5e0!3m2!1sen!2sin!4v1773137768382!5m2!1sen!2sin"
                          width="100%"
                          height="220"
                          className="map-frame rounded-xl border border-gray-200"
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          style={{ display: "block" }}
                        />
                      </div>
                    </ContactItem>
                  </div>

                  {/* What to expect */}
                  <FadeIn delay={400}>
                    <div
                      className="mt-10 p-6 bg-slate-50 rounded-xl border border-gray-200"
                      style={{ transition: "box-shadow 0.3s ease" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow =
                          "0 8px 24px rgba(0,0,0,0.07)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow = "")
                      }
                    >
                      <h3 className="font-semibold text-gray-900 mb-3">
                        What to Expect
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        {[
                          "Initial consultation to understand your needs",
                          "Detailed proposal with timeline and costs",
                          "Kickoff meeting with your dedicated team",
                        ].map((text, i) => (
                          <li
                            key={i}
                            className="expect-item flex items-start gap-2"
                          >
                            <span className="expect-num text-blue-600 font-semibold">
                              {i + 1}.
                            </span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                </div>
              </FadeIn>

              {/* Right: form */}
              <FadeIn direction="right" delay={100}>
                <div className="form-card bg-white border border-gray-200 rounded-2xl p-8 shadow-lg relative overflow-hidden">
                  {/* Top accent bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                      borderRadius: "12px 12px 0 0",
                    }}
                  />

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h3>

                  {/* Success banner */}
                  {submitted && (
                    <div className="success-banner mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-emerald-800 font-medium">
                        Thank you! We'll get back to you within 24 hours.
                      </span>
                    </div>
                  )}

                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <StyledField
                        label="Full Name"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                      <StyledField
                        label="Email Address"
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Company + Phone row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <StyledField
                        label="Company Name"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                      <StyledField
                        label="Phone Number"
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-890"
                      />
                    </div>

                    {/* Service select */}
                    <StyledSelect
                      label="Service Interested In"
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </StyledSelect>

                    {/* Message textarea */}
                    <StyledTextarea
                      label="Message"
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                    />

                    <button
                      type="submit"
                      disabled={submitting}
                      className="submit-btn w-full text-white px-8 py-4 rounded-lg font-medium shadow-lg flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <div
                            style={{
                              width: 20,
                              height: 20,
                              border: "2px solid rgba(255,255,255,0.4)",
                              borderTopColor: "#fff",
                              borderRadius: "50%",
                              animation: "spin-once 0.7s linear infinite",
                            }}
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── GLOBAL PRESENCE ───────────────────────────────────────────────── */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Global Presence, Local Expertise
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  With delivery centers across North America, Europe, and Asia
                  Pacific, we provide 24/7 support and services to clients
                  worldwide.
                </p>
              </FadeIn>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { value: "24/7", label: "Global Support Coverage" },
                  { value: "300+", label: "Expert Professionals" },
                  { value: "15+", label: "Years of Experience" },
                ].map((stat, i) => (
                  <FadeIn key={i} delay={i * 100} direction="up">
                    <AnimatedStat value={stat.value} label={stat.label} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ─── STYLED FORM COMPONENTS ──────────────────────────────────────────────────

function StyledField({
  label,
  id,
  name,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-2"
        style={{
          color: focused ? "#2563eb" : "#374151",
          transition: "color 0.2s ease",
        }}
      >
        {label} {required && <span className="text-blue-400">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-3 border rounded-lg bg-white"
        style={{
          borderColor: focused ? "#3b82f6" : "#d1d5db",
          boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.12)" : "none",
          outline: "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          borderRadius: "0 0 8px 8px",
          background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
          width: focused ? "100%" : "0%",
          transition: "width 0.3s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function StyledSelect({
  label,
  id,
  name,
  required,
  value,
  onChange,
  children,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-2"
        style={{
          color: focused ? "#2563eb" : "#374151",
          transition: "color 0.2s ease",
        }}
      >
        {label} {required && <span className="text-blue-400">*</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-3 border rounded-lg bg-white appearance-none"
        style={{
          borderColor: focused ? "#3b82f6" : "#d1d5db",
          boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.12)" : "none",
          outline: "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        {children}
      </select>
      {/* Custom chevron */}
      <div
        style={{
          position: "absolute",
          right: 14,
          top: "50%",
          transform: "translateY(4px)",
          pointerEvents: "none",
          color: focused ? "#3b82f6" : "#6b7280",
          transition: "color 0.2s ease",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          borderRadius: "0 0 8px 8px",
          background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
          width: focused ? "100%" : "0%",
          transition: "width 0.3s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function StyledTextarea({
  label,
  id,
  name,
  required,
  value,
  onChange,
  placeholder,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-2"
        style={{
          color: focused ? "#2563eb" : "#374151",
          transition: "color 0.2s ease",
        }}
      >
        {label} {required && <span className="text-blue-400">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-3 border rounded-lg bg-white resize-none"
        style={{
          borderColor: focused ? "#3b82f6" : "#d1d5db",
          boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.12)" : "none",
          outline: "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          borderRadius: "0 0 8px 8px",
          background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
          width: focused ? "100%" : "0%",
          transition: "width 0.3s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
