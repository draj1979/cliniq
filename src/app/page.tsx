import { Logo } from "@/components/Logo";
import { PatientInsight } from "@/components/PatientInsight";
import {
  Activity,
  ArrowRight,
  Book,
  Check,
  ChevronDown,
  ChevronRight,
  Play,
  Settings,
  Shield,
  X as XIcon,
} from "@/components/Icons";

const NAV = [
  { label: "Product", caret: true },
  { label: "Solutions", caret: true },
  { label: "Pricing", caret: false },
  { label: "Security", caret: false },
  { label: "Resources", caret: true },
];

const TRUSTED = [
  { name: "Riverside Medical", sub: "Group" },
  { name: "Mendoza Family Health", sub: "Clinic" },
  { name: "Brennan Cardiology", sub: "Associates" },
  { name: "Okafor Pediatrics", sub: "Partners" },
  { name: "Sato Endocrinology", sub: "Center" },
  { name: "Whitmore Clinic", sub: "Est. 1971" },
];

const FEATURES = [
  {
    n: "01 — Synthesis",
    title: "Every chart, read in seconds — not skimmed.",
    body: "Ask in plain English. ClinIQ reads the full longitudinal record, surfaces the trend across visits, the outlier lab, and the follow-up that never happened — not a one-line summary.",
  },
  {
    n: "02 — Documentation",
    title: "Notes that write themselves from the visit.",
    body: "Generate SOAP notes, summaries, and referrals in your style. Every line traces to the encounter, every value cites the source lab or vital. Edit inline, regenerate a section without losing the rest.",
  },
  {
    n: "03 — Safety",
    title: "Catches the interaction before you sign.",
    body: "Every order is checked against the active medication list, renal function, and allergies — not just a static drug-drug table. Contraindications and dosing flags surface inline.",
  },
];

const DETAIL_ITEMS = [
  {
    Icon: Activity,
    title: "Source-anchored insight",
    body: "Every finding links to the exact lab, vital, or note it was drawn from, on the date it was recorded. No black box.",
  },
  {
    Icon: Book,
    title: "Guideline-aware",
    body: "Maps recommendations to ADA, GOLD, KDIGO, and more. ClinIQ knows the difference between a current guideline and an old habit.",
  },
  {
    Icon: Settings,
    title: "Specialty-aware",
    body: "Trained on your specialty and templates — adopts your documentation conventions, problem framing, and note structure.",
  },
  {
    Icon: Shield,
    title: "Private by architecture",
    body: "Records, prompts, and outputs are siloed per patient and per practice. HIPAA-aligned by design, not by policy.",
  },
];

