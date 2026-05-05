import type { ReactNode } from "react";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  text,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-full";

  const variants = {
    primary:
      "bg-[var(--color-accent)] text-[var(--color-bg-card)] hover:bg-[#B80D30] hover:scale-105",
    outline:
      "border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </a>
  );
}
