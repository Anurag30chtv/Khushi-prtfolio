import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Layout from './components/Layout';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;
