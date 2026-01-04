import { useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

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

  // Calculate thumb position correction
  // Matches native range input behavior:
  // The thumb center should travel from (KnobSize/2) to (Width - KnobSize/2).
  // Formula: Percent * (Width - KnobSize) + HalfKnob
  // CSS Calc: Percent% - (Percent * KnobSize / 100) + HalfKnob
  // This works for ANY slider width purely with CSS.
  const thumbPositionStyle = useMemo(() => {
    const halfKnob = KNOB_SIZE_PX / 2;
    // The exact center position of the thumb
    const centerPos = `calc(${sliderProgress}% + ${halfKnob}px - ${(sliderProgress * KNOB_SIZE_PX) / 100}px)`;
    return {
      left: centerPos,
    };
  }, [sliderProgress]);

  // Calculate popover position based on thumb position
  const getPopoverStyle = useMemo(() => {
    return {
      left: thumbPositionStyle.left,
      transform: `translateX(-50%)`,
    };
  }, [thumbPositionStyle]);

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
          'absolute -top-22 z-10 rounded-full bg-[#222] px-4 py-2 text-[1.05rem] font-medium whitespace-nowrap text-white shadow-lg transition-opacity duration-150 md:text-[1.2rem]',
          showPopover ? 'opacity-100' : 'pointer-events-none opacity-0',
          // Add transition for movement when not dragging
          !isDragging && 'transition-[left] duration-300 ease-out',
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
            className={cn(
              'bg-primary absolute top-0 left-0 h-full rounded-full',
              // Add transition for width when not dragging
              !isDragging && 'transition-[width] duration-300 ease-out',
            )}
            style={{ width: `${sliderProgress}%` }}
          />
        </div>
      </div>

      {/* Visual Thumb (replaces native thumb appearance) */}
      <div
        className={cn(
          'pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ddd] bg-[#f5f5f5] shadow-[2px_2px_8px_rgba(0,0,0,0.15)] transition-shadow hover:shadow-[3px_3px_12px_rgba(0,0,0,0.2)]',
          // Add transition for left position when not dragging
          !isDragging && 'transition-[left] duration-300 ease-out',
        )}
        style={{
          left: thumbPositionStyle.left,
          width: `${KNOB_SIZE_PX}px`,
          height: `${KNOB_SIZE_PX}px`,
        }}
      />

      {/* Range input (Invisible but interactive) */}
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
        className={cn(
          'absolute top-1/2 left-0 z-20 w-full -translate-y-1/2 cursor-pointer appearance-none bg-transparent opacity-0',
        )}
        aria-label={`Number of ${nightLabel}`}
      />
    </div>
  );
};

export default NightsSlider;
