// ─────────────────────────────────────────────────────────────────────────────
// WHO WE WORK WITH — drop this section into your Home page,
// right after the "Trusted By" logo strip.
// ─────────────────────────────────────────────────────────────────────────────

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

// ── Personas ──────────────────────────────────────────────────────────────────

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
      "Our structured delivery model — Discovery through Support — gives you a clear roadmap, zero-downtime migrations, and SLA-backed handovers.",
    accent: "emerald",
  },
];

// ── Accent colour maps ────────────────────────────────────────────────────────

const accentMap = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-100",
    icon: "bg-blue-100 text-blue-600",
    tag: "bg-blue-100 text-blue-700",
    hover: "hover:border-blue-300",
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-100",
    icon: "bg-red-100 text-red-600",
    tag: "bg-red-100 text-red-700",
    hover: "hover:border-red-300",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    icon: "bg-amber-100 text-amber-600",
    tag: "bg-amber-100 text-amber-700",
    hover: "hover:border-amber-300",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    icon: "bg-emerald-100 text-emerald-600",
    tag: "bg-emerald-100 text-emerald-700",
    hover: "hover:border-emerald-300",
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

export function WhoWeWorkWith() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who we work with
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We partner with mid-to-large enterprises where digital experience,
            cloud performance, and data maturity directly impact revenue.
          </p>
        </div>

        {/* ── Persona cards ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {personas.map((p, i) => {
            const Icon = p.icon;
            const a = accentMap[p.accent];
            return (
              <div
                key={i}
                className={`rounded-2xl border ${a.border} ${a.bg} ${a.hover} p-7 transition-all hover:shadow-md`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${a.icon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {p.role}
                    </h3>

                    {/* Pain point */}
                    <div className="flex items-start gap-1.5 mb-3">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full mt-0.5 flex-shrink-0 ${a.tag}`}
                      >
                        Challenge
                      </span>
                      <p className="text-sm text-gray-600">{p.pain}</p>
                    </div>

                    {/* Value prop */}
                    <div className="flex items-start gap-1.5">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full mt-0.5 flex-shrink-0 ${a.tag}`}
                      >
                        How we help
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {p.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA nudge ── */}
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
