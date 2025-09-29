import React from "react";
import styles from "./SnowOverlay.module.css";

export default function SnowOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className={styles.snowflake}
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
