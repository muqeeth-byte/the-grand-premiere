import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Heart, Sparkles } from "lucide-react";
import { Curtain } from "@/components/Curtain";
import { Countdown } from "@/components/Countdown";
import { Gallery } from "@/components/Gallery";
import { MusicToggle } from "@/components/MusicToggle";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mariya & Arshad — Wedding Reception · 07 July 2026" },
      { name: "description", content: "A grand theatre of love. Join Mariya Jaweed & Mohammed Arshad for their wedding reception on 7 July 2026, Hyderabad." },
      { property: "og:title", content: "Mariya & Arshad — Wedding Reception" },
      { property: "og:description", content: "04 July 2026 · After Maghrib · Kings Palace, Gudimalkapur, Hyderabad" },
    ],
  }),
  component: Invitation,
});

function Divider() {
  return (
    <div className="my-8 flex items-center justify-center gap-4 text-gold/70">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
      <Sparkles className="h-4 w-4" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

function Invitation() {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (opened) {
      const t = setTimeout(() => setRevealed(true), 1800);
      return () => clearTimeout(t);
    }
  }, [opened]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Curtain open={opened} />
      <MusicToggle autoplayWhen={opened} />

      {/* Pre-open splash */}
      {!opened && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            onClick={() => setOpened(true)}
            className="group relative rounded-full border-2 border-gold/80 bg-burgundy-deep/40 px-10 py-4 font-display text-sm uppercase tracking-[0.4em] text-gold backdrop-blur-sm transition hover:bg-gold hover:text-burgundy-deep sm:text-base"
          >
            <span className="absolute -inset-1 rounded-full bg-gold/20 opacity-0 blur-xl transition group-hover:opacity-100" />
            <span className="relative">Raise the Curtain</span>
          </motion.button>
        </div>
      )}

      {/* HERO */}
      <section className="spotlight relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="mb-4 font-display text-xs uppercase tracking-[0.5em] text-gold/80 sm:text-sm">
            ✦  The Honour of Your Presence  ✦
          </div>

          <div className="relative py-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.9 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative font-script text-6xl leading-none text-gold-gradient sm:text-8xl md:text-9xl"
            >
              Mariya
            </motion.h1>
            <div className="relative my-2 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gold/60" />
              <Heart className="h-4 w-4 text-gold animate-shimmer" />
              <span className="font-display text-xs uppercase tracking-[0.4em] text-gold">&</span>
              <Heart className="h-4 w-4 text-gold animate-shimmer" />
              <span className="h-px w-12 bg-gold/60" />
            </div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.9 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative font-script text-6xl leading-none text-gold-gradient sm:text-8xl md:text-9xl"
            >
              Arshad
            </motion.h1>
          </div>

          <Divider />

          <p className="font-display text-sm uppercase tracking-[0.4em] text-cream/80 sm:text-base">
            invite you to a grand evening
          </p>
          <p className="mt-3 font-body text-xl italic text-cream/90 sm:text-2xl">
            "Two souls, one story — Act I begins."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 30 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 w-full max-w-2xl"
        >
          <p className="mb-4 text-center text-xs uppercase tracking-[0.4em] text-gold/80">
            The curtain rises in
          </p>
          <Countdown />
        </motion.div>
      </section>

      {/* RECEPTION */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-xs uppercase tracking-[0.5em] text-gold">Act II</p>
            <h2 className="mt-4 font-display text-4xl text-gold-gradient sm:text-6xl">Wedding Reception</h2>
            <Divider />
            <div className="grid gap-6 sm:grid-cols-3">
              <EventCard icon={<Calendar />} label="Date" value="04 July 2026" />
              <EventCard icon={<Clock />} label="Time" value="After Maghrib" />
              <EventCard icon={<MapPin />} label="Venue" value="Kings Palace" />
            </div>
            <p className="mt-8 font-body text-lg italic text-cream/90 sm:text-xl">
              12-2-706, Ushodaya Colony, Gudi Malkapur Rd,<br />Gudimalkapur, Hyderabad, Telangana 500008
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-10 overflow-hidden rounded-lg border border-gold/40 shadow-[0_0_40px_rgba(201,168,76,0.2)]">
            <iframe
              title="Wedding Reception Venue"
              src="https://maps.google.com/maps?q=Kings%20Palace%20Gudimalkapur%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[40%] contrast-[1.1] border-none"
            />
          </motion.div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Kings+Palace+Gudimalkapur+Hyderabad"
            target="_blank" rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-gold transition hover:bg-gold hover:text-burgundy-deep"
          >
            <MapPin className="h-4 w-4" /> Get Directions
          </a>
        </div>
      </section>

      {/* VALIMA */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-xs uppercase tracking-[0.5em] text-gold">Act I · Prelude</p>
            <h2 className="mt-4 font-display text-4xl text-gold-gradient sm:text-6xl">Valima</h2>
            <Divider />
            <div className="grid gap-6 sm:grid-cols-2">
              <EventCard icon={<Calendar />} label="Date" value="06 July 2026" />
              <EventCard icon={<MapPin />} label="Venue" value="Kashish Palace" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">Scenes from the Stage</p>
          <h2 className="mt-4 font-display text-4xl text-gold-gradient sm:text-6xl">Gallery</h2>
          <Divider />
          <Gallery />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative px-4 pb-12 pt-16 text-center">
        <Divider />
        <p className="font-script text-4xl text-gold-gradient sm:text-5xl">Mariya & Arshad</p>
        <p className="mt-3 text-xs uppercase tracking-[0.4em] text-cream/60">
          We await your presence · 07 · 07 · 2026
        </p>
      </footer>
    </main>
  );
}

function EventCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="group relative rounded-lg border border-gold/40 bg-burgundy-deep/60 p-6 backdrop-blur transition hover:border-gold hover:shadow-[0_0_30px_rgba(201,168,76,0.25)]">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold">
        {icon}
      </div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-cream/60">{label}</div>
      <div className="mt-2 font-display text-lg text-gold sm:text-xl">{value}</div>
    </div>
  );
}
