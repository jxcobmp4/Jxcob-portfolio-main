import AnimatedSection from "@/components/ui/AnimatedSection";
import { SKILLS } from "@/lib/constants";

export default function SkillsSection() {
  return (
    <AnimatedSection>
      <section id="skills" className="py-20 px-6 md:px-12 lg:px-64">
        <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold tracking-[-0.05em] leading-none text-center mb-12 md:mb-16">
          My <span className="text-[var(--color-accent)]">Skills</span>
        </h2>

        <div className="max-w-[600px] mx-auto space-y-8">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="skill">
              <p className="text-[15px] md:text-[17px] font-medium text-[var(--color-text-primary)] mb-3">
                {skill.name}
              </p>
              <div className="bar">
                <span
                  className="block h-[10px] bg-[var(--color-accent)] rounded-full shadow-[0_0_10px_var(--color-accent)] transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
