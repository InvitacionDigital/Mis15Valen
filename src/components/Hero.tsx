import React from 'react';
import GoDown from './GoDown';

const Hero: React.FC = () => {
  return (
    <div className='bg-[url("/bg6.jpeg")] opacity-95 w-full min-w-[300px] max-w-[1000px] aspect-[9/16] bg-contain bg-center bg-no-repeat flex flex-col justify-center py-10 items-center relative '>
      <div className='flex items-center gap-2'>
        <span className='border-b border-secondary w-14 h-0'></span>
        <p className='font-[poppins] text-[rgb(206,155,138)]'>07.10.2024</p>
        <span className='border-b border-secondary w-14 h-0'></span>
      </div>
      <div className='text-7xl text-center w-[205px] relative my-12'>
        <h2 className='text-secondary opacity-80 text-[10rem] absolute top-1/2 -translate-y-1/2'>XV</h2>
        <h1 className='z-30 relative font-semibold'>Valen</h1>
        <h1 className='text-xl relative '>Mis 15 años</h1>
      </div>
      <span className='border-b border-secondary w-44 h-0'></span>

      <GoDown />
    </div>
  );
};

export default Hero;
