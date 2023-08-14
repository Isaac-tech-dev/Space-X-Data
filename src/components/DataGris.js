import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';

const DataGrid = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [rocketsData, setRocketsData] = useState([]);
  const [selectedRocket, setSelectedRocket] = useState(null); // Track the selected rocket for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentRockets = rocketsData.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(rocketsData.length / itemsPerPage);

  useEffect(() => {
    // Fetch data from your API
    axios.get('http://127.0.0.1:8000/api/rockets') // Replace with your API URL
      .then(response => {
        setRocketsData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRocketClick = (rocket) => {
    setSelectedRocket(rocket);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Explore Rockets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentRockets.map((rocket, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md p-6 cursor-pointer"
              onClick={() => handleRocketClick(rocket)} // Open modal on click
            >
              <h3 className="text-xl font-semibold mb-2">{rocket.missions[0]?.name}</h3>
              <p className="text-gray-600">Flight: {rocket.missions[0]?.flight}</p>
              <p className="text-gray-600">Status: {rocket.status}</p>
              <p className="text-gray-600">Original Launch: {rocket.original_launch}</p>
              <p className="text-gray-600">Type: {rocket.type}</p>
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
      <Modal isOpen={isModalOpen} closeModal={closeModal} rocket={selectedRocket} />
    </section>
  );
};

export default DataGrid;
