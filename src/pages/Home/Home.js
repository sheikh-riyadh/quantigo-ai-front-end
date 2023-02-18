import React from 'react';
import AnnotationServices from '../../components/AnnotationServices/AnnotationServices';
import Hero from '../../components/Hero/Hero';
import IndustriesService from '../../components/IndustriesService/IndustriesService';
import Process from '../../components/Process/Process';
import TypesOfAnnotation from '../../components/TypesOfAnnotation/TypesOfAnnotation';
import UseCase from '../../components/UseCase/UseCase';
import VideoAnnotation from '../../components/VideoAnnotation/VideoAnnotation';

const Home = () => {
    return (
        <div>
            <Hero />
            <VideoAnnotation />
            <TypesOfAnnotation />
            <AnnotationServices />
            <Process />
            <IndustriesService />
            <UseCase />
        </div>
    );
};

export default Home;