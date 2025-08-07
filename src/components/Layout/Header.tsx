import React, { useState, useEffect } from 'react';

interface HeaderProps {
  isVisible?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible = true }) => {
  const [showHeader, setShowHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Show header after loader animation
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 1000);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header style={{
      background: 'rgba(2, 2, 20, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 255, 221, 0.3)',
      padding: isMobile ? '10px 0' : '15px 0',
      position: 'fixed',
      width: '100%',
      top: '0',
      zIndex: 1000,
      transform: showHeader && isVisible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'all 0.5s ease-out',
      boxShadow: '0 2px 20px rgba(0, 255, 221, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 15px' : '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo/Brand */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '8px' : '12px'
        }}>
          <img 
            src="/siteweblogo.png" 
            alt="Thiago Hetzel" 
            style={{
              width: isMobile ? '35px' : '40px',
              height: isMobile ? '35px' : '40px',
              borderRadius: '8px',
              border: '2px solid var(--primary-color)',
              boxShadow: '0 0 10px rgba(0, 255, 221, 0.3)'
            }}
          />
          {!isMobile && (
            <div>
              <h1 style={{
                fontSize: '1.5em',
                fontWeight: '700',
                color: 'var(--primary-color)',
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
          )}
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
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
                  color: 'var(--text-color)',
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
                  e.currentTarget.style.textShadow = '0 0 10px var(--primary-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-color)';
                  e.currentTarget.style.textShadow = 'none';
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
                background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                color: 'var(--background-color)',
                padding: '10px 20px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '0.9em',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(0, 255, 221, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 221, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 221, 0.3)';
              }}
            >
              Falar Comigo
            </a>
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            style={{
              background: 'transparent',
              border: '2px solid var(--primary-color)',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
              width: '40px',
              height: '40px',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 221, 0.1)';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 221, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              width: '20px',
              height: '2px',
              background: 'var(--primary-color)',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translateY(5px)' : 'none'
            }} />
            <div style={{
              width: '20px',
              height: '2px',
              background: 'var(--primary-color)',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1
            }} />
            <div style={{
              width: '20px',
              height: '2px',
              background: 'var(--primary-color)',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none'
            }} />
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          right: '0',
          background: 'rgba(2, 2, 20, 0.98)',
          backdropFilter: 'blur(15px)',
          borderBottom: '2px solid rgba(0, 255, 221, 0.3)',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
        }}>
          <nav style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
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
                  color: 'var(--text-color)',
                  textDecoration: 'none',
                  fontSize: '1.1em',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  border: '1px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary-color)';
                  e.currentTarget.style.background = 'rgba(0, 255, 221, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 221, 0.3)';
                  e.currentTarget.style.textShadow = '0 0 10px var(--primary-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-color)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                <span style={{ fontSize: '1.2em' }}>
                  {item.id === 'sobre' && '👨‍💻'}
                  {item.id === 'servicos' && '⚡'}
                  {item.id === 'portfolio' && '🎨'}
                  {item.id === 'contato' && '📞'}
                </span>
                {item.label}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <a
              href="https://wa.me/5541998233408?text=Olá! Gostaria de conversar sobre um projeto!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                color: 'var(--background-color)',
                padding: '15px 20px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '1em',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(0, 255, 221, 0.4)',
                textAlign: 'center',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 221, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 221, 0.4)';
              }}
            >
              <span>💬</span>
              Falar Comigo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;