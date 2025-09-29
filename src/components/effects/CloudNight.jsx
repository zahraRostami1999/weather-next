import React from "react";
import styles from "./CloudNight.module.css";

export default function CloudNight() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={styles.cloud}
          style={{
            top: `${Math.random() * 50 + 10}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${30 + Math.random() * 40}s`,
            animationDelay: `${Math.random() * 10}s`,
            transform: `scale(${0.8 + Math.random() * 1.5})`,
          }}
        />
      ))}
    </div>
  );
}
