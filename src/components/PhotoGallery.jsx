import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart, Camera } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const PhotoGallery = () => {
  const { photos } = birthdayConfig;
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="w-full">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {photos.map((photo, index) => {
          const imgSrc = failedImages[photo.id] ? photo.fallbackSrc : photo.src;

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPhoto(photo)}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 cursor-pointer group shadow-xl hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all duration-300 relative"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-purple-950/40">
                <img
                  src={imgSrc}
                  alt={photo.title}
                  onError={() => handleImageError(photo.id)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Hover Zoom Icon */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <ZoomIn className="w-4 h-4 text-purple-300" />
                </div>

                {/* Photo Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-900/60 backdrop-blur-md text-xs font-semibold text-purple-200 border border-purple-400/30 flex items-center gap-1.5">
                  <Camera className="w-3 h-3 text-pink-400" />
                  <span>Memory #{photo.id}</span>
                </div>

                {/* Card Title & Caption on image */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h4 className="text-xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                    {photo.title}
                  </h4>
                  <p className="text-sm text-gray-300 mt-1 line-clamp-2 font-light">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-gray-950 rounded-3xl border border-purple-500/40 overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-red-500 text-white transition-colors cursor-pointer border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Image */}
              <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={failedImages[selectedPhoto.id] ? selectedPhoto.fallbackSrc : selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-gradient-to-b from-gray-950 to-purple-950/80 text-left border-t border-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white font-heading">
                    {selectedPhoto.title}
                  </h3>
                  <Heart className="w-5 h-5 text-pink-500 fill-pink-500/50" />
                </div>
                <p className="text-base text-purple-200/80 mt-2">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
