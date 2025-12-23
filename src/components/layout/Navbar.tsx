import { useEffect, useState } from 'react';

export const Navbar = () => {
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
      className={`border-border-light sticky top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-sm ${
        isScrolled ? 'border-b' : ''
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between md:h-20">
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

export default Navbar;
