const hostAvatars = ['S', 'A', 'M', 'D'];

export const MicroFooter = () => {
  return (
    <section className="border-t border-b border-[var(--color-border-light)] bg-white">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-12 text-center">
        {/* Host Avatars */}
        <div className="mb-6 flex items-center">
          {hostAvatars.map((initial, index) => (
            <div
              key={index}
              className={`flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-[#FF385C] to-[#BD1E59] text-xl font-bold text-white shadow-sm ${
                index !== 0 ? '-ml-3' : ''
              }`}
            >
              {initial}
            </div>
          ))}
          <span className="ml-4 text-sm text-[var(--color-text-muted)]">
            Superhosts ready to help
          </span>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)] md:text-3xl">
          Still have questions?
        </h2>
        <p className="mb-6 max-w-md text-lg text-[var(--color-text-muted)]">
          Get answers from experienced Superhosts near you.
        </p>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <a
            href="#"
            className="min-w-[160px] rounded-lg bg-black px-8 py-4 text-center font-semibold text-white transition-all hover:scale-[1.02] hover:bg-gray-800"
          >
            Ask a Superhost
          </a>
          <a
            href="#"
            className="min-w-[160px] rounded-lg border border-[var(--color-text-dark)] bg-transparent px-8 py-4 text-center font-semibold text-[var(--color-text-dark)] transition-all hover:bg-[var(--color-bg-light)]"
          >
            Visit Help Center
          </a>
        </div>
      </div>
    </section>
  );
};

export default MicroFooter;
