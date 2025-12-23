import { useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '../../lib/utils';

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
    // Account for thumb width (28px / 2 = 14px) offset at edges
    const thumbOffset = 14;
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
      <div className="relative h-1.5 w-full rounded-full bg-[#ddd]">
        {/* Filled track */}
        <div
          className="bg-primary absolute top-0 left-0 h-full rounded-full"
          style={{ width: `${sliderProgress}%` }}
        />
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
        className="absolute top-1/2 left-0 h-6 w-full -translate-y-1/2 cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[1.5px] [&::-webkit-slider-thumb]:border-[#b0b0b0] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_2px_6px_rgba(0,0,0,0.15)] [&::-webkit-slider-thumb]:transition-shadow [&::-webkit-slider-thumb]:hover:shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
        aria-label={`Number of ${nightLabel}`}
      />
    </div>
  );
};

export default NightsSlider;
