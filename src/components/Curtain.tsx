import { motion } from "framer-motion";
import velvet from "@/assets/velvet-texture.jpg";

export function Curtain({ open }: { open: boolean }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      {/* Spotlight glow behind curtain */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(255,210,120,0.35) 0%, rgba(120,40,40,0.15) 40%, transparent 75%)",
        }}
      />

      {/* Single curtain rising up */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: open ? "-105%" : 0 }}
        transition={{ duration: 3.2, ease: [0.65, 0, 0.35, 1], delay: open ? 0.3 : 0 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${velvet})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 0 -60px 120px rgba(0,0,0,0.7), inset 0 40px 80px rgba(0,0,0,0.5)",
        }}
      >
        {/* Vertical pleat shading for realism */}
        <div
          className="absolute inset-0 opacity-60 mix-blend-multiply"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0) 28px, rgba(0,0,0,0) 56px, rgba(0,0,0,0.55) 84px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,180,150,0) 0px, rgba(255,180,150,0.18) 14px, rgba(255,180,150,0) 28px)",
          }}
        />

        {/* Gold valance at bottom edge of curtain */}
        <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-b from-gold-dark via-gold to-gold-light shadow-[0_4px_20px_rgba(201,168,76,0.6)]" />
      </motion.div>

      {/* Gold valance fixed at top */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: open ? "-100%" : 0 }}
        transition={{ duration: 2.4, ease: [0.65, 0, 0.35, 1], delay: open ? 1.4 : 0 }}
        className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gold-dark via-gold to-burgundy/40 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(201,168,76,0.95), rgba(120,40,40,0.4)), url(${velvet})`,
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
