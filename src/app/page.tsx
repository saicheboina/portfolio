import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { CertificationsSection } from '@/components/certifications-section';
import { ContactSection } from '@/components/contact-section';
import { portfolioData } from '@/lib/data';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection projects={portfolioData.professionalExperience} />
        <ExperienceSection experience={portfolioData.experience} />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
