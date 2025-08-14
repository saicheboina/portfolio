import { Button } from './ui/button';
import { SectionHeading } from './section-heading';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto py-16 md:py-24 px-4">
      <SectionHeading
        title="Get in Touch"
        subtitle="Let's connect and discuss how I can bring value to your team."
      />
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <a href={portfolioData.socials.email}>
            <Mail className="mr-2 h-5 w-5" />
            Email Me
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href={portfolioData.socials.phone}>
            <Phone className="mr-2 h-5 w-5" />
            Call Me
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href={portfolioData.socials.github} target="_blank">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href={portfolioData.socials.linkedin} target="_blank">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Link>
        </Button>
      </div>
    </section>
  );
}
