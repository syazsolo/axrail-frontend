import { useState, useEffect } from 'react';
import { ResponsiveDialog } from '@/components/ui/ResponsiveDialog';

interface NightsSelectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  nights: number;
  onUpdate: (nights: number) => void;
}

const CircleButton = ({
  onClick,
  disabled,
  icon,
}: {
  onClick: () => void;
  disabled?: boolean;
  icon: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="border-text-placeholder hover:border-text-dark disabled:border-text-placeholder/30 disabled:text-text-placeholder/30 flex h-12 w-12 items-center justify-center rounded-full border bg-white transition-all active:scale-95 disabled:pointer-events-none"
  >
    {icon}
  </button>
);

export const NightsSelectionDialog = ({
  isOpen,
  onClose,
  nights,
  onUpdate,
}: NightsSelectionDialogProps) => {
  const [localNights, setLocalNights] = useState(nights);

  // Sync state when dialog opens with new prop value
  useEffect(() => {
    if (isOpen) {
      setLocalNights(nights);
    }
  }, [isOpen, nights]);

  const handleDec = () => {
    if (localNights > 1) setLocalNights(localNights - 1);
  };
  const handleInc = () => {
    if (localNights < 30) setLocalNights(localNights + 1);
  };

  const handleSave = () => {
    onUpdate(localNights);
    onClose();
  };

  return (
    <ResponsiveDialog
      isOpen={isOpen}
      onClose={onClose}
      title="How many nights?"
      footer={
        <div className="border-t border-gray-100 p-6">
          <button
            onClick={handleSave}
            className="bg-text-dark w-full rounded-lg py-3.5 text-base font-semibold text-white transition-transform active:scale-[0.98]"
          >
            Update your estimate
          </button>
        </div>
      }
    >
      <div className="flex flex-col items-center py-4">
        <div className="flex items-center gap-6">
          <CircleButton
            onClick={handleDec}
            disabled={localNights <= 1}
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M26 16H6" />
              </svg>
            }
          />
          <div className="flex w-32 flex-col items-center gap-1">
            <div className="border-text-placeholder w-full rounded-lg border py-3 text-center text-3xl font-normal">
              {localNights}
            </div>
            <span className="text-text-dark text-xs font-semibold">Nights</span>
          </div>
          <CircleButton
            onClick={handleInc}
            disabled={localNights >= 30}
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M26 16H6" />
                <path d="M16 26V6" />
              </svg>
            }
          />
        </div>

        <p className="text-text-muted mt-8 text-center text-base font-[400] text-gray-500">
          Homes available all month average 22 nights booked
        </p>
      </div>
    </ResponsiveDialog>
  );
};

export default NightsSelectionDialog;
