import React from 'react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ActionButton = ({
  href,
  target,
  rel,
  children,
  className = '',
  onClick,
}: ActionButtonProps) => {
  const buttonBaseClasses =
    'w-full rounded-full bg-gray-900 px-8 py-3 text-center text-base font-semibold text-white transition-all hover:bg-gray-800 lg:text-xl';

  const wrapperBaseClasses =
    'container mx-auto mt-8 flex w-full justify-center px-6 md:mt-12 lg:w-90';

  const wrapperClasses = cn(wrapperBaseClasses, className);

  const buttonProps = {
    className: buttonBaseClasses,
    onClick,
  };

  const Content = () => {
    if (href) {
      return (
        <a href={href} target={target} rel={rel} {...buttonProps}>
          {children}
        </a>
      );
    }
    return <button {...buttonProps}>{children}</button>;
  };

  return (
    <div className={wrapperClasses}>
      <Content />
    </div>
  );
};
