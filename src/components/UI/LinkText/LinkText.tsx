import { AnchorHTMLAttributes, ReactElement, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { childrenTextContent, isRelativeUrl } from '@/utils';

interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  href: string;
  inText?: boolean;
  nofollow?: boolean;
}

const LinkText = ({
  children,
  className,
  external = false,
  href,
  inText,
  nofollow = false,
  title,
  ...props
}: ILinkProps): ReactElement => {
  const isRelativeLink = useMemo(((): boolean => {
    return isRelativeUrl(href);
  }), [href]);

  const Component = isRelativeLink ? Link : ({ ...aprops }): ReactElement => (<a {...aprops}>
    {children}
  </a>);

  return (
    <Component
      {...props}
      href={href}
      className={twMerge( !!inText ? style.intext : style.link, className)}
      rel={nofollow ? 'nofollow' : undefined}
      target={external ? '_blank' : undefined}
      title={title || childrenTextContent(children)}
    >
      {children}
    </Component>
  );
};

LinkText.displayName = 'LinkText';
export default LinkText;
