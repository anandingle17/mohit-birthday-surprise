import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const MusicPlayer = ({ autoPlayTrigger }) => {
  const { music } = birthdayConfig;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Trigger play when autoPlayTrigger changes (e.g. when user clicks Open Surprise)
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying && !hasError) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio autoplay prevented or file missing:", err);
      });
    }
  }, [autoPlayTrigger, hasError, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setHasError(true);
      });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <audio
        ref={audioRef}
        src={music.path}
        loop
        onError={() => setHasError(true)}
      />

      {/* Floating Audio Controller */}
      <div className="glass-card px-4 py-2.5 rounded-full border border-purple-500/30 flex items-center gap-3 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-full ${isPlaying ? 'bg-pink-500/20 text-pink-400 animate-pulse' : 'bg-gray-800 text-gray-400'}`}>
            <Music className="w-4 h-4" />
          </div>
          <div className="hidden sm:block text-left pr-2">
            <p className="text-xs font-semibold text-white leading-tight">{music.title}</p>
            <p className="text-[10px] text-purple-300/70">{music.artist}</p>
          </div>
        </div>

        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          disabled={hasError}
          title={isPlaying ? "Pause Music" : "Play Music"}
          className="p-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white transition duration-200 cursor-pointer disabled:opacity-50"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        {/* Mute button */}
        <button
          onClick={toggleMute}
          disabled={hasError}
          title={isMuted ? "Unmute" : "Mute"}
          className="p-2 rounded-full bg-purple-900/50 hover:bg-purple-800 text-purple-200 transition duration-200 cursor-pointer disabled:opacity-50"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {hasError && (
          <span className="text-[10px] text-amber-400/80 pr-1">Add MP3 file</span>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
