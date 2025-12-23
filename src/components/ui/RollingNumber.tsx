import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

// Generate array [0, 1, ... 9]
const NUMBERS = Array.from({ length: 10 }, (_, i) => i);

interface RollingDigitProps {
  digit: string;
}

const RollingDigit = ({ digit }: RollingDigitProps) => {
  // 1. Handle non-numeric characters (commas, decimals, $)
  // Render them static to avoid weird animation glitches
  if (!/^\d$/.test(digit)) {
    return <span className="inline-block">{digit}</span>;
  }

  const digitNumber = parseInt(digit, 10);

  return (
    <div
      className="relative inline-block overflow-hidden"
      style={{
        // Define the visible window height
        height: '1em',
        // '1ch' usually matches the width of a number in monospace/tabular fonts
        width: '0.95ch',
        verticalAlign: 'top', // Align with neighboring text
      }}
    >
      {/* GHOST: 
        Keeps the layout stable if fonts load slowly, but standardizing 
        on '1ch' width above usually handles this better for numbers.
      */}
      <span className="invisible absolute opacity-0">{digit}</span>

      <motion.div
        className="absolute top-0 left-0 flex w-full flex-col items-center"
        initial={false}
        animate={{ y: `-${digitNumber * 10}%` }}
        transition={{
          type: 'spring',
          stiffness: 100, // Speed
          damping: 18, // Bounciness (No wobbling)
        }}
        // CRITICAL FIX: Do NOT use inset-0.
        // We want this element to be tall (auto height based on children).
      >
        {NUMBERS.map((num) => (
          <div
            key={num}
            className="flex w-full items-center justify-center"
            // CRITICAL FIX: Force each number to be exactly the height of the window
            style={{ height: '1em' }}
          >
            {num}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

interface RollingNumberProps {
  value: number;
  className?: string;
  prefix?: string;
}

export const RollingNumber = ({
  value,
  className = '',
  prefix = '$',
}: RollingNumberProps) => {
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

  const chars = formatted.split('');

  return (
    <div
      className={cn('inline-flex items-center', className)}
      // tabular-nums is mandatory for this to align perfectly
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      <span>{prefix}</span>
      {chars.map((char, index) => (
        <RollingDigit key={index} digit={char} />
      ))}
    </div>
  );
};

export default RollingNumber;
