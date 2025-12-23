import { useState } from 'react';

import { cn } from '../../../lib/utils';

interface Category {
  id: string;
  label: string;
}

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const categories: Category[] = [
  { id: 'top', label: 'Top questions' },
  { id: 'basics', label: 'Hosting basics' },
  { id: 'policy', label: 'Policy & regulations' },
  { id: 'cohosts', label: 'Co-hosts' },
];

const faqItems: FAQItem[] = [
  {
    id: 1,
    category: 'top',
    question: 'Is my place right for Airbnb?',
    answer:
      'Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, treehouses, and more. Even a spare room can be a great place to stay.',
  },
  {
    id: 2,
    category: 'top',
    question: 'Do I have to host all the time?',
    answer:
      'Not at all—you control your calendar. You can host once a year, a few nights a month, or more often.',
  },
  {
    id: 3,
    category: 'top',
    question: 'How much should I interact with guests?',
    answer:
      "It's up to you. Some Hosts prefer to meet their guests in person, while others prefer to just communicate through the app. You decide what's right for you.",
  },
  {
    id: 4,
    category: 'basics',
    question: 'How do I get started with hosting?',
    answer:
      'Getting started is easy. Create a listing by adding photos and details about your space, set your price and availability, then publish. Your listing will be visible to millions of guests.',
  },
  {
    id: 5,
    category: 'basics',
    question: 'How much can I earn hosting on Airbnb?',
    answer:
      'What you earn depends on your location, listing type, and how often you host. You can use the earnings calculator at the top of this page to get an estimate.',
  },
  {
    id: 6,
    category: 'policy',
    question: 'Are there any regulations I should know about?',
    answer:
      "Some cities have rules for hosting, like registration or permit requirements. Check your local regulations to understand what's required in your area.",
  },
  {
    id: 7,
    category: 'cohosts',
    question: 'What is a co-host?',
    answer:
      'A co-host is someone who helps you manage your Airbnb listing. They can help with things like responding to guests, managing bookings, and coordinating check-ins.',
  },
];

export const QnA = () => {
  const [activeCategory, setActiveCategory] = useState('top');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredFAQs = faqItems.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <section className="bg-[var(--color-bg-light)] py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <header className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[var(--color-text-dark)] md:text-4xl lg:text-5xl">
            Your questions, answered
          </h2>
        </header>

        {/* Category Tabs */}
        <div
          className="mb-12 flex flex-wrap justify-center gap-2"
          role="tablist"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                'rounded-full px-5 py-3 text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-white text-[var(--color-text-dark)] shadow-sm'
                  : 'text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-text-dark)]',
              )}
              onClick={() => setActiveCategory(category.id)}
              role="tab"
              aria-selected={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-sm">
          {filteredFAQs.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                index !== filteredFAQs.length - 1 &&
                  'border-b border-[var(--color-border-light)]',
              )}
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left text-lg font-medium text-[var(--color-text-dark)] transition-colors hover:bg-[var(--color-bg-light)]"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    'flex h-6 w-6 flex-shrink-0 items-center justify-center text-2xl font-normal text-[var(--color-text-muted)] transition-transform duration-300',
                    openItems.includes(item.id) && 'rotate-45',
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openItems.includes(item.id) ? 'max-h-96' : 'max-h-0',
                )}
              >
                <p className="px-6 pb-6 text-base leading-relaxed text-[var(--color-text-muted)]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QnA;
