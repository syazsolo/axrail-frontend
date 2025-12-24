interface Feature {
  icon: React.ReactNode;
  description: string;
}

interface IconProps {
  size?: number;
  className?: string;
}

// Change this value to adjust the size of all icons
const ICON_SIZE = 22;

const HomeIcon = ({ size = ICON_SIZE, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 12L16 4L28 12V26C28 27.1 27.1 28 26 28H6C4.9 28 4 27.1 4 26V12Z" />
    <path d="M12 28V18H20V28" />
  </svg>
);

const ClockIcon = ({ size = ICON_SIZE, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="16" cy="16" r="12" />
    <path d="M16 8V16L20 20" />
    <circle cx="16" cy="4" r="1.5" fill="currentColor" stroke="none" />
    <path d="M13 3L16 1L19 3" />
  </svg>
);

const ChatIcon = ({ size = ICON_SIZE, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 6H28V22H18L12 28V22H4V6Z" />
    <circle cx="10" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="22" cy="14" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const features: Feature[] = [
  {
    icon: <HomeIcon />,
    description: 'Create a listing for your place in just a few steps',
  },
  {
    icon: <ClockIcon />,
    description: 'Go at your own pace, and make changes whenever',
  },
  {
    icon: <ChatIcon />,
    description: 'Get 1:1 support from experienced hosts at any time',
  },
];

export const EasyToList = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="text-title mb-8 text-center md:mb-12">
          It's easy to list your
          <br /> home on Airbnb
        </h2>

        {/* iPhone Mockups */}
        <div className="relative mx-auto my-24 w-full max-w-md overflow-x-clip py-[25%] md:my-12 md:max-w-lg lg:max-w-xl">
          <img
            src="/landing/iphones.avif"
            alt="Airbnb app showing listing process on two iPhones"
            className="absolute inset-0 m-auto h-auto w-full scale-150"
          />
        </div>

        {/* Features */}
        <div className="flex flex-col gap-3 md:flex-row md:justify-center md:gap-12">
          {features.map((feature, index) => (
            <article
              key={index}
              className="flex flex-row items-start gap-4 md:flex-col md:items-center md:text-center"
            >
              {/* Icon Container */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-gray-800">
                {feature.icon}
              </div>

              {/* Text */}
              <p className="text-text-dark text-[17px] leading-tight tracking-tight md:text-lg">
                <span>{feature.description}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EasyToList;
