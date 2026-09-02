import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerGiftExplosion } from '../utils/confetti';

const GiftBox = ({ onNext }) => {
  const { giftBox } = birthdayConfig;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    if (isOpen) return;
    setIsOpen(true);
    triggerGiftExplosion();

    // Transition smoothly after animation finishes
    setTimeout(() => {
      onNext();
    }, 2200);
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-gradient-to-tr from-purple-600/30 to-pink-600/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Header text */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-bold font-heading text-white mb-3 text-glow-purple"
      >
        {giftBox.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-base sm:text-lg text-purple-200/80 mb-10 max-w-md"
      >
        {giftBox.subtitle}
      </motion.p>

      {/* Gift Box Container */}
      <div className="relative my-8 cursor-pointer group" onClick={handleOpenGift}>
        {/* Glow behind box */}
        <div className={`absolute -inset-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-90 transition duration-500 ${isOpen ? 'animate-ping opacity-100 scale-150' : ''}`} />

        {/* 3D Visual CSS/SVG Gift Box */}
        <motion.div
          animate={isOpen ? { scale: [1, 1.15, 0.9, 1.2], rotate: [0, -5, 5, 0] } : { y: [0, -10, 0] }}
          transition={isOpen ? { duration: 0.8 } : { repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center"
        >
          {/* Gift Box Lid */}
          <motion.div
            animate={isOpen ? { y: -120, rotate: -25, opacity: 0 } : { y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 z-20 w-52 sm:w-64 h-14 sm:h-16 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 rounded-lg shadow-2xl border-b-4 border-purple-800/40 flex items-center justify-center"
          >
            {/* Ribbon Ribbon Bow */}
            <div className="absolute -top-6 w-12 sm:w-16 h-8 bg-yellow-400 rounded-full border-2 border-yellow-300 shadow-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-yellow-900 animate-spin" />
            </div>
            <div className="w-8 sm:w-10 h-full bg-yellow-400 opacity-90 shadow-md" />
          </motion.div>

          {/* Gift Box Body */}
          <div className="w-44 sm:w-56 h-36 sm:h-44 bg-gradient-to-b from-purple-700 via-purple-800 to-indigo-950 rounded-b-2xl shadow-2xl relative overflow-hidden border border-purple-400/30 flex justify-center">
            {/* Vertical Ribbon */}
            <div className="w-8 sm:w-10 h-full bg-yellow-400 opacity-90 shadow-inner" />
            {/* Horizontal Ribbon */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-8 sm:h-10 bg-yellow-400 opacity-90 shadow-inner" />

            {/* Glowing Light Explosion on Open */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-300 rounded-full blur-md z-30 pointer-events-none"
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Open Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onClick={handleOpenGift}
        disabled={isOpen}
        className="mt-6 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-pink-300/30 cursor-pointer disabled:opacity-50"
      >
        <Gift className="w-5 h-5" />
        <span>{isOpen ? "Unwrapping Surprise..." : giftBox.buttonText}</span>
        <Heart className="w-4 h-4 fill-pink-200" />
      </motion.button>
    </div>
  );
};

export default GiftBox;
