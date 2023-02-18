import React from 'react';

const services = [
    {
        name: "SEMANTIC VIDEO ANNOTATION OF SURVEILLANCE IMAGES",
        description: "iMerit’s video annotation experts have processed 500+ video datasets of various formats at a much higher level of detail than the client’s own teams. Our expert annotators solved the challenge of frame-by-frame manual processing of CCTV videos by accurately identifying and annotating required objects.",
        img: 'assets/SURVEILLANCE.jpg',
        id: 1
    },
    {
        name: "CREATE LARGER HARVEST YIELDS WITH COMPUTER VISION",
        description: "Farmers use computer vision to monitor their crops for pests and plant diseases. Through the use of footage collected by drones, iMerit experts can teach a model to recognize pests and potential threats to crop fields by annotating the footage.",
        img: 'assets/harvest.jpg',
        id: 2
    },
    {
        name: "FACIAL RECOGNITION USING KEYPOINT ANNOTATION",
        description: "iMerit’s video annotation experts have processed 500+ video datasets of various formats at a much higher level of detail than the client’s own teams. Our expert annotators solved the challenge of frame-by-frame manual processing of CCTV videos by accurately identifying and annotating required objects.",
        img: 'assets/keypoint.jpg',
        id: 3
    },
    {
        name: "VIDEO ANNOTATION FOR COMPUTER VISION AND ROBOTICS",
        description: "Farmers use computer vision to monitor their crops for pests and plant diseases. Through the use of footage collected by drones, iMerit experts can teach a model to recognize pests and potential threats to crop fields by annotating the footage.",
        img: 'assets/robotics.jpg',
        id: 4
    },
    {
        name: "MOVING BOUNDING BOXES USING VIDEO ANNOTATION",
        description: "iMerit’s video annotation experts have processed 500+ video datasets of various formats at a much higher level of detail than the client’s own teams. Our expert annotators solved the challenge of frame-by-frame manual processing of CCTV videos by accurately identifying and annotating required objects.",
        img: 'assets/BOUNDING.jpg',
        id: 5
    },
    {
        name: "DETECTING OPERATING BOUNDARIES WITH POLYLINE ANNOTATION",
        description: "Farmers use computer vision to monitor their crops for pests and plant diseases. Through the use of footage collected by drones, iMerit experts can teach a model to recognize pests and potential threats to crop fields by annotating the footage.",
        img: 'assets/polyline.jpg',
        id: 6
    },

]

const UseCase = () => {
    return (
        <div className='px-10 md:px-16 xl:px-20 xl:my-14'>
            <h1 className='text-3xl md:text-4xl font-semibold mb-10 lg:mb-10'>VIDEO ANNOTATION USE CASES</h1>
            {
                services.map((service, index) => {
                    return <div key={service.id}>
                        {
                            service.id % 2 === 0 ?
                                <div className='grid md:grid-cols-2 lg:grid-cols-12 gap-10 text-start mt-8 lg:mt-10 skeuomorphic p-5 rounded-3xl'>
                                    <div className='lg:col-span-5'>
                                        <img src={service.img} alt="" className='w-full md:h-full lg:h-56 rounded-xl' />
                                    </div>
                                    <div className='lg:col-span-7'>
                                        <h1 className='text-2xl md:text-3xl font-semibold'>{service.name}</h1>
                                        <p className='mt-5'>{service.description}</p>
                                    </div>
                                </div>
                                :
                                <div className='grid md:grid-cols-2 lg:grid-cols-12 gap-10 text-start mt-8 lg:mt-10 skeuomorphic p-5 rounded-3xl'>
                                    <div className='lg:col-span-7'>
                                        <h1 className='text-2xl md:text-3xl font-semibold'>{service.name}</h1>
                                        <p className='mt-5'>{service.description}</p>
                                    </div>
                                    <div className='lg:col-span-5'>
                                        <img src={service.img} alt="" className='w-full md:h-full lg:h-56 rounded-xl' />
                                    </div>
                                </div>
                        }
                    </div>
                })
            }

        </div>
    );
};

export default UseCase;