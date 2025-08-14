type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight text-primary dark:text-primary-foreground mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
