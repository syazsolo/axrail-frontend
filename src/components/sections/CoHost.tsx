interface CoHostPerson {
  id: number;
  name: string;
  image: string;
  location: string;
  rating: number;
  yearsHosting: number;
}

const coHosts: CoHostPerson[] = [
  {
    id: 1,
    name: 'Gabrielle',
    image:
      'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-HLPO29_Fast%20Follow%20Passport%20Pictures%20-%20NORAM/original/e4f7bb88-643f-49cf-9dea-6cf87b7f3174.jpeg',
    location: 'North Charleston, USA',
    rating: 4.98,
    yearsHosting: 3,
  },
  {
    id: 2,
    name: 'Mariam',
    image:
      'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-016HLP_MVP%20Images-Test%20Delivery%2010_2_2024/original/332516e2-c531-4a35-a9e4-012f1477014a.jpeg',
    location: 'Los Angeles, USA',
    rating: 4.94,
    yearsHosting: 5,
  },
  {
    id: 3,
    name: 'Elizabeth',
    image:
      'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-016HLP_MVP%20Images-Test%20Delivery%2010_2_2024/original/3a45f32f-0cdc-403b-823a-884f2b3941b1.jpeg',
    location: 'Temple, USA',
    rating: 4.98,
    yearsHosting: 4,
  },
  {
    id: 4,
    name: 'Anthony',
    image:
      'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-HLPO29_Fast%20Follow%20Passport%20Pictures%20-%20NORAM/original/b5ab3e34-c77c-426e-82fa-7401162b3ae0.jpeg',
    location: 'Toronto, Canada',
    rating: 4.95,
    yearsHosting: 9,
  },
  {
    id: 5,
    name: 'Jennifer',
    image:
      'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-016HLP_MVP%20Images-Test%20Delivery%2010_2_2024/original/645ccb2f-90cb-4ec0-9fd8-f2b4c0604864.jpeg',
    location: 'La Quinta, USA',
    rating: 4.96,
    yearsHosting: 4,
  },
];

const StarIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="currentColor"
    className="shrink-0"
  >
    <path d="M6 0l1.854 3.756 4.146.603-3 2.923.708 4.128L6 9.187l-3.708 1.95.708-4.127-3-2.924 4.146-.602L6 0z" />
  </svg>
);

const CoHostCard = ({ host }: { host: CoHostPerson }) => (
  <article className="bg-bg-light flex h-full flex-col items-center rounded-3xl border border-gray-200 p-6 shadow-[2px_8px_16px_rgba(0,0,0,0.2)] md:p-8">
    {/* Profile Image with Ring */}
    <div className="mb-1 rounded-full p-1 md:mb-6 md:p-1.5">
      <img
        src={host.image}
        alt={host.name}
        className="h-28 w-28 rounded-full object-cover sm:h-28 sm:w-28 md:h-32 md:w-32"
      />
    </div>

    {/* Name */}
    <h3 className="mb-1 text-xl font-bold text-gray-900 md:text-2xl">
      {host.name}
    </h3>

    {/* Location */}
    <p className="mb-5 text-center text-sm text-gray-500 md:mb-6 md:text-base">
      Co-host in {host.location}
    </p>

    {/* Divider */}
    <div className="mb-4 w-full border-t border-gray-200 md:mb-5" />

    {/* Stats */}
    <div className="mt-auto flex w-full items-center justify-center gap-4 text-sm md:gap-6 md:text-base">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1 font-semibold text-gray-900">
          <StarIcon />
          <span>{host.rating.toFixed(2)}</span>
        </div>
        <span className="text-xs text-gray-500 md:text-sm">guest rating</span>
      </div>
      <div className="h-8 w-px bg-gray-200 md:h-10" />
      <div className="flex flex-col items-center">
        <span className="font-semibold text-gray-900">{host.yearsHosting}</span>
        <span className="text-xs text-gray-500 md:text-sm">years hosting</span>
      </div>
    </div>
  </article>
);

export const CoHost = () => {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      {/* Header */}
      <div className="container mx-auto mb-10 max-w-7xl px-6 md:mb-12">
        <header className="text-center">
          <h2 className="text-title mb-4">
            A co-host can help
            <br />
            you get started
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-500 md:text-lg">
            Now you can hire a local co-host to help create your listing, get
            your space ready, and more.
          </p>
        </header>
      </div>

      {/* 
        Cards Layout:
        - All views use a flex row with fixed-width cards
        - Container is wider than viewport and centered
        - Overflow is clipped by the section's overflow-hidden
        
        Mobile Portrait: 2x2 grid, 120vw wide, centered
        Mobile Landscape: Single row of 5 cards, wider than viewport, clipped on edges
        Desktop: Single row of 5 cards, centered with clipping on edges
      */}

      {/* Mobile Portrait: 2-column grid */}
      <div className="md:hidden landscape:hidden">
        <div className="relative left-1/2 w-[120vw] -translate-x-1/2">
          <div className="grid grid-cols-2 gap-3 px-4">
            {coHosts.slice(0, 4).map((host) => (
              <CoHostCard key={host.id} host={host} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Landscape: Single row, clipped */}
      <div className="md:hidden portrait:hidden">
        <div className="relative left-1/2 w-[130vw] -translate-x-1/2">
          <div className="flex justify-center gap-3">
            {coHosts.map((host) => (
              <div key={host.id} className="w-[180px] flex-shrink-0">
                <CoHostCard host={host} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Single row, centered with edge clipping */}
      <div className="hidden md:block">
        <div className="relative left-1/2 w-[115vw] -translate-x-1/2">
          <div className="flex justify-center gap-6">
            {coHosts.map((host) => (
              <div key={host.id} className="w-100 shrink-0">
                <CoHostCard host={host} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Find a co-host button */}
      <div className="container mx-auto mt-10 max-w-7xl px-6 md:mt-12">
        <div className="flex justify-center">
          <a
            href="https://www.airbnb.com/co-hosts/results"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800"
          >
            Find a co-host
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoHost;
