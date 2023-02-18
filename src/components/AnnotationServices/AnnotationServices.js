import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import SwiperCore, { Autoplay } from 'swiper';

const services = [
    {
        name: "BOUNDING BOXES",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/img3.jpg',
        id: 1
    },
    {
        name: "POLYGON ANNOTATION",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/img4.jpg',
        id: 2
    },
    {
        name: "SEMANTIC SEGMENTATION",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/img5.jpg',
        id: 3
    },
    {
        name: "KEYPOINT ANNOTATION",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/img6.jpg',
        id: 4
    },
    {
        name: "LANDMARK ANNOTATION",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/img7.jpg',
        id: 5
    },
    {
        name: "LANDMARK ANNOTATION",
        description: "It is the most commonly used type of video annotation in computer vision.",
        img: 'assets/img8.jpg',
        id: 6
    },

]

const AnnotationServices = () => {
    SwiperCore?.use([Autoplay])
    return (
        <div className='px-10 md:px-16 xl:px-20 mt-14 md:mt-24 xl:my-28'>
            <h1 className='text-3xl md:text-4xl font-semibold'>iMERIT’S VIDEO ANNOTATION SERVICES</h1>
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
                        return <SwiperSlide className='my-8 md:my-14' key={service.id}>
                            <div className='skeuomorphic rounded-3xl'>
                                <div className='p-5'>
                                    <img src={service.img} alt="service_image" className='rounded-xl' />
                                    <div className='p-2'>
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

export default AnnotationServices;