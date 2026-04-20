import { motion } from "framer-motion";
import {
  Building2,
  ShoppingCart,
  HeartPulse,
  Landmark,
  Layers,
  Radio,
  Users,
  MonitorSmartphone,
  BarChart3,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const personas = [
  {
    icon: Cpu,
    role: "CTOs & Enterprise Architects",
    pain: "Scaling digital infrastructure without accumulating tech debt",
    value:
      "We design high-performance, cloud-native architectures that your team can own and evolve — not black-box solutions that lock you in.",
    accent: "blue",
  },
  {
    icon: MonitorSmartphone,
    role: "Digital Experience Leaders",
    pain: "Delivering personalised experiences across fragmented channels",
    value:
      "We implement Adobe Experience Cloud end-to-end — AEM, Analytics, Target, Campaign — so your content and data work together from day one.",
    accent: "red",
  },
  {
    icon: BarChart3,
    role: "Marketing Technology Teams",
    pain: "Translating customer data into revenue-driving decisions",
    value:
      "We build the analytics foundations and journey orchestration your team needs to move from guesswork to measurable, repeatable growth.",
    accent: "amber",
  },
  {
    icon: Users,
    role: "IT & Engineering Leadership",
    pain: "Migrating legacy systems without disrupting live operations",
    value:
      "Partnering with startups and enterprises to modernize systems, drive growth, and unlock new revenue—without disruption.",
    accent: "emerald",
  },
];

// Extended with gradient colours for the effects
const accentMap = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-100",
    icon: "bg-white text-blue-600",
    tag: "bg-blue-100 text-blue-700",
    hover: "hover:border-blue-300",
    gradientHover: "from-blue-100/40 via-blue-50/40 to-sky-100/40",
    barGradient: "from-blue-400 via-sky-400 to-blue-500",
    glowFrom: "rgba(59,130,246,0.1)",
    glowTo: "rgba(14,165,233,0.1)",
    particle: ["bg-blue-300", "bg-sky-300", "bg-blue-200"],
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-100",
    icon: "bg-white text-red-600",
    tag: "bg-red-100 text-red-700",
    hover: "hover:border-red-300",
    gradientHover: "from-rose-100/40 via-pink-100/40 to-orange-100/40",
    barGradient: "from-rose-400 via-pink-400 to-orange-400",
    glowFrom: "rgba(244,63,94,0.1)",
    glowTo: "rgba(251,146,60,0.1)",
    particle: ["bg-rose-300", "bg-orange-300", "bg-pink-300"],
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    icon: "bg-white text-amber-600",
    tag: "bg-amber-100 text-amber-700",
    hover: "hover:border-amber-300",
    gradientHover: "from-amber-100/40 via-yellow-100/40 to-orange-100/40",
    barGradient: "from-amber-400 via-yellow-400 to-orange-400",
    glowFrom: "rgba(245,158,11,0.1)",
    glowTo: "rgba(251,146,60,0.1)",
    particle: ["bg-amber-300", "bg-yellow-300", "bg-orange-300"],
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    icon: "bg-white text-emerald-600",
    tag: "bg-emerald-100 text-emerald-700",
    hover: "hover:border-emerald-300",
    gradientHover: "from-emerald-100/40 via-teal-100/40 to-green-100/40",
    barGradient: "from-emerald-400 via-teal-400 to-green-400",
    glowFrom: "rgba(16,185,129,0.1)",
    glowTo: "rgba(20,184,166,0.1)",
    particle: ["bg-emerald-300", "bg-teal-300", "bg-green-300"],
  },
};

// Particle positions — top-left, top-right, bottom-mid
const PARTICLE_POSITIONS = [
  "top-8 left-8",
  "top-16 right-16",
  "bottom-16 left-1/3",
];
const PARTICLE_SIZES = ["size-2", "size-1.5", "size-1.5"];
const PARTICLE_DURATIONS = [2, 2.5, 2.2];
const PARTICLE_DELAYS = [0, 0.3, 0.6];

function PersonaCard({ p }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = p.icon;
  const a = accentMap[p.accent];

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border ${a.border} ${a.bg} p-5 sm:p-6`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* 1. Animated background gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${a.gradientHover} opacity-0`}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* 2. Floating particles */}
      {isHovered &&
        PARTICLE_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} ${PARTICLE_SIZES[i]} rounded-full ${a.particle[i]}`}
            animate={{ y: [0, -18, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: PARTICLE_DURATIONS[i],
              repeat: Infinity,
              delay: PARTICLE_DELAYS[i],
            }}
          />
        ))}

      {/* Card content */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-4">
        {/* 3. Icon — scales and wobbles */}
        <motion.div
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${a.icon}`}
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, -5, 5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>

        {/* 4. Content slides right on hover */}
        <div className="flex-1">
          <motion.h3
            className="text-sm sm:text-base font-semibold text-gray-900 mb-3"
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {p.role}
          </motion.h3>

          <motion.div
            className="mb-3"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-1 ${a.tag}`}
            >
              Challenge
            </span>
            <p className="text-sm text-gray-600 leading-snug">{p.pain}</p>
          </motion.div>

          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <span
              className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-1 ${a.tag}`}
            >
              How we help
            </span>
            <p className="text-sm text-gray-700 leading-relaxed">{p.value}</p>
          </motion.div>

          {/* 5. Expanding bottom bar */}
          <motion.div
            className={`mt-6 h-0.5 rounded-full bg-gradient-to-r ${a.barGradient}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0.25 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>

      {/* 6. Glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0"
        style={{
          background: `linear-gradient(135deg, ${a.glowFrom}, ${a.glowTo})`,
          filter: "blur(20px)",
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function WhoWeWorkWith() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who we work with
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We partner with mid-to-large enterprises where digital experience,
            cloud performance, and data maturity directly impact revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {personas.map((p, i) => (
            <PersonaCard key={i} p={p} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">
            Not sure if we're the right fit? Let's find out in 20 minutes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Talk to our team
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
