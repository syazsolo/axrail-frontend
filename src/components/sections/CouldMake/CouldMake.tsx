import { useState, useMemo } from 'react';

const LocationIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const CouldMake = () => {
  const [nights, setNights] = useState(7);

  const estimatedEarnings = useMemo(() => {
    const nightlyRate = 150;
    return nights * nightlyRate;
  }, [nights]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section
      className="flex min-h-[calc(100vh-80px)] items-center overflow-hidden py-12"
      id="get-started"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl lg:max-w-none">
            <h1 className="mb-8 text-4xl leading-tight font-extrabold text-[var(--color-text-dark)] md:text-5xl lg:text-6xl">
              Your home could make{' '}
              <span className="text-[var(--color-primary)]">
                {formatCurrency(estimatedEarnings)}
              </span>{' '}
              on Airbnb
            </h1>

            <div className="mb-8 flex items-center gap-2 rounded-2xl bg-[var(--color-bg-light)] p-4 text-sm text-[var(--color-text-muted)]">
              <LocationIcon />
              <span className="flex-1">
                Kuala Lumpur · Entire place · 2 bedrooms
              </span>
              <button className="font-semibold text-[var(--color-text-dark)] underline transition-colors hover:text-[var(--color-text-muted)]">
                Edit
              </button>
            </div>

            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between text-base text-[var(--color-text-muted)]">
                <span>Nights booked per month</span>
                <span className="font-semibold text-[var(--color-text-dark)]">
                  {nights} nights
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={nights}
                onChange={(e) => setNights(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[var(--color-border)] [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
                aria-label="Number of nights"
              />
            </div>

            <a
              href="#"
              className="block w-full rounded-lg bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              Get started
            </a>

            <p className="mt-4 text-center text-sm text-[var(--color-text-muted)]">
              <a
                href="#"
                className="font-semibold text-[var(--color-text-dark)] underline hover:text-[var(--color-text-muted)]"
              >
                Learn how we estimate your earnings
              </a>
            </p>
          </div>

          {/* Right: Map */}
          <div className="relative flex h-[350px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 lg:h-[500px]">
            {/* Price Pins */}
            <div className="pointer-events-none absolute inset-0">
              <span className="animate-pulse-slow absolute top-[20%] left-[25%] rounded-full bg-[var(--color-primary)] px-3 py-2 text-sm font-semibold text-white shadow-md">
                $142
                <span className="absolute bottom-[-6px] left-1/2 h-0 w-0 -translate-x-1/2 border-t-[6px] border-r-[6px] border-l-[6px] border-t-[var(--color-primary)] border-r-transparent border-l-transparent"></span>
              </span>
              <span className="animate-pulse-slow absolute top-[35%] left-[60%] rounded-full bg-[var(--color-primary)] px-3 py-2 text-sm font-semibold text-white shadow-md [animation-delay:0.3s]">
                $168
                <span className="absolute bottom-[-6px] left-1/2 h-0 w-0 -translate-x-1/2 border-t-[6px] border-r-[6px] border-l-[6px] border-t-[var(--color-primary)] border-r-transparent border-l-transparent"></span>
              </span>
              <span className="animate-pulse-slow absolute top-[55%] left-[40%] rounded-full bg-[var(--color-primary)] px-3 py-2 text-sm font-semibold text-white shadow-md [animation-delay:0.6s]">
                $155
                <span className="absolute bottom-[-6px] left-1/2 h-0 w-0 -translate-x-1/2 border-t-[6px] border-r-[6px] border-l-[6px] border-t-[var(--color-primary)] border-r-transparent border-l-transparent"></span>
              </span>
              <span className="animate-pulse-slow absolute top-[70%] left-[70%] rounded-full bg-[var(--color-primary)] px-3 py-2 text-sm font-semibold text-white shadow-md [animation-delay:0.9s]">
                $189
                <span className="absolute bottom-[-6px] left-1/2 h-0 w-0 -translate-x-1/2 border-t-[6px] border-r-[6px] border-l-[6px] border-t-[var(--color-primary)] border-r-transparent border-l-transparent"></span>
              </span>
            </div>
            <div className="text-center text-[var(--color-text-muted)]">
              <div className="mb-4 text-6xl">🗺️</div>
              <p>Interactive map with nearby listings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouldMake;
