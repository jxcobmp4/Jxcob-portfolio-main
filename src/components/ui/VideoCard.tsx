"use client";

import { useRef, useCallback, useEffect } from "react";
import { useVideoPlayer } from "@/contexts/VideoPlayerContext";

interface VideoCardProps {
  video: {
    id: number;
    src: string;
    poster: string;
    title: string;
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { registerVideo, unregisterVideo, playVideo, videoEnded, currentlyPlaying } = useVideoPlayer();
  const isPlaying = currentlyPlaying === video.id;

  useEffect(() => {
    if (videoRef.current) {
      registerVideo(video.id, videoRef.current);
    }
    return () => unregisterVideo(video.id);
  }, [video.id, registerVideo, unregisterVideo]);

  const handlePlay = useCallback(() => {
    if (!videoRef.current) return;
    playVideo(video.id);
    videoRef.current.play();
  }, [playVideo, video.id]);

  const handleEnded = useCallback(() => {
    videoEnded(video.id);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [video.id, videoEnded]);

  return (
    <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)] flex-1">
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        preload="metadata"
        onEnded={handleEnded}
      />

      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 transition-opacity duration-300 cursor-pointer"
          aria-label="Reproducir video"
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
        </button>
      )}
    </div>
  );
}
