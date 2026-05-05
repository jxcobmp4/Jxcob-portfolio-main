import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)] hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
