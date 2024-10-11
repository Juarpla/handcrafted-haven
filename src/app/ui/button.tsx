import clsx from 'clsx';
import { raleway } from '@/app/ui/fonts';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
    {...rest}
    className={clsx(`${raleway.className} px-4 py-2 w-full text-white bg-blue-500 rounded-md`,
       className
    )}
    // onClick={() => signIn('github')}
  >
    {children}
  </button>
  );
}

