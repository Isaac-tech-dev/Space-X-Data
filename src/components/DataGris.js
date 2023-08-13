import React, { useState } from 'react';

// Dummy rocket data
const spacexRockets = [
  {
    name: 'Falcon 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/300x200', // Placeholder image URL
  },
  {
    name: 'Falcon 9',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    image: 'https://via.placeholder.com/300x200', // Placeholder image URL
  },
  {
    name: 'Falcon Heavy',
    description: 'Nulla nec sagittis massa. Cras dapibus felis id justo pellentesque, vel pharetra nulla lacinia.',
    image: 'https://via.placeholder.com/300x200', // Placeholder image URL
  },
  {
    name: 'Starship',
    description: 'Aenean tristique ex vel dui tincidunt, ut volutpat lorem sollicitudin.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Dragon',
    description: 'Vestibulum sodales nisl non turpis blandit, vel luctus augue lacinia.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Crew Dragon',
    description: 'Fusce fermentum libero ac ante iaculis, nec venenatis ligula cursus.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Saturn V',
    description: 'Sed venenatis est eu nunc volutpat, nec convallis arcu hendrerit.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'New Glenn',
    description: 'Donec id felis nec nisi hendrerit tincidunt at in turpis.',
    image: 'https://via.placeholder.com/300x200',
  },
  // Add more rocket objects...
  {
    name: 'Ariane 5',
    description: 'Vivamus suscipit erat eget tortor volutpat dignissim.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Delta IV Heavy',
    description: 'Quisque hendrerit tellus nec dui varius, ac dignissim purus varius.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Long March 5',
    description: 'Phasellus id lectus a leo eleifend malesuada nec et dolor.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Soyuz',
    description: 'In ac nisi sed lorem gravida feugiat eget at elit.',
    image: 'https://via.placeholder.com/300x200',
  },
  // Add more rockets...
];

const DataGrid = () => {
  const itemsPerPage = 3; // Number of rockets per page
  const [currentPage, setCurrentPage] = useState(1);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentRockets = spacexRockets.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(spacexRockets.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Explore SpaceX Rockets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentRockets.map((rocket, index) => (
            <div key={index} className="bg-white rounded-md shadow-md p-6">
              <img
                src={rocket.image}
                alt={rocket.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{rocket.name}</h3>
              <p className="text-gray-600">{rocket.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <ul className="flex space-x-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  currentPage === index + 1 ? 'text-blue-500 font-semibold' : 'text-gray-600'
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DataGrid;
