import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const images = [g1, g2, g3, g4];

export function Gallery() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % images.length);
  const prev = () => setI((p) => (p - 1 + images.length) % images.length);
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-gold/40 shadow-[0_0_60px_rgba(201,168,76,0.2)] sm:aspect-[16/10]">
        <AnimatePresence mode="wait">
          <motion.img
            key={i}
            src={images[i]}
            alt={`Gallery ${i + 1}`}
            loading="lazy"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy-deep/80 via-transparent to-burgundy-deep/30" />
      </div>
      <button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-gold/40 bg-burgundy-deep/70 p-2 text-gold backdrop-blur transition hover:bg-gold hover:text-burgundy-deep">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-gold/40 bg-burgundy-deep/70 p-2 text-gold backdrop-blur transition hover:bg-gold hover:text-burgundy-deep">
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-gold/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
