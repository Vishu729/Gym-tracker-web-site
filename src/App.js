import './App.css';
import Features from './components/Gym Features/Features';
import Hero from './components/Hero/Hero';
import Plans from './components/Payment Plans/Plans';
import Reviews from './components/Reviews/Reviews';
import Programs from './components/Training Programs/Programs';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Features/>
          <Plans/>
          <Reviews/>
    </div>
  );
}

export default App;
 