import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import SwiperCore, { Autoplay } from 'swiper';
const services = [
    {
        name: "AUTONOMOUS TECHNOLOGY",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/annotation.jpg'
    },
    {
        name: "MEDICAL AI",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/Medical-AI.jpg'
    },
    {
        name: "GEOSPATIAL TECHNOLOGY",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/Geospatial.jpg'
    },
    {
        name: "GOVERNMENT",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/Government.jpg'
    },
    {
        name: "MANUFACTURING",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/Manufacturing.jpg'
    },
    {
        name: "COMMERCE",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/Commerce.jpg'
    },

]
const IndustriesService = () => {
    SwiperCore?.use([Autoplay])
    return (
        <div className='px-10 md:px-16 xl:px-20 mt-14 md:mt-24 xl:my-28'>
            <h1 className='text-3xl md:text-4xl font-semibold'>WHAT INDUSTRIES NEED VIDEO <br /> ANNOTATION SERVICES</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                    delay: 2000
                }}
                breakpoints={{
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {
                    services.map(service => {
                        return <SwiperSlide className='my-8 md:my-14'>
                            <div className='skeuomorphic rounded-3xl'>
                                <div className='p-5'>
                                    <div className='w-24 h-24'>
                                        <img src={service.img} alt="service_image" className='rounded-xl h-full w-full skeuomorphic-2 p-2' />
                                    </div>
                                    <div className='p-5 text-start'>
                                        <h1 className='font-semibold text-xl'>{service?.name}</h1>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
};

export default IndustriesService;