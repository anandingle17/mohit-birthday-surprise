import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import Welcome from '../components/Welcome';
import GiftBox from '../components/GiftBox';
import BirthdayMessage from '../components/BirthdayMessage';
import Countdown from '../components/Countdown';
import Memories from '../components/Memories';
import Letter from '../components/Letter';
import FinalSurprise from '../components/FinalSurprise';
import MusicPlayer from '../components/MusicPlayer';

const Birthday = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [musicStarted, setMusicStarted] = useState(false);

  const steps = birthdayConfig.steps;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGoToStep = (index) => {
    setCurrentStep(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartMusic = () => {
    setMusicStarted(true);
  };

  const handleReplay = () => {
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#070711] text-gray-100 flex flex-col justify-between overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Background Floating Particle Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-900/10 rounded-full blur-[140px]" />
      </div>

      {/* Top Header / Progress Indicator Bar */}
      <header className="relative z-20 w-full max-w-5xl mx-auto px-4 py-4 sm:py-6">
        <div className="glass-panel px-4 py-3 rounded-2xl border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          {/* Logo / Title */}
          <div className="flex items-center gap-2 font-bold font-heading text-lg text-white">
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500/50 animate-pulse" />
            <span>Mohit's Surprise 🎂</span>
          </div>

          {/* Story Progress Indicator */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
            {steps.map((step, idx) => {
              const isActive = currentStep === idx;
              const isPassed = currentStep > idx;

              return (
                <button
                  key={step.id}
                  onClick={() => handleGoToStep(idx)}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md scale-105'
                      : isPassed
                      ? 'bg-purple-950/60 text-purple-300 border border-purple-800/40 hover:bg-purple-900/50'
                      : 'bg-gray-900/50 text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="hidden md:inline">{step.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Render Area with Animated Step Transitions */}
      <main className="relative z-10 flex-grow max-w-6xl w-full mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {currentStep === 0 && (
              <Welcome onNext={handleNext} onStartMusic={handleStartMusic} />
            )}

            {currentStep === 1 && (
              <GiftBox onNext={handleNext} />
            )}

            {currentStep === 2 && (
              <div className="space-y-12">
                <BirthdayMessage />
                <Countdown />
              </div>
            )}

            {currentStep === 3 && (
              <Memories />
            )}

            {currentStep === 4 && (
              <Letter />
            )}

            {currentStep === 5 && (
              <FinalSurprise onReplay={handleReplay} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Story Navigation Controls (Prev / Next) */}
      <footer className="relative z-20 w-full max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {currentStep > 0 ? (
            <button
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-xl glass-card hover:bg-purple-900/40 text-purple-200 font-semibold text-sm flex items-center gap-2 border border-white/10 transition duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < steps.length - 1 && currentStep !== 0 && currentStep !== 1 && (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg transition duration-200 transform hover:scale-105 cursor-pointer ml-auto"
            >
              <span>Continue Story</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </footer>

      {/* Background Floating Music Controller */}
      <MusicPlayer autoPlayTrigger={musicStarted} />
    </div>
  );
};

export default Birthday;
