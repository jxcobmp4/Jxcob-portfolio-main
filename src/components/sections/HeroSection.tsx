import { NAV_LINKS, HERO } from "@/lib/constants";
import Image from "next/image";

export default function HeroSection() {
  return (
    <header
      id="hero"
      className="relative flex flex-col items-center min-h-[72vh]"
    >
      {/* NAVBAR */}
      <nav className="w-full px-6 md:px-12 lg:px-64 py-5 flex items-center justify-between">
<a
  href="#hero"
  className="text-[28px] md:text-[38px] lg:text-[44px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] transition-colors leading-none"
>
  Jxcob
</a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[16px] font-light tracking-wide text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

<a
  href="#contact"
  className="hidden sm:inline-flex items-center gap-4 lg:gap-6 px-2.5 pl-5 lg:pl-8 py-2.5 text-sm font-medium text-[var(--color-text-primary)] bg-[#222222] rounded-full hover:bg-[#333333] transition-all duration-300"
>
  Trabaja conmigo
  <span className="inline-flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 bg-[var(--color-bg)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-card)] rounded-full transition-colors duration-300">
    <svg
      className="w-4 h-4 lg:w-5 lg:h-5 -rotate-[35deg]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </span>
</a>
      </nav>

      {/* HERO CONTENT */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-6 md:px-12 lg:px-0 w-full max-w-3xl mx-auto">
        {/* BADGE */}
        <div
          className="inline-flex items-center gap-2 px-2 pl-3 py-1.5 bg-transparent border border-[var(--color-border)] rounded-full mb-6 md:mb-8"
          style={{
            opacity: 0,
            animation: "fade-in-up 0.6s ease-out 0.1s forwards",
          }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-xs font-light text-[var(--color-text-primary)]">
            {HERO.badge}
          </span>
        </div>

        {/* HEADLINE */}
        <h1
          className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold tracking-[-0.05em] leading-[1.09]"
          style={{
            opacity: 0,
            animation: "fade-in-up 0.7s ease-out 0.2s forwards",
          }}
        >
          <span className="block">{HERO.titleLine1}</span>
<span className="block">
  <span className="text-[var(--color-accent)] font-extrabold">Creadores</span> de
  contenido
</span>
        </h1>

        {/* SUBTITLE */}
        <p
          className="mt-4 md:mt-6 text-[15px] md:text-[19px] lg:text-[24px] font-light text-[var(--color-text-primary)] leading-[1.4] tracking-[-0.03em] mx-auto"
          style={{
            opacity: 0,
            animation: "fade-in-up 0.7s ease-out 0.4s forwards",
          }}
        >
          {HERO.description}
        </p>

        {/* ACTIONS */}
<div
          className="mt-8 md:mt-12 w-full flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8"
          style={{
            opacity: 0,
            animation: "fade-in-up 0.7s ease-out 0.6s forwards",
          }}
        >
<a
  href="#contact"
  className="inline-flex items-center gap-4 lg:gap-6 px-2.5 pl-6 lg:pl-8 py-2.5 text-sm font-medium text-[#ffffff] bg-[var(--color-accent)] rounded-full hover:bg-[#d67607] transition-colors"
>
  Trabaja conmigo
  <span className="inline-flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 bg-[#d67607] rounded-full">
    <svg
      className="w-4 h-4 -rotate-[35deg]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </span>
</a>

          {/* Social proof */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3 md:-space-x-5">
                {HERO.socialProof.clientAvatars.map((avatar, i) => (
                  <Image
                    key={i}
                    src={avatar}
                    alt={`Cliente ${i + 1}`}
                    width={36}
                    height={36}
                    className="w-9 h-9 md:w-12 md:h-12 rounded-full border-2 border-[var(--color-bg)] object-cover"
                  />
                ))}
              </div>
              <div>
<div className="flex items-center gap-0.5">
  {Array.from({ length: HERO.socialProof.rating }).map(
    (_, i) => (
      <svg
        key={i}
        className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--color-accent)] fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
      </svg>
    ),
  )}
</div>
                <p className="text-xs font-light text-[var(--color-text-secondary)] text-left mt-0.5">
                  {HERO.socialProof.clientCount}
                  {HERO.socialProof.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
