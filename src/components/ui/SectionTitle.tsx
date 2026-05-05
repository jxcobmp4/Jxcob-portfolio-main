interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div
      className={`px-6 md:px-12 lg:px-64 pb-2 flex justify-between items-center md:mb-1 ${centered ? "text-center" : ""}`}
    >
      <p className="text-[18px] font-extralight text-(--color-text-primary) tracking-[-0.03em] flex items-center gap-3">
        <span className="border-t border-[--color-text-primary] pl-3 w-10 inline-block"></span>
        {title}
      </p>
      <h2 className="text-[18px] font-extralight text-(--color-text-primary) tracking-[-0.03em]">
        {subtitle}
      </h2>
    </div>
  );
}
