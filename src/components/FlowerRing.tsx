import flower from "@/assets/flower.png";

type Props = {
  size: number;
  duration?: number;
};

// Four bouquet corners arranged around the photo, gently rotating
export function FlowerRing({ size, duration = 40 }: Props) {
  const corners = [
    { rotate: 0, top: -40, left: -40 },
    { rotate: 90, top: -40, right: -40 },
    { rotate: 270, bottom: -40, left: -40 },
    { rotate: 180, bottom: -40, right: -40 },
  ];
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: size,
        height: size,
        animation: `spin ${duration}s linear infinite`,
      }}
    >
      {corners.map((c, i) => (
        <img
          key={i}
          src={flower}
          alt=""
          aria-hidden
          className="absolute float-y"
          style={{
            width: size * 0.55,
            height: "auto",
            top: c.top,
            left: c.left,
            right: c.right,
            bottom: c.bottom,
            transform: `rotate(${c.rotate}deg)`,
            animationDelay: `${i * 0.4}s`,
            filter: "drop-shadow(0 6px 20px rgba(168,85,247,0.5))",
          }}
        />
      ))}
    </div>
  );
}
