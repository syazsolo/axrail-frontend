'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface Category {
  id: string;
  label: string;
  items: FAQItem[];
}

const categories: Category[] = [
  {
    id: 'top',
    label: 'Top questions',
    items: [
      {
        question: 'Is my place right for Airbnb?',
        answer:
          'Airbnb guests are interested in all kinds of places––spare rooms, apartments, houses, vacation homes, even treehouses.',
      },
      {
        question: 'Do I have to host all the time?',
        answer:
          'Nope—you control your calendar. You can host once a year, a few nights a month, or more often.',
      },
      {
        question: "What are Airbnb's fees?",
        answer: (
          <>
            It's free to create a listing, and Airbnb typically collects a
            service fee of 3% of the reservation subtotal once you get paid. In
            many areas, Airbnb automatically collects and pays sales and tourism
            taxes on your behalf.{' '}
            <a href="#" className="underline hover:no-underline">
              Learn more about fees
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    id: 'basics',
    label: 'Hosting basics',
    items: [
      {
        question: 'How do I get started?',
        answer: (
          <>
            You can create a listing in just a few steps, all at your own pace.
            Start by telling us about your home, take some photos, and add
            details about what makes it unique.{' '}
            <a href="#" className="underline hover:no-underline">
              Start your listing
            </a>
            .
          </>
        ),
      },
      {
        question: 'How do I get my home ready for guests?',
        answer: (
          <>
            Make sure your home is clean, clutter-free, and that everything is
            working properly. Items like fresh linens and stocked toiletries
            help create a comfortable and inviting place to stay.{' '}
            <a href="#" className="underline hover:no-underline">
              Check out our guide to getting your home ready
            </a>
            .
          </>
        ),
      },
      {
        question: 'How am I protected when I host?',
        answer: (
          <>
            AirCover for Hosts provides top-to-bottom protection every time you
            host your home on Airbnb.{' '}
            <a href="#" className="underline hover:no-underline">
              Learn more about AirCover for Hosts
            </a>{' '}
            and what's included.
          </>
        ),
      },
      {
        question: 'Any tips on being a great host?',
        answer: (
          <>
            From sharing a list of your favorite local places to responding
            quickly to guest messages, there are lots of ways to be an excellent
            host.{' '}
            <a href="#" className="underline hover:no-underline">
              Get more hosting tips
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    id: 'policy',
    label: 'Policy & regulations',
    items: [
      {
        question: 'Are there any regulations that apply in my city?',
        answer: (
          <>
            Some areas have laws and regulations for hosting your home. It's
            important to familiarize yourself with any laws that may apply to
            your location. Also, depending on where you live, you may need to
            check with your HOA, read your lease agreement, or notify your
            landlord or neighbors about your plans to host on Airbnb.{' '}
            <a href="#" className="underline hover:no-underline">
              Learn more about responsible hosting
            </a>
            .
          </>
        ),
      },
      {
        question: 'What if I have other questions?',
        answer: (
          <>
            Local hosts are a great source for information and insights. We can
            connect you with an experienced Airbnb host in your area who may be
            able to answer additional questions.{' '}
            <a href="#" className="underline hover:no-underline">
              Ask a host
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    id: 'cohosts',
    label: 'Co-hosts',
    items: [
      {
        question: 'What can co‑hosts help with?',
        answer:
          'You can hire a co‑host to do one thing or everything. While each co‑host offers different services, they can help with things like setting up your Airbnb listing, getting your home ready, managing reservations and messages, cleaning and maintenance, and assisting with onsite requests your guests may have.',
      },
      {
        question: 'Can I find a co‑host on Airbnb?',
        answer: (
          <>
            Airbnb makes it easy to find and hire a high‑quality, local co‑host
            in the Airbnb app. Review, message, and choose the co‑host that best
            fits your needs.{' '}
            <a href="#" className="underline hover:no-underline">
              Learn about the Co‑Host Network
            </a>
            .
          </>
        ),
      },
      {
        question: 'How do I pay my co‑host?',
        answer: (
          <>
            You and your co‑host should agree on payment terms before they start
            helping you. You have the option to share a part of each booking's
            payout with your co‑host directly through Airbnb. Some limitations
            may apply, depending on your location as well as the location of
            your listing and co‑host.{' '}
            <a href="#" className="underline hover:no-underline">
              Learn how co-host payouts work
            </a>
            .
          </>
        ),
      },
    ],
  },
];

export const QnA = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const isOpen = (id: string) => openCategories.includes(id);

  return (
    <section className="bg-bg-light py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-6">
        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className="text-title">Your questions, answered</h2>
        </header>

        {/* Accordion Categories */}
        <div className="divide-border divide-y">
          {categories.map((category) => (
            <div key={category.id} className="border-t-0">
              {/* Category Header Button */}
              <button
                className="flex w-full cursor-pointer items-center justify-between py-6 text-left"
                onClick={() => toggleCategory(category.id)}
                aria-expanded={isOpen(category.id)}
              >
                <span className="text-text-dark text-xl lg:text-2xl">
                  {category.label}
                </span>
                <ChevronDown
                  className={cn(
                    'text-text-dark h-5 w-5 shrink-0 transition-transform duration-300',
                    isOpen(category.id) && 'rotate-180',
                  )}
                />
              </button>

              {/* Category Content */}
              <div
                className={cn(
                  'overflow-hidden',
                  isOpen(category.id)
                    ? 'max-h-500 opacity-100'
                    : 'max-h-0 opacity-0',
                )}
              >
                <div className="space-y-8 pb-8 text-[18px]">
                  {category.items.map((item, index) => (
                    <div key={index}>
                      <h3 className="mb-1 leading-tight font-semibold tracking-tight text-gray-600">
                        {item.question}
                      </h3>
                      <p className="leading-tight tracking-tight text-gray-500">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QnA;
