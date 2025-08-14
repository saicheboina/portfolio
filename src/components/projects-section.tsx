import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from '@/components/badge';
import { AwsIcon, AzureIcon, GcpIcon } from './icons';
import { SectionHeading } from './section-heading';
import { portfolioData } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { CheckCircle2 } from 'lucide-react';

type Project = (typeof portfolioData.professionalExperience)[number];

const cloudIcons: { [key: string]: React.ReactNode } = {
  AWS: <AwsIcon className="h-8 w-8 text-orange-400" />,
  Azure: <AzureIcon className="h-8 w-8 text-blue-500" />,
  GCP: <GcpIcon className="h-8 w-8 text-green-500" />,
};

const getCloudProvider = (tools: string): string => {
  if (tools.toLowerCase().includes('aws')) return 'AWS';
  if (tools.toLowerCase().includes('azure')) return 'Azure';
  if (tools.toLowerCase().includes('gcp')) return 'GCP';
  return '';
};


export function ProjectsSection({ projects }: { projects: Project[] }) {
  const badgeVariants = ['default', 'secondary', 'accent', 'outline'] as const;

  return (
    <section id="projects" className="bg-muted/50 dark:bg-card/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Projects & Case Studies"
          subtitle="A selection of my work in the cloud"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const cloudProvider = getCloudProvider(project.toolsAndTechnology);
            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className='flex-1'>
                          <CardTitle className="font-headline text-xl mb-1">{project.role}</CardTitle>
                          <CardDescription>{project.client}</CardDescription>
                        </div>
                        {cloudIcons[cloudProvider]}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{project.responsibilities[0]}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.toolsAndTechnology.split(', ').slice(0, 4).map((tool, i) => (
                          <Badge key={i} variant={i % 2 === 0 ? "secondary" : "accent"}>
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-5xl h-[90vh] flex flex-col">
                  <DialogHeader>
                    <DialogTitle className="font-headline text-2xl text-primary">{project.role}</DialogTitle>
                    <DialogDescription>{project.client}</DialogDescription>
                  </DialogHeader>
                  <div className="grid md:grid-cols-3 gap-x-8 gap-y-4 flex-1 overflow-hidden">
                    <ScrollArea className="md:col-span-2 h-full pr-6 -mr-6">
                      <h3 className="font-headline text-lg font-semibold mb-4">Responsibilities</h3>
                      <ul className="space-y-3">
                        {project.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                            <span className="text-sm text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                    <ScrollArea className="h-full">
                      <h3 className="font-headline text-lg font-semibold mb-4">Skills & Technologies</h3>
                       <div className="flex flex-wrap gap-2">
                        {project.toolsAndTechnology.split(', ').map((tool, i) => (
                          <Badge key={i} variant={badgeVariants[i % badgeVariants.length]}>
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </div>
    </section>
  );
}
