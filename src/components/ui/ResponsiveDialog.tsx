import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { MobileBottomSheet } from './MobileBottomSheet';

interface ResponsiveDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  /** Additional class names for the content container */
  className?: string;
  /**
   * CSS value for the mobile bottom sheet top gap.
   * Defaults to safe-area-inset-top or 24px.
   */
  mobileMaxHeightGap?: string;
  /** Content to display fixed at the bottom of the dialog */
  footer?: ReactNode;
  /**
   * Layout variant.
   * - 'default': Standard dialog with title in the header.
   * - 'standalone': Minimal header, large title in the body.
   * @default 'default'
   */
  variant?: 'default' | 'standalone';
}

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
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
);

/**
 * A responsive dialog component that automatically chooses the right
 * presentation based on the device:
 * - Mobile: Bottom sheet sliding up (using MobileBottomSheet)
 * - Desktop: Centered modal with fade/scale animation
 */
export const ResponsiveDialog = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  mobileMaxHeightGap,
  footer,
  variant = 'default',
}: ResponsiveDialogProps) => {
  const isMobile = useIsMobile(500);

  // Desktop: Prevent body scroll when dialog is open
  // MobileBottomSheet handles this internally for mobile
  useEffect(() => {
    if (isMobile) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      if (!isMobile) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen, isMobile]);

  // Desktop: Close on Escape key
  // MobileBottomSheet handles this internally for mobile
  useEffect(() => {
    if (isMobile) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, isMobile]);

  // Mobile: Delegate to MobileBottomSheet
  if (isMobile) {
    return (
      <MobileBottomSheet
        isOpen={isOpen}
        onClose={onClose}
        maxHeightGap={mobileMaxHeightGap}
        className={className}
        footer={footer}
      >
        <div className="flex h-full flex-col pt-[max(0rem,env(safe-area-inset-top))]">
          {/* Mobile Header */}
          <div
            className={cn(
              'flex shrink-0 items-center justify-between p-4',
              variant === 'default' && title && 'border-b border-gray-100',
            )}
          >
            <CloseButton onClick={onClose} />
            {variant === 'default' && title && (
              <div className="text-text-dark absolute left-1/2 -translate-x-1/2 text-base font-semibold">
                {title}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-8">
            {variant === 'standalone' && title && (
              <div className="text-text-dark mb-4 text-[34px] leading-[1.1] font-semibold tracking-tighter">
                {title}
              </div>
            )}
            {children}
          </div>
        </div>
      </MobileBottomSheet>
    );
  }

  // Desktop: Centered animated dialog
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

          {/* Dialog Container */}
          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4">
            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={cn(
                'pointer-events-auto relative flex h-full w-full flex-col overflow-hidden rounded-none bg-white shadow-xl md:h-auto md:max-h-[85vh] md:max-w-lg md:rounded-2xl',
                className,
              )}
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Desktop Header */}
              <div
                className={cn(
                  'relative flex shrink-0 items-center justify-between p-4',
                  variant === 'default' && title && 'border-b border-gray-100',
                )}
              >
                <CloseButton onClick={onClose} />
                {variant === 'default' && title && (
                  <div className="text-text-dark absolute left-1/2 -translate-x-1/2 text-[18px] font-bold">
                    {title}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="dialog-scrollbar flex-1 overflow-y-auto px-6 py-6">
                {variant === 'standalone' && title && (
                  <div className="text-text-dark mb-4 text-[34px] leading-[1.1] font-semibold tracking-tighter">
                    {title}
                  </div>
                )}
                {children}
              </div>

              {/* Footer */}
              {footer && <div className="shrink-0">{footer}</div>}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveDialog;
