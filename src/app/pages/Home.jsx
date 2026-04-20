import { Link } from "react-router-dom";
import { WhoWeWorkWith } from "../components/Whoweworkwith";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Search,
  MessageCircle,
  Target,
  Zap,
  Globe,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import video from "../../assets/check.mp4";

/* ─── Scroll-reveal hook ─────────────────────────────────────────────── */
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
      { threshold: 0.15, ...options },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── Animated counter ───────────────────────────────────────────────── */
function AnimatedNumber({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/\D/g, ""), 10);
    const duration = 1400;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Fade-in wrapper ────────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, inView] = useInView();
  const translate =
    direction === "up"
      ? "translateY(32px)"
      : direction === "left"
        ? "translateX(-32px)"
        : direction === "right"
          ? "translateX(32px)"
          : "translateY(0)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0,0)" : translate,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
export function Home() {
  const services = [
    {
      title: "Adobe Experience Cloud",
      description:
        "End-to-end AEM, Analytics, Target, Campaign, and Journey Optimizer solutions",
      icon: Target,
    },
    {
      title: "Cloud Solutions",
      description:
        "AWS, Azure, and GCP migration, modernization, and managed services",
      icon: Globe,
    },
    {
      title: "Custom Development",
      description:
        "Enterprise-grade web, mobile, and SaaS applications built to scale",
      icon: Zap,
    },
  ];
  // const logos = [
  //   "/logos/aumont.png",
  //   "/logos/carlisle.png",
  //   "/logos/magna.png",
  //   "/logos/cooper.png",
  // ];
  const industries = [
    "E-commerce",
    "Retail",
    "Telecommunications",
    "BFSI & Fin Tech",
    "Healthcare",
    "Saas & Technology",
    "Media & Publishing",
    "Education",
  ];

  const stats = [
    { label: "Years of Excellence", value: "15+", num: "15", suffix: "+" },
    { label: "Enterprise Clients", value: "200+", num: "200", suffix: "+" },
    { label: "Projects Delivered", value: "500+", num: "500", suffix: "+" },
    { label: "Global Team Members", value: "300+", num: "300", suffix: "+" },
  ];

  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Global animation styles ──────────────────────────────────────── */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-pan {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
          @keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 10s linear infinite;
}

        .hero-h1 {
          opacity: 0;
          animation: fade-up 0.8s ease 0.1s forwards;
        }
        .hero-p {
          opacity: 0;
          animation: fade-up 0.8s ease 0.3s forwards;
        }
        .hero-ctas {
          opacity: 0;
          animation: fade-up 0.8s ease 0.5s forwards;
        }

        /* Service card */
        .service-card {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59,130,246,0.04) 0%, rgba(6,182,212,0.04) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(0,0,0,0.12); }
        .service-card:hover::before { opacity: 1; }
        .service-card:hover .service-icon { animation: float 2s ease-in-out infinite; }

        /* Service icon */
        .service-icon {
          transition: transform 0.35s ease;
        }

        /* Industry card */
        .industry-card {
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
          cursor: default;
        }
        .industry-card:hover {
          transform: translateY(-4px) scale(1.03);
          background: rgba(255,255,255,0.18) !important;
          border-color: rgba(6,182,212,0.5) !important;
        }
        .industry-card:hover .industry-icon { color: #22d3ee; transform: scale(1.15); }
        .industry-icon { transition: color 0.25s ease, transform 0.25s ease; }

        /* Why-us checklist items */
        .why-item {
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .why-item:hover { transform: translateX(4px); }
        .why-item:hover span { color: #2563eb; }

        .btn-ghost {
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.22) !important; transform: scale(1.03); }

        /* Stat card */
        .stat-card {
          transition: transform 0.3s ease;
        }
        .stat-card:hover { transform: translateY(-4px); }
        .stat-number {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Trusted logo items */
        .logo-item {
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .logo-item:hover { opacity: 1 !important; transform: scale(1.08); }

        /* Learn More link */
        .learn-more {
          position: relative;
          transition: gap 0.2s ease;
        }
        .learn-more::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: #2563eb;
          transition: width 0.3s ease;
        }
        .learn-more:hover::after { width: 100%; }
        .learn-more:hover { gap: 8px !important; }

        /* CTA bottom section */
        .cta-bottom {
          background: linear-gradient(135deg, #1d4ed8 0%, #0891b2 50%, #1d4ed8 100%);
          background-size: 200% 200%;
          animation: gradient-pan 6s ease infinite;
        }
        .cta-bottom-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cta-bottom-btn:hover { transform: scale(1.05); box-shadow: 0 12px 28px rgba(0,0,0,0.2); }

        /* Hero background blobs */
        .hero-blob-1 {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%);
          top: -80px; right: -80px;
          animation: float 8s ease-in-out infinite;
          pointer-events: none;
        }
        .hero-blob-2 {
          position: absolute;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%);
          bottom: -60px; left: 10%;
          animation: float 10s ease-in-out 2s infinite;
          pointer-events: none;
        }

        /* Team image */
        .team-img {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .team-img:hover { transform: scale(1.02) rotate(0.5deg); box-shadow: 0 32px 64px rgba(0,0,0,0.15); }

        /* Trusted strip */
        .trusted-strip {
          overflow: hidden;
        }

        /* Scroll-indicator line on hero */
        @keyframes grow-line {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
      `}</style>

      <div className="bg-white">
        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 relative overflow-hidden">
          <div className="hero-blob-1" />
          <div className="hero-blob-2" />
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-h1 text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Scalable IT Solutions
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #22d3ee, #60a5fa, #22d3ee)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "shimmer 3s linear infinite",
                  }}
                >
                  for Modern Enterprises
                </span>
              </h1>
              <p className="hero-p text-lg text-gray-300 mx-auto mb-10">
                We help mid-to-large enterprises design, implement, and scale
                robust digital solutions with secure, high-performance
                architectures—delivered on time and within budget.
              </p>
              <div className="hero-ctas flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2.5 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all font-medium shadow-lg"
                >
                  Get Architecture Review
                </Link>
                <Link
                  to="/contact?subject=expert"
                  className="btn-ghost inline-flex items-center justify-center bg-white/10 border border-white/30 text-white font-medium px-6 py-3 rounded-lg gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Talk to an Expert in 24 Hours
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TRUSTED BY ─────────────────────────────────────────────────── */}
        <section className="border-b border-white/10 py-6 bg-slate-900 text-white overflow-hidden">
          <div className="container mx-auto pl-4 sm:pl-6 lg:pl-8 pr-0 flex items-center gap-8">
            {/* LEFT TEXT */}
            <div className="min-w-max">
              <p className="text-lg font-semibold">Trusted</p>
              <p className="text-sm text-gray-400">across industries</p>
            </div>

            {/* RIGHT SCROLLING TAGS */}
            <div className="relative flex-1 overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-slate-900 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-slate-900 to-transparent z-10" />

              <div className="flex animate-scroll gap-4 items-center whitespace-nowrap hover:[animation-play-state:paused]">
                {[
                  ...[
                    "Retail",
                    "FinTech",
                    "Healthcare",
                    "Media",
                    "Enterprise SaaS",
                    "EdTech",
                    "Logistics",
                    "E-commerce",
                    "Enterprise IT",
                    "Telecommunications",
                  ],
                  ...[
                    "Retail",
                    "FinTech",
                    "Healthcare",
                    "Media",
                    "Enterprise SaaS",
                    "EdTech",
                    "Logistics",
                    "E-commerce",
                    "Enterprise IT",
                    "Telecommunications",
                  ],
                ].map((item, i) => (
                  <div
                    key={i}
                    className="px-5 py-2 text-sm text-gray-200 backdrop-blur-sm hover:text-white/100 cursor-pointer transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WhoWeWorkWith />

        {/* ── 3. STATS ──────────────────────────────────────────────────────── */}
        <section className="bg-slate-50 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 100} direction="up">
                  <div className="stat-card text-center p-4 rounded-xl">
                    <div className="text-4xl font-bold stat-number mb-2">
                      <AnimatedNumber
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. SERVICES ───────────────────────────────────────────────────── 
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Core Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive technology solutions tailored for enterprise
                  success
                </p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={index} delay={index * 120} direction="up">
                    <div className="service-card bg-white border border-gray-200 rounded-xl p-8">
                      <div
                        className="service-icon w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6"
                        style={{ transition: "box-shadow 0.3s ease" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.boxShadow =
                            "0 8px 24px rgba(6,182,212,0.4)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.boxShadow = "none")
                        }
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <Link
                        to="/services"
                        className="learn-more inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>*/}

        {/* ── 5. INDUSTRIES ─────────────────────────────────────────────────── */}
        <section className="bg-slate-900 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT: heading + list + CTA */}
              <FadeIn direction="left">
                <div>
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
                    Vertical expertise
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                    Deep Industry
                    <br />
                    <span
                      style={{
                        background:
                          "linear-gradient(90deg, #22d3ee, #60a5fa, #22d3ee)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        animation: "shimmer 3s linear infinite",
                      }}
                    >
                      Knowledge
                    </span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-10 max-w-md leading-relaxed">
                    Technology solutions tailored to the regulatory,
                    operational, and scale-driven demands of each sector.
                  </p>

                  {/* Industry pill list */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {industries.map((industry, i) => (
                      <FadeIn
                        key={industry + i}
                        delay={i * 50}
                        direction="none"
                      >
                        <div
                          className="industry-pill flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm text-sm font-medium cursor-default"
                          style={{
                            transition:
                              "background 0.25s ease, border-color 0.25s ease, transform 0.25s ease, color 0.25s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(6,182,212,0.18)";
                            e.currentTarget.style.borderColor =
                              "rgba(6,182,212,0.6)";
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                            e.currentTarget.style.color = "#22d3ee";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "";
                            e.currentTarget.style.borderColor = "";
                            e.currentTarget.style.transform = "";
                            e.currentTarget.style.color = "";
                          }}
                        >
                          <CheckCircle className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" />
                          {industry}
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                  {/* Mobile industry image grid — visible only on mobile */}
                  <div className="grid grid-cols-2 gap-3 mb-8 lg:hidden">
                    {[
                      {
                        img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&fm=jpg",
                        label: "E-commerce",
                      },
                      {
                        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&fm=jpg",
                        label: "Retail",
                      },
                      {
                        img: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&fm=jpg",
                        label: "Telecom",
                      },
                      {
                        img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&fm=jpg",
                        label: "BFSI & FinTech",
                      },
                      {
                        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&fm=jpg",
                        label: "Healthcare",
                      },
                      {
                        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&fm=jpg",
                        label: "SaaS & Tech",
                      },
                    ].map(({ img, label }, i) => (
                      <div
                        key={i}
                        className="relative rounded-xl overflow-hidden cursor-pointer group"
                        style={{ height: "100px" }}
                        onClick={(e) =>
                          e.currentTarget.classList.toggle("tapped")
                        }
                      >
                        <img
                          src={img}
                          alt={label}
                          className="w-full h-full object-cover brightness-50 transition-all duration-500 group-hover:brightness-75 group-[.tapped]:brightness-75 group-[.tapped]:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-[.tapped]:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-xs font-bold uppercase tracking-widest text-shadow">
                            {label}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-10" />
                        <span className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-semibold uppercase tracking-wide">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <FadeIn delay={300}>
                    <Link
                      to="/industries"
                      className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-medium"
                      style={{
                        transition:
                          "transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.04)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 24px rgba(6,182,212,0.35)";
                        e.currentTarget.style.filter = "brightness(1.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "";
                        e.currentTarget.style.boxShadow = "";
                        e.currentTarget.style.filter = "";
                      }}
                    >
                      View All Industries
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </FadeIn>
                </div>
              </FadeIn>

              {/* RIGHT: hex-grid image mosaic */}
              <FadeIn direction="right" delay={100}>
                <div className="hidden lg:block">
                  <div className="hex-grid-wrapper">
                    <style>{`
            .hex-grid-wrapper {
              --l: 140px;
              --hl: calc(0.5 * var(--l));
              --ri: calc(0.5 * 1.732 * var(--l));
              display: grid;
              grid-template-columns: repeat(6, var(--ri));
              grid-template-rows: repeat(3, var(--l));
              gap: var(--hl) 0;
              padding: var(--hl) 0;
              overflow: hidden;
              filter: drop-shadow(2px 2px 6px rgba(0,0,0,0.5));
            }
            @media (max-width: 1280px) {
              .hex-grid-wrapper {
                --l: 118px;
              }
            }
            .hex-cell {
              overflow: hidden;
              grid-column-end: span 2;
              margin: calc(-1 * var(--hl)) 0;
              transform: scale(0.94);
              clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
              position: relative;
            }
            .hex-cell:nth-of-type(5n + 1) {
              grid-column-start: 2;
            }
            .hex-cell img {
              width: 100%; height: 100%;
              object-fit: cover;
              display: block;
              transform: scale(1.2);
              filter: brightness(0.65);
              transition: transform 0.7s ease, filter 0.7s ease;
            }
            .hex-cell:hover img {
              transform: scale(1.35);
              filter: brightness(0.9);
            }
            .hex-cell .hex-label {
              position: absolute;
              inset: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 8px;
              pointer-events: none;
              opacity: 0;
              transition: opacity 0.4s ease;
            }
            .hex-cell:hover .hex-label {
              opacity: 1;
            }
            .hex-cell .hex-label span {
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.08em;
              color: #fff;
              text-shadow: 0 1px 4px rgba(0,0,0,0.8);
            }
          `}</style>

                    {[
                      {
                        img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=650&fm=jpg",
                        label: "E-commerce",
                      },
                      {
                        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=650&fm=jpg",
                        label: "Retail",
                      },
                      {
                        img: "https://images.unsplash.com/photo-1560472355-536de3962603?w=650&fm=jpg",
                        label: "Telecom",
                      },
                      {
                        img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=650&fm=jpg",
                        label: "BFSI & FinTech",
                      },
                      {
                        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=650&fm=jpg",
                        label: "Healthcare",
                      },
                      {
                        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=650&fm=jpg",
                        label: "SaaS & Tech",
                      },
                      {
                        img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=650&fm=jpg",
                        label: "Media",
                      },
                    ].map(({ img, label }, i) => (
                      <div key={i} className="hex-cell">
                        <img src={img} alt={label} loading="lazy" />
                        <div className="hex-label">
                          <span>{label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        {/* ── 6. WHY CHOOSE US ─────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Why Choose SJ Technolabs?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We combine deep technical expertise with industry best
                    practices to deliver solutions that drive real business
                    outcomes.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Architecting scalable, future-ready digital platforms",
                      "Enabling cloud transformation across AWS, Azure, and GCP",
                      "Embedding Agile delivery and DevOps for speed and reliability",
                      "Ensuring enterprise-grade security, compliance, and resilience",
                      "Integrating systems seamlessly through API-first architectures",
                      "Leveraging data and analytics to inform strategic decisions",
                      "Providing continuous support, monitoring, and optimization",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="why-item flex items-start space-x-3"
                        style={{
                          opacity: 0,
                          animation: `fade-up 0.5s ease ${300 + index * 80}ms forwards`,
                        }}
                      >
                        <CheckCircle
                          className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5"
                          style={{ transition: "transform 0.2s ease" }}
                        />
                        <span className="text-gray-700 transition-colors duration-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      to="/about"
                      className="learn-more inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg"
                    >
                      Learn More About Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={100}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzIwNzcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Team collaboration"
                    className="team-img rounded-2xl shadow-2xl w-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 7. CTA BOTTOM ────────────────────────────────────────────────── */}
        <section className="cta-bottom text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Digital Transformation?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your technology goals
              </p>
              <Link
                to="/contact"
                className="cta-bottom-btn inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-medium shadow-lg text-lg"
              >
                Talk to Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
