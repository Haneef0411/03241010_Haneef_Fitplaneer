import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useScrollToTop from './hooks/useScrollToTop';
import { AuthProvider } from './context/AuthContext.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import BMICalculator from './components/BMICalculator';
import Gallery from './components/Gallery';
import Tips from './components/Tips';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Auth from './components/Auth';

function App() {
  useScrollToTop();

  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <TransitionGroup component="main">
          <CSSTransition
            timeout={300}
            classNames={{
              enter: 'page-transition-enter',
              enterActive: 'page-transition-enter-active',
              exit: 'page-transition-exit',
              exitActive: 'page-transition-exit-active'
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bmi" element={<BMICalculator />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
