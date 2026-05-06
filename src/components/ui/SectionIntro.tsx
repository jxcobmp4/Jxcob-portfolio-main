import type { ReactNode } from "react";

interface SectionIntroProps {
  label: string;
  number: string;
  heading: ReactNode;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionIntro({
  label,
  number,
  heading,
  subtitle,
  centered = false,
  dark = false,
}: SectionIntroProps) {
  const textColor = dark ? "text-[var(--color-bg)]" : "text-[var(--color-text-primary)]";
  const lineColor = dark ? "border-[var(--color-bg)]/40" : "border-[--color-text-primary]";
  const numberColor = dark ? "text-[var(--color-bg)]" : "text-[var(--color-bg)]";
  const subtitleColor = dark ? "text-[var(--color-bg)]/60" : "text-[var(--color-text-primary)]";

  return (
    <div className="pt-10 md:pt-[60px] mb-10 md:mb-14">
      {/* header row: line + label | number */}
      <div className="flex justify-between items-center pb-2">
        <p className={`text-[15px] md:text-[18px] font-extralight tracking-[-0.03em] flex items-center gap-3 ${textColor}`}>
          <span className={`border-t w-8 md:w-10 inline-block pl-3 ${lineColor}`} />
          {label}
        </p>
        <span className={`text-[15px] md:text-[18px] font-extralight tracking-[-0.03em] opacity-70 ${numberColor}`}>
          {number}
        </span>
      </div>

      {/* heading + optional subtitle */}
      <div className={`pt-0 pb-8 md:pb-16 ${centered ? "flex flex-col items-center" : "ml-0 md:ml-12"}`}>
        {heading}
        {subtitle && (
          <p className={`mt-4 md:mt-6 text-[15px] md:text-[20px] lg:text-[24px] font-light leading-[1.4] tracking-[-0.03em] ${centered ? "mx-auto" : ""} ${subtitleColor}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
