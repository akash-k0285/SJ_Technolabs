import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Store,
  Radio,
  Building,
  Heart,
  Factory,
  Signal,
  Film,
  GraduationCap,
  Plane,
  CheckCircle,
  ArrowRight,
  Calendar,
  MessageCircle,
  Search,
  TrendingUp,
  Download,
  Star,
  ChevronRight,
  Layers,
  ShieldCheck,
} from "lucide-react";
import video from "../../assets/boxgrid.mp4";

// ─── DATA (unchanged) ────────────────────────────────────────────────────────

const industries = [
  {
    icon: ShoppingCart,
    name: "E-commerce",
    tag: "Retail & Digital Commerce",
    accentFrom: "from-orange-500",
    accentTo: "to-red-500",
    bgLight: "bg-orange-50",
    borderLight: "border-orange-100",
    tagStyle: "bg-orange-100 text-orange-700",
    tagdesc:
      "Unified commerce experiences powered by real-time customer data, enabling personalised journeys and higher conversion rates.",
    description:
      "High-performance commerce platforms with personalised shopping experiences and seamless omnichannel journeys.",
    adobeConnection:
      "Adobe Commerce and Analytics for unified shopping experiences and conversion optimisation.",
    solutions: [
      "Headless commerce architectures",
      "AI-driven product recommendations",
      "Payment & checkout optimisation",
      "Inventory and order management systems",
    ],
    techStack: [
      "Adobe Commerce",
      "Next.js",
      "Node.js",
      "Stripe",
      "AWS",
      "OpenAI APIs",
    ],
    caseMetric: { value: "42%", label: "increase in average order value" },
    persona: "Head of eCommerce / VP Digital",
  },

  {
    icon: Store,
    name: "Retail",
    tag: "Unified Commerce & CX",
    accentFrom: "from-blue-500",
    accentTo: "to-cyan-500",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
    tagStyle: "bg-blue-100 text-blue-700",
    tagdesc:
      "Connected customer profiles and omnichannel insights to deliver consistent experiences across in-store and digital touchpoints.",
    description:
      "Connected retail ecosystems that unify in-store and digital experiences for modern consumers.",
    adobeConnection:
      "Adobe Experience Platform for unified customer profiles and journey orchestration.",
    solutions: [
      "Omnichannel experience platforms",
      "AI-driven demand forecasting",
      "Customer loyalty and engagement systems",
      "In-store digital transformation",
    ],
    techStack: [
      "Adobe Experience Platform",
      "Azure",
      "Spring Boot",
      "React",
      "Power BI",
      "ML models",
    ],
    caseMetric: { value: "60%", label: "improvement in customer retention" },
    persona: "CTO / VP Technology",
  },

  {
    icon: Building,
    name: "Banking & Financial Services",
    tag: "FinTech & BFSI",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-600",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-100",
    tagStyle: "bg-emerald-100 text-emerald-700",
    tagdesc:
      "Data-driven personalisation and analytics to enhance customer trust, optimise financial journeys, and meet compliance requirements.",
    description:
      "Secure, compliant financial platforms with intelligent automation and enhanced customer experiences.",
    adobeConnection:
      "Adobe Analytics and Target for personalised financial journeys.",
    solutions: [
      "Digital banking platforms",
      "AI-based fraud detection",
      "Risk and compliance systems",
      "Wealth management solutions",
    ],
    techStack: ["Java", ".NET", "Kafka", "PostgreSQL", "AWS", "TensorFlow"],
    caseMetric: { value: "99.99%", label: "system uptime achieved" },
    persona: "CTO / Head of Digital Banking",
  },

  {
    icon: Heart,
    name: "Healthcare",
    tag: "Digital Health & Compliance",
    accentFrom: "from-pink-500",
    accentTo: "to-rose-500",
    bgLight: "bg-pink-50",
    borderLight: "border-pink-100",
    tagStyle: "bg-pink-100 text-pink-700",
    tagdesc:
      "Secure data platforms enabling personalised patient engagement while maintaining strict compliance and privacy standards.",
    description:
      "Patient-centric digital health platforms that improve outcomes while ensuring compliance and security.",
    adobeConnection:
      "Adobe Analytics for patient journey insights and engagement tracking.",
    solutions: [
      "Telemedicine and remote care platforms",
      "AI-assisted diagnostics support",
      "Patient engagement portals",
      "Healthcare data analytics",
    ],
    techStack: [
      "FHIR APIs",
      "Node.js",
      "React",
      "AWS HealthLake",
      "Python",
      "ML models",
    ],
    caseMetric: { value: "30%", label: "increase in patient engagement" },
    persona: "CTO / VP Digital Health",
  },

  {
    icon: Layers,
    name: "SaaS & Technology",
    tag: "Cloud & Product Engineering",
    accentFrom: "from-violet-500",
    accentTo: "to-indigo-600",
    bgLight: "bg-violet-50",
    borderLight: "border-violet-100",
    tagStyle: "bg-violet-100 text-violet-700",
    tagdesc:
      "Product analytics and user behaviour insights to drive feature adoption, retention, and continuous product improvement.",
    description:
      "Scalable SaaS platforms and developer ecosystems built for high growth and rapid innovation.",
    adobeConnection:
      "Adobe Analytics for product insights and feature optimisation.",
    solutions: [
      "Multi-tenant SaaS platforms",
      "AI-powered product features",
      "API-first platform development",
      "Usage analytics and insights",
    ],
    techStack: [
      "Kubernetes",
      "Docker",
      "Node.js",
      "GraphQL",
      "AWS",
      "OpenAI APIs",
    ],
    caseMetric: { value: "3×", label: "faster product release cycles" },
    persona: "CTO / VP Engineering",
  },

  {
    icon: Film,
    name: "Media & Publishing",
    tag: "Content & Audience Platforms",
    accentFrom: "from-amber-500",
    accentTo: "to-yellow-500",
    bgLight: "bg-amber-50",
    borderLight: "border-amber-100",
    tagStyle: "bg-amber-100 text-amber-700",
    tagdesc:
      "Audience intelligence and content performance insights to maximise engagement and content monetisation.",
    description:
      "Digital content platforms designed to maximise reach, engagement, and monetisation.",
    adobeConnection:
      "AEM Assets and Adobe Analytics for content lifecycle and audience insights.",
    solutions: [
      "Content management and DAM systems",
      "AI-driven content recommendations",
      "Video streaming platforms",
      "Audience analytics and monetisation",
    ],
    techStack: [
      "AEM Assets",
      "AWS CloudFront",
      "React",
      "Node.js",
      "Python",
      "Recommendation engines",
    ],
    caseMetric: { value: "4×", label: "increase in user engagement" },
    persona: "Head of Digital Media",
  },

  {
    icon: Signal,
    name: "Telecommunication",
    tag: "Connectivity & Network Platforms",
    accentFrom: "from-purple-500",
    accentTo: "to-indigo-600",
    bgLight: "bg-purple-50",
    borderLight: "border-purple-100",
    tagStyle: "bg-purple-100 text-purple-700",
    tagdesc:
      "Real-time usage analytics and customer insights to improve service delivery and optimise network performance.",
    description:
      "Robust telecom systems enabling scalable connectivity, automation, and real-time insights.",
    adobeConnection:
      "Adobe Analytics for tracking customer usage and engagement.",
    solutions: [
      "Network management platforms",
      "AI-driven network optimisation",
      "Billing and subscription systems",
      "Customer self-service portals",
    ],
    techStack: [
      "5G APIs",
      "Kafka",
      "PostgreSQL",
      "React",
      "AWS",
      "AI optimisation models",
    ],
    caseMetric: { value: "2.8×", label: "increase in network efficiency" },
    persona: "VP Network Operations",
  },

  {
    icon: GraduationCap,
    name: "Education",
    tag: "EdTech & Learning Platforms",
    accentFrom: "from-indigo-500",
    accentTo: "to-blue-600",
    bgLight: "bg-indigo-50",
    borderLight: "border-indigo-100",
    tagStyle: "bg-indigo-100 text-indigo-700",
    tagdesc:
      "Learner behaviour insights and personalised content delivery to improve engagement and learning outcomes.",
    description:
      "Scalable digital learning platforms that enhance engagement and improve learning outcomes.",
    adobeConnection:
      "Adobe Analytics for tracking learner engagement and course performance.",
    solutions: [
      "Learning management systems",
      "AI-powered personalised learning",
      "Virtual classrooms",
      "Student analytics platforms",
    ],
    techStack: [
      "Moodle",
      "React",
      "Node.js",
      "AWS",
      "Python",
      "AI recommendation systems",
    ],
    caseMetric: { value: "3.2×", label: "increase in course completion" },
    persona: "Head of Digital Learning",
  },

  {
    icon: Plane,
    name: "Travel & Hospitality",
    tag: "Booking & Guest Experience",
    accentFrom: "from-sky-500",
    accentTo: "to-cyan-400",
    bgLight: "bg-sky-50",
    borderLight: "border-sky-100",
    tagStyle: "bg-sky-100 text-sky-700",
    tagdesc:
      "Customer journey analytics and personalisation to enhance booking experiences and increase guest loyalty.",
    description:
      "End-to-end travel platforms delivering seamless booking and personalised guest experiences.",
    adobeConnection:
      "Adobe Target and Campaign for personalised offers and engagement.",
    solutions: [
      "Booking and reservation systems",
      "AI-driven pricing and recommendations",
      "Guest experience platforms",
      "Travel analytics and insights",
    ],
    techStack: [
      "Amadeus APIs",
      "React",
      "Node.js",
      "AWS",
      "Python",
      "ML pricing models",
    ],
    caseMetric: { value: "25%", label: "increase in direct bookings" },
    persona: "VP Guest Experience",
  },
];

