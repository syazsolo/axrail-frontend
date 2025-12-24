import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

export const MobileNavbar = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsLogoVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header - transparent background, logo only */}
      <nav className="sticky top-0 z-50 bg-transparent">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-4">
          <a
            href="/"
            className="text-primary flex items-center transition-opacity hover:opacity-80"
          >
            <motion.div
              animate={{
                opacity: isLogoVisible ? 1 : 0,
                y: isLogoVisible ? 0 : -20,
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2">
                <img
                  src="/airbnb.png"
                  alt="Airbnb"
                  className="-ml-1 h-8 w-auto"
                />
                <p className="text-[6px]">temporary</p>
              </div>
            </motion.div>
          </a>
        </div>
      </nav>

      {/* Sticky bottom CTA */}
      <div className="border-border-light fixed right-0 bottom-0 left-0 z-50 border-t bg-white/30 px-6 py-4 backdrop-blur-sm">
        <a
          href="#get-started"
          className="from-primary block w-full rounded-full bg-linear-to-tr to-[#BD1E59] py-3 text-center text-[17px] font-semibold text-white transition-all hover:shadow-lg"
        >
          Get started
        </a>
      </div>
    </>
  );
};

export default MobileNavbar;
