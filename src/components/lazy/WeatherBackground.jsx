"use client";
import React from "react";
import StarsOverlay from "../effects/StarsOverlay";
import RainOverlay from "../effects/RainOverlay";
import SnowOverlay from "../effects/SnowOverlay";
import CloudNight from "../effects/CloudNight";

const BG_MAP = {
  Clear: "linear-gradient(135deg, #A8E6FF 0%, #70CFFF 100%)",
  ClearNight: "linear-gradient(135deg,#081229 0%, #0b1b3a 100%)",
  Clouds: "linear-gradient(135deg,#cfd9df 0%, #9aa6b2 100%)",
  CloudNight: "linear-gradient(135deg,#1a202c 0%, #2d3748 100%)",
  Rain: "linear-gradient(135deg,#4b6cb7 0%, #182848 100%)",
  Snow: "linear-gradient(135deg,#e6f0ff 0%, #cfe7ff 100%)",
  Fog: "linear-gradient(135deg,#d7d2cc 0%, #6b7b88 100%)",
};

export default function WeatherBackground({ condition = "Clear", isDay = true, children }) {
  let key = condition.toLowerCase();

  if (key.includes("cloud") && !isDay) key = "CloudNight";
  else if (key.includes("cloud")) key = "Clouds";
  else if (key.includes("rain")) key = "Rain";
  else if (key.includes("snow")) key = "Snow";
  else if (key.includes("fog") || key.includes("mist")) key = "Fog";
  else if (key.includes("clear") && !isDay) key = "ClearNight";
  else key = "Clear";

  const gradient = BG_MAP[key] || BG_MAP.Clear;

  return (
    <div className="min-h-screen w-full relative overflow-hidden" style={{ background: gradient }}>
      <div className="absolute inset-0 bg-black/30 z-0" />

      {key === "Rain" && <RainOverlay />}
      {key === "Snow" && <SnowOverlay />}
      {key === "ClearNight" && <StarsOverlay />}
      {key === "CloudNight" && <CloudNight />}

      <div className="relative z-10 flex flex-col">{children}</div>
    </div>
  );
}
