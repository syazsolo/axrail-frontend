interface Tool {
  icon: string;
  title: string;
  description: string;
}

const tools: Tool[] = [
  {
    icon: '✏️',
    title: 'Listing editor',
    description:
      'Showcase every detail of your home with our easy-to-use listing editor.',
  },
  {
    icon: '📅',
    title: 'Calendar',
    description:
      'Manage your availability and pricing with our intuitive calendar.',
  },
  {
    icon: '💬',
    title: 'Messages',
    description:
      'Quickly message guests and get support from our team when you need it.',
  },
];

export const Tools = () => {
  return (
    <section className="bg-[var(--color-bg-light)] py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <header className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text-dark)] md:text-4xl lg:text-5xl">
            Tools to help you throughout
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[var(--color-text-muted)]">
            Everything you need to manage your listing, communicate with guests,
            and track your earnings
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-3xl border border-[var(--color-border-light)] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* App Mockup */}
              <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <div className="flex h-[85%] w-[90%] flex-col overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="flex h-8 items-center gap-1.5 border-b border-[var(--color-border-light)] bg-gradient-to-r from-gray-100 to-gray-50 px-3">
                    <span className="h-2 w-2 rounded-full bg-[#FF5F56]"></span>
                    <span className="h-2 w-2 rounded-full bg-[#FFBD2E]"></span>
                    <span className="h-2 w-2 rounded-full bg-[#27CA40]"></span>
                  </div>
                  <div className="flex flex-1 items-center justify-center text-5xl">
                    {tool.icon}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-[var(--color-text-dark)]">
                  {tool.title}
                </h3>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  {tool.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
