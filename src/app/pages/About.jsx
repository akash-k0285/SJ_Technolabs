import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Target,
  Users,
  Lightbulb,
  Award,
  Globe,
  TrendingUp,
  Linkedin,
  ShieldCheck,
  BadgeCheck,
  Star,
  ArrowRight,
  Calendar,
  CheckCircle,
  Building2,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import video from "../../assets/lobby.mp4";
import image from "../../assets/team.jpg";

// ─── DATA (unchanged) ────────────────────────────────────────────────────────

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Committed to delivering world-class solutions that exceed expectations",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients as trusted partners in their success",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging cutting-edge technologies to solve complex challenges",
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

const leaders = [
  {
    initials: "SJ",
    name: "Founder & CEO",
    title: "Founder & CEO",
    bio: "15+ years leading Adobe Experience Cloud and enterprise cloud transformation engagements across Fortune 500 clients in retail, FinTech, and healthcare.",
    expertise: [
      "Adobe AEM",
      "Enterprise Architecture",
      "Digital Transformation",
    ],
    linkedin: "#",
    placeholder: true,
  },
  {
    initials: "CTO",
    name: "Chief Technology Officer",
    title: "Chief Technology Officer",
    bio: "Architect of large-scale multi-cloud platforms. Previously led cloud-native engineering at a global systems integrator with presence in 20+ countries.",
    expertise: [
      "Cloud Architecture",
      "Development and Operations",
      "Microservices",
    ],
    linkedin: "#",
    placeholder: true,
  },
  {
    initials: "VP",
    name: "VP of Delivery",
    title: "VP of Delivery",
    bio: "Oversees all client engagements from discovery through post-launch support. Certified PMP with a track record of zero-downtime enterprise migrations.",
    expertise: ["Project Delivery", "Agile", "Client Success"],
    linkedin: "#",
    placeholder: true,
  },
];

const partnerships = [
  {
    name: "Adobe Solution Partner",
    description:
      "Certified implementation partner for Adobe Experience Cloud — AEM, Analytics, Target, Campaign, and AJO.",
    badge: "Adobe",
    color: "red",
  },
  {
    name: "AWS Partner Network",
    description:
      "Accredited cloud consulting partner for architecture, migration, and managed services on Amazon Web Services.",
    badge: "AWS",
    color: "amber",
  },
  {
    name: "Microsoft Azure Partner",
    description:
      "Certified partner for enterprise Azure migrations, cloud-native builds, and DevOps on Microsoft Azure.",
    badge: "Azure",
    color: "blue",
  },
  {
    name: "Google Cloud Partner",
    description:
      "Recognised partner for GCP infrastructure, data engineering, and cloud-native application development.",
    badge: "GCP",
    color: "emerald",
  },
];

const certifications = [
  {
    icon: ShieldCheck,
    title: "ISO 27001",
    status: "Certification in progress",
    description:
      "Information security management practices aligned to ISO 27001 standards. Formal certification targeted for 2025.",
    statusColor: "amber",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II",
    status: "Readiness in progress",
    description:
      "SOC 2 security, availability, and confidentiality controls in place. Formal audit scheduled for 2025.",
    statusColor: "amber",
  },
  {
    icon: BadgeCheck,
    title: "Adobe Certified",
    status: "Active",
    description:
      "Team members hold active Adobe certifications across AEM Sites, AEM Assets, Adobe Analytics, and Adobe Campaign.",
    statusColor: "emerald",
  },
  {
    icon: BadgeCheck,
    title: "Cloud Certifications",
    status: "Active",
    description:
      "AWS Solutions Architect, Azure Administrator, and GCP Professional Cloud Architect certifications held across our engineering team.",
    statusColor: "emerald",
  },
];

const testimonials = [
  {
    quote:
      "SJ Technolabs doesn't just deliver software — they become part of your team. Their AEM architects understood our content model challenges faster than any vendor we'd previously engaged.",
    name: "Sarah Mitchell",
    title: "VP of Digital Experience",
    company: "Global Retail Group",
    initials: "SM",
  },
  {
    quote:
      "What set them apart was the architecture review before any code was written. That single session saved us from a costly mis-design that would have taken months to unwind.",
    name: "James Okafor",
    title: "Head of Marketing Technology",
    company: "FinServ Ltd",
    initials: "JO",
  },
  {
    quote:
      "I've worked with a lot of consulting firms. SJ Technolabs is one of the very few where the people you meet in the sales process are actually the people who do the work.",
    name: "Priya Sharma",
    title: "CTO",
    company: "HealthTech Platform",
    initials: "PS",
  },
];

