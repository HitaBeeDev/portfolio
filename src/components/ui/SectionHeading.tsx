interface Props {
  id: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-foreground/60">{subtitle}</p>
      )}
    </div>
  );
}
