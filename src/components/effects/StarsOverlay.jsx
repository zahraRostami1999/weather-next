import React from "react";
import styles from "./StarsOverlay.module.css";

export default function StarsOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className={styles.star}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
