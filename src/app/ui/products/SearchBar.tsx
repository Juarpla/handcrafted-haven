"use client";

// components/SearchBar.tsx
import {searchProducts} from "@/lib/actions";
import {useRouter} from "next/navigation";
import {useState} from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    {id: string; productname: string}[]
  >([]);
  const router = useRouter();

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 1) {
      try {
        const results = await searchProducts(value);
        setSuggestions(results);
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (productName: string) => {
    setQuery(productName);
    setSuggestions([]);
    router.push(`/products?search=${productName}`);
  };

  const handleSearchSubmit = () => {
    if (query.trim()) {
      router.push(`/products?search=${query}`);
    } else {
      alert("No product found, please try again");
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center rounded-md border border-gray-300 px-3 py-2">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search products..."
          className="flex-grow rounded-full px-20 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={handleSearchSubmit} className="ml-2 text-gray-500">
          🔍
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute mt-2 max-h-48 w-full overflow-y-auto rounded-md border border-gray-200 bg-white">
          {suggestions.map(product => (
            <li
              key={product.id}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleSelect(product.productname)}
            >
              {product.productname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
