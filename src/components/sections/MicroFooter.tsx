import { Button } from '@/components/ui/Button';

export const MicroFooter = () => {
  return (
    <section className="bg-bg-light py-12">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h2 className="mb-2 text-2xl font-semibold text-[var(--color-text-dark)]">
          Still have questions?
        </h2>
        <p className="mb-6 text-[var(--color-text-muted)]">
          Get answers from an experienced local host.
        </p>

        <Button href="#">Ask a host</Button>
      </div>
    </section>
  );
};

export default MicroFooter;
