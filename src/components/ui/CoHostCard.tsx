export interface CoHostPerson {
  id: number;
  name: string;
  image: string;
  location: string;
  rating: number;
  yearsHosting: number;
}

const StarIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="currentColor"
    className="shrink-0"
  >
    <path d="M6 0l1.854 3.756 4.146.603-3 2.923.708 4.128L6 9.187l-3.708 1.95.708-4.127-3-2.924 4.146-.602L6 0z" />
  </svg>
);

interface StatItemProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  labelClassName?: string;
}

const StatItem = ({ value, label, icon }: StatItemProps) => (
  <div className="flex flex-col items-center justify-center">
    <div className="flex items-center gap-1 text-[14px] font-semibold text-gray-900 md:text-base">
      {icon}
      <span>{value}</span>
    </div>
    <span className="text-center text-[9px] font-semibold text-gray-800">
      {label}
    </span>
  </div>
);

export const CoHostCard = ({ host }: { host: CoHostPerson }) => (
  <article className="bg-bg-light flex h-full flex-col items-center rounded-3xl border border-gray-200 p-6 shadow-[1px_2px_4px_rgba(0,0,0,0.2)] md:p-8 md:shadow-[1px_4px_8px_rgba(0,0,0,0.2)]">
    {/* Profile Image with Ring */}
    <div className="mb-1 rounded-full p-1 md:mb-6 md:p-1.5">
      <img
        src={host.image}
        alt={host.name}
        className="h-28 w-28 rounded-full object-cover md:h-38 md:w-38"
      />
    </div>

    {/* Name */}
    <h3 className="mb-0.5 text-xl font-bold text-gray-900 md:text-2xl">
      {host.name}
    </h3>

    {/* Location */}
    <p className="mb-3.5 text-center text-[10px] text-gray-800 md:text-base">
      Co-host in {host.location}
    </p>

    {/* Stats */}
    <div className="mt-auto mb-auto w-full max-w-60 rounded-xl border border-none bg-white px-2 py-3 md:px-4">
      <div className="grid grid-cols-2 divide-x divide-gray-200">
        <StatItem
          value={host.rating.toFixed(2)}
          label="guest rating"
          icon={<StarIcon />}
        />
        <StatItem value={host.yearsHosting} label="years hosting" />
      </div>
    </div>
  </article>
);
