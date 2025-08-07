import React, { useState, useEffect } from 'react';

interface HeaderProps {
  isVisible?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible = true }) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // Show header after loader animation
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-light)',
      padding: '15px 0',
      position: 'fixed',
      width: '100%',
      top: '0',
      zIndex: 1000,
      transform: showHeader && isVisible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'all 0.5s ease-out',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo/Brand */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <img 
            src="/siteweblogo.png" 
            alt="Thiago Hetzel" 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '2px solid var(--primary-color)'
            }}
          />
          <div>
            <h1 style={{
              fontSize: '1.5em',
              fontWeight: '700',
              color: 'var(--text-color)',
              margin: '0',
              lineHeight: '1.2'
            }}>
              Thiago Hetzel
            </h1>
            <p style={{
              fontSize: '0.85em',
              color: 'var(--text-secondary)',
              margin: '0',
              fontWeight: '500'
            }}>
              Desenvolvedor Web
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }}>
          {[
            { label: 'Sobre', id: 'sobre' },
            { label: 'Serviços', id: 'servicos' },
            { label: 'Portfólio', id: 'portfolio' },
            { label: 'Contato', id: 'contato' }
          ].map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1em',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                padding: '8px 0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary-color)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {item.label}
            </a>
          ))}
          
          {/* CTA Button */}
          <a
            href="https://wa.me/5541998233408?text=Olá! Gostaria de conversar sobre um projeto!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--primary-color)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.9em',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--secondary-color)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--primary-color)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Falar Comigo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;