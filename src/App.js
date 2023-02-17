import './App.css';
// Import Swiper styles
import 'swiper/css';

import Hero from './components/Hero/Hero';
import TypesOfAnnotation from './components/TypesOfAnnotation/TypesOfAnnotation';
import VideoAnnotation from './components/VideoAnnotation/VideoAnnotation';
import AnnotationServices from './components/AnnotationServices/AnnotationServices';
import Process from './components/Process/Process';
import IndustriesService from './components/IndustriesService/IndustriesService';

function App() {
  return (
    <div className="App">
      <Hero />
      <VideoAnnotation />
      <TypesOfAnnotation />
      <AnnotationServices />
      <Process />
      <IndustriesService />
    </div>
  );
}

export default App;