const crossCapabilities = [
  {
    title: "Digital Experience Platforms",
    description:
      "Adobe Experience Cloud implementation for personalised customer journeys",
    icon: Layers,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Multi-cloud architecture design and implementation (AWS, Azure, GCP)",
    icon: ShieldCheck,
  },
  {
    title: "Data & Analytics",
    description:
      "Business intelligence, data warehousing, and advanced analytics",
    icon: TrendingUp,
  },
  {
    title: "Mobile Solutions",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    icon: MessageCircle,
  },
  {
    title: "API & Integration",
    description:
      "Microservices architecture and third-party system integrations",
    icon: ArrowRight,
  },
  {
    title: "Security & Compliance",
    description:
      "Enterprise-grade security, data privacy, and regulatory compliance",
    icon: ShieldCheck,
  },
  {
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure as code, and automated testing",
    icon: TrendingUp,
  },
  {
    title: "AI & Machine Learning",
    description: "AI-ready architectures and intelligent automation solutions",
    icon: Layers,
  },
];

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

// ─── ANIMATED METRIC ─────────────────────────────────────────────────────────

function AnimatedMetric({ value, inView }) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }
    const suffix = value.replace(/[0-9.]/g, "");
    let start = 0;
    const steps = 55;
    const inc = num / steps;
    const timer = setInterval(() => {
      start += inc;
      if (start >= num) {
        setDisplay(value);
        clearInterval(timer);
      } else
        setDisplay(
          `${Number.isInteger(num) ? Math.floor(start) : start.toFixed(1)}${suffix}`,
        );
    }, 1400 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <>{display}</>;
}

