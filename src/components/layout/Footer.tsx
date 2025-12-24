interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Get help with a safety issue', href: '#' },
      { label: 'AirCover', href: '#' },
      { label: 'Travel insurance', href: '#' },
      { label: 'Anti-discrimination', href: '#' },
      { label: 'Disability support', href: '#' },
      { label: 'Cancellation options', href: '#' },
      { label: 'Report neighborhood concern', href: '#' },
    ],
  },
  {
    title: 'Hosting',
    links: [
      { label: 'Airbnb your home', href: '#' },
      { label: 'Airbnb your experience', href: '#' },
      { label: 'Airbnb your service', href: '#' },
      { label: 'AirCover for Hosts', href: '#' },
      { label: 'Hosting resources', href: '#' },
      { label: 'Community forum', href: '#' },
      { label: 'Hosting responsibly', href: '#' },
      { label: 'Airbnb-friendly apartments', href: '#' },
      { label: 'Join a free Hosting class', href: '#' },
      { label: 'Find a co-host', href: '#' },
      { label: 'Refer a host', href: '#' },
    ],
  },
  {
    title: 'Airbnb',
    links: [
      { label: '2025 Summer Release', href: '#' },
      { label: 'Newsroom', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Investors', href: '#' },
      { label: 'Gift cards', href: '#' },
      { label: 'Airbnb.org emergency stays', href: '#' },
    ],
  },
];

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: 'block',
      height: '16px',
      width: '16px',
      fill: 'currentcolor',
    }}
  >
    <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.01-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-label="Navigate to Facebook"
    role="img"
    focusable="false"
    style={{
      display: 'block',
      height: '18px',
      width: '18px',
      fill: 'currentcolor',
    }}
  >
    <path d="M30 0H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h15.07V19.52h-4.12v-4.77h4.12v-3.52c0-4.08 2.49-6.3 6.13-6.3a33.82 33.82 0 0 1 3.68.19v4.27h-2.53c-1.98 0-2.36.94-2.36 2.32v3.04h4.72l-.62 4.77h-4.1V32H30a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-label="Navigate to X"
    role="img"
    focusable="false"
    style={{
      display: 'block',
      height: '18px',
      width: '18px',
      fill: 'currentcolor',
    }}
  >
    <path d="M18.42 14.01 29.24 1h-2.57l-9.39 10.9L9.5 1H1.05l11.34 16.49L1.05 31h2.57l9.91-11.52L21.77 31h8.46L18.42 14.01Zm-3.51 4.08-1.15-1.64L4.66 2.92h3.93l7.37 10.53 1.15 1.64 9.58 13.7h-3.93l-7.85-11.22v.02Z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-label="Navigate to Instagram"
    role="img"
    focusable="false"
    style={{
      display: 'block',
      height: '18px',
      width: '18px',
      fill: 'currentcolor',
    }}
  >
    <path d="M16 2.88c4.27 0 4.78.02 6.47.1 1.56.07 2.41.33 2.97.55.75.29 1.28.64 1.84 1.2s.91 1.1 1.2 1.84c.22.57.48 1.41.55 2.97.08 1.69.1 2.2.1 6.47s-.02 4.78-.1 6.47c-.07 1.56-.33 2.41-.55 2.97-.29.75-.64 1.28-1.2 1.84s-1.1.91-1.84 1.2c-.56.22-1.41.48-2.97.55-1.69.08-2.2.1-6.47.1s-4.78-.02-6.47-.1c-1.56-.07-2.41-.33-2.97-.55a4.96 4.96 0 0 1-1.84-1.2 4.96 4.96 0 0 1-1.2-1.84c-.22-.56-.48-1.41-.55-2.97-.08-1.69-.1-2.2-.1-6.47s.02-4.78.1-6.47c.07-1.56.33-2.41.55-2.97.29-.75.64-1.28 1.2-1.84s1.1-.91 1.84-1.2c.56-.22 1.41-.48 2.97-.55 1.69-.08 2.2-.1 6.47-.1zM16 0c-4.35 0-4.89.02-6.6.1-1.7.08-2.86.35-3.88.75a7.84 7.84 0 0 0-2.83 1.84A7.84 7.84 0 0 0 .85 5.52C.45 6.54.18 7.7.1 9.4.02 11.1 0 11.65 0 16s.02 4.89.1 6.6c.08 1.7.35 2.86.75 3.88a7.84 7.84 0 0 0 1.84 2.83 7.84 7.84 0 0 0 2.83 1.84c1.02.4 2.18.67 3.88.75 1.71.08 2.25.1 6.6.1s4.89-.02 6.6-.1c1.7-.08 2.86-.35 3.88-.75a7.84 7.84 0 0 0 2.83-1.84 7.84 7.84 0 0 0 1.84-2.83c.4-1.02.67-2.18.75-3.88.08-1.71.1-2.25.1-6.6s-.02-4.89-.1-6.6c-.08-1.7-.35-2.86-.75-3.88a7.84 7.84 0 0 0-1.84-2.83A7.84 7.84 0 0 0 26.48.85c-1.02-.4-2.18-.67-3.88-.75C20.89.02 20.35 0 16 0z"></path>
    <path d="M16 7.78a8.22 8.22 0 1 0 0 16.44 8.22 8.22 0 0 0 0-16.44zm0 13.55a5.33 5.33 0 1 1 0-10.66 5.33 5.33 0 0 1 0 10.66z"></path>
    <circle cx="24.54" cy="7.46" r="1.92"></circle>
  </svg>
);

