import React from 'react';
import spacexbg from '../assets/images/spacexbg.jpg';

const Footer = () => {
  const sectionStyle = {
    backgroundImage: `url(${spacexbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh', // Adjust the height here
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-4 md:p-12" style={sectionStyle}>
      <div className="md:w-1/2 md:pr-8 bg-opacity-80 p-6 mt-4 items-center justify-center">
        <h1 className="text-2xl text-white md:text-3xl font-bold mb-4">Embarking on the Frontier of Possibilities: SpaceX</h1>
      </div>
    </section>
  );
};

export default Footer;
