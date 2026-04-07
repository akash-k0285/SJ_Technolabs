import { Link } from "react-router-dom";
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
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

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

// Leadership team — replace placeholders with real data when ready
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
    linkedin: "#", // replace with real URL
    placeholder: true,
  },
  {
    initials: "CTO",
    name: "Chief Technology Officer",
    title: "Chief Technology Officer",
    bio: "Architect of large-scale multi-cloud platforms. Previously led cloud-native engineering at a global systems integrator with presence in 20+ countries.",
    expertise: ["Cloud Architecture", "DevOps", "Microservices"],
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

// ─── COLOUR HELPERS ───────────────────────────────────────────────────────────

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

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export function About() {
  return (
    <div className="bg-white">
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-gray-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
              Adobe Experience Cloud Partner · Est. 2009
            </div> */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About SJ Technolabs
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A specialised technology consulting firm helping mid-to-large
              enterprises scale Adobe Experience Cloud solutions with secure,
              high-performance architecture
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. STATS STRIP ──────────────────────────────────────────────────── */}
      {/* <section className="border-b border-gray-100 py-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── 3. WHO WE ARE ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  SJ Technolabs is a premier software consulting firm with over
                  15 years of experience delivering innovative technology
                  solutions to enterprises worldwide. We specialise in Adobe
                  Experience Cloud implementations, multi-cloud architectures,
                  and custom application development.
                </p>
                <p>
                  Our team of certified experts combines deep technical
                  knowledge with industry best practices to help organisations
                  achieve their digital transformation goals. We pride ourselves
                  on building long-term partnerships with our clients,
                  understanding their unique challenges, and delivering
                  solutions that drive measurable business outcomes.
                </p>
                <p>
                  With delivery centres across the globe and a team of 300+
                  professionals, we serve clients across diverse industries
                  including e-commerce, retail, telecommunications, banking,
                  healthcare, and manufacturing.
                </p>
              </div>

              {/* Quick trust signals */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Adobe Certified Partner",
                  "AWS Partner Network",
                  "Zero-downtime migrations",
                  "SLA-backed delivery",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neSUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzIxNzM2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern office"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MISSION & VISION ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower enterprises with scalable, secure, and
                high-performance digital platforms that drive innovation,
                enhance customer experiences, and accelerate business growth
                through cutting-edge technology solutions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the most trusted global technology partner for enterprises
                seeking digital transformation, recognised for our technical
                excellence, innovation, and commitment to delivering exceptional
                value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. LEADERSHIP TEAM ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            {/* <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
              The team
            </span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership & Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced technologists and delivery leaders who have worked
              inside the enterprises they now serve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((person, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Avatar */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold text-lg">
                    {person.initials}
                  </div>
                  {person.placeholder ? (
                    <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full font-medium">
                      Profile coming soon
                    </span>
                  ) : (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                  {person.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {person.title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  {person.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2">
                  {person.expertise.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LinkedIn when real profile exists */}
                {!person.placeholder && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <Linkedin className="h-4 w-4" />
                    View LinkedIn profile
                  </a>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Full team profiles will be published shortly. In the meantime,{" "}
            <Link to="/contact" className="text-blue-600 hover:underline">
              reach out to speak with our team directly.
            </Link>
          </p>
        </div>
      </section>

      {/* ── 6. CORE VALUES ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. PARTNERSHIPS ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            {/* <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
              Technology alliances
            </span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Official partnerships with the platforms we implement — giving our
              clients access to partner-level support, early-access features,
              and co-delivery resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((p, i) => {
              const c = colorMap[p.color];
              return (
                <div
                  key={i}
                  className={`rounded-2xl border ${c.border} ${c.bg} p-6 flex flex-col`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl font-bold text-sm mb-4 ${c.badge}`}
                  >
                    {p.badge}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed flex-1">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. EXPERTISE ────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Deep domain knowledge across multiple technology stacks and
              industries
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Adobe Certified",
                  body: "Certified experts in AEM, Analytics, Target, Campaign, and Adobe Journey Optimizer",
                },
                {
                  title: "Cloud Partners",
                  body: "Official partners with AWS, Microsoft Azure, and Google Cloud Platform",
                },
                {
                  title: "Agile & DevOps",
                  body: "Expert implementation of CI/CD pipelines and agile methodologies",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. COMPLIANCE & CREDIBILITY ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            {/* <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 block">
              Security & compliance
            </span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise clients require more than technical skill — they
              require demonstrable security practices, audit-readiness, and
              certified delivery teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              const statusStyles =
                cert.statusColor === "emerald"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-amber-50 text-amber-700 border border-amber-200";
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <Icon
                    className={`h-8 w-8 mb-4 ${
                      cert.statusColor === "emerald"
                        ? "text-emerald-500"
                        : "text-amber-500"
                    }`}
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
            })}
          </div>

          <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-2xl mx-auto text-center">
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
              to="/contact?subject=security"
              className="inline-flex items-center gap-2 text-sm bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg transition-colors font-medium"
            >
              Request security documentation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            {/* <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3 block">
              Client voices
            </span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What our clients say
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
      </section>

      {/* ── 11. CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-full" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to partner with us?
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
              Let's start with a free 45-minute architecture review — no
              obligation, no sales pressure. Just an honest assessment of where
              we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                <Calendar className="h-5 w-5" />
                Book a Free Consultation
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