const TIERS = [
  {
    name: "Solo",
    price: "$129",
    per: "/ clinician / mo",
    desc: "For solo practitioners and 2–3 provider clinics.",
    features: [
      "Unlimited patients",
      "1 EHR integration",
      "Core guideline library",
      "Email support",
    ],
    cta: "Start 14-day trial",
    variant: "secondary" as const,
  },
  {
    name: "Practice",
    price: "$299",
    per: "/ clinician / mo",
    desc: "For group and multi-specialty practices up to 50 providers.",
    features: [
      "All specialty guideline libraries",
      "Specialty-tuned documentation",
      "Safety checks across the full med list",
      "Patient isolation & audit log",
      "Priority support, 2hr SLA",
    ],
    cta: "Request a demo",
    variant: "primary" as const,
    featured: true,
    pill: "Most chosen",
  },
  {
    name: "Health system",
    price: "Custom",
    per: "",
    desc: "For hospitals and integrated health systems.",
    features: [
      "Single-tenant deployment",
      "SSO, SCIM, role-based access",
      "EHR-native (Epic, Cerner) integration",
      "Custom retention & data residency",
      "Dedicated clinical solutions engineer",
    ],
    cta: "Talk to sales",
    variant: "dark" as const,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-bone text-fg2">
      {/* ═══ NAV ═══════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b border-transparent bg-bone/85 backdrop-blur-md" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:px-10">
          <Logo size={32} />
          <div className="hidden items-center gap-6 md:flex">
            {NAV.map((l) => (
              <span
                key={l.label}
                className="flex cursor-pointer items-center gap-1 text-[14px] text-fg2 transition-colors hover:text-fg1"
              >
                {l.label}
                {l.caret && <ChevronDown size={13} />}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="focus-ring rounded-[6px] px-3 py-2 text-[14px] text-fg2 transition-colors hover:bg-slate-50 hover:text-fg1">
              Sign in
            </button>
            <button
              className="focus-ring rounded-[6px] px-4 py-2 text-[14px] font-medium text-bone transition-colors"
              style={{ background: "var(--slate-700)" }}
            >
              Request a demo
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-columns" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--ember-500)" }} />
              For clinicians, by design
            </div>
            <h1
              className="t-display text-[44px] md:text-[60px] lg:text-[72px]"
              style={{ textWrap: "balance" }}
            >
              The <em>record</em>, the pattern,
              <br />
              and the <span className="t-mark">care</span>
              <br />
              your patients deserve.
            </h1>
            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.55] text-fg2 md:text-[18px]">
              ClinIQ reads the chart, surfaces the pattern across every visit, and drafts the note —
              leaving the diagnosis, where it belongs, with you.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] px-6 py-3.5 text-[15px] font-medium text-white transition-colors"
                style={{ background: "var(--ember-500)" }}
              >
                Request a demo
                <ArrowRight size={16} />
              </button>
              <button
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] border bg-white px-5 py-3.5 text-[15px] font-medium text-fg1 transition-colors hover:bg-slate-50"
                style={{ borderColor: "var(--border-strong)" }}
              >
                <Play size={12} />
                Watch the product tour
                <ChevronRight size={14} />
              </button>
              <span className="text-[13px] text-fg3">14-day trial · HIPAA-ready</span>
            </div>
          </div>

          <div className="relative">
            <PatientInsight />
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY ═══════════════════════════════════════ */}
      <section className="border-y bg-bone-50" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1240px] px-6 py-10 md:px-10">
          <div className="text-center text-[12px] tracking-[-0.005em] text-fg3">
            Trusted by clinicians at practices serving <span className="text-fg1 font-medium">1.2M patients</span>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {TRUSTED.map((f) => (
              <div key={f.name} className="flex items-baseline gap-2 opacity-70">
                <span
                  className="text-[18px] tracking-[-0.01em] text-fg1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-fg3">
                  {f.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">What ClinIQ does</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Three kinds of clinical work, returned to you as{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg1)" }}>finished thought.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            Synthesis that reads the whole chart. Documentation that cites the source. Safety checks
            that catch what a static table misses. Each surface is a judgment aid, not a feature list.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <article
              key={f.n}
              className="card-lift flex flex-col rounded-[14px] border bg-white p-7"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em]"
                style={{ color: "var(--teal-700)" }}
              >
                {f.n}
              </div>
              <h3
                className="mb-3 text-[20px] leading-[1.2] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                {f.title}
              </h3>
              <p className="mb-5 text-[14px] leading-[1.6] text-fg2">{f.body}</p>

              {/* Inline mini-visual per feature */}
              {i === 0 && (
                <div
                  className="mt-auto rounded-[10px] border p-4"
                  style={{ borderColor: "var(--border)", background: "var(--bone-50)" }}
                >
                  <div
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "var(--teal-700)" }}
                  >
                    + ClinIQ · 3.1s
                  </div>
                  <div className="text-[13px] leading-[1.45] text-fg1">
                    &ldquo;Across 28 encounters,{" "}
                    <span className="cite-chip">HbA1c</span> trended 6.8 → 7.9% despite
                    &gt;90% adherence…&rdquo;
                  </div>
                </div>
              )}
              {i === 1 && (
                <div
                  className="mt-auto rounded-[10px] border bg-white p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="text-[14px] leading-[1.55] text-fg1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Patient reports stable symptoms; exam notable for{" "}
                    <span className="hl-yellow">trace pedal edema, BP 148/92</span> on today&apos;s
                    vitals.
                    <sup
                      className="ml-0.5 inline-block rounded-[3px] px-1.5 align-super text-[9px] font-semibold text-white"
                      style={{ background: "var(--ember-500)", fontFamily: "var(--font-sans)" }}
                    >
                      7
                    </sup>
                  </div>
                </div>
              )}
              {i === 2 && (
                <div
                  className="mt-auto flex items-start gap-2.5 rounded-[10px] border p-4"
                  style={{
                    borderColor: "var(--ember-100)",
                    background: "var(--ember-50)",
                  }}
                >
                  <span
                    className="shrink-0"
                    style={{ color: "var(--ember-600)" }}
                  >
                    <XIcon size={16} />
                  </span>
                  <div>
                    <div
                      className="mb-1 text-[12px] font-semibold leading-tight"
                      style={{ color: "var(--ember-700)" }}
                    >
                      2 orders need review
                    </div>
                    <div
                      className="text-[11px] leading-[1.5]"
                      style={{ color: "var(--ember-600)" }}
                    >
                      Lisinopril + spironolactone raises hyperkalemia risk at eGFR 58.
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ═══ PRODUCT DETAIL — DARK ════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 py-24 md:grid-cols-[1fr_1.05fr] md:gap-16 md:px-10 md:py-32">
          <div>
            <span
              className="text-[12px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "var(--teal-300)" }}
            >
              Inside the workspace
            </span>
            <h2
              className="mt-4 text-[34px] md:text-[44px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
            >
              One patient, every{" "}
              <span style={{ fontStyle: "italic", color: "var(--teal-300)" }}>signal,</span>{" "}
              in context.
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.65]" style={{ color: "rgba(236,238,241,0.75)" }}>
              The workspace doesn&apos;t separate the chart from the note from the order. They&apos;re the
              same surface — because that&apos;s how a visit actually flows.
            </p>

            <div className="mt-9 grid gap-5">
              {DETAIL_ITEMS.map((d) => (
                <div key={d.title} className="flex gap-4">
                  <div
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px]"
                    style={{ background: "rgba(118,171,174,0.18)", color: "var(--teal-300)" }}
                  >
                    <d.Icon size={18} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[15px] font-semibold" style={{ color: "var(--fg-on-dark)" }}>
                      {d.title}
                    </h4>
                    <p className="text-[14px] leading-[1.55]" style={{ color: "rgba(236,238,241,0.7)" }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product shot */}
          <div
            className="overflow-hidden rounded-[14px] border bg-white text-fg2"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="flex items-center gap-1.5 border-b px-4 py-2.5"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
            </div>
            <div className="p-6 md:p-7">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
                <span
                  className="text-[14px] leading-none"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ember-500)", letterSpacing: 0, textTransform: "none" }}
                >
                  +
                </span>
                Endocrinology · Follow-up
              </div>
              <h4
                className="mb-3 text-[18px] leading-[1.3] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                R. Okafor · 58 F · Type 2 diabetes
              </h4>
              <p className="mb-4 text-[14px] leading-[1.6] text-fg2">
                ClinIQ surfaces that{" "}
                <span className="hl-yellow">
                  HbA1c has risen across three consecutive visits despite over 90% adherence
                </span>
                , suggesting therapeutic inertia rather than nonadherence.
              </p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["28 encounters", "2019–2026", "Last visit 12d ago"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-bone px-2 py-0.5 text-[10px] text-fg3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2 border-t pt-3" style={{ borderColor: "var(--border)" }}>
                {[
                  { n: "01", title: "HbA1c 7.9%", badge: "Above target", color: "#B07A1A", bg: "#FAF1DC", border: "rgba(176,122,26,0.25)" },
                  { n: "02", title: "eGFR 58 mL/min", badge: "Stable", color: "#2F8F6F", bg: "#E6F2EC", border: "rgba(47,143,111,0.25)" },
                ].map((r) => (
                  <div key={r.n} className="flex items-center gap-3 py-1.5">
                    <span
                      className="text-[10px] tracking-[0.05em] text-fg4"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.n}
                    </span>
                    <span
                      className="text-[14px] text-fg1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.title}
                    </span>
                    <span
                      className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        color: r.color,
                        background: r.bg,
                        borderColor: r.border,
                      }}
                    >
                      {r.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-[260px_1fr] md:gap-16">
          <div>
            <div
              className="mb-4 grid h-12 w-12 place-items-center rounded-full text-[14px] font-semibold text-white"
              style={{ background: "var(--slate-700)" }}
            >
              MO
            </div>
            <div className="text-[15px] font-semibold text-fg1">Dr. Maya Okonkwo</div>
            <div className="text-[13px] text-fg3">Internal Medicine</div>
            <div className="text-[13px]" style={{ color: "var(--teal-700)" }}>
              Riverside Medical Group
            </div>
          </div>
          <p
            className="text-[24px] leading-[1.45] md:text-[28px]"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", letterSpacing: "-0.005em", textWrap: "pretty" }}
          >
            I used to spend the first ten minutes of every visit reconstructing the chart.
            ClinIQ hands me the trend, the gaps, and the last specialist&apos;s note before the
            patient sits down — and tells me which lab changed the picture. That&apos;s the part
            the EHR never did.
          </p>
        </div>
      </section>

      {/* ═══ PRICING ═══════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1240px] border-t px-6 py-24 md:px-10 md:py-32"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">Pricing</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Plans built around{" "}
            <span style={{ fontStyle: "italic" }}>how clinics practice,</span>{" "}
            not seats.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            All tiers include unlimited patients, EHR sync, and HIPAA / SOC&nbsp;2 Type&nbsp;II controls.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => {
            const featured = t.featured;
            return (
              <div
                key={t.name}
                className="card-lift relative flex flex-col rounded-[14px] border bg-white p-7 md:p-8"
                style={{
                  borderColor: featured ? "var(--slate-700)" : "var(--border)",
                  boxShadow: featured
                    ? "0 12px 32px rgba(20,24,29,0.10), 0 2px 6px rgba(20,24,29,0.04)"
                    : undefined,
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-[14px] font-semibold tracking-[-0.005em] text-fg1">
                    {t.name}
                  </span>
                  {t.pill && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white"
                      style={{ background: "var(--ember-500)" }}
                    >
                      {t.pill}
                    </span>
                  )}
                </div>
                <div className="mb-3 flex items-baseline gap-2">
                  <span
                    className="text-[44px] tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", lineHeight: 1 }}
                  >
                    {t.price}
                  </span>
                  {t.per && (
                    <span className="text-[13px] text-fg3">{t.per}</span>
                  )}
                </div>
                <p className="mb-6 text-[14px] leading-[1.55] text-fg2">{t.desc}</p>
                <ul className="mb-7 space-y-2.5 text-[14px] text-fg2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span style={{ color: "var(--teal-700)" }} className="mt-1 shrink-0">
                        <Check size={14} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`focus-ring mt-auto rounded-[8px] px-5 py-3 text-[14px] font-medium transition-colors`}
                  style={
                    t.variant === "primary"
                      ? { background: "var(--ember-500)", color: "white" }
                      : t.variant === "dark"
                        ? { background: "var(--slate-700)", color: "var(--bone)" }
                        : {
                            background: "white",
                            color: "var(--fg1)",
                            border: "1px solid var(--border-strong)",
                          }
                  }
                >
                  {t.cta}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══════════════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2
            className="mx-auto max-w-[760px] text-[44px] md:text-[64px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.05, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Give every patient your full{" "}
            <span style={{ fontStyle: "italic", color: "var(--ember-500)" }}>attention.</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55]"
            style={{ color: "rgba(236,238,241,0.7)" }}
          >
            14-day trial. No card required. Connects to your existing EHR.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              className="focus-ring inline-flex items-center gap-2 rounded-[8px] px-7 py-4 text-[15px] font-medium text-white"
              style={{ background: "var(--ember-500)" }}
            >
              Request a demo
              <ArrowRight size={16} />
            </button>
            <button
              className="focus-ring inline-flex items-center gap-2 rounded-[8px] border px-6 py-4 text-[15px] font-medium"
              style={{
                borderColor: "rgba(236,238,241,0.25)",
                color: "var(--fg-on-dark)",
              }}
            >
              Start a trial
            </button>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════════════ */}
      <footer
        className="border-t"
        style={{ background: "var(--slate-950)", color: "var(--fg-on-dark)", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] md:px-10">
          <div>
            <Logo size={28} inverse />
            <p className="mt-4 max-w-[300px] text-[13px] leading-[1.6]" style={{ color: "rgba(236,238,241,0.55)" }}>
              An AI clinical copilot built for the way doctors actually review, document, and decide.
            </p>
          </div>
          {[
            { h: "Product", items: ["Synthesis", "Documentation", "Safety checks", "Integrations", "Changelog"] },
            { h: "Solutions", items: ["Primary care", "Cardiology", "Endocrinology", "Pediatrics", "Hospital medicine"] },
            { h: "Company", items: ["About", "Customers", "Careers", "Press", "Contact"] },
            { h: "Resources", items: ["Documentation", "Security", "Trust center", "HIPAA", "API"] },
          ].map((col) => (
            <div key={col.h}>
              <div
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: "rgba(236,238,241,0.5)" }}
              >
                {col.h}
              </div>
              <ul className="space-y-2 text-[13px]">
                {col.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="transition-colors"
                      style={{ color: "rgba(236,238,241,0.78)" }}
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-3 px-6 py-5 text-[12px] md:flex-row md:items-center md:px-10" style={{ color: "rgba(236,238,241,0.5)" }}>
            <span>© {new Date().getFullYear()} ClinIQ, Inc. · ClinIQ supports clinical decisions and does not replace professional medical judgment.</span>
            <div className="flex gap-5">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">BAA</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
