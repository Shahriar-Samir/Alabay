import React from 'react';

const Roadmap = () => {
    return (
        <div className='relative bg-white'>
                 <section className='w-full h-[30vh] bg-[#febe00] flex justify-between items-center gap-5  relative'>
                    <h1 className='absolute'>Road Map</h1>
              <div className='w-full h-[10vh] bg-[#febe00] flex justify-between items-center gap-5  absolute bottom-[-5vh] skew-y-3 z-10'></div>
                 </section>
                 <section className='flex w-full justify-between items-center '>
                    <p>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.</p>
                    <figure className='w-1/2'>
                    <img src='/roadmap.png' className='w-full'></img>
                    </figure>
                 </section>
                 <section className='mt-5 grid grid-cols-4 gap-10 w-10/12 mx-auto'>
 
                 <div className={`bg-yellow-500`}>
                            <h1 className='text-white text-center'><span>Building</span><br/>and Initial Launch</h1>
                            <figure>
                            <img src={`/photo1.png`}/>
                            </figure>
                        </div>
                 <div className={`bg-sky-500`}>
                 <h1 className='text-white text-center'><span>Merchandise</span><br/>Store Launch</h1>
                            <figure>
                            <img src={`/photo2.png`}/>
                            </figure>
                        </div>
                 <div className={`bg-pink-500`}>
                 <h1 className='text-white text-center'><span>Community</span><br/>Events and contests</h1>
                            <figure>
                            <img src={`/photo3.png`}/>
                            </figure>
                        </div>
                 <div className={`bg-red-500`}>
                 <h1 className='text-white text-center'><span>Expansions and New</span><br/>Features</h1>
                            <figure>
                            <img src={`/photo4.png`}/>
                            </figure>
                        </div>
                  
                 </section>
        </div>
    );
};

export default Roadmap;