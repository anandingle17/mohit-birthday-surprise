import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart, Sparkles, RefreshCw } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const Letter = () => {
  const { letter } = birthdayConfig;
  const fullText = `${letter.greeting}\n\n${letter.paragraphs.join('\n\n')}\n\n${letter.closing}`;

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 35); // typing speed

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, fullText]);

  const handleRestartTyping = () => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTypingComplete(false);
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto text-center">
      {/* Section Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm font-medium mb-4"
      >
        <Mail className="w-4 h-4" />
        <span>Personal Note</span>
        <Sparkles className="w-4 h-4 text-yellow-400" />
      </motion.div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-extrabold font-heading text-white mb-8 text-glow-pink"
      >
        {letter.title}
      </motion.h2>

      {/* Handwritten Letter Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#171329] border border-pink-500/30 rounded-3xl p-8 sm:p-12 text-left shadow-2xl overflow-hidden backdrop-blur-xl"
      >
        {/* Decorative Wax Seal */}
        <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-red-600 via-pink-600 to-rose-700 shadow-xl flex items-center justify-center border-2 border-amber-300/60 transform rotate-12">
          <Heart className="w-7 h-7 text-amber-200 fill-amber-300/40" />
        </div>

        {/* Paper texture subtly */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-pink-500/5 pointer-events-none" />

        {/* Typed Text Display */}
        <div className="font-handwritten text-2xl sm:text-3xl md:text-4xl text-pink-100 leading-relaxed whitespace-pre-line tracking-wide relative z-10 min-h-[300px]">
          {displayedText}
          {!isTypingComplete && (
            <span className="inline-block w-2.5 h-8 bg-pink-400 ml-1 animate-pulse" />
          )}
        </div>

        {/* Re-type Button */}
        {isTypingComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 pt-6 border-t border-white/10 flex justify-end"
          >
            <button
              onClick={handleRestartTyping}
              className="px-4 py-2 rounded-xl bg-purple-900/40 hover:bg-purple-800/60 text-purple-200 text-sm font-medium flex items-center gap-2 border border-purple-400/20 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Read Message Again</span>
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Letter;
