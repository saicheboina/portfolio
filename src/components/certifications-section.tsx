import Link from 'next/link';
import { AwsIcon, AzureIcon, GcpIcon, TerraformIcon } from './icons';
import { SectionHeading } from './section-heading';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

const certifications = [
  {
    name: 'Amazon Web Services Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: <AwsIcon className="h-10 w-10 text-orange-500" />,
    url: '#',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    icon: <AwsIcon className="h-10 w-10 text-orange-500" />,
    url: 'https://www.credly.com/badges/2db5678f-8e70-433c-9eb8-efd633c1ef0f',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate (003)',
    issuer: 'HashiCorp',
    icon: <TerraformIcon className="h-10 w-10 text-purple-500" />,
    url: 'https://www.credly.com/badges/d51c862b-4c79-4740-a30b-d2d8a3721168',
  },
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="bg-muted/50 dark:bg-card/50 py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Certifications & Achievements"
          subtitle="Validating expertise through official credentials"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Link href={cert.url} key={index} target="_blank" className="flex">
              <Card
                className="w-full flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <CardHeader>
                  <div className="mb-4">{cert.icon}</div>
                  <CardTitle className="font-headline">{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
