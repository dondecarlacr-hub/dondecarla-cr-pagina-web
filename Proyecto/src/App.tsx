import React, { useEffect, useRef, useState, RefObject } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import 'animate.css';

function useElementOnScreen(
  options: IntersectionObserverInit
): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
}

// Este componente envuelve las rutas y permite usar useLocation
function ScrollHandlerWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location]);

  return <>{children}</>;
}

export function App() {
  return (
    <Router>
      <ScrollHandlerWrapper>
        <div className="box-border flex flex-col min-h-screen bg-background-white overflow-hidden">
          <Header />
          <main className="flex-grow mt-16">
            <Routes>
              <Route path="/" element={<Home useElementOnScreen={useElementOnScreen} />} />
              <Route path="/menu" element={<Menu useElementOnScreen={useElementOnScreen} />} />
              <Route path="/about" element={<About useElementOnScreen={useElementOnScreen} />} />
              <Route path="/contact" element={<Contact useElementOnScreen={useElementOnScreen} />} />
            </Routes>
          </main>
          <Footer useElementOnScreen={useElementOnScreen} />
        </div>
      </ScrollHandlerWrapper>
    </Router>
  );
}
