import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionIntro from "@/components/ui/SectionIntro";

function YouTubeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.15a8.19 8.19 0 0 0 4.78 1.52V7.22a4.85 4.85 0 0 1-1.01-.53z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" fill="currentColor" stroke="none" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  );
}

const ICONS = { youtube: YouTubeIcon, tiktok: TikTokIcon, instagram: InstagramIcon, video: VideoIcon } as const;
type IconName = keyof typeof ICONS;

const SERVICES_DATA: { num: string; title: string; desc: string; icons: IconName[] }[] = [
  {
    num: "01",
    title: "Retención optimizada desde el primer segundo",
    desc: "Cada video se estructura estratégicamente para captar atención inmediata y mantener el interés del espectador hasta el final.",
    icons: ["youtube", "tiktok", "instagram"],
  },
  {
    num: "02",
    title: "Edición de alto nivel",
    desc: "Aplicación precisa de ritmo, cortes y recursos visuales que elevan la calidad del contenido y lo posicionan por encima del promedio.",
    icons: ["video"],
  },
  {
    num: "03",
    title: "Optimización estratégica para plataformas",
    desc: "Adaptación del contenido según el comportamiento de cada red social para maximizar alcance, visibilidad y rendimiento orgánico.",
    icons: ["youtube", "tiktok"],
  },
  {
    num: "04",
    title: "Identidad visual consistente y profesional",
    desc: "Desarrollo de una línea gráfica coherente que fortaleza el reconocimiento de marca y aporta diferenciación en cada publicación.",
    icons: ["instagram", "tiktok", "video"],
  },
];

export default function ServicesSection() {
  return (
    <AnimatedSection>
      <section id="services" className="px-6 md:px-12 lg:px-64">
        <SectionIntro
          label="Servicios"
          number=""
          heading={
<h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold tracking-[-0.05em] leading-none max-w-[560px]">
  Lo que puedo
  <br />
  hacer por{" "}
  <span className="text-[var(--color-accent)] font-extrabold">tu marca</span>
</h2>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-16 md:pb-20">
          {SERVICES_DATA.map((service, i) => (
            <div
              key={service.num}
              className="relative bg-[var(--color-bg-card)] rounded-[20px] p-5 md:p-9 flex flex-col gap-4 min-h-[260px] pb-16"
            >
              <span className="text-[13px] font-light tracking-[-0.03em] opacity-45">
                {service.num}
              </span>
              <h3 className="text-[clamp(22px,2.8vw,40px)] font-bold tracking-[-0.05em] leading-none text-[var(--color-accent)]">
                {service.title}
              </h3>
              <p className="text-[14px] md:text-[15px] font-light tracking-[-0.03em] leading-[1.5] opacity-70 flex-1">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
