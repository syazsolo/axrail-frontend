import { useEffect, useState } from 'react';

import { NightsSlider } from '../../ui/NightsSlider';
import { RollingNumber } from '../../ui/RollingNumber';
import { cn } from '../../../lib/utils';

const SearchIcon = () => (
  <svg
    className="text-primary h-5 w-5 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

export const CouldMake = () => {
  const [nights, setNights] = useState(7);
  const [isDragging, setIsDragging] = useState(false);
  const nightlyRate = 52;

  // Displayed earnings that only updates when dragging is done
  const [displayedEarnings, setDisplayedEarnings] = useState(7 * nightlyRate);

  // Update displayed earnings only when dragging ends
  useEffect(() => {
    if (!isDragging) {
      setDisplayedEarnings(nights * nightlyRate);
    }
  }, [isDragging, nights, nightlyRate]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Smart singular/plural for "night(s)"
  const nightLabel = nights === 1 ? 'night' : 'nights';

  return (
    <section
      className="flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-white py-8"
      id="get-started"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="mx-auto max-w-xl text-center lg:max-w-lg">
            <h1 className="mb-6 text-[40px] leading-[1.1] font-bold tracking-tight md:text-5xl lg:text-[3.5rem]">
              Your home could make <RollingNumber value={displayedEarnings} />{' '}
              on Airbnb
            </h1>

            {/* Nights and rate info - hidden while dragging */}
            <div
              className={cn(
                'transition-opacity duration-150',
                isDragging ? 'opacity-0' : 'opacity-100',
              )}
            >
              <p className="text-text-dark mb-1 text-base">
                <button className="hover:text-text-muted cursor-pointer underline decoration-1 underline-offset-2">
                  {nights} {nightLabel}
                </button>
                <span className="mx-1">·</span>
                <span>{formatCurrency(nightlyRate)}/night</span>
              </p>

              {/* Learn how link */}
              <p className="mb-6 text-base">
                <button className="text-text-dark hover:text-text-muted cursor-pointer underline decoration-1 underline-offset-2">
                  Learn how we estimate earnings
                </button>
              </p>
            </div>

            {/* Slider */}
            <NightsSlider
              value={nights}
              onChange={setNights}
              onDragChange={setIsDragging}
              min={1}
              max={30}
              className="mb-8"
            />

            {/* Search input */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd] bg-white px-5 py-3.5 shadow-sm">
              <SearchIcon />
              <span className="text-text-dark text-[15px]">
                Kuala Lumpur · Entire place · 2 bedrooms
              </span>
            </div>
          </div>

          {/* Right: Map Placeholder */}
          <div className="relative flex h-100 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#f0f0f0] shadow-sm lg:h-130">
            {/* Price Pins */}
            <div className="pointer-events-none absolute inset-0">
              <span className="text-text-dark absolute top-[18%] left-[22%] rounded-full bg-white px-2.5 py-1.5 text-sm font-semibold shadow-md">
                $46
              </span>
              <span className="text-text-dark absolute top-[15%] left-[55%] rounded-full bg-white px-2.5 py-1.5 text-sm font-semibold shadow-md">
                $86
              </span>
              <span className="text-text-dark absolute top-[25%] left-[70%] rounded-full bg-white px-2.5 py-1.5 text-sm font-semibold shadow-md">
                $126
              </span>
              <span className="text-text-dark absolute top-[35%] left-[45%] rounded-full bg-white px-2.5 py-1.5 text-sm font-semibold shadow-md">
                $101
              </span>
              <span className="text-text-dark absolute top-[48%] left-[60%] rounded-full bg-white px-2.5 py-1.5 text-sm font-semibold shadow-md">
                $117
              </span>
              <span className="text-text-dark absolute top-[62%] left-[25%] rounded-full bg-white px-2.5 py-1.5 text-sm font-semibold shadow-md">
                $386
              </span>
              <span className="text-text-dark absolute top-[55%] left-[72%] rounded-full bg-white px-2.5 py-1.5 text-sm font-semibold shadow-md">
                $88
              </span>
              <span className="text-text-dark absolute top-[75%] left-[65%] rounded-full bg-white px-2.5 py-1.5 text-sm font-semibold shadow-md">
                $81
              </span>
            </div>

            {/* Search this area button */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <button className="text-text-dark flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-md">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 4v6h6" />
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                </svg>
                Search this area
              </button>
            </div>

            {/* Zoom controls */}
            <div className="absolute right-4 bottom-16 flex flex-col overflow-hidden rounded-lg bg-white shadow-md">
              <button className="text-text-dark px-3 py-2 text-lg font-medium transition-colors hover:bg-gray-100">
                +
              </button>
              <div className="h-px bg-gray-200" />
              <button className="text-text-dark px-3 py-2 text-lg font-medium transition-colors hover:bg-gray-100">
                −
              </button>
            </div>

            {/* Map attribution placeholder */}
            <div className="absolute right-4 bottom-4 text-[10px] text-gray-500">
              Map data ©2025 Google
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouldMake;
