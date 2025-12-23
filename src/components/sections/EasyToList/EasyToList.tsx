interface ListingStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

const listingSteps: ListingStep[] = [
  {
    number: 1,
    icon: '🏠',
    title: 'Tell us about your place',
    description:
      'Share some basic info, like where it is and how many guests can stay.',
  },
  {
    number: 2,
    icon: '📸',
    title: 'Make it stand out',
    description:
      "Add 5 or more photos plus a title and description—we'll help you out.",
  },
  {
    number: 3,
    icon: '✨',
    title: 'Finish up and publish',
    description:
      "Choose if you'd like to start with an experienced guest, set a starting price, and publish.",
  },
];

export const EasyToList = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <header className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text-dark)] md:text-4xl lg:text-5xl">
            It's easy to list on Airbnb
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[var(--color-text-muted)]">
            From sign up to your first guest—here's how listing your place works
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {listingSteps.map((step) => (
            <article
              key={step.number}
              className="flex flex-col items-center rounded-3xl bg-[var(--color-bg-light)] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Phone Mockup */}
              <div className="mb-6 flex aspect-[3/4] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-100 shadow-sm">
                <div className="h-[280px] w-[140px] rounded-3xl bg-gradient-to-b from-gray-900 to-gray-700 p-2 shadow-2xl">
                  <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[18px] bg-gradient-to-b from-white to-gray-50">
                    <div className="absolute top-1.5 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-gray-900"></div>
                    <span className="text-5xl">{step.icon}</span>
                  </div>
                </div>
              </div>

              <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                {step.number}
              </span>
              <h3 className="mb-2 text-xl font-semibold text-[var(--color-text-dark)]">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EasyToList;
