import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import YouTubeVideoCard from "@/components/ui/YouTubeVideoCard";
import VerticalVideoCarousel from "@/components/ui/VerticalVideoCarousel";
import { ABOUT, VIDEOS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <AnimatedSection>
      <SectionWrapper id="about">
        <SectionTitle title={ABOUT.title} subtitle={ABOUT.subtitle} />
        <VerticalVideoCarousel videos={VIDEOS} />
        <YouTubeVideoCard />
      </SectionWrapper>
    </AnimatedSection>
  );
}
