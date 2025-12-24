import { Button } from '@/components/ui/Button';

export const MicroFooter = () => {
  return (
    <section className="bg-bg-light py-12">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h2 className="text-text-dark mb-2 text-2xl font-semibold">
          Still have questions?
        </h2>
        <p className="text-text-muted mb-6">
          Get answers from an experienced local host.
        </p>

        <Button href="#">Ask a host</Button>
      </div>
    </section>
  );
};

export default MicroFooter;
