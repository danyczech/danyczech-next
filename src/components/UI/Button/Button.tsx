import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import childrenTextContent from '@/utils/childrenTextContent';
import { EButtonVariants } from '@/utils/enums';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: EButtonVariants,
}

const Button = ({
  children,
  className,
  disabled = false,
  title,
  type = 'button',
  variant = EButtonVariants.PRIMARY,
  ...props
}: IProps): ReactElement => {
  const customTitle = title || childrenTextContent(children) || undefined;
  const baseStyles = "flex items-center justify-center px-6 py-2 border-2 w-full sm:w-max rounded-full text-black disabled:border-grey disabled:text-rey disabled:pointer-events-none";
  const variantStyles = {
    primary: "font-medium border-primary-light-1 bg-primary-light-1 hover:border-primary-dark-1 active:bg-primary",
    secondary: "font-medium border-primary-dark-2 bg-white hover:bg-primary-light-2 hover:border-primary-dark-1 active:bg-primary-light-1",
    cta: "font-semibold border-secondary-dark-2 bg-secondary-light-1 hover:border-secondary-dark-1 active:bg-secondary",
  }

  return (
    <button
      {...props}
      className={twMerge(baseStyles, variantStyles[variant], className)}
      disabled={disabled}
      title={customTitle}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
