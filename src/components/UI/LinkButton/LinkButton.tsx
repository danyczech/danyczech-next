import { AnchorHTMLAttributes, ReactElement, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { childrenTextContent, isRelativeUrl } from '@/utils';
import { EButtonVariants } from '@/utils/enums';

interface ILinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  href: string;
  nofollow?: boolean;
  variant?: EButtonVariants,
}

const LinkButton = ({
  children,
  className,
  external = false,
  href,
  nofollow = false,
  title,
  variant = EButtonVariants.PRIMARY,
  ...props
}: ILinkButtonProps): ReactElement => {
  const isRelativeLink = useMemo(((): boolean => {
    return isRelativeUrl(href);
  }), [href]);

  const Component = isRelativeLink ? Link : ({ ...aprops }):ReactElement => (<a {...aprops}>
    {children}
  </a>);

const baseStyles = "flex items-center justify-center px-6 py-2 border-2 w-full sm:w-max rounded-full text-black disabled:border-grey disabled:text-rey disabled:pointer-events-none";
const variantStyles = {
  primary: "font-medium border-primary-light-1 bg-primary-light-1 hover:border-primary-dark-1 active:bg-primary",
  secondary: "font-medium border-primary-dark-2 bg-white hover:bg-primary-light-2 hover:border-primary-dark-1 active:bg-primary-light-1",
  cta: "font-semibold border-secondary-dark-2 bg-secondary-light-1 hover:border-secondary-dark-1 active:bg-secondary",
}

  return (
      <Component
        {...props}
        href={href}
        className={twMerge(baseStyles, variantStyles[variant], className)}
        rel={nofollow ? 'nofollow' : undefined}
        target={external ? '_blank' : undefined}
        title={title || childrenTextContent(children)}
      >
        {children}
      </Component>
  );
};

LinkButton.displayName = 'LinkButton';
export default LinkButton;
