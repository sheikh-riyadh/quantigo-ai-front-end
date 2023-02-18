import React from 'react';
import AnnotationServices from '../../components/AnnotationServices/AnnotationServices';
import Banner from '../../components/Banner/Banner';
import IndustriesService from '../../components/IndustriesService/IndustriesService';
import Process from '../../components/Process/Process';
import UseCase from '../../components/UseCase/UseCase';
import VideoAnnotation from '../../components/VideoAnnotation/VideoAnnotation';

const Home = () => {
    return (
        <div>
            <Banner />
            <VideoAnnotation />
            <AnnotationServices />
            <Process />
            <IndustriesService />
            <UseCase />
        </div>
    );
};

export default Home;