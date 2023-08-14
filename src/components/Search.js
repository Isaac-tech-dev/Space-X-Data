import React, { useState } from 'react';
import spacexm from '../assets/images/spacex-M.jpg'

const SearchSection = ({ allRocketsData, setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const results = allRocketsData.filter(rocket =>
      rocket.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rocket.original_launch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rocket.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <section className="bg-gray-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Search for Information</h2>
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            className="w-full md:w-1/2 bg-white border border-gray-300 rounded-md px-4 py-2 mb-4 md:mb-0 md:mr-4 focus:outline-none focus:border-blue-500"
            placeholder="Enter your search query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 md:w-auto md:self-start"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
