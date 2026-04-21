import { useState, useEffect, useRef } from "react";
import {
  Layers,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  Cloud,
  Code,
  Sparkles,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const crossCapabilities = [
  {
    title: "Digital Experience Platforms",
    description:
      "Adobe Experience Cloud implementation for personalised customer journeys",
    icon: Layers,
    gradient: "from-blue-500 to-cyan-500",
    color: "#3b82f6",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Multi-cloud architecture design and implementation (AWS, Azure, GCP)",
    icon: Cloud,
    gradient: "from-blue-500 to-cyan-500",
    color: "#3b82f6",
  },
  {
    title: "Data & Analytics",
    description:
      "Business intelligence, data warehousing, and advanced analytics",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    color: "#3b82f6",
  },
  {
    title: "Mobile Solutions",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    icon: MessageCircle,
    gradient: "from-blue-500 to-cyan-500",
    color: "#3b82f6",
  },
  {
    title: "API & Integration",
    description:
      "Microservices architecture and third-party system integrations",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    color: "#3b82f6",
  },
  {
    title: "Security & Compliance",
    description:
      "Enterprise-grade security, data privacy, and regulatory compliance",
    icon: ShieldCheck,
    gradient: "from-blue-500 to-cyan-500",
    color: "#3b82f6",
  },
  {
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure as code, and automated testing",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    color: "#3b82f6",
  },
  {
    title: "AI & Machine Learning",
    description: "AI-ready architectures and intelligent automation solutions",
    icon: Sparkles,
    gradient: "from-blue-500 to-cyan-500",
    color: "#3b82f6",
  },
];

// ─── USE IN VIEW HOOK (matches your array-style) ──────────────────────────────

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

// ─── FADE IN (matches your existing pattern) ─────────────────────────────────

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── CAPABILITY CARD ─────────────────────────────────────────────────────────

function CapabilityCard({ cap, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const Icon = cap.icon;

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Parse the two color stops out of the Tailwind gradient string
  // e.g. "from-blue-500 to-cyan-500" → used for the bottom accent line
  const gradientColors = {
    "from-blue-500 to-cyan-500": ["#3b82f6", "#06b6d4"],
    "from-purple-500 to-pink-500": ["#a855f7", "#ec4899"],
    "from-emerald-500 to-teal-500": ["#10b981", "#14b8a6"],
    "from-orange-500 to-red-500": ["#f97316", "#ef4444"],
    "from-indigo-500 to-blue-500": ["#6366f1", "#3b82f6"],
    "from-rose-500 to-pink-500": ["#f43f5e", "#ec4899"],
    "from-cyan-500 to-blue-500": ["#06b6d4", "#3b82f6"],
    "from-violet-500 to-purple-500": ["#8b5cf6", "#a855f7"],
  };
  const [c1, c2] = gradientColors[cap.gradient] ?? [cap.color, cap.color];

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-8px) scale(1.02)"
            : "translateY(0) scale(1)"
          : "translateY(30px) scale(0.95)",
        transition: `opacity 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 80}ms, transform 0.4s cubic-bezier(0.4,0,0.2,1)`,
      }}
    >
      {/* Mouse-tracking radial glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />

      {/* Gradient border ring (sits behind content) */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          padding: "1px",
          background: `linear-gradient(135deg, ${c1}, ${c2})`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Card content */}
      <div className="relative z-10 flex items-start gap-4">
        {/* Icon */}
        <div className="relative flex-shrink-0">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
            style={{
              background: hovered
                ? `linear-gradient(135deg, ${cap.color}40, ${cap.color}20)`
                : "rgba(255,255,255,0.05)",
              transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
              transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1)",
            }}
          >
            <Icon
              className="w-6 h-6 relative z-10"
              style={{
                color: hovered ? cap.color : "#94a3b8",
                transition: "color 0.3s ease",
              }}
            />
          </div>

          {/* Ping particles */}
          {hovered && (
            <>
              <span
                className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full animate-ping"
                style={{ background: cap.color, animationDuration: "1.5s" }}
              />
              <span
                className="absolute bottom-0 left-0 w-1.5 h-1.5 rounded-full animate-ping"
                style={{
                  background: cap.color,
                  animationDuration: "2s",
                  animationDelay: "0.3s",
                }}
              />
            </>
          )}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3
            className="font-semibold mb-2 transition-colors duration-300"
            style={{
              color: hovered ? cap.color : "#f1f5f9",
              fontSize: "1.125rem",
            }}
          >
            {cap.title}
          </h3>
          <p
            className="text-sm leading-relaxed transition-colors duration-300"
            style={{ color: hovered ? "#cbd5e1" : "#94a3b8" }}
          >
            {cap.description}
          </p>
        </div>

        {/* Arrow */}
        <div
          className="flex-shrink-0 transition-all duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(-10px)",
          }}
        >
          <ArrowRight className="w-5 h-5" style={{ color: cap.color }} />
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
        style={{
          width: hovered ? "100%" : "0%",
          background: `linear-gradient(to right, ${c1}, ${c2})`,
        }}
      />
    </div>
  );
}

// ─── SECTION (drop this inside your Industries page JSX) ─────────────────────

export default function CrossIndustryCapabilities() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Cross-industry capabilities
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Beyond industry-specific expertise, we bring proven capabilities
                that apply across all sectors
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {crossCapabilities.map((cap, index) => (
              <CapabilityCard key={index} cap={cap} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
