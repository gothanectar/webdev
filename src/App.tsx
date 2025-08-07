import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Loader from './components/UI/Loader';
import WhatsAppFloat from './components/UI/WhatsAppFloat';
import Background3D from './components/3D/Background3D';
import SEOHead from './components/SEO/SEOHead';
import About from './components/Sections/About';
import Services from './components/Sections/Services';
import Portfolio from './components/Sections/Portfolio';
import Contact from './components/Sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <SEOHead />
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      <Background3D />
      <WhatsAppFloat />
      <Layout>
        <div style={{ 
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-out'
        }}>
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </div>
      </Layout>
    </>
  );
}

export default App;
