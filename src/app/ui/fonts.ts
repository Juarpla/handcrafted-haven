
import { Playfair } from 'next/font/google';
import { Raleway, Playfair_Display } from 'next/font/google';

export const playfair = Playfair({ subsets: ['latin'] });

// Configure Raleway
export const raleway = Raleway({
  subsets: ['latin'], // Adjust subsets as needed
  weight: ['400', '700'], // Define specific weights if needed
  style: ['normal', 'italic'], // Optionally add styles like italic
});

// Configure Playfair Display
export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

