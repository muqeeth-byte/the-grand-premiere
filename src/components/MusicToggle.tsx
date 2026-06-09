import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

// Royalty-free ambient classical piano (public CDN)
const SRC = "https://cdn.pixabay.com/audio/2022/10/30/audio_347111d654.mp3";

export function MusicToggle({ autoplayWhen }: { autoplayWhen: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      const a = new Audio(SRC);
      a.loop = true;
      a.volume = 0.45;
      audioRef.current = a;
    }
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (autoplayWhen && audioRef.current && !playing) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [autoplayWhen, playing]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().then(() => setPlaying(true)).catch(() => {}); }
  };

  return (
    <motion.button
      onClick={toggle}
      aria-label={playing ? "Mute music" : "Play music"}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3 }}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-burgundy-deep/80 text-gold shadow-[0_0_30px_rgba(201,168,76,0.4)] backdrop-blur transition hover:bg-gold hover:text-burgundy-deep"
    >
      {playing ? (
        <Music className="h-5 w-5 animate-shimmer" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </motion.button>
  );
}
