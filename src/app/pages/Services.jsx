import { useState } from "react";
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
  Search,
  Calendar,
  ChevronRight,
  Star,
  TrendingUp,
  Layers,
  Zap,
  Users,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

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
      "Our architects design a solution blueprint tailored to your scale, security requirements, and cloud strategy — reviewed and signed off before any code is written.",
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
      "Zero-downtime deployments with automated rollback, infrastructure-as-code, and full runbook documentation for your team.",
    deliverable: "IaC runbook + deployment pipeline",
    icon: Zap,
  },
  {
    number: "05",
    title: "Support",
    description:
      "SLA-backed post-launch support with 24/7 monitoring, performance reporting, and a dedicated point of contact for your team.",
    deliverable: "SLA agreement + monthly health report",
    icon: Shield,
  },
];

const caseStudies = [
  {
    industry: "Retail",
    service: "AEM Migration",
    problem:
      "A global retailer's legacy CMS couldn't support 14 regional sites, causing inconsistent experiences and a 3-week content publishing cycle.",
    solution:
      "Migrated to AEM Sites with a shared component library and automated publishing workflows.",
    metrics: [
      { value: "62%", label: "faster page load" },
      { value: "3 weeks → 2 hrs", label: "publish cycle" },
      { value: "$340K", label: "annual infra savings" },
    ],
  },
  {
    industry: "FinTech",
    service: "Cloud Migration",
    problem:
      "An on-premise core banking app was hitting capacity limits during peak trading hours, causing downtime and SLA breaches.",
    solution:
      "Lift-and-shift to AWS with auto-scaling and a blue/green deployment pipeline.",
    metrics: [
      { value: "99.98%", label: "uptime post-migration" },
      { value: "0", label: "SLA breaches in 12 months" },
      { value: "41%", label: "infrastructure cost reduction" },
    ],
  },
  {
    industry: "Healthcare",
    service: "Adobe Analytics",
    problem:
      "Patient portal had high drop-off at checkout but no visibility into where or why users were abandoning the flow.",
    solution:
      "Implemented Adobe Analytics with custom event tracking and A/B testing via Adobe Target.",
    metrics: [
      { value: "28%", label: "increase in completions" },
      { value: "4.2×", label: "ROI on A/B tests" },
      { value: "6 weeks", label: "to first actionable insight" },
    ],
  },
];

