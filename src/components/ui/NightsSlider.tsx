import { useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '../../lib/utils';

// Slider knob size in Tailwind units (10 = 2.5rem = 40px)
// Adjust this value to change the slider thumb size
const KNOB_SIZE = 9;
const KNOB_SIZE_PX = KNOB_SIZE * 4; // Convert to pixels (1 Tailwind unit = 4px)

interface NightsSliderProps {
  value: number;
  onChange: (value: number) => void;
  onDragChange?: (isDragging: boolean) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const NightsSlider = ({
  value,
  onChange,
  onDragChange,
  min = 1,
  max = 30,
  className = '',
}: NightsSliderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Calculate slider progress percentage for the filled track
  const sliderProgress = useMemo(() => {
    return ((value - min) / (max - min)) * 100;
  }, [value, min, max]);

  // Smart singular/plural for "night(s)"
  const nightLabel = value === 1 ? 'night' : 'nights';

  // Calculate popover position based on thumb position
  const getPopoverStyle = useMemo(() => {
    // Account for thumb width offset at edges
    const thumbOffset = KNOB_SIZE_PX / 2;
    const trackWidth = sliderRef.current?.offsetWidth || 0;

    // Calculate actual thumb position
    const thumbPosition =
      thumbOffset + ((trackWidth - thumbOffset * 2) * sliderProgress) / 100;

    return {
      left: `${thumbPosition}px`,
      transform: `translateX(-50%)`,
    };
  }, [sliderProgress]);

  // Show popover during drag or hover
  useEffect(() => {
    if (isDragging) {
      setShowPopover(true);
    }
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
    setShowPopover(true);
    onDragChange?.(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    onDragChange?.(false);
    if (!isHovering) {
      setShowPopover(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowPopover(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!isDragging) {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      onDragChange?.(false);
      if (!isHovering) {
        setShowPopover(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleGlobalMouseUp);
      window.addEventListener('touchend', handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, [isDragging, isHovering, onDragChange]);

  return (
    <div className={cn('relative', className)}>
      {/* Popover */}
      <div
        ref={popoverRef}
        className={cn(
          'absolute -top-18 z-10 rounded-full bg-[#222] px-4 py-2 text-base font-medium whitespace-nowrap text-white shadow-lg transition-opacity duration-150',
          showPopover ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        style={getPopoverStyle}
      >
        {value} {nightLabel}
      </div>

      {/* Track background */}
      <div className="relative h-1.5 w-full">
        <div
          className={cn(
            'absolute top-1/2 left-0 w-full -translate-y-1/2 rounded-full bg-[#ddd] transition-all duration-200 ease-out',
            isDragging ? 'h-3' : 'h-1',
          )}
        >
          {/* Filled track */}
          <div
            className="bg-primary absolute top-0 left-0 h-full rounded-full"
            style={{ width: `${sliderProgress}%` }}
          />
        </div>
      </div>

      {/* Range input */}
      <input
        ref={sliderRef}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 cursor-pointer appearance-none bg-transparent [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-[#ddd] [&::-moz-range-thumb]:bg-[#f7f7f7] [&::-moz-range-thumb]:shadow-[2px_2px_8px_rgba(0,0,0,0.15)] [&::-moz-range-thumb]:transition-shadow [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-[#ddd] [&::-webkit-slider-thumb]:bg-[#f5f5f5] [&::-webkit-slider-thumb]:shadow-[2px_2px_8px_rgba(0,0,0,0.15)] [&::-webkit-slider-thumb]:transition-shadow [&::-webkit-slider-thumb]:hover:shadow-[3px_3px_12px_rgba(0,0,0,0.2)]"
        style={{
          // Use CSS custom property for dynamic thumb size
          ['--thumb-size' as string]: `${KNOB_SIZE_PX}px`,
        }}
        aria-label={`Number of ${nightLabel}`}
      />
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          width: ${KNOB_SIZE_PX}px;
          height: ${KNOB_SIZE_PX}px;
        }
        input[type="range"]::-moz-range-thumb {
          width: ${KNOB_SIZE_PX}px;
          height: ${KNOB_SIZE_PX}px;
        }
      `}</style>
    </div>
  );
};

export default NightsSlider;
