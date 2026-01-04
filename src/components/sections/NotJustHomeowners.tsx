export const NotJustHomeowners = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full max-w-sm shrink-0 md:max-w-xs">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727390461611/original/1b918373-2070-41bd-a428-f8f96279f3a9.jpeg?im_w=960"
              alt="Airbnb-friendly apartment building"
              className="h-auto w-full rounded-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-title !md:text-[2.5rem] mb-4 !text-[2rem] leading-tight">
              Hosting isn't only for homeowners
            </h2>
            <p className="mb-4 text-[19px] tracking-tight text-gray-500">
              Airbnb-friendly apartments make it easy for you to rent, host, and
              earn extra income when you're away.
            </p>
            <a
              href="#"
              className="text-text-dark inline-block self-center rounded-lg px-3 py-2 text-[17px] font-semibold underline transition hover:bg-gray-100 md:self-start"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotJustHomeowners;
