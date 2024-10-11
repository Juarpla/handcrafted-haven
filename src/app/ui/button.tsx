// import clsx from 'clsx';
import { raleway } from '@/app/ui/fonts';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

export function Button() {
  return (
    <button
    className={`${raleway.className} px-4 py-2 w-full text-white bg-blue-500 rounded-md`}
    // onClick={() => signIn('github')}
  >
    Sign in with GitHub
  </button>
  );
}