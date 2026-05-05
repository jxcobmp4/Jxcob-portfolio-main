"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CLIENTS } from "@/lib/constants";

export default function ClientsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 80 },
    []
  );

  const autoplay = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(autoplay, 4000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <AnimatedSection>
      <section className="px-6 md:px-12 lg:px-64 py-10 pb-16">
        <p className="text-center text-[16px] font-medium tracking-[0.03em] mb-10">
          {CLIENTS.tagline}
        </p>
        <div className="relative">
          {/* Degradado izquierdo */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
          {/* Degradado derecho */}
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {CLIENTS.items.map((client) => (
              <div
                key={client.id}
                className="flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_20%] min-w-0 px-3"
              >
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    xzcxczx
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <p className="text-[13px] font-medium tracking-[-0.03em] text-[var(--color-text-primary)]">
                    {client.name}
                  </p>
                  <p className="text-[11px] font-light tracking-[-0.01em] text-[var(--color-text-secondary)] opacity-70">
                    {client.followers}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}