import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    text: "Increíble edición, mis videos han mejorado muchísimo. Totalmente recomendado.",
    handle: "@Cabaricosuplementos",
    followers: "1.9K seguidores",
    image: "/clients/cliente-1.jpg",
  },
  {
    text: "Jxcob transforma el contenido en videos que realmente venden. Su creatividad es única.",
    handle: "@Creatorsclubaus",
    followers: "2.2K seguidores",
    image: "/clients/cliente-2.jpg",
  },
  {
    text: "Profesional, puntual y con un ojo artístico impresionante. Supera mis expectativas.",
    handle: "@duomillonario",
    followers: "350 seguidores",
    image: "/clients/cliente-3.jpg",
  },
  {
    text: "La mejor inversión para mi cuenta. La calidad profesional se nota inmediatamente.",
    handle: "@Matchsportcenter",
    followers: "4.5K seguidores",
    image: "/clients/cliente-4.jpg",
  },
];

export default function ContactSection() {
  return (
    <AnimatedSection>
<section
  id="contact"
  className="relative bg-[var(--color-text-primary)] px-6 md:px-12 lg:px-64 overflow-hidden"
>

  {/* orange radial glow */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_55%,rgba(243,135,8,0.18),transparent)] pointer-events-none z-0" />

        <div className="relative z-10">
          {/* Section header row */}
          <div className="flex justify-between items-center pt-10 md:pt-[60px] pb-8 md:pb-14">
            <p className="text-[15px] md:text-[18px] font-extralight tracking-[-0.03em] flex items-center gap-3 text-[var(--color-text-primary)]">
              <span className="border-t w-8 md:w-10 inline-block pl-3 border-[var(--color-text-primary)]/40" />
              Contacto
            </p>
            <span className="text-[15px] md:text-[18px] font-extralight tracking-[-0.03em] opacity-70 text-[var(--color-bg)]">
              (03)
            </span>
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 pb-20">
            {/* Left: contact info */}
            <div className="flex flex-col gap-10">
<h2 className="text-[clamp(38px,4vw,58px)] font-bold tracking-[-0.05em] leading-[1.05] text-[var(--color-bg)]">
  Ponte en contacto
  <br />
  con <strong className="text-[var(--color-accent)]">Conmigo</strong>
</h2>

              <div className="flex flex-col gap-7">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <span className="text-[14px] font-medium tracking-[-0.02em] text-[var(--color-bg)]/60">
                    Email:
                  </span>
<a
  href="mailto:Dopjacob@gmail.com"
  className="text-[15px] font-semibold tracking-[-0.03em] text-[var(--color-bg)] hover:underline"
>
  Dopjacob@gmail.com
</a>
                </div>

                {/* Social icons */}
                <div className="flex flex-col gap-2">
                  <span className="text-[14px] font-medium tracking-[-0.02em] text-[var(--color-bg)]/60">
                    Redes sociales:
                  </span>
                  <div className="flex gap-2.5">
<a
  href="https://instagram.com/by.jxcob"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="w-10 h-10 rounded-full bg-black/10 border border-black/20 flex items-center justify-center hover:opacity-75 transition-opacity"
>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#171717"
                        strokeWidth="1.8"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle
                          cx="17.5"
                          cy="6.5"
                          r="1"
                          fill="#171717"
                          stroke="none"
                        />
                      </svg>
                    </a>
<a
  href="https://tiktok.com/@jxcob.mp4"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="TikTok"
  className="w-10 h-10 rounded-full bg-black/10 border border-black/20 flex items-center justify-center hover:opacity-75 transition-opacity"
>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#171717"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.15a8.19 8.19 0 0 0 4.78 1.52V7.22a4.85 4.85 0 0 1-1.01-.53z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* WhatsApp button — self-start so it never stretches full width */}
                <div className="flex flex-col gap-2">
                  <span className="text-[14px] font-medium tracking-[-0.02em] text-[var(--color-bg)]/60">
                    Contactame por:
                  </span>
<a
  href="https://wa.me/573008352252"
  target="_blank"
  rel="noopener noreferrer"
  className="self-start inline-flex items-center gap-4 lg:gap-6 px-2.5 pl-6 lg:pl-8 py-2.5 text-sm font-medium text-white bg-[var(--color-accent)] rounded-full hover:bg-[#d67607] transition-colors"
>
  Escribeme al WhatsApp
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
                </div>
              </div>

              <p className="text-[13px] font-medium tracking-[-0.02em] leading-[1.6] text-[var(--color-bg)]/45">
                Atiendo exclusivamente por WhatsApp y por las redes sociales
                <br />
                indicadas. Mi tiempo de respuesta es menor a 24 horas.
              </p>
            </div>

            {/* Right: testimonials — badge and heading centered */}
            <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-[66px] px-3.5 py-1.5 text-[13px] font-medium tracking-[-0.02em] text-[var(--color-bg)] mb-5">
                <span className="w-[7px] h-[7px] rounded-full bg-[rgb(0,192,13)] flex-shrink-0" />
                Testimonios
              </div>

              {/* Heading */}
              <h3 className="text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.05em] leading-[1.05] text-[var(--color-bg)] mb-7">
                Lo que dicen mis
                <br />
                clientes
              </h3>

              {/* 2×2 testimonials grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 w-full">
                {testimonials.map((t, i) => (
                <div
                    key={i}
                    className="bg-[#f5f5f5] rounded-2xl p-5 flex flex-col gap-2.5 text-left"
                  >
                    <div className="text-[var(--color-accent)] text-sm tracking-[1px]">
                      ★★★★★
                    </div>
                    <p className="text-[13px] font-medium tracking-[-0.02em] leading-[1.55] text-[#171717] flex-1">
                      {t.text}
                    </p>
                    <div className="flex items-center gap-2.5 mt-1.5">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={t.image}
                          alt={t.handle}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-px">
                        <span className="text-[12px] font-semibold tracking-[-0.02em] text-[#171717]">
                          {t.handle}
                        </span>
                        <span className="text-[11px] font-medium text-[#171717]/45">
                          {t.followers}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 py-6 flex items-center justify-between">
<span className="text-[12px] font-medium tracking-[-0.02em] text-[var(--color-bg)]/35">
  © 2026 Jxcob. Todos los derechos reservados.
</span>
<a
  href="#hero"
  className="text-[13px] font-bold tracking-[-0.03em] text-[var(--color-bg)] opacity-70 hover:opacity-100 transition-opacity"
>
  Jxcob
</a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
