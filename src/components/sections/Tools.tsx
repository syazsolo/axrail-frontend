import { ActionButton } from '@/components/ui/ActionButton';
import { useIsMobile } from '@/hooks/use-is-mobile';

interface Tool {
  title: string;
  description: string;
  image: string;
}

const tools: Tool[] = [
  {
    title: 'Listing editor',
    description: 'Showcase every detail of your home',
    image:
      'https://a0.muscache.com/im/pictures/canvas/Canvas-1729549296719/original/6f1fe6c5-64e0-4a0c-ae23-4f82b3bed20f.jpeg?im_w=1200',
  },
  {
    title: 'Calendar',
    description: 'Manage your availability and pricing',
    image:
      'https://a0.muscache.com/im/pictures/canvas/Canvas-1729549657273/original/ab3b6e70-8ef5-43d1-8162-13f4de3aaa17.jpeg?im_w=1200',
  },
  {
    title: 'Messages',
    description: 'Quickly message guests and support',
    image:
      'https://a0.muscache.com/im/pictures/canvas/Canvas-1729549951096/original/4deac059-008a-499a-aeca-c22224bf6b6f.jpeg?im_w=1200',
  },
];

export const Tools = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-title mb-10 px-6 text-center md:mb-14">
          All the tools you need to host, all in one app
        </h2>

        {/* Tools Carousel - Scrollable on mobile/tablet, grid on desktop */}
        <div className="tools-scroll-container flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-6">
          {tools.map((tool, index) => (
            <article
              key={index}
              className="flex w-[85vw] max-w-[320px] shrink-0 snap-center flex-col items-center lg:w-full lg:max-w-none"
            >
              {/* Card with phone mockup */}
              <div className="mb-4 flex aspect-3/4 w-full items-center justify-center overflow-hidden rounded-3xl bg-[#f7f7f7] p-6 md:p-8">
                <img
                  src={tool.image}
                  alt={`${tool.title} feature on Airbnb app`}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-text-dark mb-1 text-lg font-semibold md:text-xl">
                {tool.title}
              </h3>
              <p className="text-center text-[15px] text-gray-500 md:text-base">
                {tool.description}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile-only Download Button */}
        {isMobile && (
          <ActionButton href="#" target="_self">
            Download the Airbnb app
          </ActionButton>
        )}
      </div>
    </section>
  );
};

export default Tools;
