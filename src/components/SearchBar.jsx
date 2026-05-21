import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchBar;