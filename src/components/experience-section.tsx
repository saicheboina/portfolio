import {
  Card,
  CardContent,
} from './ui/card';
import {
  WellsFargoIcon,
  FiservIcon,
  AgilityIcon,
  TvishaIcon,
  ValueMomentumIcon,
} from './icons';
import { SectionHeading } from './section-heading';
import { Briefcase } from 'lucide-react';

const companyIcons: { [key: string]: React.ReactNode } = {
  'Wells Fargo': <WellsFargoIcon className="h-8 w-8" />,
  'Fiserv': <FiservIcon className="h-8 w-8" />,
  'Agility': <AgilityIcon className="h-8 w-8" />,
  'Tvisha Technologies Incorporation': <TvishaIcon className="h-8 w-8" />,
  'Value Momentum': <ValueMomentumIcon className="h-8 w-8" />,
};

export function ExperienceSection({ experience }: { experience: (typeof import('@/lib/data').portfolioData.experience) }) {
  return (
    <section id="experience" className="container mx-auto py-16 md:py-24 px-4">
      <SectionHeading
        title="Career Journey"
        subtitle="My professional experience over the years"
      />
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative flex items-start group">
               {/* Timeline Dot */}
               <div className="absolute left-4 top-1 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                 <Briefcase className="w-4 h-4 text-primary" />
               </div>

              {/* Content Card */}
              <div className="w-full pl-12">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                       <div className="hidden sm:block p-2 bg-muted rounded-md">
                         {companyIcons[item.company]}
                       </div>
                       <div className="flex-grow">
                         <h3 className="font-headline font-semibold text-lg text-primary dark:text-primary-foreground">{item.role}</h3>
                         <p className="text-base text-foreground">{item.company}</p>
                         <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                       </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
