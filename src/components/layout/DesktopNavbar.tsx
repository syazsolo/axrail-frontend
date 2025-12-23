import { useEffect, useState } from 'react';

import { cn } from '../../lib/utils';

export const DesktopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'sticky top-0 right-0 left-0 z-50 bg-white/90 backdrop-blur-sm',
        isScrolled && 'border-border-light border-b',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a
          href="/"
          className="text-primary -ml-1 flex items-center transition-opacity hover:opacity-80"
        >
          <img src="/airbnb.png" alt="Airbnb" className="h-10 w-auto" />
        </a>
        <a
          href="#get-started"
          className="from-primary rounded-full bg-linear-to-tr to-[#BD1E59] px-7 py-3 text-[17px] font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
        >
          Get started
        </a>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