const testimonials = [
  {
    quote:
      "SJ Technolabs delivered our AEM migration on time and under budget. Their architecture approach eliminated the performance bottlenecks we'd been dealing with for two years.",
    name: "Sarah Mitchell",
    title: "VP of Digital Experience",
    company: "Global Retail Group",
    initials: "SM",
  },
  {
    quote:
      "The team's Adobe Analytics implementation gave us insight into our customer journey we simply didn't have before. The data quality is exceptional.",
    name: "James Okafor",
    title: "Head of Marketing Technology",
    company: "FinServ Ltd",
    initials: "JO",
  },
  {
    quote:
      "What impressed us most was their security-first approach to cloud architecture. They flagged risks we hadn't even considered and handled the entire compliance audit.",
    name: "Priya Sharma",
    title: "CTO",
    company: "HealthTech Platform",
    initials: "PS",
  },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function ServiceCard({ service, accentClass }) {
  const Icon = service.icon;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
      <div
        className={`w-14 h-14 bg-gradient-to-br ${accentClass} rounded-lg flex items-center justify-center mb-6`}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4 flex-1">{service.description}</p>

      {/* Use case badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
          Use case
        </span>
        <span className="text-xs text-gray-700">{service.useCase}</span>
      </div>

      {/* Deliverable */}
      <div className="flex items-start gap-2 mb-5">
        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
        <span className="text-xs text-gray-600">{service.deliverable}</span>
      </div>

      <Link
        to={`/services/${service.slug}`}
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group mt-auto"
      >
        Learn more
        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

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
          <CheckCircle className="h-4 w-4" />
          Check your inbox — we've sent {resourceName}!
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
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium sm:whitespace-nowrap w-full sm:w-auto"
          >
            {buttonLabel}
          </button>
        </form>
      )}
    </div>
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive technology solutions designed to accelerate your
              digital transformation journey
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. ADOBE EXPERIENCE CLOUD ───────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <span className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-3 block">
              Adobe Specialisation
            </span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Adobe Experience Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-spectrum Adobe services from implementation to managed
              support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adobeServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                accentClass="from-red-500 to-orange-500"
              />
            ))}
          </div>

          {/* AEM lead magnet */}
          <div className="mt-12 max-w-2xl mx-auto">
            <LeadMagnetForm
              title="AEM Implementation Guide"
              description="A step-by-step guide covering architecture decisions, component strategy, content models, and go-live checklist for AEM projects."
              resourceName="the AEM Implementation Guide"
              buttonLabel="Download free"
            />
          </div>
        </div>
      </section>

      {/* ── 4. CASE STUDIES ─────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            {/* <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
              Proven results
            </span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client success stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real outcomes from real enterprise engagements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-7 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-gray-400">{cs.service}</span>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Problem
                  </p>
                  <p className="text-sm text-gray-700">{cs.problem}</p>
                </div>

                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Solution
                  </p>
                  <p className="text-sm text-gray-700">{cs.solution}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                  {cs.metrics.map((m, j) => (
                    <div key={j} className="text-center">
                      <div className="text-lg font-bold text-blue-600 leading-tight">
                        {m.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CLOUD SOLUTIONS ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-3 block">
              Multi-cloud
            </span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-cloud expertise across AWS, Azure, and Google Cloud Platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                accentClass="from-blue-500 to-cyan-400"
              />
            ))}
          </div>

          {/* Cloud migration lead magnet */}
          <div className="mt-12 max-w-2xl mx-auto">
            <LeadMagnetForm
              title="Cloud Migration Checklist"
              description="A 47-point pre-migration checklist covering security, data governance, rollback strategy, and stakeholder sign-off for enterprise cloud moves."
              resourceName="the Cloud Migration Checklist"
              buttonLabel="Download free"
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/cloud-adobe-solutions"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all font-medium"
            >
              Explore Cloud & Adobe Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. CUSTOM APP DEV ───────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <span className="text-xs font-semibold text-purple-500 uppercase tracking-widest mb-3 block">
              Bespoke builds
            </span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Application Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade applications built with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                accentClass="from-purple-500 to-pink-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. HOW WE WORK ──────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3 block">
              Our engagement model
            </span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How we work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured, low-risk delivery model built for enterprise
              procurement and compliance requirements
            </p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 mx-32 z-0" />

            <div className="grid md:grid-cols-5 gap-6 relative z-10">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-gray-200 flex flex-col items-center justify-center mb-4 shadow-sm">
                      <Icon className="h-6 w-6 text-blue-600 mb-1" />
                      <span className="text-xs font-bold text-gray-400">
                        {step.number}
                      </span>
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
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ─────────────────────────────────────────────────── 
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
             <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3 block">
              What clients say
            </span> 
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimonials
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-7 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* ── 9. TECHNOLOGIES ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern technology stack for building scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
              >
                <div
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${tech.accent} text-white text-xs font-semibold px-3 py-1 rounded-full mb-4`}
                >
                  {tech.category}
                </div>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-300 flex items-center text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/technologies"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all font-medium"
            >
              View All Technologies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. SECURITY / CREDIBILITY STRIP ────────────────────────────────── */}
      {/* <section className="border-y border-gray-100 py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              {
                label: "Enterprise security",
                sub: "Security-first architecture",
              },
              { label: "ISO 27001", sub: "Certification in progress" },
              { label: "SOC 2 ready", sub: "Compliance practices in place" },
              { label: "Adobe partner", sub: "Certified implementation" },
              { label: "24/7 support", sub: "SLA-backed response times" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-sm font-semibold text-gray-800">
                  {item.label}
                </div>
                <div className="text-xs text-gray-400">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── 11. SECURITY LEAD MAGNET ────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <LeadMagnetForm
            title="Security Readiness Guide"
            description="A practical guide for enterprise teams preparing for cloud security audits — covering IAM, encryption, logging, incident response, and compliance mapping."
            resourceName="the Security Readiness Guide"
            buttonLabel="Get free guide"
          />
        </div>
      </section>

      {/* ── 12. BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-full" />

            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-amber-400 fill-amber-400"
                />
              ))}
              <span className="text-sm text-gray-400 ml-2">
                Rated 4.9 / 5 by enterprise clients
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to modernise your{" "}
              <span className="text-cyan-400">digital experience stack?</span>
            </h2>
            <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
              Book a free 45-minute architecture review. We'll map your current
              stack, identify risk areas, and outline a migration path — with no
              obligation.
            </p>

            {/* Primary CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors gap-2 text-lg mb-8"
            >
              <Calendar className="h-5 w-5" />
              Book a Free Architecture Review
            </Link>

            {/* Secondary: email capture */}
            <p className="text-sm text-gray-400 mb-4">
              Not ready for a call? Download our Cloud Migration Checklist
              instead.
            </p>
            {bottomSubmitted ? (
              <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                Sent! Check your inbox for the checklist.
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
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-5 py-3 rounded-lg transition-colors text-sm whitespace-nowrap"
                >
                  <Download className="h-4 w-4" />
                  Send me the checklist
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
