import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PartyPopper, Heart, Star } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerConfetti } from '../utils/confetti';

const BirthdayMessage = () => {
  const { reveal } = birthdayConfig;

  useEffect(() => {
    // Trigger confetti burst on enter
    triggerConfetti();
  }, []);

  // Floating balloons colors
  const balloons = [
    { bg: 'bg-pink-500', left: '10%', delay: '0s' },
    { bg: 'bg-purple-500', left: '25%', delay: '2s' },
    { bg: 'bg-yellow-400', left: '75%', delay: '1s' },
    { bg: 'bg-indigo-500', left: '88%', delay: '3s' }
  ];

  return (
    <div className="relative py-12 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Floating balloons background */}
      {balloons.map((b, idx) => (
        <div
          key={idx}
          className={`balloon ${b.bg}`}
          style={{ left: b.left, animationDelay: b.delay }}
        />
      ))}

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, type: 'spring', bounce: 0.4 }}
        className="glass-panel p-8 sm:p-12 rounded-3xl max-w-4xl w-full border border-purple-500/30 relative overflow-hidden glow-purple"
      >
        {/* Glow background pill */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-[100px] pointer-events-none opacity-60" />

        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-300 font-semibold text-sm mb-6"
        >
          <PartyPopper className="w-4 h-4 animate-bounce" />
          <span>It's Celebration Time!</span>
          <Sparkles className="w-4 h-4" />
        </motion.div>

        {/* Huge Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 tracking-tight leading-tight mb-6 drop-shadow-lg"
        >
          {reveal.headline}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl sm:text-3xl font-semibold text-purple-200 mb-6 flex items-center justify-center gap-2"
        >
          <span>{reveal.subheading}</span>
        </motion.p>

        {/* Quote / Short Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-base sm:text-xl text-purple-200/80 italic max-w-2xl mx-auto font-light leading-relaxed"
        >
          "{reveal.quote}"
        </motion.p>

        {/* Floating Hearts Bar */}
        <div className="mt-8 flex justify-center gap-4 text-pink-400">
          <Heart className="w-6 h-6 fill-pink-500/40 animate-pulse" />
          <Star className="w-6 h-6 fill-yellow-400/40 animate-bounce" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-6 h-6 fill-purple-500/40 animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </motion.div>
    </div>
  );
};

export default BirthdayMessage;
