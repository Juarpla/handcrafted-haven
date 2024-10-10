// import { signIn } from 'next-auth/react';
import { playfairDisplay, raleway } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Button } from '@/app/ui/button';


export const metadata: Metadata = {
  title: 'Login',
};

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center justify-between space-y-9 p-9 max-w-sm w-96 h-96 max-h-full mx-auto bg-white rounded-lg shadow-lg">
        <h1 className={`${playfairDisplay.className} text-4xl text-center font-bold mb-4`}>Handcrafted Haven</h1>
        <h2 className={`${raleway.className} text-xl font-bold`}>Sign In For Access</h2>
        <Button></Button>
      </div>
    </div>
  );
}