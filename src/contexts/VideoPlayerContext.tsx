"use client";

import { createContext, useContext, useRef, useCallback, ReactNode } from "react";

interface VideoPlayerContextType {
  registerVideo: (id: number, element: HTMLVideoElement, onPause?: () => void) => void;
  unregisterVideo: (id: number) => void;
  playVideo: (id: number) => void;
}

const VideoPlayerContext = createContext<VideoPlayerContextType | null>(null);

export function VideoPlayerProvider({ children }: { children: ReactNode }) {
  const videoMapRef = useRef<Map<number, HTMLVideoElement>>(new Map());
  const onPauseMapRef = useRef<Map<number, () => void>>(new Map());
  const currentPlayingRef = useRef<number | null>(null);

  const registerVideo = useCallback((id: number, element: HTMLVideoElement, onPause?: () => void) => {
    videoMapRef.current.set(id, element);
    if (onPause) {
      onPauseMapRef.current.set(id, onPause);
    }
  }, []);

  const unregisterVideo = useCallback((id: number) => {
    videoMapRef.current.delete(id);
    onPauseMapRef.current.delete(id);
    if (currentPlayingRef.current === id) {
      currentPlayingRef.current = null;
    }
  }, []);

  const playVideo = useCallback((id: number) => {
    const prevId = currentPlayingRef.current;
    if (prevId !== null && prevId !== id) {
      const prevVideo = videoMapRef.current.get(prevId);
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }
      onPauseMapRef.current.get(prevId)?.();
    }
    currentPlayingRef.current = id;
  }, []);

  return (
    <VideoPlayerContext.Provider value={{ registerVideo, unregisterVideo, playVideo }}>
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
