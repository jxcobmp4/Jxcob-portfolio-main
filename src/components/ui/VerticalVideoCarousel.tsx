"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import VideoCard from "@/components/ui/VideoCard";
import { VideoPlayerProvider } from "@/contexts/VideoPlayerContext";

interface Video {
  id: number;
  src: string;
  poster: string;
  title: string;
}

export default function VerticalVideoCarousel({ videos }: { videos: Video[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-full px-4">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Track â€” negative left margin offsets the per-slide left padding */}
        <div className="flex -ml-3">
          <VideoPlayerProvider>
          {videos.map((video) => (
            <div
              key={video.id}
              className="pl-3 flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_20%] min-w-0"
            >
              <VideoCard video={video} />
            </div>
          ))}
        </VideoPlayerProvider>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <div className="flex items-center justify-between mt-6 px-6 md:px-12 lg:px-64">
        <button
          onClick={scrollPrev}
          aria-label="Anterior"
          className="group flex items-center opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          <svg
            className="w-12 h-3"
            viewBox="0 0 48 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="46" y1="6" x2="4" y2="6" />
            <polyline points="10,1 2,6 10,11" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Siguiente"
          className="group flex items-center opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          <svg
            className="w-12 h-3"
            viewBox="0 0 48 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="2" y1="6" x2="44" y2="6" />
            <polyline points="38,1 46,6 38,11" />
          </svg>
        </button>
      </div>
    </div>
  );
}

