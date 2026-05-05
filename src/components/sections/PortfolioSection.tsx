import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PORTFOLIO } from "@/lib/constants";

export default function PortfolioSection() {
  return (
    <AnimatedSection>
      <SectionWrapper id="portfolio">
        <SectionTitle
          title={PORTFOLIO.title}
          subtitle={PORTFOLIO.subtitle}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.items.map((item) => (
            <Card key={item.id}>
              <div className="aspect-video bg-[var(--color-bg)] flex items-center justify-center">
                <span className="text-[var(--color-text-secondary)] text-sm font-light">
                  Video Placeholder
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium tracking-widest text-[var(--color-accent)] uppercase mb-2">
                  {item.category}
                </p>
                <h3 className="text-base font-medium">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </AnimatedSection>
  );
}
