import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-07-07T19:30:00+05:30").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  const units: Array<[string, number]> = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];
  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6">
      {units.map(([label, val], i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative rounded-lg border border-gold/40 bg-burgundy-deep/70 px-2 py-4 text-center backdrop-blur sm:px-6 sm:py-6"
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-gold/5 to-transparent" />
          <div className="relative font-display text-2xl font-semibold text-gold sm:text-5xl">
            {String(val).padStart(2, "0")}
          </div>
          <div className="relative mt-1 text-[10px] uppercase tracking-[0.25em] text-cream/70 sm:text-xs">
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
