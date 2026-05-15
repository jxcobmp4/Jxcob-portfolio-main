"use client";

import { createContext, useContext, useRef, useState, useCallback, ReactNode } from "react";

interface VideoPlayerContextType {
  registerVideo: (id: number, element: HTMLVideoElement) => void;
  unregisterVideo: (id: number) => void;
  playVideo: (id: number) => void;
  videoEnded: (id: number) => void;
  currentlyPlaying: number | null;
}

const VideoPlayerContext = createContext<VideoPlayerContextType | null>(null);

export function VideoPlayerProvider({ children }: { children: ReactNode }) {
  const videoMapRef = useRef<Map<number, HTMLVideoElement>>(new Map());
  const playingIdRef = useRef<number | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);

  const registerVideo = useCallback((id: number, element: HTMLVideoElement) => {
    videoMapRef.current.set(id, element);
  }, []);

  const unregisterVideo = useCallback((id: number) => {
    videoMapRef.current.delete(id);
    if (playingIdRef.current === id) {
      playingIdRef.current = null;
      setCurrentlyPlaying(null);
    }
  }, []);

  const playVideo = useCallback((id: number) => {
    const prevId = playingIdRef.current;
    if (prevId !== null && prevId !== id) {
      const prevVideo = videoMapRef.current.get(prevId);
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }
    }
    playingIdRef.current = id;
    setCurrentlyPlaying(id);
  }, []);

  const videoEnded = useCallback((id: number) => {
    if (playingIdRef.current === id) {
      playingIdRef.current = null;
      setCurrentlyPlaying(null);
    }
  }, []);

  return (
    <VideoPlayerContext.Provider value={{ registerVideo, unregisterVideo, playVideo, videoEnded, currentlyPlaying }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayer() {
  const ctx = useContext(VideoPlayerContext);
  if (!ctx) {
    throw new Error("useVideoPlayer must be used within a VideoPlayerProvider");
  }
  return ctx;
}
