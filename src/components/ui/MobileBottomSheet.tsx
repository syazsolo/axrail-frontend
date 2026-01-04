import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MobileBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  /**
   * CSS value for the top gap. Defaults to safe-area-inset-top or 24px.
   * The sheet will cap its height at `100dvh - maxHeightGap`.
   */
  maxHeightGap?: string;
  /** Additional class names for the content container */
  className?: string;
}

export const MobileBottomSheet = ({
  isOpen,
  onClose,
  children,
  maxHeightGap = 'max(24px, env(safe-area-inset-top))',
  className,
}: MobileBottomSheetProps) => {
  // Prevent body scroll when sheet is open
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

          {/* Sheet Container - positions the sheet at the bottom */}
          <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center">
            {/* Sheet wrapper */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                maxHeight: `calc(100dvh - ${maxHeightGap})`,
              }}
              className={cn(
                'pointer-events-auto relative z-50 flex w-full flex-col',
                className,
              )}
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Infinite Skirt Background
                  This element sits behind the content and extends downwards 
                  to cover the gap when the sheet bounces/overshoots. 
              */}
              <div
                className="absolute inset-x-0 top-0 -bottom-[100dvh] rounded-t-4xl bg-white shadow-xl"
                aria-hidden="true"
              />

              {/* Content Container 
                  Handles the actual clipping of the content at the top corners.
                  Must have a background to cover the skirt's top connection.
              */}
              <div className="relative flex flex-1 flex-col overflow-hidden rounded-t-4xl bg-white">
                <div className="dialog-scrollbar flex-1 overflow-y-auto">
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileBottomSheet;
