import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row gap-5 text-start hero xl:min-h-screen px-10 md:px-16 xl:px-20 py-20 md:py-36 xl:py-0 justify-center items-center bg-banner-1 bg-cover bg-no-repeat'>
            <div>
                <h1 className='text-3xl md:text-5xl xl:text-8xl'>VIDEO ANNOTATION SERVICES</h1>
                <p className='text-xl my-5 lx:my-10'>iMerit delivers stellar video annotation services that power AI, machine learning, and data operation strategies.</p>
                <button className="btn btn-[#0F172A] skeuomorphic border-0 text-lg">let's connect</button>
            </div>
            <div className='w-12/12 h-12/12 md:w-12/12 skeuomorphic rounded-full'>
                <img src="/assets/img1.jpg" alt="banner_image" className='w-full rounded-full p-5' />
            </div>
        </div>
    );
};

export default Hero;