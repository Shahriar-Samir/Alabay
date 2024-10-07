import React from 'react';

const page = () => {
  return (
    <div className='w-full h-[100vh] bg-[url("/background.jpg")] bg-cover bg-no-repeat flex justify-center items-center'>
        <Scroll/>
    </div>
  );
};

export default page;



const Scroll = () => {
  return (
    <div className='w-11/12 h-[90vh] overflow-y-scroll '>
      <div className='w-full h-[100vh] bg-transparent'>df</div>
      <div className='w-full h-[100vh] bg-[#febe00] flex justify-between items-center'>
        <figure className='w-1/2'>
        <img src='/history.png' className='w-full object-cover' />
        </figure>
      </div>
    </div>
  );
};

