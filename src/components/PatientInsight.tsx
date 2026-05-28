/**
 * Hero visual — a window-chromed mock of a ClinIQ patient summary,
 * showing the kind of output a clinician sees: a longitudinal trend
 * read across encounters, a source-anchored finding, and a list of
 * active items with review-status badges.
 */
export function PatientInsight() {
  return (
    <div
      className="relative overflow-hidden rounded-[14px] border bg-white"
      style={{
        borderColor: "var(--border)",
        boxShadow:
          "0 12px 32px rgba(20,24,29,0.10), 0 2px 6px rgba(20,24,29,0.04)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-1.5 border-b px-4 py-2.5"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span
          className="ml-3 text-[11px] tracking-[-0.01em] text-fg3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          app.cliniq.com/p/iyer-r
        </span>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
          <span
            className="text-[16px] leading-none"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ember-500)", letterSpacing: 0, textTransform: "none" }}
          >
            +
          </span>
          <span>ClinIQ</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>3.1s</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>28 encounters</span>
        </div>

        <h3
          className="mb-3 text-[19px] leading-[1.3] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
        >
          Rising HbA1c despite adherence — consider intensifying therapy.
        </h3>

        <p className="mb-5 text-[14px] leading-[1.55] text-fg2">
          Across the last three visits, <span className="cite-chip">HbA1c</span> climbed
          6.8 → 7.9% while documented adherence stayed above 90%. The pattern points to
          therapeutic inertia rather than nonadherence.
        </p>

        {/* Finding rows */}
        <div
          className="space-y-2 border-t pt-4"
          style={{ borderColor: "var(--border)" }}
        >
          <FindingRow
            n="01"
            title="Metformin 1000mg BID"
            value="adherent"
            status="stable"
          />
          <FindingRow
            n="02"
            title="eGFR"
            value="58 mL/min"
            status="monitor"
          />
          <FindingRow
            n="03"
            title="Lisinopril · K⁺ 5.3"
            value="hyperkalemia risk"
            status="review"
          />
        </div>
      </div>
    </div>
  );
}

function FindingRow({
  n,
  title,
  value,
  status,
}: {
  n: string;
  title: string;
  value: string;
  status: "stable" | "monitor" | "review";
}) {
  const badge = {
    stable: {
      label: "Stable",
      color: "#2F8F6F",
      bg: "#E6F2EC",
      border: "rgba(47,143,111,0.25)",
    },
    monitor: {
      label: "Monitor",
      color: "#B07A1A",
      bg: "#FAF1DC",
      border: "rgba(176,122,26,0.25)",
    },
    review: {
      label: "Review",
      color: "var(--ember-700)",
      bg: "var(--ember-50)",
      border: "rgba(197,61,20,0.25)",
    },
  }[status];
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span
        className="text-[10px] tracking-[0.05em] text-fg4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {n}
      </span>
      <span
        className="text-[14px] tracking-[-0.005em] text-fg1"
        style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
      >
        {title}
      </span>
      <span
        className="text-[11px] text-fg3"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {value}
      </span>
      <span
        className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
        style={{
          color: badge.color,
          background: badge.bg,
          borderColor: badge.border,
        }}
      >
        {badge.label}
      </span>
    </div>
  );
}
