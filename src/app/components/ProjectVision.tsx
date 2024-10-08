import React from 'react';

const ProjectVision = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='h-[70vh] flex justify-center items-center w-full'>
            <h1 className='text-center'>Project Vision</h1>
            </div>
            <div className='w-full mt- relative'><div className='w-full h-[20vh] bg-[#febe00] flex justify-between items-center gap-5  absolute top-[-10vh] -skew-y-3'></div>
            <section className='w-full h-[100vh] bg-[#febe00] flex justify-center items-end gap-5 '>
                    <figure className='absolute top-[-31vh] w-full'>
                    <img src='/dogs.png' className='w-full'/>
                    </figure>
                    <p className='text-center '>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flocks, we aim to build a pack that stands strong together.</p>
            </section>
            </div>
        </div>
    );
};

export default ProjectVision;