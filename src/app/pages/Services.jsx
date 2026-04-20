import { useState, useEffect, useRef } from "react";
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
  CheckCircle,
  Download,
  Calendar,
  ChevronRight,
  Star,
  ArrowLeftRight,
} from "lucide-react";
import video from "../../assets/globe.mp4";

// ─── DATA (unchanged) ────────────────────────────────────────────────────────

const adobeServices = [
  {
    icon: BarChart,
    title: "Adobe Experience Manager (AEM)",
    description:
      "Implementation, migration, component development, and managed services for AEM Sites and Assets",
    useCase: "Enterprise content at scale",
    deliverable: "Full AEM deployment + training",
    slug: "aem-implementation",
  },
  {
    icon: Target,
    title: "Adobe Analytics & Target",
    description:
      "Data collection, reporting, audience segmentation, and A/B testing implementation",
    useCase: "Data-driven personalisation",
    deliverable: "Analytics dashboards + A/B framework",
    slug: "adobe-analytics-target",
  },
  {
    icon: Mail,
    title: "Adobe Campaign & AJO",
    description:
      "Marketing automation, customer journey orchestration, and omnichannel campaign management",
    useCase: "Omnichannel campaign ops",
    deliverable: "Automated journey blueprints",
    slug: "adobe-campaign-ajo",
  },
  {
    icon: Workflow,
    title: "Customer Journey Analytics (CJA)",
    description:
      "Cross-channel analytics, data visualization, and customer insights",
    useCase: "360° customer visibility",
    deliverable: "CJA workspace + data model",
    slug: "customer-journey-analytics",
  },
  {
    icon: Database,
    title: "AEM Guides",
    description:
      "Component content management system (CCMS) implementation and customization",
    useCase: "Structured technical docs",
    deliverable: "CCMS setup + publishing pipeline",
    slug: "aem-guides",
  },
  {
    icon: Settings,
    title: "Integration & Migration",
    description:
      "Third-party integrations, data migration, and system modernization",
    useCase: "Legacy-to-cloud transitions",
    deliverable: "Migration runbook + zero-downtime plan",
    slug: "integration-migration",
  },
];

const cloudServices = [
  {
    icon: Cloud,
    title: "Cloud Migration & Modernization",
    description:
      "Seamless migration of legacy applications to AWS, Azure, or GCP with minimal downtime",
    useCase: "Zero-downtime lift-and-shift",
    deliverable: "Migration plan + runbook",
    slug: "cloud-migration",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "Implementation of automated pipelines, infrastructure as code, and continuous delivery",
    useCase: "Faster, safer deployments",
    deliverable: "IaC templates + pipeline config",
    slug: "devops-cicd",
  },
  {
    icon: Boxes,
    title: "Microservices & Containers",
    description:
      "Architecture design and implementation using Docker, Kubernetes, and serverless",
    useCase: "Scalable distributed systems",
    deliverable: "Architecture diagram + K8s manifests",
    slug: "microservices-containers",
  },
  {
    icon: Shield,
    title: "Cloud Security & Compliance",
    description:
      "Security best practices, compliance audits, and identity management",
    useCase: "Enterprise security posture",
    deliverable: "Security audit report + remediation plan",
    slug: "cloud-security",
  },
  {
    icon: Database,
    title: "Cloud-Native Architecture",
    description:
      "Design and build scalable, resilient cloud-native applications",
    useCase: "Greenfield cloud builds",
    deliverable: "Architecture blueprint + PoC",
    slug: "cloud-native-architecture",
  },
  {
    icon: Settings,
    title: "Managed Cloud Services",
    description:
      "24/7 monitoring, maintenance, optimization, and support for your cloud infrastructure",
    useCase: "Hands-off infrastructure ops",
    deliverable: "SLA-backed support + monthly reports",
    slug: "managed-cloud",
  },
];

const developmentServices = [
  {
    icon: Code,
    title: "Enterprise Web Applications",
    description:
      "Custom web applications built with React, Angular, Vue.js, and modern frameworks",
    useCase: "High-traffic enterprise portals",
    deliverable: "Production app + test suite",
    slug: "enterprise-web",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android",
    useCase: "Customer-facing mobile experiences",
    deliverable: "App Store-ready build + CI pipeline",
    slug: "mobile-applications",
  },
  {
    icon: Database,
    title: "API Development & Integration",
    description:
      "RESTful and GraphQL APIs, microservices, and third-party system integrations",
    useCase: "System interconnectivity",
    deliverable: "API spec + integration tests",
    slug: "api-development",
  },
  {
    icon: Workflow,
    title: "Legacy System Modernization",
    description:
      "Transform outdated systems into modern, scalable architectures",
    useCase: "Tech-debt elimination",
    deliverable: "Modernisation roadmap + phased delivery",
    slug: "legacy-modernization",
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    description: "End-to-end development of multi-tenant SaaS platforms",
    useCase: "From MVP to enterprise SaaS",
    deliverable: "Multi-tenant platform + billing integration",
    slug: "saas-development",
  },
  {
    icon: Settings,
    title: "Application Support & Maintenance",
    description:
      "Ongoing support, bug fixes, performance optimization, and feature enhancements",
    useCase: "Production stability & growth",
    deliverable: "Dedicated support team + SLA",
    slug: "app-support",
  },
  {
    icon: Code,
    title: "Web Site Creation",
    description:
      "End-to-end website development, bug fixes, performance optimization, and feature enhancements",
    useCase: "Business websites & landing pages",
    deliverable: "Production-ready site + documentation",
    slug: "web-site-creation",
  },
];

