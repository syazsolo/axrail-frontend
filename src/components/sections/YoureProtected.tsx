import { ActionButton } from '@/components/ui/ActionButton';

interface ProtectionFeature {
  text: string;
}

const features: ProtectionFeature[] = [
  { text: 'Up to $3M damage protection' },
  { text: 'Up to $1M liability insurance' },
  { text: '24-hour safety line' },
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-success h-5 w-5 md:h-6 md:w-6"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const YoureProtected = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-6">
        {/* AirCover Logo */}
        <div className="mb-6 flex justify-center md:mb-8">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727218100752/original/32ac40bb-cf46-4994-9083-f6f0810d401e.png?im_w=320"
            alt="aircover for Hosts"
            className="h-12 w-auto md:h-14"
          />
        </div>

        {/* Heading */}
        <header className="mb-6 text-center md:mb-8">
          <h2 className="text-title mb-4">
            However you host,
            <br />
            you're protected
          </h2>
          <p className="mx-auto max-w-md text-base text-gray-500 md:text-xl">
            Top-to-bottom protection, included every time you host your home on
            Airbnb.
          </p>
        </header>

        {/* Features List */}
        <ul className="mx-auto mb-6 max-w-md divide-y divide-gray-200 md:mb-8">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-4 md:py-5"
            >
              <span className="text-text-dark text-base font-medium md:text-lg">
                {feature.text}
              </span>
              <CheckIcon />
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <ActionButton
          href="https://www.airbnb.com/aircover-for-hosts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about AirCover
        </ActionButton>

        {/* Disclaimer */}
        <p className="mt-8 px-4 text-center text-xs text-gray-500 md:mt-10 md:text-sm">
          Host Damage Protection reimburses for certain guest damages during
          Airbnb stays. It's not insurance and may apply if guests don't pay.
          Liability insurance is provided by 3rd parties.{' '}
          <a
            href="https://www.airbnb.com/aircover-for-hosts"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            See details and exclusions
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default YoureProtected;
