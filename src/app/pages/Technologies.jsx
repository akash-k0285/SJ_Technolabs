import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Cloud,
  Layers,
  CheckCircle,
  ArrowRight,
  Shield,
  Search,
  Zap,
} from "lucide-react";
import video from "../../assets/lensanimation.mp4";

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

// ─── CONNECTOR LINE ──────────────────────────────────────────────────────────

function ConnectorLine() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 mx-32 z-0 overflow-hidden"
      style={{ background: "#e5e7eb" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
          transform: inView ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 1.2s ease 0.3s",
        }}
      />
    </div>
  );
}
// ─── PROCESS STEP ────────────────────────────────────────────────────────────

function ProcessStep({ step, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const Icon = step.icon;
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
      }}
    >
      <div
        className="w-20 h-20 rounded-2xl bg-white border-2 flex flex-col items-center justify-center mb-4 shadow-sm"
        style={{
          borderColor: hovered ? "#3b82f6" : "#e5e7eb",
          transform: hovered ? "scale(1.08) translateY(-4px)" : "scale(1)",
          transition:
            "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.2s ease, box-shadow 0.3s ease",
          boxShadow: hovered
            ? "0 12px 28px rgba(59,130,246,0.18)"
            : "0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        <Icon
          className="h-6 w-6 mb-1"
          style={{
            color: hovered ? "#2563eb" : "#3b82f6",
            transition: "color 0.2s ease",
          }}
        />
        <span className="text-xs font-bold text-gray-400">{step.number}</span>
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        {step.title}
      </h3>
      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
        {step.description}
      </p>
      <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
        <CheckCircle className="h-3 w-3 flex-shrink-0" />
        <span>{step.deliverable}</span>
      </div>
    </div>
  );
}
// ─── DATA ────────────────────────────────────────────────────────────────────

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We audit your existing architecture, stakeholder goals, and technical constraints — producing a detailed requirements document and risk register.",
    deliverable: "Requirements doc + risk register",
    icon: Search,
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Our architects design a solution blueprint tailored to your scale, security requirements, and cloud strategy.",
    deliverable: "Architecture blueprint + ADRs",
    icon: Layers,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Agile sprints with bi-weekly demos. Every sprint delivers tested, documented, working software — no surprises at go-live.",
    deliverable: "Sprint demos + code reviews",
    icon: Code,
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Zero-downtime deployments with automated rollback, infrastructure-as-code, and full runbook documentation.",
    deliverable: "IaC runbook + deployment pipeline",
    icon: Zap,
  },
  {
    number: "05",
    title: "Support",
    description:
      "SLA-backed post-launch support with 24/7 monitoring, performance reporting, and a dedicated point of contact.",
    deliverable: "SLA agreement + monthly health report",
    icon: Shield,
  },
];

