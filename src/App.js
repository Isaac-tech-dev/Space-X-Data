import './App.css';
import Nav from './components/nav';
import Hero from './components/Hero';
import SearchSection from './components/Search';
import DataGrid from './components/DataGris';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [allRocketsData, setAllRocketsData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    axios.get('http://127.0.0.1:8000/api/rockets') // Replace with your API URL
      .then(response => {
        setAllRocketsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
    <Nav/>
    <Hero/>
    <SearchSection allRocketsData={allRocketsData} setSearchResults={setSearchResults} />
    <DataGrid rocketsData={searchResults.length > 0 ? searchResults : allRocketsData} />
    <Footer/>
    </>
  );
}

export default App;
