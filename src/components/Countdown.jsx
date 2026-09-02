import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const Countdown = () => {
  const { birthDate, name } = birthdayConfig;
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateAgeTime = () => {
      const birth = new Date(birthDate);
      const now = new Date();
      
      let diffMs = now - birth;
      if (diffMs < 0) diffMs = 0; // fallback if future date

      const secondsTotal = Math.floor(diffMs / 1000);
      const minutesTotal = Math.floor(secondsTotal / 60);
      const hoursTotal = Math.floor(minutesTotal / 60);
      const daysTotal = Math.floor(hoursTotal / 24);
      const years = Math.floor(daysTotal / 365.25);
      const remainingDays = Math.floor(daysTotal % 365.25);
      const hours = hoursTotal % 24;
      const minutes = minutesTotal % 60;
      const seconds = secondsTotal % 60;

      setTimeLeft({
        years,
        days: remainingDays,
        hours,
        minutes,
        seconds
      });
    };

    calculateAgeTime();
    const timer = setInterval(calculateAgeTime, 1000);

    return () => clearInterval(timer);
  }, [birthDate]);

  const timeBlocks = [
    { label: 'Years', value: timeLeft.years, color: 'from-purple-500 to-indigo-600' },
    { label: 'Days', value: timeLeft.days, color: 'from-pink-500 to-rose-600' },
    { label: 'Hours', value: timeLeft.hours, color: 'from-yellow-400 to-amber-600' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'from-emerald-400 to-teal-600' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'from-blue-500 to-cyan-600' }
  ];

  return (
    <div className="py-8 px-4 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/20 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-3 text-pink-400">
          <Calendar className="w-5 h-5" />
          <span className="text-sm font-semibold tracking-wider uppercase">Lifetime Milestone</span>
          <Sparkles className="w-4 h-4" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">
          Celebrating {name}'s Journey ✨
        </h3>

        <p className="text-sm sm:text-base text-purple-200/70 mb-8 max-w-lg mx-auto">
          Every second with you brings more joy, wisdom, and awesome memories. Here is how long you've been spreading smiles:
        </p>

        {/* Timer Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {timeBlocks.map((block, idx) => (
            <motion.div
              key={block.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300"
            >
              <div className={`text-3xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r ${block.color}`}>
                {String(block.value).padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-400 mt-1 uppercase tracking-wider">
                {block.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-xs text-purple-300/60">
          <Clock className="w-3.5 h-3.5" />
          <span>Configured birthdate: {birthDate}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown;