const colorMap = {
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-700",
    dot: "bg-red-500",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
  },
};

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
      { value: "3w → 2h", label: "publish cycle" },
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
      { value: "41%", label: "infra cost reduction" },
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
      { value: "6 weeks", label: "to first insight" },
    ],
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

// ─── CASE STUDY CARD ─────────────────────────────────────────────────────────

function CaseStudyCard({ cs, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-xl border p-7 relative overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-5px)"
            : "translateY(0)"
          : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 120}ms, transform 0.35s ease, box-shadow 0.3s ease, border-color 0.3s ease`,
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.1)" : "none",
        borderColor: hovered ? "#bfdbfe" : "#e5e7eb",
      }}
    >
      {/* Top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }}
      />

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
              {inView ? <AnimatedMetric value={m.value} /> : "0"}
            </div>
            <div className="text-xs text-gray-500 mt-0.5 leading-tight">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// ─── ANIMATED NUMBER ─────────────────────────────────────────────────────────

function AnimatedMetric({ value }) {
  const [ref, inView] = useInView();
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
    const steps = 50;
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
    }, 1200 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <span ref={ref}>{display}</span>;
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

// ─── VALUE CARD ──────────────────────────────────────────────────────────────

function ValueCard({ value, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const Icon = value.icon;
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white border border-gray-200 rounded-xl p-8"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 80}ms, transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease`,
        boxShadow: hovered ? "0 20px 48px rgba(0,0,0,0.1)" : "none",
        borderColor: hovered ? "#bfdbfe" : "#e5e7eb",
      }}
    >
      <div
        className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6"
        style={{
          transition:
            "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
          transform: hovered ? "scale(1.1) rotate(-4deg)" : "scale(1)",
          boxShadow: hovered ? "0 8px 20px rgba(59,130,246,0.35)" : "none",
        }}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3
        className="text-xl font-semibold mb-3"
        style={{
          color: hovered ? "#1d4ed8" : "#111827",
          transition: "color 0.2s ease",
        }}
      >
        {value.title}
      </h3>
      <p className="text-gray-600">{value.description}</p>
    </div>
  );
}

// ─── LEADER CARD ─────────────────────────────────────────────────────────────