const PrivacyChoicesIcon = () => (
  <svg
    style={{ width: '26px', height: '12px' }}
    role="img"
    viewBox="0 0 30 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z"
      fill="#06F"
    ></path>
    <path
      d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z"
      fill="#fff"
    ></path>
    <path
      d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"
      fill="#fff"
    ></path>
    <path
      d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"
      fill="#fff"
    ></path>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-bg-light border-t">
      <div className="mx-auto max-w-440 px-6 md:px-10 lg:px-24">
        {/* Disclaimer Section */}
        <div className="border-border px-0 py-6 lg:px-12">
          <p className="text-text-muted text-sm leading-5">
            Hosts on the Co-Host Network typically have high ratings, low
            cancellation rates, and established Airbnb hosting experience.
            Ratings are based on guest reviews for listings they host or co-host
            and may not represent the co-host's unique services.
          </p>
          <p className="text-text-muted mt-3 text-sm leading-5">
            Co-Host Network is powered by Airbnb Global Services Limited, Airbnb
            Living LLC, and Airbnb Plataforma Digital Ltda. Available in select
            locations only.{' '}
          </p>
          <p className="text-sm leading-5 text-gray-500">
            <a
              href="#"
              className="font-semibold text-gray-500 underline hover:text-gray-600"
            >
              Learn more
            </a>
            .
          </p>
        </div>

        {/* Link Columns */}
        <div className="py-12">
          {/* Mobile: Stacked columns with dividers */}
          <div className="lg:hidden">
            {footerColumns.map((column, index) => (
              <div
                key={index}
                className={`${index > 0 ? 'border-border mt-8 border-t pt-8' : ''}`}
              >
                <h3 className="text-text-dark mb-4 text-[16px] font-semibold">
                  {column.title}
                </h3>
                <nav className="flex flex-col gap-3">
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="text-text-dark text-sm hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Desktop: 3 columns side by side */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
            {footerColumns.map((column, index) => (
              <div key={index}>
                <h3 className="text-text-dark mb-4 text-sm font-semibold">
                  {column.title}
                </h3>
                <nav className="flex flex-col gap-3">
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="text-text-dark text-sm hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border border-t py-6">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Language and Currency */}
            <div className="mb-4 flex items-center gap-3">
              <button className="text-text-dark flex items-center gap-2 text-sm font-semibold hover:underline">
                <GlobeIcon />
                <span>English (US)</span>
              </button>
              <span className="text-text-dark text-sm font-semibold">
                RM MYR
              </span>
            </div>

            {/* Social Icons */}
            <div className="mb-4 flex items-center gap-4">
              <a
                href="#"
                className="text-text-dark hover:opacity-70"
                aria-label="Navigate to Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="text-text-dark hover:opacity-70"
                aria-label="Navigate to X"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="text-text-dark hover:opacity-70"
                aria-label="Navigate to Instagram"
              >
                <InstagramIcon />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-text-dark mb-2 text-sm">
              © {currentYear} Airbnb, Inc.
            </p>

            {/* Legal Links */}
            <div className="text-text-dark flex flex-wrap items-center gap-1 text-sm">
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <span>·</span>
              <a href="#" className="hover:underline">
                Terms
              </a>
              <span>·</span>
              <a href="#" className="flex items-center gap-1 hover:underline">
                Your Privacy Choices
                <PrivacyChoicesIcon />
              </a>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:items-center lg:justify-between">
            {/* Left Side: Copyright and Legal Links */}
            <div className="text-text-dark flex items-center gap-1 text-sm">
              <span>© {currentYear} Airbnb, Inc.</span>
              <span>·</span>
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <span>·</span>
              <a href="#" className="hover:underline">
                Terms
              </a>
              <span>·</span>
              <a href="#" className="flex items-center gap-1 hover:underline">
                Your Privacy Choices
                <PrivacyChoicesIcon />
              </a>
            </div>

            {/* Right Side: Language, Currency, and Social */}
            <div className="flex items-center gap-4">
              <button className="text-text-dark flex items-center gap-2 text-sm font-semibold hover:underline">
                <GlobeIcon />
                <span>English (US)</span>
              </button>
              <span className="text-text-dark text-sm font-semibold">
                RM MYR
              </span>
              <a
                href="#"
                className="text-text-dark hover:opacity-70"
                aria-label="Navigate to Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="text-text-dark hover:opacity-70"
                aria-label="Navigate to X"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="text-text-dark hover:opacity-70"
                aria-label="Navigate to Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
