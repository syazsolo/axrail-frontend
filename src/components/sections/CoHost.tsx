import { CoHostCard, type CoHostPerson } from '@/components/ui/CoHostCard';
import { ActionButton } from '@/components/ui/ActionButton';

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

export const CoHost = () => {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      {/* Header */}
      <div className="container mx-auto mb-10 max-w-7xl px-6 md:mb-16">
        <header className="text-center">
          <h2 className="text-title mb-4">
            A co-host can help
            <br />
            you get started
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-500 md:text-2xl">
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
        <div className="relative left-1/2 w-[130vw] -translate-x-1/2">
          <div className="grid grid-cols-2 gap-4 px-4">
            {coHosts.slice(0, 4).map((host) => (
              <CoHostCard key={host.id} host={host} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Landscape: Single row, clipped */}
      <div className="md:hidden portrait:hidden">
        <div className="relative left-1/2 w-[130vw] -translate-x-1/2">
          <div className="flex justify-center gap-4">
            {coHosts.slice(0, 4).map((host) => (
              <div key={host.id} className="w-55 shrink-0">
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
              <div key={host.id} className="w-75 shrink-0">
                <CoHostCard host={host} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Find a co-host button */}
      <ActionButton
        href="https://www.airbnb.com/co-hosts/results"
        target="_blank"
        rel="noopener noreferrer"
      >
        Find a co-host
      </ActionButton>
    </section>
  );
};

export default CoHost;