// ─── FADE IN ─────────────────────────────────────────────────────────────────

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

// ─── INDUSTRY CARD ───────────────────────────────────────────────────────────

function IndustryCard({ industry, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const Icon = industry.icon;
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="grid lg:grid-cols-2 items-start border rounded-2xl overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${Math.min(index * 60, 200)}ms, transform 0.6s ease ${Math.min(index * 60, 200)}ms, box-shadow 0.35s ease, border-color 0.3s ease`,
        boxShadow: hovered
          ? "0 20px 56px rgba(0,0,0,0.1)"
          : "0 1px 3px rgba(0,0,0,0.04)",
        borderColor: hovered ? "#bfdbfe" : "#f3f4f6",
      }}
    >
      {/* Content side */}
      <div className={`p-8 ${isReversed ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${industry.accentFrom} ${industry.accentTo} rounded-xl flex items-center justify-center flex-shrink-0`}
            style={{
              transition:
                "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
              transform: hovered
                ? "scale(1.1) rotate(-4deg)"
                : "scale(1) rotate(0deg)",
              boxShadow: hovered ? "0 8px 20px rgba(0,0,0,0.2)" : "none",
            }}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              {industry.name}
            </h3>
            <span
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${industry.tagStyle}`}
            >
              {industry.tag}
            </span>
          </div>
        </div>

        <p className="text-gray-700 mb-5 leading-relaxed">
          {industry.description}
        </p>

        {/* Adobe connection box */}
        <div
          className={`${industry.bgLight} border ${industry.borderLight} rounded-xl p-4 mb-5`}
          style={{
            transition: "transform 0.25s ease",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Experience & Data Enablement
          </p>
          <p className="text-sm text-gray-700">{industry.tagdesc}</p>
        </div>

        {/* Solutions */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-gray-900 mb-3">
            Key solutions
          </p>
          <ul className="space-y-2">
            {industry.solutions.map((solution, i) => (
              <li
                key={i}
                className="flex items-start gap-2"
                style={{
                  transform: hovered ? "translateX(4px)" : "translateX(0)",
                  transition: `transform 0.2s ease ${i * 40}ms`,
                }}
              >
                <CheckCircle
                  className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5"
                  style={{
                    transform: hovered ? "scale(1.15)" : "scale(1)",
                    transition: "transform 0.2s ease",
                  }}
                />
                <span className="text-sm text-gray-700">{solution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {industry.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
              style={{
                transition: `transform 0.2s ease ${i * 30}ms, background 0.2s ease`,
                transform: hovered ? "translateY(-2px)" : "translateY(0)",
                background: hovered ? "#e0e7ff" : "",
                color: hovered ? "#4338ca" : "",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 group relative"
          style={{ transition: "gap 0.2s ease" }}
        >
          Discuss your {industry.name.toLowerCase()} project
          <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
          <span
            style={{
              position: "absolute",
              bottom: -1,
              left: 0,
              height: 1,
              background: "#2563eb",
              width: hovered ? "100%" : "0%",
              transition: "width 0.35s ease",
            }}
          />
        </Link>
      </div>

      {/* Metric side */}
      <div
        className={`${industry.bgLight} flex flex-col items-center justify-center p-10 min-h-64 relative overflow-hidden ${isReversed ? "lg:order-1" : ""}`}
        style={{ transition: "filter 0.3s ease" }}
      >
        {/* Animated ring behind metric */}
        <div
          style={{
            position: "absolute",
            width: hovered ? 220 : 160,
            height: hovered ? 220 : 160,
            borderRadius: "50%",
            border: `2px solid`,
            borderColor: "rgba(0,0,0,0.06)",
            transition: "width 0.5s ease, height 0.5s ease, opacity 0.5s ease",
            opacity: hovered ? 0.6 : 0.3,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: hovered ? 160 : 100,
            height: hovered ? 160 : 100,
            borderRadius: "50%",
            border: `2px dashed`,
            borderColor: "rgba(0,0,0,0.08)",
            transition: "width 0.5s ease 0.1s, height 0.5s ease 0.1s",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "spin-slow 12s linear infinite",
            pointerEvents: "none",
          }}
        />

        {/* Big metric */}
        <div className="text-center mb-6 relative z-10">
          <div
            className={`text-5xl font-bold bg-gradient-to-br ${industry.accentFrom} ${industry.accentTo} bg-clip-text text-transparent mb-2`}
            style={{
              transition: "transform 0.3s ease",
              transform: hovered ? "scale(1.08)" : "scale(1)",
            }}
          >
            <AnimatedMetric value={industry.caseMetric.value} inView={inView} />
          </div>
          <div className="text-sm text-gray-600 max-w-xs">
            {industry.caseMetric.label}
          </div>
        </div>

        {/* Faded icon */}
        <div
          className={`w-20 h-20 bg-gradient-to-br ${industry.accentFrom} ${industry.accentTo} rounded-2xl flex items-center justify-center relative z-10`}
          style={{
            opacity: hovered ? 0.3 : 0.15,
            transform: hovered
              ? "scale(1.1) rotate(6deg)"
              : "scale(1) rotate(0deg)",
            transition: "opacity 0.3s ease, transform 0.4s ease",
          }}
        >
          <Icon className="h-10 w-10 text-white" />
        </div>

        {/* Persona badge */}
        <div className="mt-6 text-center relative z-10">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
            Typical buyer
          </p>
          <p className="text-sm font-semibold text-gray-700">
            {industry.persona}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── CAPABILITY CARD ─────────────────────────────────────────────────────────

function CapabilityCard({ cap, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const Icon = cap.icon;
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease`,
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.09)" : "none",
        borderColor: hovered ? "#bfdbfe" : "#e5e7eb",
      }}
    >
      <div
        className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          transition:
            "background 0.25s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          background: hovered ? "#dbeafe" : "",
          transform: hovered ? "scale(1.15) rotate(-5deg)" : "scale(1)",
        }}
      >
        <Icon
          className="h-4 w-4"
          style={{
            color: hovered ? "#1d4ed8" : "#2563eb",
            transition: "color 0.2s ease",
          }}
        />
      </div>
      <div>
        <h3
          className="text-sm font-semibold text-gray-900 mb-1"
          style={{
            transition: "color 0.2s ease",
            color: hovered ? "#1d4ed8" : "",
          }}
        >
          {cap.title}
        </h3>
        <p className="text-sm text-gray-600">{cap.description}</p>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export function Industries() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes gradient-pan {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pop-in {
          0% { transform: scale(0) rotate(-20deg); opacity: 0; }
          80% { transform: scale(1.15) rotate(3deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        .hero-h1 { opacity: 0; animation: fade-up 0.75s ease 0.1s forwards; }
        .hero-p  { opacity: 0; animation: fade-up 0.75s ease 0.3s forwards; }

        .btn-cyan {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .btn-cyan:hover {
          transform: scale(1.04);
          box-shadow: 0 10px 28px rgba(6,182,212,0.4);
          background: #22d3ee !important;
        }
        .btn-ghost-lg {
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .btn-ghost-lg:hover {
          background: rgba(255,255,255,0.2) !important;
          transform: scale(1.03);
        }

        .cta-card {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          background-size: 200% 200%;
          animation: gradient-pan 7s ease infinite;
          transition: box-shadow 0.4s ease;
        }
        .cta-card:hover {
          box-shadow: 0 32px 80px rgba(0,0,0,0.3);
        }
        .cta-accent-bar {
          transition: width 0.4s ease;
        }
        .cta-card:hover .cta-accent-bar {
          width: 40% !important;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #22d3ee, #60a5fa, #22d3ee);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <div className="bg-white">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 relative overflow-hidden">
          <div
            style={{
              position: "absolute",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
              top: -120,
              right: -80,
              animation: "float 9s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
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
                Industries We Serve
              </h1>
              <p className="hero-p text-xl text-gray-300">
                Delivering specialized technology solutions across diverse
                industries with deep domain expertise
              </p>
            </div>
          </div>
        </section>

        {/* ── INDUSTRY CARDS ───────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Deep industry knowledge
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Each vertical comes with Adobe Experience Cloud integration
                  points, a proven tech stack, and measurable outcome targets
                </p>
              </div>
            </FadeIn>

            <div className="space-y-10">
              {industries.map((industry, index) => (
                <IndustryCard key={index} industry={industry} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CROSS-INDUSTRY CAPABILITIES ──────────────────────────────────── */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="text-center mb-14">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Cross-industry capabilities
                  </h2>
                  <p className="text-lg text-gray-600">
                    Beyond industry-specific expertise, we bring proven
                    capabilities that apply across all sectors
                  </p>
                </div>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-5">
                {crossCapabilities.map((cap, index) => (
                  <CapabilityCard key={index} cap={cap} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="cta-card rounded-3xl p-12 text-center text-white relative overflow-hidden">
                {/* Accent bar */}
                <div
                  className="cta-accent-bar"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "16rem",
                    height: 3,
                    borderRadius: "0 0 8px 8px",
                    background: "linear-gradient(90deg, #22d3ee, #3b82f6)",
                  }}
                />

                {/* Blobs */}
                <div
                  style={{
                    position: "absolute",
                    width: 350,
                    height: 350,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
                    top: -100,
                    right: -80,
                    animation: "float 8s ease-in-out infinite",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: 250,
                    height: 250,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
                    bottom: -60,
                    left: "5%",
                    animation: "float 10s ease-in-out 2s infinite",
                    pointerEvents: "none",
                  }}
                />

                <div className="relative z-10">
                  <span
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm text-gray-300 mb-6"
                    style={{ animation: "fade-up 0.6s ease 0.1s both" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full bg-cyan-400 inline-block"
                      style={{ animation: "float 2s ease-in-out infinite" }}
                    />
                    9 industries · 200+ enterprise projects
                  </span>

                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ animation: "fade-up 0.6s ease 0.2s both" }}
                  >
                    Ready to transform your{" "}
                    <span className="shimmer-text">industry?</span>
                  </h2>
                  <p
                    className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto"
                    style={{ animation: "fade-up 0.6s ease 0.3s both" }}
                  >
                    Start with a free 45-minute architecture review. We’ll
                    assess your current systems, identify high-impact
                    improvement opportunities, and provide a clear, actionable
                    roadmap — no obligation.
                  </p>

                  <div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    style={{ animation: "fade-up 0.6s ease 0.4s both" }}
                  >
                    <Link
                      to="https://calendly.com/khankureakash0285/for-website"
                      className="btn-cyan inline-flex items-center justify-center gap-2 bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl text-lg"
                    >
                      <Calendar className="h-5 w-5" />
                      Book a Free Architecture Review
                    </Link>
                    <Link
                      to="/services"
                      className="btn-ghost-lg inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-medium px-8 py-4 rounded-xl text-lg"
                    >
                      Explore Our Services
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
