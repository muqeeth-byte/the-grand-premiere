import { motion } from "framer-motion";
import velvet from "@/assets/velvet-texture.jpg";

export function Curtain({ open }: { open: boolean }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open ? "-100%" : 0 }}
        transition={{ duration: 2.4, ease: [0.83, 0, 0.17, 1] }}
        className="absolute inset-y-0 left-0 w-1/2 shadow-2xl"
        style={{
          backgroundImage: `url(${velvet})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          boxShadow: "inset -40px 0 80px rgba(0,0,0,0.6)",
        }}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open ? "100%" : 0 }}
        transition={{ duration: 2.4, ease: [0.83, 0, 0.17, 1] }}
        className="absolute inset-y-0 right-0 w-1/2 shadow-2xl"
        style={{
          backgroundImage: `url(${velvet})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          boxShadow: "inset 40px 0 80px rgba(0,0,0,0.6)",
        }}
      />
      {/* gold valance */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: open ? "-100%" : 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: open ? 0.5 : 0 }}
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gold-dark via-gold to-transparent opacity-90"
      />
    </div>
  );
}
