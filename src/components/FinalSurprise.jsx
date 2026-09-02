import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Trophy, RotateCcw, PartyPopper, Flame } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerFireworks, triggerGiftExplosion } from '../utils/confetti';

const FinalSurprise = ({ onReplay }) => {
  const { finalSurprise } = birthdayConfig;
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    triggerFireworks();
    setTimeout(() => {
      triggerGiftExplosion();
    }, 1500);
  };

  return (
    <section className="min-h-[85vh] py-12 px-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Background Animated Fireworks Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/30 via-pink-600/30 to-yellow-500/20 rounded-full blur-[160px] animate-pulse-glow" />
      </div>

      <AnimatePresence mode="wait">
        {!isRevealed ? (
          /* Step A: Dramatic Tease */
          <motion.div
            key="tease"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl max-w-2xl w-full border border-purple-500/30 glow-purple flex flex-col items-center"
          >
            <div className="p-4 rounded-full bg-purple-900/50 border border-purple-400/40 text-yellow-300 mb-6 animate-bounce">
              <Sparkles className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white mb-6 leading-tight">
              {finalSurprise.tease}
            </h2>

            <p className="text-lg text-purple-200/80 mb-8 max-w-md">
              Are you ready for the ultimate climax of your birthday surprise?
            </p>

            <button
              onClick={handleReveal}
              className="px-10 py-5 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-300 hover:to-purple-500 text-gray-950 font-black text-xl rounded-2xl shadow-2xl flex items-center gap-3 transform hover:scale-105 active:scale-95 transition-all duration-300 border border-yellow-200/50 cursor-pointer"
            >
              <PartyPopper className="w-6 h-6 text-gray-950" />
              <span>Reveal Final Surprise ✨</span>
            </button>
          </motion.div>
        ) : (
          /* Step B: The Massive Climax Reveal! */
          <motion.div
            key="climax"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="glass-panel p-8 sm:p-14 rounded-3xl max-w-4xl w-full border border-pink-500/40 glow-pink relative overflow-hidden"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 font-bold text-sm mb-8">
              <Trophy className="w-4 h-4" />
              <span>THE ULTIMATE CELEBRATION</span>
              <Flame className="w-4 h-4 text-orange-400" />
            </div>

            {/* Massive Climax Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-300 tracking-tight leading-tight mb-8 drop-shadow-2xl">
              {finalSurprise.headline}
            </h1>

            {/* Emotional Quote */}
            <p className="text-xl sm:text-3xl font-bold text-pink-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              "{finalSurprise.quote}"
            </p>

            {/* Birthday Wishes Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
              {finalSurprise.wishes.map((wish, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="glass-card p-5 rounded-2xl border border-white/10 text-purple-100 font-medium text-sm leading-relaxed flex items-start gap-3"
                >
                  <Heart className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <span>{wish}</span>
                </motion.div>
              ))}
            </div>

            {/* Replay & Confetti Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={triggerFireworks}
                className="w-full sm:w-auto px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white font-bold text-lg rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 border border-pink-300/30 cursor-pointer"
              >
                <PartyPopper className="w-5 h-5" />
                <span>More Fireworks! 🎆</span>
              </button>

              <button
                onClick={onReplay}
                className="w-full sm:w-auto px-8 py-4 bg-purple-900/50 hover:bg-purple-800/80 text-purple-200 font-semibold text-lg rounded-2xl border border-purple-400/30 flex items-center justify-center gap-2 transition-all transform hover:scale-105 cursor-pointer"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Replay Story 🔄</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FinalSurprise;