const technologies = [
  {
    category: "Adobe",
    accent: "from-red-500 to-orange-500",
    items: [
      "AEM Sites & Assets",
      "Adobe Analytics",
      "Adobe Target",
      "Adobe Campaign",
      "Adobe Commerce",
      "Customer Journey Analytics",
    ],
  },
  {
    category: "Backend",
    accent: "from-slate-600 to-slate-700",
    items: ["Java", "Spring Boot", "C#", ".NET", "Node.js"],
  },
  {
    category: "Frontend",
    accent: "from-blue-500 to-cyan-400",
    items: ["React", "Angular", "Vue.js", "TypeScript"],
  },
  {
    category: "Databases",
    accent: "from-emerald-500 to-teal-500",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    category: "Cloud",
    accent: "from-sky-500 to-blue-600",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  },
  {
    category: "DevOps",
    accent: "from-violet-500 to-purple-600",
    items: ["GitHub Actions", "Jenkins", "Terraform", "Ansible", "Datadog"],
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
      { threshold: 0.12, ...options },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ─── FADE-IN WRAPPER ─────────────────────────────────────────────────────────

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, inView] = useInView();
  const dirs = {
    up: "translateY(30px)",
    left: "translateX(-30px)",
    right: "translateX(30px)",
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
// ─── FLIP SERVICE CARD ───────────────────────────────────────────────────────

const CARD_GRADIENTS = [
  ["#1D9E75", "#378ADD"], // teal → blue
  ["#534AB7", "#7F77DD"], // violet → purple
  ["#378ADD", "#1D9E75"], // blue → teal
  ["#534AB7", "#7F77DD"], //
  ["#1D9E75", "#378ADD"], // teal → blue
  ["#534AB7", "#7F77DD"], // violet → purple
  ["#378ADD", "#1D9E75"], //
];

function FlipServiceCard({ service, index, delay = 0 }) {
  const Icon = service.icon;
  const [flipped, setFlipped] = useState(false);
  const [ref, inView] = useInView();
  const [from, to] = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

  const isTouchDevice =
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        height: "320px",
        perspective: "1000px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.45s ease ${delay}ms`,
      }}
      onClick={() => isTouchDevice && setFlipped((f) => !f)}
      onMouseEnter={() => !isTouchDevice && setFlipped(true)}
      onMouseLeave={() => !isTouchDevice && setFlipped(false)}
    >
      {/* Inner */}
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.75s cubic-bezier(0.4,0.2,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden flex flex-col justify-end p-7"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* gradient bg */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          />
          {/* content */}
          <div className="relative z-10">
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
              style={{ background: "rgba(255,255,255,0.18)" }}
            >
              <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/60 mb-1">
              {service.label ?? "Service"}
            </p>
            <h3 className="text-lg font-medium text-white leading-snug">
              {service.title}
            </h3>
            <p className="text-xs text-white/40 mt-2 flex items-center gap-1">
              <ArrowLeftRight className="h-3 w-3" />
              {isTouchDevice ? "Tap" : "Hover"} to flip
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden bg-white border border-gray-100 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* clipped cover */}
          <div
            className="relative flex-shrink-0 h-20 flex items-end pb-4 px-5"
            style={{
              background: `linear-gradient(135deg, ${from}, ${to})`,
              clipPath: "polygon(0 0, 100% 0, 100% 78%, 0 100%)",
            }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-white">
              {service.title}
            </span>
          </div>

          {/* body */}
          <div className="flex flex-col gap-3 px-5 py-4 flex-1 overflow-hidden">
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
              {service.description}
            </p>
            <hr className="border-gray-100" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                Use cases
              </p>
              <p className="text-sm text-gray-800 leading-snug">
                {service.useCase}
              </p>
            </div>
            <hr className="border-gray-100" />

            <div className="flex items-start gap-2 mb-5">
              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-800 leading-snug">
                {service.deliverable}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// ─── SERVICE CARD ────────────────────────────────────────────────────────────

function ServiceCard({ service, accentClass, delay = 0 }) {
  const Icon = service.icon;
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="service-card bg-white border border-gray-200 rounded-xl p-8 flex flex-col"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(28px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)`,
        boxShadow: hovered
          ? "0 20px 48px rgba(0,0,0,0.11)"
          : "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 bg-gradient-to-br ${accentClass} rounded-lg flex items-center justify-center mb-6`}
        style={{
          transform: hovered
            ? "scale(1.08) rotate(-3deg)"
            : "scale(1) rotate(0deg)",
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: hovered ? "0 8px 20px rgba(0,0,0,0.2)" : "none",
        }}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4 flex-1">{service.description}</p>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
          Use case
        </span>
        <span className="text-xs text-gray-700">{service.useCase}</span>
      </div>

      <div className="flex items-start gap-2 mb-5">
        <CheckCircle
          className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0"
          style={{
            transition: "transform 0.2s ease",
            transform: hovered ? "scale(1.2)" : "scale(1)",
          }}
        />
        <span className="text-xs text-gray-600">{service.deliverable}</span>
      </div>

      <Link
        to={`/services/${service.slug}`}
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group mt-auto"
      >
        Learn more
        <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1.5" />
      </Link>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          borderRadius: "0 0 12px 12px",
          background: `linear-gradient(90deg, var(--accent-from, #3b82f6), var(--accent-to, #06b6d4))`,
          width: hovered ? "100%" : "0%",
          transition: "width 0.35s ease",
        }}
      />
    </div>
  );
}

