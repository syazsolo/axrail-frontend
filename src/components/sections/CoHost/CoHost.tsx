interface Host {
  id: number;
  name: string;
  initial: string;
  rating: number;
  reviews: number;
  location: string;
  yearsHosting: number;
  isSuperhost: boolean;
}

const hosts: Host[] = [
  {
    id: 1,
    name: 'Sarah',
    initial: 'S',
    rating: 4.98,
    reviews: 342,
    location: 'Kuala Lumpur',
    yearsHosting: 5,
    isSuperhost: true,
  },
  {
    id: 2,
    name: 'Ahmad',
    initial: 'A',
    rating: 4.95,
    reviews: 287,
    location: 'Penang',
    yearsHosting: 3,
    isSuperhost: true,
  },
  {
    id: 3,
    name: 'Michelle',
    initial: 'M',
    rating: 4.92,
    reviews: 156,
    location: 'Johor Bahru',
    yearsHosting: 2,
    isSuperhost: false,
  },
  {
    id: 4,
    name: 'David',
    initial: 'D',
    rating: 4.97,
    reviews: 423,
    location: 'Kuching',
    yearsHosting: 6,
    isSuperhost: true,
  },
  {
    id: 5,
    name: 'Priya',
    initial: 'P',
    rating: 4.89,
    reviews: 98,
    location: 'Ipoh',
    yearsHosting: 1,
    isSuperhost: false,
  },
  {
    id: 6,
    name: 'Wei Lin',
    initial: 'W',
    rating: 4.96,
    reviews: 267,
    location: 'Malacca',
    yearsHosting: 4,
    isSuperhost: true,
  },
];

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M6 0l1.854 3.756 4.146.603-3 2.923.708 4.128L6 9.187l-3.708 1.95.708-4.127-3-2.924 4.146-.602L6 0z" />
  </svg>
);

export const CoHost = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[var(--color-bg-light)] py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <header className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text-dark)] md:text-4xl lg:text-5xl">
            Get help from a co-host
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-muted)]">
            Don't have time to host? A co-host can help—or even do it for you.
            They can message guests, manage your calendar, and meet guests at
            check-in.
          </p>
        </header>

        {/* Carousel */}
        <div className="relative -mx-6 px-6">
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {hosts.map((host) => (
              <article
                key={host.id}
                className="w-[280px] flex-shrink-0 snap-start rounded-3xl border border-[var(--color-border-light)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF385C] to-[#BD1E59] text-2xl font-bold text-white">
                    {host.initial}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-semibold text-[var(--color-text-dark)]">
                      {host.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-[var(--color-text-dark)]">
                      <StarIcon />
                      <span>{host.rating}</span>
                      <span>·</span>
                      <span>{host.reviews} reviews</span>
                    </div>
                  </div>
                </div>
                <p className="mb-1 text-sm text-[var(--color-text-muted)]">
                  {host.location}
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {host.yearsHosting} years hosting
                </p>
                {host.isSuperhost && (
                  <span className="mt-2 inline-flex items-center gap-1 rounded-lg bg-[var(--color-bg-light)] px-2 py-1 text-xs font-medium text-[var(--color-text-dark)]">
                    🏆 Superhost
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex rounded-lg bg-black px-8 py-4 font-semibold text-white transition-all hover:scale-[1.02] hover:bg-gray-800"
          >
            Find a co-host
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoHost;
