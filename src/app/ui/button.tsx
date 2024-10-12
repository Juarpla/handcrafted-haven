/* eslint-disable */

// import clsx from 'clsx';
import { raleway } from '@/app/ui/fonts';

// Define the Button component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className={`${raleway.className} px-4 py-2 w-full text-white bg-blue-500 rounded-md`}
      {...props} // Spread the props like onClick
    >
      {children} {/* Display the children inside the button */}
    </button>
  );
}
