"use client";
import Image from "next/image";

const aulas = [
  "ana_flavia", "andreia", "dani", "flavia", "guilherme", "leandro",
  "nani", "osires", "renata", "tom", "victor", "vinicius",
];

export default function CarrosselAulas() {
  const doubled = [...aulas, ...aulas];

  return (
    <div
      className="relative mt-16 overflow-hidden py-4"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex gap-4 w-max"
        style={{ animation: "scroll-left 40s linear infinite" }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
      >
        {doubled.map((nome, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 rounded-xl overflow-hidden"
            style={{ width: 300, height: 210, border: "1px solid #252525" }}
          >
            <Image
              src={`/aulas/${nome}.png`}
              alt={`Aula — ${nome.replace(/_/g, " ")}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
