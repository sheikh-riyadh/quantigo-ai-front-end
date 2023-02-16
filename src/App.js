import './App.css';
import Hero from './components/Hero/Hero';
import TypesOfAnnotation from './components/TypesOfAnnotation/TypesOfAnnotation';
import VideoAnnotation from './components/VideoAnnotation/VideoAnnotation';

function App() {
  return (
    <div className="App">
      <Hero />
      <VideoAnnotation />
      <TypesOfAnnotation />
    </div>
  );
}

export default App;
