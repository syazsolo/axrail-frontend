import { useEffect, useState } from 'react';

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
    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 transition-all hover:border-black hover:text-black active:scale-95 disabled:pointer-events-none disabled:border-gray-100 disabled:text-gray-200"
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
            className="bg-text-dark w-full cursor-pointer rounded-lg py-3.5 text-base font-semibold text-white transition-transform hover:bg-black active:scale-[0.98]"
          >
            Update your estimate
          </button>
        </div>
      }
    >
      <div className="flex flex-col items-center pt-4 pb-8">
        <div className="flex items-center gap-10">
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
                strokeWidth="2"
              >
                <path d="M26 16H6" />
              </svg>
            }
          />
          <div className="flex w-[100px] flex-col items-center gap-2">
            <div className="text-text-dark w-full rounded-lg border border-gray-300 py-3 text-center text-3xl font-normal">
              {localNights}
            </div>
            <span className="text-text-dark text-xs font-normal">Nights</span>
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
                strokeWidth="2"
              >
                <path d="M26 16H6" />
                <path d="M16 26V6" />
              </svg>
            }
          />
        </div>

        <p className="text-text-muted mt-8 max-w-[280px] text-center text-base leading-snug">
          Homes available all month average 22 nights booked
        </p>
      </div>
    </ResponsiveDialog>
  );
};

export default NightsSelectionDialog;
