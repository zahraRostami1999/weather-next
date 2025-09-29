import React from "react";
import styles from "./RainOverlay.module.css";

export default function RainOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className={styles.raindrop}
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
