'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, X } from 'lucide-react';

// Custom Modal Component
function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        {children}
      </div>
    </div>
  );
}

// Custom Button Component
function Button({ children, onClick, className = '', variant = 'default', size = 'default' }) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    icon: 'h-10 w-10',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export function VideoPlayer({
  videoSrc,
  thumbnailSrc,
  title,
  description,
  width = 640,
  height = 360,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = e => {
    const time = Number.parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleModalClose = () => {
    setIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Thumbnail */}
      <div
        className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg"
        style={{ width, height }}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={thumbnailSrc || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/50 rounded-full p-4 group-hover:bg-black/70 transition-colors">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-white font-semibold text-sm line-clamp-2">{title}</h3>
          {description && <p className="text-white/80 text-xs mt-1 line-clamp-1">{description}</p>}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <div ref={containerRef} className="relative w-full bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            className="w-full aspect-video"
            src={videoSrc}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            preload="metadata"
          />

          {/* Custom Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${
                    (currentTime / duration) * 100
                  }%, rgba(255,255,255,0.3) ${
                    (currentTime / duration) * 100
                  }%, rgba(255,255,255,0.3) 100%)`,
                }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center gap-3 text-white">
              <Button
                variant="ghost"
                size="icon"
                onClick={togglePlay}
                className="hover:bg-white/20 text-white"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-white" />
                ) : (
                  <Play className="w-5 h-5 fill-white" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="hover:bg-white/20 text-white"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>

              <span className="text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <div className="ml-auto">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullscreen}
                  className="hover:bg-white/20 text-white"
                >
                  {isFullscreen ? (
                    <Minimize className="w-5 h-5" />
                  ) : (
                    <Maximize className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
            <h2 className="text-white text-lg font-semibold">{title}</h2>
            {description && <p className="text-white/80 text-sm mt-1">{description}</p>}
          </div>
        </div>
      </Modal>
    </>
  );
}
