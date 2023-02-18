import React from 'react';
import AnnotationServices from '../../components/AnnotationServices/AnnotationServices';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import IndustriesService from '../../components/IndustriesService/IndustriesService';
import Process from '../../components/Process/Process';
import UseCase from '../../components/UseCase/UseCase';
import VideoAnnotation from '../../components/VideoAnnotation/VideoAnnotation';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <VideoAnnotation />
            <AnnotationServices />
            <Process />
            <IndustriesService />
            <UseCase />
            <Footer />
        </div>
    );
};

export default Home;