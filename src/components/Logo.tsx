/**
 * ClinIQ wordmark — a slate-rounded square holding a "C" mark
 * (drawn as a clean arc) with an ember corner-tab, paired with
 * the wordmark "ClinIQ" (italic IQ) in display serif.
 */
export function Logo({ size = 32, inverse = false }: { size?: number; inverse?: boolean }) {
  const slate = inverse ? "var(--bone)" : "var(--slate-700)";
  const bone = inverse ? "var(--slate-700)" : "var(--bone)";
  const ember = "var(--ember-500)";
  const text = inverse ? "var(--bone)" : "var(--slate-700)";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="4" y="4" width="48" height="48" rx="8" fill={slate} />
        <path
          d="M37.2 18.8A13 13 0 1 0 37.2 37.2"
          fill="none"
          stroke={bone}
          strokeWidth="5.4"
          strokeLinecap="round"
        />
        <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill={ember} />
      </svg>
      <span
        className="text-[24px] tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-display)", color: text }}
      >
        Clin
        <em style={{ fontStyle: "italic" }}>IQ</em>
      </span>
    </div>
  );
}

/** Just the rounded mark — used as favicon-style accent. */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true">
      <rect x="4" y="4" width="48" height="48" rx="8" fill="var(--slate-700)" />
      <path
        d="M37.2 18.8A13 13 0 1 0 37.2 37.2"
        fill="none"
        stroke="var(--bone)"
        strokeWidth="5.4"
        strokeLinecap="round"
      />
      <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill="var(--ember-500)" />
    </svg>
  );
}
