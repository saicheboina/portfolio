import {
  Cloud,
  Code,
  Database,
  Lock,
  Cog,
  ShieldCheck,
  Server,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { SectionHeading } from './section-heading';
import { portfolioData } from '@/lib/data';
import { TerraformIcon, KubernetesIcon, DockerIcon } from './icons';

const categoryIcons: { [key: string]: React.ReactNode } = {
  Cloud: <Cloud className="h-6 w-6" />,
  IaC: <TerraformIcon className="h-6 w-6" />,
  'CI/CD': <Cog className="h-6 w-6" />,
  'Containers & Orchestration': <KubernetesIcon className="h-6 w-6" />,
  Security: <ShieldCheck className="h-6 w-6" />,
  Monitoring: <Server className="h-6 w-6" />,
  'Config Management': <Database className="h-6 w-6" />,
  Languages: <Code className="h-6 w-6" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto py-16 md:py-24 px-4">
      <SectionHeading
        title="Technical Skills"
        subtitle="A snapshot of the technologies I work with"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioData.skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-accent/20 rounded-md text-accent">
                {categoryIcons[skillCategory.category]}
              </div>
              <CardTitle className="font-headline text-xl">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
