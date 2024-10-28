import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const SortOptions = {
  PRICE_LOW_HIGH: 'PRICE_LOW_HIGH',
  PRICE_HIGH_LOW: 'PRICE_HIGH_LOW',
  NAME_A_Z: 'NAME_A_Z',
  NAME_Z_A: 'NAME_Z_A',
} as const;

type SortOptionType = typeof SortOptions[keyof typeof SortOptions];

interface SortDropdownProps {
  onSort: (option: SortOptionType) => void;
  currentSort: SortOptionType | null;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSort, currentSort }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const getSortLabel = (option: SortOptionType | null) => {
    switch (option) {
      case SortOptions.PRICE_LOW_HIGH:
        return 'Price: Low to High';
      case SortOptions.PRICE_HIGH_LOW:
        return 'Price: High to Low';
      case SortOptions.NAME_A_Z:
        return 'Name: A to Z';
      case SortOptions.NAME_Z_A:
        return 'Name: Z to A';
      default:
        return 'Sort By';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50 text-black"
      >
        {getSortLabel(currentSort)}
        <ChevronDownIcon className="w-4 h-4 text-black" />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 bg-white border rounded-md shadow-lg">
          <div className="py-1 text-black">
            {Object.values(SortOptions).map((option) => (
              <button
                key={option}
                onClick={() => {
                  onSort(option);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  currentSort === option ? 'bg-gray-50' : ''
                }`}
              >
                {getSortLabel(option)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;