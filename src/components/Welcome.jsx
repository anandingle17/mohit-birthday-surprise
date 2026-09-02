import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift, Heart, Stars } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const Welcome = ({ onNext, onStartMusic }) => {
  const { welcome } = birthdayConfig;

  const handleStart = () => {
    onStartMusic();
    onNext();
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Floating Star Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple-500/30 mb-8"
      >
        <Sparkles className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
        <span className="text-sm font-medium tracking-wide text-purple-200/90">A Cinematic Birthday Story</span>
        <Stars className="w-4 h-4 text-pink-400" />
      </motion.div>

      {/* Main Teaser Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight mb-6 text-glow-purple"
      >
        {welcome.teaser}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-lg sm:text-2xl text-purple-200/80 max-w-xl mb-12 font-light leading-relaxed"
      >
        {welcome.subtitle}
      </motion.p>

      {/* Animated Glowing Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative group"
      >
        {/* Glow Aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 group-hover:blur-xl animate-pulse" />
        
        <button
          onClick={handleStart}
          className="relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg sm:text-xl rounded-2xl shadow-2xl flex items-center gap-3 transition-all duration-300 transform group-hover:scale-105 active:scale-95 border border-purple-400/30 cursor-pointer"
        >
          <Gift className="w-6 h-6 text-pink-200 animate-bounce" />
          <span>{welcome.buttonText}</span>
          <Heart className="w-5 h-5 text-pink-300 fill-pink-400/50" />
        </button>
      </motion.div>

      {/* Subtext info */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="mt-12 text-xs sm:text-sm text-gray-500 flex items-center gap-2"
      >
        <span>Turn up your sound for the best experience</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
      </motion.p>
    </div>
  );
};

export default Welcome;