const techCategories = [
  {
    icon: Code,
    title: "Backend Technologies",
    accent: "from-blue-500 to-cyan-400",
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
    accent: "from-violet-500 to-indigo-500",
    technologies: [
      { name: "React", expertise: "React 18, Next.js, Redux, Context API" },
      { name: "Angular", expertise: "Angular 17+, RxJS, NgRx" },
      { name: "Vue.js", expertise: "Vue 3, Vuex, Nuxt.js" },
      {
        name: "TypeScript",
        expertise: "Type-safe development across all frameworks",
      },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    accent: "from-emerald-500 to-teal-500",
    technologies: [
      {
        name: "PostgreSQL",
        expertise: "Advanced SQL, query optimization, replication",
      },
      {
        name: "MySQL / MariaDB",
        expertise: "High-availability configurations",
      },
      {
        name: "MongoDB",
        expertise: "Document modeling, aggregation pipelines",
      },
      { name: "Redis", expertise: "Caching, session management, pub/sub" },
      {
        name: "DynamoDB",
        expertise: "NoSQL design patterns, on-demand scaling",
      },
      { name: "Oracle", expertise: "Enterprise database management" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    accent: "from-sky-500 to-blue-600",
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
  {
    icon: Cloud,
    title: "Adobe Experience Cloud",
    accent: "from-red-500 to-orange-500",
    technologies: [
      {
        name: "Adobe Experience Manager (AEM)",
        expertise:
          "Sites, Assets, Forms, Headless CMS, Content Fragments, Experience Fragments",
      },
      {
        name: "Adobe Experience Cloud",
        expertise:
          "AEM Sites, AEM Assets, Adobe Commerce, Adobe Analytics, Adobe Target, Adobe Campaign",
      },
      {
        name: "Adobe Analytics & Personalisation",
        expertise:
          "Adobe Analytics, Adobe Target, Customer Journey Analytics, Real-Time CDP",
      },
      {
        name: "Adobe Marketing & Campaigns",
        expertise:
          "Adobe Campaign, Journey Optimizer, Audience Manager, Marketo Engage",
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
    items: [
      "Jenkins",
      "GitLab CI",
      "GitHub Actions",
      "ArgoCD",
      "Terraform",
      "Ansible",
    ],
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

const architecturePatterns = [
  "Microservices Architecture",
  "Event-Driven Architecture",
  "Serverless Computing",
  "RESTful API Design",
  "GraphQL APIs",
  "Domain-Driven Design",
  "CQRS & Event Sourcing",
  "Hexagonal Architecture",
];

// ─── ADOBE TECH CARD ─────────────────────────────────────────────────────────

function AdobeCard({ tech, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-gradient-to-br from-red-50 to-orange-50 border rounded-lg p-6 flex items-center space-x-3"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease`,
        boxShadow: hovered ? "0 12px 28px rgba(239,68,68,0.12)" : "none",
        borderColor: hovered ? "#fca5a5" : "#fecaca",
      }}
    >
      <CheckCircle
        className="h-6 w-6 flex-shrink-0"
        style={{
          color: hovered ? "#dc2626" : "#ef4444",
          transition:
            "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), color 0.2s ease",
          transform: hovered ? "scale(1.2) rotate(-5deg)" : "scale(1)",
        }}
      />
      <span
        className="font-medium text-gray-900"
        style={{
          transition: "color 0.2s ease",
          color: hovered ? "#991b1b" : "",
        }}
      >
        {tech}
      </span>
    </div>
  );
}

// ─── TECH CATEGORY CARD ──────────────────────────────────────────────────────

function TechCategoryCard({ category, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const Icon = category.icon;
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s ease`,
        boxShadow: hovered
          ? "0 24px 56px rgba(0,0,0,0.1)"
          : "0 4px 16px rgba(0,0,0,0.06)",
        borderColor: hovered ? "#bfdbfe" : "#e5e7eb",
      }}
    >
      <div className="flex items-center space-x-4 mb-8">
        <div
          className={`w-14 h-14 bg-gradient-to-br ${category.accent} rounded-lg flex items-center justify-center`}
          style={{
            transition:
              "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
            transform: hovered ? "scale(1.1) rotate(-4deg)" : "scale(1)",
            boxShadow: hovered ? "0 8px 20px rgba(0,0,0,0.2)" : "none",
          }}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3
          className="text-2xl font-bold"
          style={{
            color: hovered ? "#1d4ed8" : "#111827",
            transition: "color 0.2s ease",
          }}
        >
          {category.title}
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {category.technologies.map((tech, i) => (
          <TechItem key={i} tech={tech} delay={i} hovered={hovered} />
        ))}
      </div>
    </div>
  );
}

function TechItem({ tech, delay, hovered }) {
  const [itemHovered, setItemHovered] = useState(false);
  return (
    <div
      className="border-l-4 pl-4"
      onMouseEnter={() => setItemHovered(true)}
      onMouseLeave={() => setItemHovered(false)}
      style={{
        borderColor: itemHovered ? "#3b82f6" : "#93c5fd",
        transition: `border-color 0.2s ease, transform 0.2s ease ${delay * 30}ms`,
        transform: itemHovered ? "translateX(4px)" : "translateX(0)",
      }}
    >
      <h4
        className="text-lg font-semibold mb-2"
        style={{
          color: itemHovered ? "#1d4ed8" : "#111827",
          transition: "color 0.2s ease",
        }}
      >
        {tech.name}
      </h4>
      <p className="text-gray-600 text-sm">{tech.expertise}</p>
    </div>
  );
}

// ─── ADDITIONAL TECH CARD ────────────────────────────────────────────────────

function AdditionalCard({ category, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white border border-gray-200 rounded-xl p-6 relative overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-5px)"
            : "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 70}ms, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease`,
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.09)" : "none",
        borderColor: hovered ? "#bfdbfe" : "#e5e7eb",
      }}
    >
      {/* Sweep accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.35s ease",
        }}
      />

      <h3
        className="text-xl font-semibold mb-4"
        style={{
          color: hovered ? "#1d4ed8" : "#111827",
          transition: "color 0.2s ease",
        }}
      >
        {category.category}
      </h3>
      <ul className="space-y-2">
        {category.items.map((item, i) => (
          <li
            key={i}
            className="flex items-center space-x-2 text-gray-700"
            style={{
              transition: `transform 0.2s ease ${i * 30}ms`,
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            <span
              className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
              style={{
                transition: `transform 0.2s ease ${i * 30}ms, background 0.2s ease`,
                transform: hovered ? "scale(1.4)" : "scale(1)",
                background: hovered ? "#06b6d4" : "#3b82f6",
              }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── PATTERN CARD ────────────────────────────────────────────────────────────

function PatternCard({ pattern, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="backdrop-blur-sm border rounded-lg p-6 text-center"
      style={{
        background: hovered
          ? "rgba(255,255,255,0.18)"
          : "rgba(255,255,255,0.1)",
        borderColor: hovered ? "rgba(6,182,212,0.5)" : "rgba(255,255,255,0.2)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-4px) scale(1.02)"
            : "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.3s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.3s ease`,
        boxShadow: hovered ? "0 12px 28px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <CheckCircle
        className="h-6 w-6 mx-auto mb-3"
        style={{
          color: hovered ? "#22d3ee" : "#67e8f9",
          transition:
            "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), color 0.2s ease",
          transform: hovered ? "scale(1.2) rotate(-5deg)" : "scale(1)",
        }}
      />
      <p
        className="font-medium"
        style={{
          color: hovered ? "#e0f2fe" : "#fff",
          transition: "color 0.2s ease",
        }}
      >
        {pattern}
      </p>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export function Technologies() {
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
        @keyframes gradient-pan {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }

        .hero-h1 { opacity: 0; animation: fade-up 0.75s ease 0.1s forwards; }
        .hero-p  { opacity: 0; animation: fade-up 0.75s ease 0.3s forwards; }

        .shimmer-text {
          background: linear-gradient(90deg, #22d3ee, #60a5fa, #22d3ee);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .cta-section {
          background: linear-gradient(135deg, #2563eb 0%, #0891b2 50%, #2563eb 100%);
          background-size: 200% 200%;
          animation: gradient-pan 6s ease infinite;
        }

        .cta-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 28px rgba(0,0,0,0.18);
          background: #f1f5f9 !important;
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
                Technologies & Expertise
              </h1>
              <p className="hero-p text-xl text-gray-300">
                Modern technology stack with deep expertise across the entire
                development lifecycle
              </p>
            </div>
          </div>
        </section>

        {/* ── ADOBE EXPERIENCE CLOUD ───────────────────────────────────────── 
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Adobe Experience Cloud
                  </h2>
                  <p className="text-xl text-gray-600">
                    Certified expertise across the Adobe technology ecosystem
                  </p>
                </div>
              </FadeIn>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adobeTech.map((tech, index) => (
                  <AdobeCard key={index} tech={tech} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>*/}

        {/* ── CORE TECH STACK ──────────────────────────────────────────────── */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Core Technology Stack
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Building scalable, maintainable applications with
                  industry-leading technologies
                </p>
              </div>
            </FadeIn>
            <div className="space-y-8">
              {techCategories.map((category, index) => (
                <TechCategoryCard
                  key={index}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── ADDITIONAL TOOLS ─────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Additional Technologies & Tools
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive toolset for modern software development
                </p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalTech.map((category, index) => (
                <AdditionalCard key={index} category={category} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── ARCHITECTURE PATTERNS ────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 relative overflow-hidden">
          <div
            style={{
              position: "absolute",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
              top: -100,
              left: -80,
              animation: "float 10s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
              bottom: -80,
              right: "10%",
              animation: "float 13s ease-in-out 3s infinite",
              pointerEvents: "none",
            }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Architecture & Design Patterns
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Building applications with proven architectural patterns
                </p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {architecturePatterns.map((pattern, index) => (
                <PatternCard key={index} pattern={pattern} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ──────────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="How we work"
              subtitle="A structured, low-risk delivery model built for enterprise procurement and compliance requirements"
            />
            <div className="relative">
              {/* Animated connector line */}
              <ConnectorLine />
              <div className="grid md:grid-cols-5 gap-6 relative z-10">
                {processSteps.map((step, i) => (
                  <ProcessStep key={i} step={step} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="cta-section rounded-3xl p-12 text-center text-white relative overflow-hidden">
                {/* Blobs */}
                <div
                  style={{
                    position: "absolute",
                    width: 350,
                    height: 350,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
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
                      "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
                    bottom: -60,
                    left: "5%",
                    animation: "float 11s ease-in-out 2s infinite",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Let's Build with the{" "}
                    <span className="shimmer-text">Right Technology</span>
                  </h2>
                  <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                    Our experts will help you choose the optimal technology
                    stack for your project
                  </p>
                  <Link
                    to="/contact"
                    className="cta-btn inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-medium shadow-lg text-lg"
                  >
                    Talk to Our Experts
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
