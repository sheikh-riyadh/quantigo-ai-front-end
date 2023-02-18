import React from 'react';

const VideoAnnotation = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 px-10 md:px-16 xl:px-20 text-start mt-20 md:mt-0'>
            <div className='xl:col-span-5 skeuomorphic rounded-3xl'>
                <img src="assets/img2.jpg" alt="Annotation_server_image" className='p-5 border-radius w-full h-full' />
            </div>
            <div className='xl:col-span-7'>
                <h1 className='text-3xl md:text-4xl font-semibold'>WHAT IS VIDEO ANNOTATION?</h1>
                <p className='my-5 text-justify'>Video annotation is the process of labeling or tagging video clips which are used for training computer vision models to detect or identify objects. Unlike image annotation, video annotation involves annotating objects on a frame-by-frame basis to make them recognizable for machine learning models.

                    High-quality video annotation generates ground truth datasets for optimal machine learning functionality. There are numerous deep learning applications for video annotation across industries including self-driving cars, medical AI, and geospatial technology.</p>
            </div>
        </div>
    );
};

export default VideoAnnotation;