const CheckIcon = () => (
  <svg
    className="mt-0.5 h-6 w-6 flex-shrink-0 text-[var(--color-success)]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const benefits = [
  { text: 'Guest identity verification', highlight: null },
  { text: 'Reservation screening', highlight: null },
  { text: 'RM3M damage protection', highlight: 'RM3M' },
  { text: 'RM1M liability insurance', highlight: 'RM1M' },
  { text: '24-hour safety line', highlight: '24-hour' },
];

export const YoureProtected = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="max-w-xl lg:max-w-none">
            <div className="mb-6 flex items-center gap-2">
              <span className="text-2xl leading-none font-extrabold md:text-3xl">
                <span className="text-[var(--color-primary)]">air</span>
                <span className="text-[var(--color-text-dark)]">cover</span>
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">
                for Hosts
              </span>
            </div>

            <h2 className="text-title mb-6">
              Top-to-bottom protection, included free
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
              Airbnb is the only platform to include free, top-to-bottom
              protection for Hosts. Get RM3M damage protection for your home and
              belongings, liability coverage for guest injury, and more—all free
              of charge.
            </p>

            <ul className="mb-8 flex flex-col gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckIcon />
                  <span className="text-base leading-normal text-[var(--color-text-dark)]">
                    {benefit.highlight ? (
                      <>
                        <strong className="font-semibold">
                          {benefit.highlight}
                        </strong>
                        {benefit.text.replace(benefit.highlight, '')}
                      </>
                    ) : (
                      benefit.text
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold text-[var(--color-text-dark)] underline transition-colors hover:text-[var(--color-text-muted)]"
            >
              Learn more about AirCover
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 12l4-4-4-4" />
              </svg>
            </a>

            {/* Comparison Stats */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[var(--color-bg-light)] p-4 sm:flex-row md:p-6">
              <div className="text-center">
                <p className="mb-1 text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
                  Damage Protection
                </p>
                <p className="text-xl font-bold text-[var(--color-primary)]">
                  RM3M
                </p>
              </div>
              <div className="text-center">
                <p className="mb-1 text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
                  Liability Insurance
                </p>
                <p className="text-xl font-bold text-[var(--color-primary)]">
                  RM1M
                </p>
              </div>
              <div className="text-center">
                <p className="mb-1 text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
                  Income Protection
                </p>
                <p className="text-xl font-bold text-[var(--color-text-dark)]">
                  Included ✓
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="flex items-center justify-center">
            <div className="relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF385C] via-[#BD1E59] to-gray-900">
              <div className="absolute inset-5 rounded-2xl border-2 border-white/20"></div>
              <span className="text-[8rem] drop-shadow-2xl filter">🛡️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoureProtected;
