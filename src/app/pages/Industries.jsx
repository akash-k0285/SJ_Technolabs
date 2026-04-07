import { useState } from "react";
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

// ─── INDUSTRIES DATA ──────────────────────────────────────────────────────────

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
    description:
      "Scalable platforms, personalised experiences, and omnichannel solutions for online retailers competing in a fast-moving market.",
    adobeConnection:
      "Adobe Experience Manager Sites + Adobe Commerce for unified content and commerce. Adobe Analytics for conversion optimisation.",
    solutions: [
      "Adobe Commerce (Magento) implementation",
      "Headless commerce architectures",
      "Payment gateway integrations",
      "Inventory management systems",
    ],
    techStack: ["Adobe Commerce", "AEM Sites", "React", "Node.js", "AWS"],
    caseMetric: { value: "38%", label: "increase in checkout conversion" },
    persona: "Head of eCommerce / VP Digital",
  },
  {
    icon: Store,
    name: "Retail",
    tag: "Brick & Mortar + Unified Commerce",
    accentFrom: "from-blue-500",
    accentTo: "to-cyan-500",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
    tagStyle: "bg-blue-100 text-blue-700",
    description:
      "Digital transformation for brick-and-mortar retailers with unified commerce experiences that bridge in-store and online channels.",
    adobeConnection:
      "Adobe Experience Platform for unified customer profiles. AEM for consistent brand experience across all touchpoints.",
    solutions: [
      "Point-of-sale system modernisation",
      "Customer loyalty programmes",
      "Supply chain optimisation",
      "In-store digital experience",
    ],
    techStack: [
      "Adobe Experience Platform",
      "AEM",
      "Azure",
      "Spring Boot",
      "React",
    ],
    caseMetric: { value: "62%", label: "faster content publishing" },
    persona: "CTO / VP of Technology",
  },
  {
    icon: Radio,
    name: "Telecommunications",
    tag: "Customer Management & Billing",
    accentFrom: "from-violet-500",
    accentTo: "to-purple-600",
    bgLight: "bg-violet-50",
    borderLight: "border-violet-100",
    tagStyle: "bg-violet-100 text-violet-700",
    description:
      "Customer management platforms, billing systems, and network optimisation solutions for telecoms operating at scale.",
    adobeConnection:
      "Adobe Journey Optimizer for lifecycle communications. Customer Journey Analytics for cross-channel subscriber insights.",
    solutions: [
      "Customer portal development",
      "Billing and subscription management",
      "Network analytics dashboards",
      "IoT platform integration",
    ],
    techStack: ["Adobe AJO", "CJA", "Kubernetes", "Java", "GCP"],
    caseMetric: { value: "41%", label: "reduction in support tickets" },
    persona: "VP Engineering / Digital Product",
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
    description:
      "Secure, compliant digital banking and wealth management solutions built to satisfy regulatory requirements without compromising customer experience.",
    adobeConnection:
      "Adobe Analytics + Target for personalised financial product recommendations. AEM for compliant content governance.",
    solutions: [
      "Online banking platform development",
      "Mobile payment applications",
      "Fraud detection systems",
      "Regulatory compliance tooling",
    ],
    techStack: [
      "Adobe Analytics",
      "Adobe Target",
      "AEM",
      "AWS",
      ".NET",
      "PostgreSQL",
    ],
    caseMetric: { value: "99.98%", label: "uptime post-migration" },
    persona: "CTO / Head of Digital Banking",
  },
  {
    icon: Heart,
    name: "Healthcare",
    tag: "HIPAA-Compliant Digital Health",
    accentFrom: "from-pink-500",
    accentTo: "to-rose-500",
    bgLight: "bg-pink-50",
    borderLight: "border-pink-100",
    tagStyle: "bg-pink-100 text-pink-700",
    description:
      "HIPAA-compliant patient portals, telemedicine platforms, and healthcare management systems that improve outcomes and reduce administrative burden.",
    adobeConnection:
      "Adobe Analytics for patient journey analysis. AEM Sites for compliant, personalised health content delivery.",
    solutions: [
      "Electronic health records (EHR) integration",
      "Telemedicine platforms",
      "Patient engagement portals",
      "Healthcare analytics",
    ],
    techStack: [
      "Adobe Analytics",
      "AEM",
      "React",
      "Node.js",
      "AWS",
      "FHIR APIs",
    ],
    caseMetric: { value: "28%", label: "increase in portal completions" },
    persona: "CTO / VP of Digital Health",
  },
  {
    icon: Layers,
    name: "SaaS & Technology",
    tag: "Cloud Products & Developer Platforms",
    accentFrom: "from-violet-500",
    accentTo: "to-indigo-600",
    bgLight: "bg-violet-50",
    borderLight: "border-violet-100",
    tagStyle: "bg-violet-100 text-violet-700",
    description:
      "End-to-end SaaS product engineering and platform development for technology companies building scalable, multi-tenant cloud products.",
    adobeConnection:
      "Adobe Analytics for product usage tracking and funnel optimisation. Adobe Target for in-app personalisation and feature flagging.",
    solutions: [
      "Multi-tenant SaaS architecture",
      "Developer platform & API products",
      "Platform scalability & performance",
      "Subscription billing integration",
    ],
    techStack: [
      "Adobe Analytics",
      "Adobe Target",
      "React",
      "Node.js",
      "AWS",
      "Kubernetes",
    ],
    caseMetric: { value: "3×", label: "faster feature release cycles" },
    persona: "CTO / VP of Product Engineering",
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
    description:
      "Content management, streaming platforms, and audience engagement solutions for media companies navigating the shift to digital-first distribution.",
    adobeConnection:
      "AEM Assets for enterprise digital asset management. Adobe Analytics for audience behaviour and content performance.",
    solutions: [
      "Digital asset management (DAM)",
      "Video streaming platforms",
      "Content delivery optimisation",
      "Audience analytics",
    ],
    techStack: [
      "AEM Assets",
      "Adobe Analytics",
      "React",
      "AWS CloudFront",
      "Node.js",
    ],
    caseMetric: { value: "4.2×", label: "content team productivity gain" },
    persona: "CTO / Head of Digital Publishing",
  },
  {
    icon: Signal,
    name: "Telecommunication",
    tag: "Telecom & Connectivity Solutions",
    accentFrom: "from-purple-500",
    accentTo: "to-indigo-600",
    bgLight: "bg-purple-50",
    borderLight: "border-purple-100",
    tagStyle: "bg-purple-100 text-purple-700",
    description:
      "Robust telecom platforms, network management systems, and digital connectivity solutions designed to scale across regions and support high-volume communication infrastructure.",
    adobeConnection:
      "AEM Sites for telecom portals and customer self-service platforms. Adobe Analytics for tracking user engagement, network usage insights, and customer behavior.",
    solutions: [
      "Telecom network management systems",
      "Customer self-service portals",
      "Billing and subscription platforms",
      "Real-time communication services",
    ],
    techStack: ["AEM Sites", "Adobe Analytics", "React", "PostgreSQL", "AWS"],
    caseMetric: { value: "2.5×", label: "increase in customer engagement" },
    persona: "CTO / VP of Network Operations",
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
    description:
      "Learning management systems, student portals, and educational technology platforms that scale from campus to global cohort.",
    adobeConnection:
      "AEM Sites for institution content and student portals. Adobe Analytics for learner engagement and course performance tracking.",
    solutions: [
      "Learning management systems (LMS)",
      "Student information systems",
      "Virtual classroom platforms",
      "Educational content delivery",
    ],
    techStack: ["AEM Sites", "Adobe Analytics", "React", "PostgreSQL", "AWS"],
    caseMetric: { value: "3×", label: "increase in course completion" },
    persona: "CTO / VP of Digital Learning",
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
    description:
      "Booking systems, guest experience platforms, and hospitality management solutions that turn one-time visitors into loyal guests.",
    adobeConnection:
      "Adobe Target for personalised offers and room upgrades. Adobe Campaign for loyalty programme communications.",
    solutions: [
      "Booking and reservation systems",
      "Property management systems",
      "Guest experience portals",
      "Travel analytics platforms",
    ],
    techStack: ["Adobe Target", "Adobe Campaign", "AEM", "React", "AWS"],
    caseMetric: { value: "23%", label: "uplift in direct bookings" },
    persona: "CTO / VP of Guest Experience",
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

const testimonials = [
  {
    quote:
      "The team's deep understanding of both Adobe Experience Cloud and our industry compliance requirements was unlike anything we'd seen from a consulting partner before.",
    name: "James Okafor",
    title: "Head of Marketing Technology",
    company: "FinServ Ltd",
    industry: "Banking",
    initials: "JO",
  },
  {
    quote:
      "They built our patient portal with HIPAA compliance baked in from architecture stage — not bolted on afterwards. That saved us months of remediation work.",
    name: "Priya Sharma",
    title: "CTO",
    company: "HealthTech Platform",
    industry: "Healthcare",
    initials: "PS",
  },
  {
    quote:
      "Our AEM migration reduced publishing time from three weeks to two hours. The SJ Technolabs team understood our content model challenges on day one.",
    name: "Sarah Mitchell",
    title: "VP of Digital Experience",
    company: "Global Retail Group",
    industry: "Retail",
    initials: "SM",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export function Industries() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-300">
              Delivering specialized technology solutions across diverse
              industries with deep domain expertise
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. INDUSTRY CARDS ───────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
              Vertical expertise
            </span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Deep industry knowledge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each vertical comes with Adobe Experience Cloud integration
              points, a proven tech stack, and measurable outcome targets
            </p>
          </div>

          <div className="space-y-10">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-start border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow`}
                >
                  {/* ── Content side ── */}
                  <div className={`p-8 ${isReversed ? "lg:order-2" : ""}`}>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${industry.accentFrom} ${industry.accentTo} rounded-xl flex items-center justify-center flex-shrink-0`}
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

                    {/* Adobe connection */}
                    <div
                      className={`${industry.bgLight} border ${industry.borderLight} rounded-xl p-4 mb-5`}
                    >
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                        Adobe Experience Cloud connection
                      </p>
                      <p className="text-sm text-gray-700">
                        {industry.adobeConnection}
                      </p>
                    </div>

                    {/* Key solutions */}
                    <div className="mb-5">
                      <p className="text-sm font-semibold text-gray-900 mb-3">
                        Key solutions
                      </p>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">
                              {solution}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {industry.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 group"
                    >
                      Discuss your {industry.name.toLowerCase()} project
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* ── Metric / visual side ── */}
                  <div
                    className={`${industry.bgLight} flex flex-col items-center justify-center p-10 min-h-64 ${isReversed ? "lg:order-1" : ""}`}
                  >
                    {/* Big outcome metric */}
                    <div className="text-center mb-6">
                      <div
                        className={`text-5xl font-bold bg-gradient-to-br ${industry.accentFrom} ${industry.accentTo} bg-clip-text text-transparent mb-2`}
                      >
                        {industry.caseMetric.value}
                      </div>
                      <div className="text-sm text-gray-600 max-w-xs">
                        {industry.caseMetric.label}
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${industry.accentFrom} ${industry.accentTo} rounded-2xl flex items-center justify-center opacity-20`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>

                    {/* Who we work with badge */}
                    <div className="mt-6 text-center">
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
            })}
          </div>
        </div>
      </section>

      {/* ── 4. TESTIMONIALS ─────────────────────────────────────────────────── */}
      {/* <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
             <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3 block">
              Client voices
            </span> 
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What industry clients say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-7 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
                    {t.industry}
                  </span>
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
      </section> */}

      {/* ── 5. CROSS-INDUSTRY CAPABILITIES ──────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              {/* <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
                Platform expertise
              </span> */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cross-industry capabilities
              </h2>
              <p className="text-lg text-gray-600">
                Beyond industry-specific expertise, we bring proven capabilities
                that apply across all sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {crossCapabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-gray-600">{cap.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. LEAD MAGNET ──────────────────────────────────────────────────── */}
      {/* <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <Download className="h-5 w-5 text-blue-600" />
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                Free Resource
              </span>
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-1">
              Industry-specific Adobe Experience Cloud readiness guide
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              A vertical-by-vertical breakdown of how enterprises in retail,
              FinTech, and healthcare are using Adobe Experience Cloud to reduce
              cost-to-serve and grow digital revenue.
            </p>
            {submitted ? (
              <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                Sent! Check your inbox for the guide.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
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
                  className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
                >
                  Download free
                </button>
              </form>
            )}
          </div>
        </div>
      </section> */}

      {/* ── 7. BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-full" />
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm text-gray-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
              9 industries · 200+ enterprise projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your{" "}
              <span className="text-cyan-400">industry?</span>
            </h2>
            <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
              Start with a free 45-minute architecture review. We'll assess your
              current stack, identify the highest-value Adobe or cloud
              improvements, and give you a clear roadmap — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                <Calendar className="h-5 w-5" />
                Book a Free Architecture Review
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-8 py-4 rounded-xl transition-colors text-lg"
              >
                Explore Our Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
