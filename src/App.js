import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Tittle from './components/Tittle/Tittle';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Videoplayer from './components/Videoplayer/Videoplayer';
import { useState } from 'react';


function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <div className='container'>
      <Tittle subTitle='Our PROGRAME' title='What We offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Tittle subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Tittle subTitle='TESTIMONIALS' title=' What student says'/>
      <Testimonials/>
      <Tittle subTitle='Contact Us' title=' Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
