interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: { mark: 30, font: 15, sub: 8 },
  md: { mark: 38, font: 18, sub: 9 },
  lg: { mark: 44, font: 21, sub: 10 },
};

export default function Logo({ size = "md" }: LogoProps) {
  const s = SIZES[size];
  return (
    <span className="flex items-center gap-2.5 select-none">
      {/* Monogram mark */}
      <span
        className="flex items-center justify-center rounded-xl font-black text-white shrink-0"
        style={{
          width: s.mark,
          height: s.mark,
          fontSize: s.mark * 0.5,
          background: "linear-gradient(135deg, #480E6A 0%, #7B2CBF 100%)",
          boxShadow: "0 4px 12px rgba(72,14,106,0.28)",
          letterSpacing: "-0.04em",
        }}
      >
        A
      </span>
      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className="font-extrabold tracking-tight"
          style={{ fontSize: s.font, color: "#1D2B64", lineHeight: 1.05 }}
        >
          Alvin Dio <span style={{ color: "#480E6A" }}>Prakosa</span>
        </span>
        <span
          className="font-semibold uppercase"
          style={{
            fontSize: s.sub,
            color: "#9B6BC4",
            letterSpacing: "0.22em",
            marginTop: 2,
          }}
        >
          Web &amp; Digital
        </span>
      </span>
    </span>
  );
}