// ─── LEAD MAGNET FORM ────────────────────────────────────────────────────────

function LeadMagnetForm({ title, description, resourceName, buttonLabel }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-1">
        <Download className="h-5 w-5 text-blue-600" />
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          Free Resource
        </span>
      </div>
      <h4 className="text-base font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
      {submitted ? (
        <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium mt-1">
          <CheckCircle className="h-4 w-4" /> Check your inbox — we've sent{" "}
          {resourceName}!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <input
            type="email"
            placeholder="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {buttonLabel}
          </button>
        </form>
      )}
    </div>
  );
}
// ─── SECTION HEADER ──────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <FadeIn>
      <div className="text-center mb-16">
        {eyebrow && (
          <span
            className={`text-xs font-semibold uppercase tracking-widest mb-3 block ${light ? "text-cyan-400" : "text-blue-600"}`}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-gray-900"}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-xl max-w-3xl mx-auto ${light ? "text-gray-300" : "text-gray-600"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export function Services() {
  const [bottomEmail, setBottomEmail] = useState("");
  const [bottomSubmitted, setBottomSubmitted] = useState(false);
  const handleBottomSubmit = (e) => {
    e.preventDefault();
    if (bottomEmail) setBottomSubmitted(true);
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-pan {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes connector-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .hero-title {
          opacity: 0;
          animation: fade-up 0.75s ease 0.1s forwards;
        }
        .hero-sub {
          opacity: 0;
          animation: fade-up 0.75s ease 0.3s forwards;
        }

        .service-card { position: relative; }

        /* Gradient CTA button */
        .btn-gradient {
          background: linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-gradient:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 24px rgba(6,182,212,0.4);
        }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        /* Process connector line */
        .connector-line {
          transform-origin: left;
        }

        /* Bottom CTA card animated border */
        @keyframes border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .learn-more-link {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .learn-more-link::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          height: 1px; width: 0;
          background: #2563eb;
          transition: width 0.3s ease;
        }
        .learn-more-link:hover::after { width: 100%; }

        /* Star rating entrance */
        @keyframes pop-in {
          0% { transform: scale(0) rotate(-20deg); opacity: 0; }
          80% { transform: scale(1.15) rotate(3deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
      `}</style>

      <div className="bg-white">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 relative overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 bg-black/50 z-10" />
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
            className="hero-blob"
            style={{
              width: 350,
              height: 350,
              background:
                "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
              bottom: -80,
              left: "15%",
              animation: "float 12s ease-in-out 3s infinite",
            }}
          />
          {/* Grid texture */}
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
              <h1 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="hero-sub text-xl text-gray-300">
                Comprehensive technology solutions designed to accelerate your
                digital transformation journey
              </p>
            </div>
          </div>
        </section>

        {/* ── CUSTOM APP DEV ───────────────────────────────────────────────── */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Custom Application Development"
              subtitle="Enterprise-grade applications built with modern technologies"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developmentServices.map((service, index) => (
                <FlipServiceCard
                  key={index}
                  service={service}
                  index={index}
                  delay={index * 70}
                />
              ))}
            </div>
          </div>
        </section>
        {/* ── CLOUD SOLUTIONS ──────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Cloud Solutions"
              subtitle="Multi-cloud expertise across AWS, Azure, and Google Cloud Platform"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  accentClass="from-blue-500 to-cyan-400"
                  delay={index * 80}
                />
              ))}
            </div>
            {/* <FadeIn delay={200}>
              <div className="mt-10 text-center">
                <Link
                  to="/cloud-adobe-solutions"
                  className="btn-gradient inline-flex items-center text-white font-medium px-8 py-3 rounded-lg gap-2"
                >
                  Explore Cloud & Adobe Solutions{" "}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </FadeIn> */}
          </div>
        </section>

        {/* ── ADOBE EXPERIENCE CLOUD ───────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Adobe Experience Cloud Solutions"
              subtitle="Full-spectrum Adobe services from implementation to managed support"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adobeServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  accentClass="from-red-500 to-orange-500"
                  delay={index * 80}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── TECHNOLOGIES ─────────────────────────────────────────────────── */}
        <section className="bg-slate-50 py-20 relative overflow-hidden">
          <div
            className="hero-blob"
            style={{
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
              top: -100,
              left: -100,
              animation: "float 11s ease-in-out infinite",
            }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader
              title="View Technologies We Use"
              subtitle="Modern technology stack for building scalable solutions"
            />
            <FadeIn delay={200}>
              <div className="text-center mt-12">
                <Link
                  to="/technologies"
                  className="btn-gradient inline-flex items-center text-white font-medium px-8 py-3 rounded-lg gap-2"
                >
                  View All Technologies <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <BottomCTA
                bottomEmail={bottomEmail}
                setBottomEmail={setBottomEmail}
                bottomSubmitted={bottomSubmitted}
                handleBottomSubmit={handleBottomSubmit}
              />
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}

// ─── BOTTOM CTA ──────────────────────────────────────────────────────────────

function BottomCTA({
  bottomEmail,
  setBottomEmail,
  bottomSubmitted,
  handleBottomSubmit,
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white relative overflow-hidden"
      style={{
        transition: "box-shadow 0.4s ease",
        boxShadow: hovered
          ? "0 32px 80px rgba(0,0,0,0.25)"
          : "0 8px 32px rgba(0,0,0,0.12)",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: hovered ? "40%" : "16rem",
          height: 3,
          borderRadius: "0 0 8px 8px",
          background: "linear-gradient(90deg, #22d3ee, #3b82f6)",
          transition: "width 0.4s ease",
        }}
      />

      {/* Floating blobs inside card */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          top: -80,
          right: -80,
          animation: "float 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Stars */}
      <div className="flex items-center justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 text-amber-400 fill-amber-400"
            style={{ animation: `pop-in 0.4s ease ${i * 80}ms both` }}
          />
        ))}
        <span className="text-sm text-gray-400 ml-2">
          Rated 4.9 / 5 by enterprise clients
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to modernise your{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #22d3ee, #60a5fa, #22d3ee)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite",
          }}
        >
          digital experience stack?
        </span>
      </h2>
      <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
        Book a free 45-minute architecture review. We'll map your current stack,
        identify risk areas, and outline a migration path — with no obligation.
      </p>

      <Link
        to="https://calendly.com/khankureakash0285/for-website"
        className="inline-flex items-center bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl gap-2 text-lg mb-8"
        style={{
          transition:
            "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 12px 32px rgba(6,182,212,0.45)";
          e.currentTarget.style.background = "#22d3ee";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
          e.currentTarget.style.background = "";
        }}
      >
        <Calendar className="h-5 w-5" />
        Book a Free Architecture Review
      </Link>

      {/* <p className="text-sm text-gray-400 mb-4">
        Not ready for a call? Download our Cloud Migration Checklist instead.
      </p> 
      {bottomSubmitted ? (
        <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium">
          <CheckCircle className="h-4 w-4" /> Sent! Check your inbox for the
          checklist.
        </div>
      ) : (
        <form
          onSubmit={handleBottomSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your work email"
            value={bottomEmail}
            onChange={(e) => setBottomEmail(e.target.value)}
            required
            className="flex-1 text-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            style={{
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(6,182,212,0.6)";
              e.target.style.background = "rgba(255,255,255,0.14)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "";
              e.target.style.background = "";
            }}
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-medium px-5 py-3 rounded-lg text-sm whitespace-nowrap"
            style={{ transition: "background 0.2s ease, transform 0.15s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "";
              e.currentTarget.style.transform = "";
            }}
          >
            <Download className="h-4 w-4" /> Send me the checklist
          </button>
        </form>
      
      )}  */}
    </div>
  );
}
