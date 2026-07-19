import React from "react";

/** Deterministic candle chart (SVG), dark terminal styling. */
export function CandleChart({ seed = 7, width = "100%", height = 320 }) {
  const candles = React.useMemo(() => {
    let p = 100, s = seed;
    const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
    return Array.from({ length: 72 }, () => {
      const o = p, drift = (rnd() - 0.48) * 2.2;
      const c = o + drift, hi = Math.max(o, c) + rnd() * 0.9, lo = Math.min(o, c) - rnd() * 0.9;
      p = c;
      return { o, c, hi, lo };
    });
  }, [seed]);
  const min = Math.min(...candles.map((k) => k.lo)), max = Math.max(...candles.map((k) => k.hi));
  const W = 900, H = 300, pad = 6;
  const x = (i) => pad + (i * (W - pad * 2)) / candles.length;
  const y = (v) => pad + ((max - v) * (H - pad * 2)) / (max - min);
  const cw = ((W - pad * 2) / candles.length) * 0.55;
  return (
    <div style={{ position: "relative", width, height }}>
      <svg viewBox={"0 0 " + W + " " + H} preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="var(--border-hairline)" strokeWidth="1" />
        ))}
        {candles.map((k, i) => {
          const up = k.c >= k.o, col = up ? "var(--up)" : "var(--down)";
          return (
            <g key={i}>
              <line x1={x(i) + cw / 2} x2={x(i) + cw / 2} y1={y(k.hi)} y2={y(k.lo)} stroke={col} strokeWidth="1" />
              <rect x={x(i)} y={y(Math.max(k.o, k.c))} width={cw} height={Math.max(1, Math.abs(y(k.o) - y(k.c)))} fill={up ? "var(--up)" : "var(--down)"} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
