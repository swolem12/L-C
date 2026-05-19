import { Badge } from "@/components/ui/badge";

export function PageHeader({
  eyebrow,
  title,
  description,
  badge,
  actions
}: {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-lg border border-espresso-200/70 bg-espresso-950 p-5 text-cream-50 shadow-[0_24px_70px_rgba(23,16,13,0.22)] sm:p-7">
      <div className="absolute inset-0 surface-grid opacity-20" aria-hidden="true" />
      <div className="relative flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-honey-100">{eyebrow}</p>
            {badge ? <Badge variant="honey">{badge}</Badge> : null}
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-cream-200 sm:text-base">{description}</p>
        </div>
        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </div>
    </section>
  );
}
