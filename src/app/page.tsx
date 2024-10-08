import Link from 'next/link';
import React from 'react';
import Nav from './components/nav';
import ProjectVision from './components/ProjectVision';
import Roadmap from './components/Roadmap';

const page = () => {
  return (
    <main className='w-full h-[100vh] bg-[url("/background.jpg")] bg-cover bg-no-repeat flex justify-center items-center'>
        <Scroll/>
    </main>
  );
};

export default page;



const Scroll = () => {
  return (
    <main className='w-11/12 h-[90vh] overflow-y-scroll '>
      <section className='w-full h-[100vh] bg-transparent'></section>
      <section className='w-full h-[140vh] bg-[#febe00] flex justify-between items-center gap-5 relative'>
        <figure className='w-1/2'>
        <img src='/history.png' className='w-full object-cover' />
        </figure>
        <section className='w-1/2 me-20 '>
        <h1 className='text-end'><span className='font-Montserrat font-black text-6xl text-[#F76902D1]'>History of</span> <br/> <br/><span className='text-9xl font-cheese font-extrabold text-white'>Alabay</span></h1>
        <p className='text-end font-kumbh font-bold text-3xl mt-10'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
        </section>
      </section>
      <section className='bg-white w-full flex justify-center flex-col'>
         <Nav/>
         <ProjectVision/>
         <Roadmap/>
      </section>
    </main>
  );
};

