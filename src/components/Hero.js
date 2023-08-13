import React from 'react';
import spacexbg from '../assets/images/spacexbg.jpg';

const Hero = () => {
  const sectionStyle = {
    backgroundImage: `url(${spacexbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust the height here
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-4 md:p-12" style={sectionStyle}>
      <div className="md:w-1/2 md:pr-8 bg-white bg-opacity-80 p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Embarking on the Frontier of Possibilities: SpaceX</h1>
        <p className="text-gray-600">Discover the universe through the innovative strides of SpaceX, where cutting-edge technology meets the boundless expanse of space. Join us on a journey that transcends the ordinary, as we forge a path towards interplanetary exploration, satellite deployment, and ultimately, the colonization of other worlds.</p>
      </div>
    </section>
  );
};

export default Hero;
