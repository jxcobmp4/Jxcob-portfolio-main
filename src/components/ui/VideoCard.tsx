"use client";

import { useRef, useState } from "react";

interface VideoCardProps {
  video: {
    id: number;
    src: string;
    title: string;
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)] flex-1 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={video.src}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        playsInline
        preload="metadata"
      />

      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center z-10 ${isHovered ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
      >
        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
          <svg
            className="w-6 h-6 text-[var(--color-text-primary)] ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}