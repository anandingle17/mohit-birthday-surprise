import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Image as ImageIcon } from 'lucide-react';
import PhotoGallery from './PhotoGallery';

const Memories = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-center">
      {/* Section Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4"
      >
        <Camera className="w-4 h-4 text-pink-400" />
        <span>Precious Moments</span>
        <Sparkles className="w-4 h-4 text-yellow-400" />
      </motion.div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-extrabold font-heading text-white mb-4 text-glow-purple"
      >
        Our Memories 📸
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-base sm:text-lg text-purple-200/70 max-w-xl mx-auto mb-12"
      >
        Looking back at the unforgettable times, endless laughs, and amazing memories we've created together.
      </motion.p>

      {/* Photo Gallery Grid */}
      <PhotoGallery />
    </section>
  );
};

export default Memories;