function LeaderCard({ person, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const [hoveredTag, setHoveredTag] = useState(null);
  const [touched, setTouched] = useState(false);

  // Use either hover (desktop) or touch (mobile)
  const active = hovered || touched;

  // Tag gradient colors mapped to blue palette
  const tagColors = [
    "from-blue-500 to-cyan-500",
    "from-indigo-500 to-blue-500",
    "from-cyan-500 to-teal-500",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onTap={() => setTouched((prev) => !prev)}
      className="relative bg-white border border-gray-200 rounded-3xl p-7 flex flex-col overflow-hidden shadow-xl"
      style={{
        boxShadow: active
          ? "0 0 0 1px rgba(99,102,241,0.3), 0 20px 60px rgba(99,102,241,0.2)"
          : "0 0 0 1px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.4s ease, transform 0.3s ease",
        transform: active ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      {/* Subtle gradient wash on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-400 opacity-0 pointer-events-none"
        animate={{ opacity: active ? 0.04 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Blur blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-indigo-400/20 rounded-full blur-3xl"
          animate={{ scale: active ? 1.2 : 1, rotate: active ? 45 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-400/20 rounded-full blur-3xl"
          animate={{ scale: active ? 1.2 : 1, rotate: active ? -45 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10">
        {/* Avatar + badge row */}
        <div className="flex items-start justify-between mb-5">
          {/* Avatar */}
          <motion.div
            animate={{ scale: active ? 1.05 : 1 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="relative"
          >
            {/* Outer blur glow */}
            <motion.div
              className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-400 opacity-0"
              animate={{
                opacity: active ? 0.6 : 0,
                scale: active ? 1.15 : 1,
              }}
              transition={{ duration: 0.5 }}
              style={{ filter: "blur(12px)" }}
            />

            {/* Spinning border */}
            <motion.div
              className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-400 opacity-0"
              animate={{
                opacity: active ? 1 : 0,
                rotate: active ? 360 : 0,
              }}
              transition={{
                opacity: { duration: 0.3 },
                rotate: {
                  duration: 2,
                  repeat: active ? Infinity : 0,
                  ease: "linear",
                },
              }}
            />

            <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center text-white font-bold text-lg shadow-xl border-2 border-white/10">
              {person.initials}

              {/* Shine sweep */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                animate={{ x: active ? ["0%", "100%"] : "0%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>

            {/* Online pulse dot */}
            <motion.div className="absolute -bottom-1 -right-1 flex items-center justify-center">
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-emerald-500/30"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </motion.div>
          </motion.div>

          {/* Badge or LinkedIn */}
          {person.placeholder ? (
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-amber-200/50 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 px-4 py-2 shadow-lg"
              animate={{
                y: active ? -3 : 0,
                boxShadow: active
                  ? "0 10px 20px rgba(251,191,36,0.2)"
                  : "0 4px 6px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full"
                animate={{ translateX: active ? "200%" : "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span className="relative text-xs font-semibold text-amber-700">
                Profile coming soon
              </span>
            </motion.div>
          ) : (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>

        {/* Name + title */}
        <motion.div
          className="mb-3"
          animate={{ x: active ? 3 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-slate-900 mb-1 leading-tight">
            {person.name}
          </h3>
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              {person.title}
            </p>
            <motion.div
              animate={{ x: active ? 2 : 0, y: active ? -2 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-4 h-4 text-indigo-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-sm text-gray-600 leading-relaxed mb-5 flex-1"
          animate={{ opacity: active ? 1 : 0.85 }}
          transition={{ duration: 0.3 }}
        >
          {person.bio}
        </motion.p>

        {/* Expertise tags */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Expertise
            </span>
            <motion.div
              className="h-px flex-1 ml-3 bg-gradient-to-r from-slate-200 to-transparent"
              animate={{ scaleX: active ? 1 : 0.5 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {person.expertise.map((tag, j) => (
              <motion.div
                key={j}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 py-1.5 cursor-default shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + j * 0.08 }}
                whileHover={{ scale: 1.05, y: -3 }}
                onHoverStart={() => setHoveredTag(`${index}-${j}`)}
                onHoverEnd={() => setHoveredTag(null)}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${tagColors[j % tagColors.length]} opacity-0`}
                  animate={{ opacity: hoveredTag === `${index}-${j}` ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span
                  className={`relative text-xs font-medium transition-colors ${
                    hoveredTag === `${index}-${j}`
                      ? "text-white"
                      : "text-slate-700"
                  }`}
                >
                  {tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated bottom accent bar */}
        <motion.div
          className="mt-6 flex gap-1.5 h-1.5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600"
            animate={{ width: hovered ? "50%" : "35%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-600"
            animate={{ width: hovered ? "35%" : "25%" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          />
          <motion.div
            className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
            animate={{ width: hovered ? "15%" : "10%" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── PARTNERSHIP CARD ────────────────────────────────────────────────────────

function PartnershipCard({ p, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const c = colorMap[p.color];
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-2xl border ${c.border} ${c.bg} p-6 flex flex-col`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-5px)"
            : "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.3s ease, box-shadow 0.3s ease`,
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl font-bold text-sm mb-4 ${c.badge}`}
        style={{
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          transform: hovered ? "scale(1.1) rotate(-3deg)" : "scale(1)",
        }}
      >
        {p.badge}
      </div>
      <h3 className="text-sm font-semibold text-gray-900 mb-2">{p.name}</h3>
      <p className="text-xs text-gray-600 leading-relaxed flex-1">
        {p.description}
      </p>
    </div>
  );
}

// ─── CERT CARD ───────────────────────────────────────────────────────────────

function CertCard({ cert, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const Icon = cert.icon;
  const statusStyles =
    cert.statusColor === "emerald"
      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
      : "bg-amber-50 text-amber-700 border border-amber-200";
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white border border-gray-200 rounded-xl p-6"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease`,
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.09)" : "none",
        borderColor: hovered
          ? cert.statusColor === "emerald"
            ? "#6ee7b7"
            : "#fcd34d"
          : "#e5e7eb",
      }}
    >
      <Icon
        className={`h-8 w-8 mb-4 ${cert.statusColor === "emerald" ? "text-emerald-500" : "text-amber-500"}`}
        style={{
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          transform: hovered ? "scale(1.15) rotate(-5deg)" : "scale(1)",
        }}
      />
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        {cert.title}
      </h3>
      <span
        className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-3 ${statusStyles}`}
      >
        {cert.status}
      </span>
      <p className="text-xs text-gray-600 leading-relaxed">
        {cert.description}
      </p>
    </div>
  );
}

// ─── TESTIMONIAL CARD ────────────────────────────────────────────────────────

function TestimonialCard({ t, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-xl border border-gray-200 p-7 flex flex-col relative overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-5px)"
            : "translateY(0)"
          : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 100}ms, transform 0.3s ease, box-shadow 0.3s ease`,
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.09)" : "none",
      }}
    >
      {/* Top quote accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }}
      />

      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, s) => (
          <Star
            key={s}
            className="h-4 w-4 text-amber-400 fill-amber-400"
            style={{ animation: `pop-in 0.4s ease ${s * 70}ms both` }}
          />
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1 italic">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div
          className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0"
          style={{
            transition: "transform 0.3s ease, background 0.2s ease",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            background: hovered ? "#dbeafe" : "",
          }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{t.name}</p>
          <p className="text-xs text-gray-500">
            {t.title}, {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}
// ─── BEST PRACTICE ITEM ──────────────────────────────────────────────────────

function PracticeItem({ item, delay }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-start space-x-3"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateX(5px)"
            : "translateX(0)"
          : "translateX(-16px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.25s ease`,
      }}
    >
      <CheckCircle
        className="h-6 w-6 flex-shrink-0 mt-0.5"
        style={{
          color: hovered ? "#1d4ed8" : "#2563eb",
          transition: "transform 0.3s ease, color 0.2s ease",
          transform: hovered ? "scale(1.15)" : "scale(1)",
        }}
      />
      <span
        className="text-gray-700"
        style={{
          transition: "color 0.2s ease",
          color: hovered ? "#111827" : "",
        }}
      >
        {item}
      </span>
    </div>
  );
}
// ─── EXPERTISE CARD ──────────────────────────────────────────────────────────

function ExpertiseCard({ item, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="backdrop-blur-sm border rounded-xl p-6 text-left"
      style={{
        background: hovered
          ? "rgba(255,255,255,0.16)"
          : "rgba(255,255,255,0.1)",
        borderColor: hovered ? "rgba(6,182,212,0.4)" : "rgba(255,255,255,0.2)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 100}ms, transform 0.3s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.3s ease`,
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <h3
        className="text-xl font-semibold mb-3"
        style={{
          color: hovered ? "#22d3ee" : "#fff",
          transition: "color 0.2s ease",
        }}
      >
        {item.title}
      </h3>
      <p className="text-gray-300">{item.body}</p>
    </div>
  );
}
// ─── Holo CARD for mission vision──────────────────────────────────────────────────────────
function HoloCard({ card }) {
  const [ref, inView] = useInView();
  const cardRef = useRef(null);
  const [active, setActive] = useState(false);
  const [style, setStyle] = useState({});
  const [shimPos, setShimPos] = useState("50% 50%");
  const Icon = card.icon;

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const ratioX = (x - rect.width / 2) / (rect.width / 2);
    const ratioY = (y - rect.height / 2) / (rect.height / 2);

    setStyle({
      transform: `rotateY(${ratioX * 18}deg) rotateX(${-ratioY * 14}deg) scale(1.03)`,
      "--mx": `${((x / rect.width) * 100).toFixed(1)}%`,
      "--my": `${((y / rect.height) * 100).toFixed(1)}%`,
    });
    setShimPos(
      `${(100 - (ratioX + 1) * 50).toFixed(1)}% ${(100 - (ratioY + 1) * 50).toFixed(1)}%`,
    );
    setActive(true);
  };

  const handleLeave = () => {
    setStyle({ transform: "rotateY(0deg) rotateX(0deg) scale(1)" });
    setActive(false);
  };

  return (
    <FadeIn delay={card.delay} direction="up">
      <div ref={ref} style={{ perspective: "900px" }}>
        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          onTouchMove={(e) => {
            e.preventDefault();
            handleMove(e);
          }}
          onTouchEnd={handleLeave}
          style={{
            ...style,
            transition: active
              ? "box-shadow 0.3s ease"
              : "transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease",
            transformStyle: "preserve-3d",
            willChange: "transform",
            position: "relative",
            overflow: "hidden",
          }}
          className="bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-2xl p-8 border border-gray-200 cursor-default"
        >
          {/* Holographic shimmer layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "1rem",
              pointerEvents: "none",
              zIndex: 3,
              background:
                "linear-gradient(105deg, transparent 20%, rgba(99,102,241,0.25) 40%, rgba(6,182,212,0.25) 50%, rgba(255,255,255,0.6) 60%, transparent 80%)",
              backgroundSize: "200% 200%",
              backgroundPosition: shimPos,
              opacity: active ? 1 : 0,
              transition: "opacity 0.3s ease",
              mixBlendMode: "normal",
            }}
          />
          {/* Rainbow iridescent layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "1rem",
              pointerEvents: "none",
              zIndex: 1,
              background: `linear-gradient(125deg, rgba(255,0,128,0) 0%, rgba(255,0,128,0.06) 15%, rgba(255,200,0,0.08) 30%, rgba(0,255,128,0.06) 45%, rgba(0,200,255,0.08) 60%, rgba(128,0,255,0.06) 75%, rgba(255,0,128,0) 90%)`,
              opacity: active ? 1 : 0,
              transition: "opacity 0.3s ease",
              mixBlendMode: "normal",
            }}
          />
          {/* Spotlight */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "1rem",
              pointerEvents: "none",
              zIndex: 2,
              background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)`,
              opacity: active ? 1 : 0,
              transition: "opacity 0.3s ease",
              mixBlendMode: "multiply",
            }}
          />
          {/* Gradient border */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "1rem",
              pointerEvents: "none",
              zIndex: 4,
              border: "1px solid transparent",
              background: `linear-gradient(120deg,
  rgba(99,102,241,0.15),
  rgba(6,182,212,0.15),
  rgba(236,72,153,0.15),
  rgba(99,102,241,0.15)
)`,
              opacity: active ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Card content */}
          <div style={{ position: "relative", zIndex: 10 }}>
            <div
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6"
              style={{
                transition:
                  "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
                transform: active ? "translateZ(20px) scale(1.08)" : "scale(1)",
                boxShadow: active
                  ? "0 20px 50px rgba(99,102,241,0.25), 0 10px 25px rgba(6,182,212,0.2)"
                  : "0 8px 20px rgba(0,0,0,0.06)",
              }}
            >
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                color: "#0f172a",
                transition: "transform 0.15s ease",
                transform: active ? "translateZ(8px)" : "none",
              }}
            >
              {card.title}
            </h3>
            <p
              className="text-gray-700 text-lg leading-relaxed"
              style={{
                transition: "transform 0.15s ease",
                transform: active ? "translateZ(4px)" : "none",
              }}
            >
              {card.body}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export function About() {
  const [expanded, setExpanded] = useState(false);

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
          0%, 100% { background-position: 0%   50%; }
          50%       { background-position: 100% 50%; }
        }
        @keyframes pop-in {
          0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
          80%  { transform: scale(1.15) rotate(3deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes draw-line {
          from { width: 0; }
          to   { width: 100%; }
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

        .mission-card {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .mission-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 56px rgba(0,0,0,0.1);
          border-color: #bfdbfe;
        }
        .mission-card:hover .mission-icon {
          transform: scale(1.1) rotate(-4deg);
          box-shadow: 0 8px 20px rgba(59,130,246,0.35);
        }
        .mission-icon {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
        }

        .trust-item {
          transition: transform 0.2s ease;
        }
        .trust-item:hover { transform: translateX(4px); }
        .trust-item:hover span { color: #059669; }

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
        .cta-card:hover { box-shadow: 0 32px 80px rgba(0,0,0,0.3); }
        .cta-card:hover .cta-top-bar { width: 40% !important; }

        .office-img {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .office-img:hover {
          transform: scale(1.02) rotate(0.5deg);
          box-shadow: 0 32px 64px rgba(0,0,0,0.15);
        }

        .sec-doc-btn {
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .sec-doc-btn:hover {
          background: #1e293b !important;
          transform: scale(1.03);
          box-shadow: 0 6px 18px rgba(0,0,0,0.2);
        }
      `}</style>

      <div className="bg-white">
        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
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
                About SJ Technolabs
              </h1>
              <p className="hero-p text-xl text-gray-300  mx-auto">
                Delivering secure, high-performance systems that scale—on time
                and within budget.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. WHO WE ARE ─────────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Who We Are
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg">
                    <p>
                      SJ Technolabs is a premier software consulting firm with
                      over 15 years of experience delivering innovative
                      technology solutions to enterprises worldwide. We
                      specialise in Adobe Experience Cloud implementations,
                      multi-cloud architectures, and custom application
                      development.
                    </p>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out md:!max-h-none md:!opacity-100 ${expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"}`}
                    >
                      <p className="mb-3 leading-relaxed text-gray-600">
                        Our team of certified experts combines deep technical
                        knowledge with industry best practices to help
                        organisations achieve their digital transformation
                        goals. We pride ourselves on building long-term
                        partnerships with our clients, understanding their
                        unique challenges, and delivering solutions that drive
                        measurable business outcomes.
                      </p>
                      <p>
                        With delivery centres across the globe and a team of
                        300+ professionals, we serve clients across diverse
                        industries including e-commerce, retail,
                        telecommunications, banking, healthcare, and
                        manufacturing.
                      </p>
                    </div>
                    <button
                      className="flex items-center gap-1 text-blue-600 text-sm font-bold mb-4 md:hidden"
                      onClick={() => setExpanded(!expanded)}
                    >
                      {expanded ? "Read Less" : "Read More"}
                      <ChevronRight
                        size={13}
                        className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
                      />
                    </button>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {[
                      "Adobe Certified Partner",
                      "AWS Partner Network",
                      "Zero-downtime migrations",
                      "SLA-backed delivery",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="trust-item flex items-center gap-2 text-sm text-gray-700 cursor-default"
                        style={{
                          opacity: 0,
                          animation: `fade-up 0.5s ease ${300 + i * 80}ms forwards`,
                        }}
                      >
                        <CheckCircle
                          className="h-4 w-4 text-emerald-500 flex-shrink-0"
                          style={{ transition: "transform 0.2s ease" }}
                        />
                        <span className="transition-colors duration-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={100}>
                <img
                  src={image}
                  alt="Modern office"
                  className="office-img rounded-2xl shadow-2xl w-full object-cover"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 4. MISSION & VISION ───────────────────────────────────────────── */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  body: "To empower enterprises with scalable, secure, and high-performance digital platforms that drive innovation, enhance customer experiences, and accelerate business growth through cutting-edge technology solutions.",
                  delay: 0,
                },
                {
                  icon: Lightbulb,
                  title: "Our Vision",
                  body: "To be the most trusted global technology partner for enterprises seeking digital transformation, recognised for our technical excellence, innovation, and commitment to delivering exceptional value to our clients.",
                  delay: 100,
                },
              ].map((card, i) => (
                <HoloCard key={i} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. LEADERSHIP ─────────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Leadership & Founders
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Experienced technologists and delivery leaders who have worked
                  inside the enterprises they now serve
                </p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {leaders.map((person, i) => (
                <LeaderCard key={i} person={person} index={i} />
              ))}
            </div>
            <FadeIn delay={200}>
              <p className="text-center text-sm text-gray-400 mt-8">
                Full team profiles will be published shortly. In the meantime,{" "}
                <Link to="/contact" className="text-blue-600 hover:underline">
                  reach out to speak with our team directly.
                </Link>
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── 6. CORE VALUES ────────────────────────────────────────────────── */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Core Values
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ValueCard key={index} value={value} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── BEST PRACTICES ───────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                  How We Enable Scalable, High-Performance Systems
                </h2>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <FadeIn delay={100} direction="left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-blue-100">
                      Performance & Experience
                    </h3>
                  </FadeIn>
                  <div className="space-y-4">
                    {[
                      "Fast, responsive applications across devices",
                      "Intuitive and user-friendly interfaces",
                      "Consistent performance under high usage",
                      "Faster rollout of new features",
                    ].map((item, index) => (
                      <PracticeItem
                        key={index}
                        item={item}
                        delay={150 + index * 60}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <FadeIn delay={100} direction="left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-blue-100">
                      Scalability & Operations
                    </h3>
                  </FadeIn>
                  <div className="space-y-4">
                    {[
                      "Systems built to scale with business growth",
                      "High availability with minimal downtime",
                      "Seamless deployments and updates",
                      "Real-time monitoring and proactive support",
                    ].map((item, index) => (
                      <PracticeItem
                        key={index}
                        item={item}
                        delay={150 + index * 60}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <FadeIn delay={100} direction="left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-blue-100">
                      Security & Reliability
                    </h3>
                  </FadeIn>
                  <div className="space-y-4">
                    {[
                      "Strong data protection and compliance standards",
                      "Secure systems designed to minimize risks",
                      "Stable and resilient system architecture",
                      "Continuous monitoring for system integrity",
                    ].map((item, index) => (
                      <PracticeItem
                        key={index}
                        item={item}
                        delay={150 + index * 60}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <FadeIn delay={200} direction="right">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-blue-100">
                      Efficiency & Growth
                    </h3>
                  </FadeIn>
                  <div className="space-y-4">
                    {[
                      "Optimized systems for better performance",
                      "Reduced operational overhead through automation",
                      "Faster time-to-market for products",
                      "Technology aligned with business goals",
                    ].map((item, index) => (
                      <PracticeItem
                        key={index}
                        item={item}
                        delay={200 + index * 60}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. PARTNERSHIPS ───────────────────────────────────────────────── */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Partnerships
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Official partnerships with the platforms we implement — giving
                  our clients access to partner-level support, early-access
                  features, and co-delivery resources
                </p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerships.map((p, i) => (
                <PartnershipCard key={i} p={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. EXPERTISE ──────────────────────────────────────────────────── */}
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Expertise
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                  Delivering technology excellence across platforms, cloud, and
                  modern engineering practices
                </p>
              </div>
            </FadeIn>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Platform Engineering",
                  body: "Building robust, scalable platforms that support growth and innovation.",
                },
                {
                  title: "Cloud Transformation",
                  body: "Designing and managing secure, high-performance cloud ecosystems.",
                },
                {
                  title: "Modern Engineering Practices",
                  body: "Driving efficiency through Agile, DevOps, and automation-led delivery.",
                },
              ].map((item, i) => (
                <ExpertiseCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. COMPLIANCE & CERTIFICATIONS ────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Compliance & Certifications
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Enterprise clients require more than technical skill — they
                  require demonstrable security practices, audit-readiness, and
                  certified delivery teams
                </p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, i) => (
                <CertCard key={i} cert={cert} index={i} />
              ))}
            </div>

            <FadeIn delay={200}>
              <div
                className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-2xl mx-auto text-center"
                style={{
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(0,0,0,0.08)";
                  e.currentTarget.style.borderColor = "#cbd5e1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                <Building2 className="h-6 w-6 text-slate-400 mx-auto mb-3" />
                <p className="text-sm text-gray-700 font-medium mb-1">
                  Enterprise security documentation available on request
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Security practices overview, data handling policies, and
                  NDA-covered architecture reviews available for procurement and
                  InfoSec teams.
                </p>
                <Link
                  to="https://calendly.com/khankureakash0285/for-website"
                  className="sec-doc-btn inline-flex items-center gap-2 text-sm bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium"
                >
                  Request security documentation{" "}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Case Studies"
              subtitle="Real outcomes from real enterprise engagements"
            />
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((cs, i) => (
                <CaseStudyCard key={i} cs={cs} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. TESTIMONIALS ──────────────────────────────────────────────── */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What our clients say
                </h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} t={t} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. CTA ───────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="cta-card rounded-3xl p-12 text-center text-white relative overflow-hidden">
                {/* Top accent */}
                <div
                  className="cta-top-bar"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "16rem",
                    height: 3,
                    borderRadius: "0 0 8px 8px",
                    background: "linear-gradient(90deg, #22d3ee, #3b82f6)",
                    transition: "width 0.4s ease",
                  }}
                />

                {/* Ambient blobs */}
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to{" "}
                    <span className="shimmer-text">partner with us?</span>
                  </h2>
                  <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                    Let's start with a free 45-minute architecture review — no
                    obligation, no sales pressure. Just an honest assessment of
                    where we can help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="btn-cyan inline-flex items-center justify-center gap-2 bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl text-lg"
                    >
                      <Calendar className="h-5 w-5" />
                      Book a Free Consultation
                    </Link>
                    <Link
                      to="/services"
                      className="btn-ghost-lg inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-medium px-8 py-4 rounded-xl text-lg"
                    >
                      Explore Our Services <ArrowRight className="h-5 w-5" />
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
