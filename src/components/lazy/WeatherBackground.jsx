"use client";
import React from "react";

const BG_MAP = {
  Clear: "linear-gradient(135deg, #A8E6FF 0%, #70CFFF 100%)",
  ClearNight: "linear-gradient(135deg,#081229 0%, #0b1b3a 100%)",
  Clouds: "linear-gradient(135deg,#cfd9df 0%, #9aa6b2 100%)",
  Rain: "linear-gradient(135deg,#4b6cb7 0%, #182848 100%)",
  Snow: "linear-gradient(135deg,#e6f0ff 0%, #cfe7ff 100%)",
  Fog: "linear-gradient(135deg,#d7d2cc 0%, #6b7b88 100%)",
};

export default function WeatherBackground({ condition = "Clear", isDay = true, children }) {
  let key = condition.toLowerCase();
  if (key.includes("cloud")) key = "Clouds";
  else if (key.includes("rain")) key = "Rain";
  else if (key.includes("snow")) key = "Snow";
  else if (key.includes("fog") || key.includes("mist")) key = "Fog";
  else if (key.includes("clear") && !isDay) key = "ClearNight";
  else key = "Clear";

  const gradient = BG_MAP[key] || BG_MAP.Clear;

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{ background: gradient }}
    >
      <div className="absolute inset-0 bg-black/30" />

      {key === "Rain" && <RainOverlay />}
      {key === "Snow" && <SnowOverlay />}
      {key === "ClearNight" && <StarsOverlay />}

      <div className="relative z-10 flex flex-col">{children}</div>

      <style jsx>{`
        .raindrop {
          position: absolute;
          top: -10vh;
          width: 2px;
          height: 20vh;
          background: rgba(255, 255, 255, 0.6);
          animation: fall linear infinite;
        }
        @keyframes fall {
          0% {
            transform: translateY(-10vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(120vh);
            opacity: 0;
          }
        }
        .snowflake {
          position: absolute;
          top: -5vh;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: white;
          opacity: 0.9;
          animation: snow linear infinite;
        }
        @keyframes snow {
          0% {
            transform: translateY(-5vh);
          }
          100% {
            transform: translateY(110vh);
          }
        }
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: white;
          animation: twinkle ease-in-out infinite;
        }
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}

function RainOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="raindrop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${0.7 + Math.random()}s`,
            animationDelay: `${Math.random()}s`,
          }}
        />
      ))}
    </div>
  );
}

function SnowOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

function StarsOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random()}s`,
          }}
        />
      ))}
    </div>
  );
}
