import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '../../lib/utils';
import { useEffect } from 'react';
import { useIsMobile } from '../../hooks/use-is-mobile';

interface EarningsInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EarningsInfoDialog = ({
  isOpen,
  onClose,
}: EarningsInfoDialogProps) => {
  const isMobile = useIsMobile();

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const desktopAnimation = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 },
    transition: { duration: 0.2, ease: 'easeOut' as const },
  };

  const mobileAnimation = {
    initial: { y: '100%' },
    animate: { y: '5%' },
    exit: { y: '100%' },
    transition: { type: 'spring' as const, damping: 25, stiffness: 300 },
  };

  const animationProps = isMobile ? mobileAnimation : desktopAnimation;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog Container - positions the dialog */}
          <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center md:items-center md:p-4">
            {/* Dialog Content */}
            <motion.div
              {...animationProps}
              className={cn(
                'pointer-events-auto relative flex w-full max-w-lg flex-col overflow-hidden rounded-4xl bg-white shadow-xl',
                isMobile ? 'rounded-t-4xl' : 'rounded-4xl',
                isMobile ? 'h-[calc(100vh+24px)]' : 'h-[85vh]',
              )}
              role="dialog"
              aria-modal="true"
              aria-labelledby="earnings-dialog-title"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Close Button */}
              <div className="shrink-0 p-4">
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

              {/* Scrollable Content */}
              <div className="dialog-scrollbar flex-1 overflow-y-auto px-6 pb-16 md:px-8 md:pb-12">
                <h2
                  id="earnings-dialog-title"
                  className="text-text-dark mb-4 text-[34px] leading-[1.1] font-semibold tracking-tighter"
                >
                  How we estimate your earning potential
                </h2>

                <div className="text-text-dark space-y-4 text-[17.5px] leading-tight tracking-tight">
                  <p>
                    To estimate your earnings, we review the past 12 months of
                    booking data from similar Airbnb listings. We choose these
                    listings based on the information you share about your
                    place. If you enter an address, you'll get a more specific
                    estimate based on the listings closest to you. If you enter
                    an area, we look at the top 50% of similar listings in that
                    area, based on their earnings.
                  </p>

                  <p>
                    Based on these similar listings, we estimate the average
                    nightly earnings and multiply that number by the number of
                    nights you indicate you will host. We also provide the
                    average number of nights booked per month in your area,
                    assuming places are available on Airbnb every night of the
                    month. (Nightly earnings are the price set by each Host
                    minus the{' '}
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
                    Your actual earnings will depend on several factors,
                    including your availability, price, and the demand in your
                    area. Your ability to host may also depend on local laws.
                    Learn more about{' '}
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
                    These earning estimates are not an appraisal or estimate of
                    property value.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EarningsInfoDialog;
