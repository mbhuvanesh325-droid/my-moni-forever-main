import { Heart } from "lucide-react";

export function FloatingHearts({ count = 18 }: { count?: number }) {
  const hearts = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const dur = 7 + Math.random() * 9;
        const size = 14 + Math.random() * 28;
        const opacity = 0.5 + Math.random() * 0.5;
        const drift = (Math.random() - 0.5) * 80;
        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              bottom: 0,
              animation: `riseDrift ${dur}s linear infinite`,
              animationDelay: `${delay}s`,
              opacity,
              ['--drift' as string]: `${drift}px`,
            }}
          >
            <Heart
              fill="currentColor"
              style={{
                width: size,
                height: size,
                color: "oklch(0.55 0.24 300)",
                filter: "drop-shadow(0 0 10px rgba(168,85,247,0.7))",
                animation: "heartBeat 1.2s ease-in-out infinite",
              }}
            />
          </span>
        );
      })}
    </div>
  );
}
