import { useState, useEffect } from 'react';

interface LoaderProps {
  onLoadingComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (isHidden) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#020214',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      transition: 'opacity 0.5s ease-out'
    }}>
      <div style={{
        marginBottom: '40px'
      }}>
        <img 
          src="/DESIGN.png" 
          alt="Design Logo" 
          style={{
            maxWidth: '300px',
            width: '100%',
            height: 'auto',
            borderRadius: '15px',
            boxShadow: '0 0 40px rgba(0, 255, 221, 0.8)',
            border: '2px solid #00ffdd',
            animation: 'jump 1.5s infinite'
          }}
        />
      </div>
      <div style={{
        fontSize: '2em',
        color: '#00ffdd',
        textShadow: '0 0 20px #00ffdd',
        animation: 'jump 1.5s infinite',
        textAlign: 'center'
      }}>
        Iniciando Salto Hiperdimensional...
      </div>
    </div>
  );
};

export default Loader;