import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';
import { portfolioData } from '@/lib/data';

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-16 md:py-24 px-4">
      <SectionHeading
        title="About Me"
        subtitle="A brief introduction to my professional journey"
      />
      <Card className="overflow-hidden shadow-lg">
        <div className="grid">
          <div className="md:col-span-2">
            <CardContent className="p-8 md:p-12 space-y-6">
              <h3 className="font-headline text-3xl font-bold text-primary dark:text-primary-foreground">
                Senior Software Engineer
              </h3>
              {portfolioData.aboutMe.split('\n').map((line, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-justify">
                    {line}
                  </p>
                ))}
            </CardContent>
          </div>
        </div>
      </Card>
    </section>
  );
}
