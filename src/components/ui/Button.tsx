import React from 'react';

interface ButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  href,
  target,
  rel,
  children,
  className = '',
  onClick,
}: ButtonProps) => {
  const baseClasses =
    'w-full rounded-full bg-gray-900 px-8 py-3 text-center text-base font-semibold text-white transition-all hover:bg-gray-800 lg:text-xl';

  const combinedClasses = `${baseClasses} ${className}`.trim();

  const buttonProps = {
    className: combinedClasses,
    onClick,
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...buttonProps}>
        {children}
      </a>
    );
  }

  return <button {...buttonProps}>{children}</button>;
};
