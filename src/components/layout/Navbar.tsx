export const Navbar = () => {
  return (
    <nav className="border-border-light sticky top-0 right-0 left-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-16">
        <a
          href="/"
          className="text-primary flex items-center transition-opacity hover:opacity-80"
        >
          <img src="/airbnb.png" alt="Airbnb" className="h-8 w-auto" />
        </a>
        <a
          href="#get-started"
          className="from-primary via-primary-hover to-primary-light rounded-lg bg-linear-to-r px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
        >
          Get started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
