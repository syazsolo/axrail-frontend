import { MobileBottomSheet } from './MobileBottomSheet';
import { useIsMobile } from '@/hooks/use-is-mobile';

interface EarningsInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EarningsInfoDialog = ({
  isOpen,
  onClose,
}: EarningsInfoDialogProps) => {
  const isMobile = useIsMobile();

  // For desktop, you may want a different dialog in the future.
  // For now, we use MobileBottomSheet for mobile and fall back for desktop.
  if (!isMobile) {
    // TODO: Implement desktop dialog or use existing desktop pattern
    // For now, using the same mobile bottom sheet on desktop too
  }

  return (
    <MobileBottomSheet isOpen={isOpen} onClose={onClose} className="max-w-lg">
      {/* Header with Close Button */}
      <div className="shrink-0 p-4 pt-[max(1rem,env(safe-area-inset-top))]">
        <button
          onClick={onClose}
          className="text-text-dark flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          aria-label="Close dialog"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="px-6 pb-16 md:px-8 md:pb-12">
        <h2
          id="earnings-dialog-title"
          className="text-text-dark mb-4 text-[34px] leading-[1.1] font-semibold tracking-tighter"
        >
          How we estimate your earning potential
        </h2>

        <div className="text-text-dark space-y-4 text-[17.5px] leading-tight tracking-tight">
          <p>
            To estimate your earnings, we review the past 12 months of booking
            data from similar Airbnb listings. We choose these listings based on
            the information you share about your place. If you enter an address,
            you'll get a more specific estimate based on the listings closest to
            you. If you enter an area, we look at the top 50% of similar
            listings in that area, based on their earnings.
          </p>

          <p>
            Based on these similar listings, we estimate the average nightly
            earnings and multiply that number by the number of nights you
            indicate you will host. We also provide the average number of nights
            booked per month in your area, assuming places are available on
            Airbnb every night of the month. (Nightly earnings are the price set
            by each Host minus the{' '}
            <a
              href="https://www.airbnb.com/help/article/1857"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-muted font-semibold underline decoration-1 underline-offset-2"
            >
              Airbnb Host service fee
            </a>
            . We don't subtract taxes or hosting expenses.)
          </p>

          <p>
            Your actual earnings will depend on several factors, including your
            availability, price, and the demand in your area. Your ability to
            host may also depend on local laws. Learn more about{' '}
            <a
              href="https://www.airbnb.com/help/article/1376"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-muted font-semibold underline decoration-1 underline-offset-2"
            >
              responsible hosting
            </a>
            .
          </p>

          <p>
            These earning estimates are not an appraisal or estimate of property
            value.
          </p>
        </div>
      </div>
    </MobileBottomSheet>
  );
};

export default EarningsInfoDialog;
