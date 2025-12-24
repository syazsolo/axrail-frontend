const features = [
  { icon: '🏢', text: 'Apartment buildings with hosting programs' },
  { icon: '📋', text: 'Landlord-approved hosting' },
  { icon: '🤝', text: 'Clear guidelines and support' },
];

export const NotJustHomeowners = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="order-2 max-w-xl lg:order-1 lg:max-w-none">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-light)] px-3 py-1.5 text-sm font-semibold text-[var(--color-primary)]">
              ✨ New program
            </span>

            <h2 className="text-title mb-6">
              Not just for homeowners
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
              Live in an apartment? Check out Airbnb-friendly
              apartments—buildings where hosting on Airbnb is allowed. Some even
              offer services like professional photography and priority support.
            </p>

            <ul className="mb-8 flex flex-col gap-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-base text-[var(--color-text-dark)]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-bg-light)] text-sm">
                    {feature.icon}
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex rounded-lg bg-black px-8 py-4 font-semibold text-white transition-all hover:scale-[1.02] hover:bg-gray-800"
            >
              Explore apartments
            </a>
          </div>

          {/* Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-black/5"></div>
              <span className="text-[6rem] drop-shadow-lg filter">🏙️</span>
            </div>

            {/* Floating Card */}
            <div className="absolute -right-5 -bottom-5 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-2xl md:right-5 md:bottom-5 md:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF385C] to-[#BD1E59] text-2xl">
                🔑
              </div>
              <div className="text-sm">
                <strong className="block text-base text-[var(--color-text-dark)]">
                  Ready to host
                </strong>
                <span className="text-[var(--color-text-muted)]">
                  Pre-approved buildings
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotJustHomeowners;
