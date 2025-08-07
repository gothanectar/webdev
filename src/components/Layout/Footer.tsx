import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/5541998233408',
      color: '#25D366'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/thiago-augusto-h-silva-4651092a8',
      color: '#0077B5'
    }
  ];

  const quickLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    'Sites Comerciais',
    'Landing Pages',
    'Aplicações Web',
    'SEO & Marketing Digital',
    'CRM & Automações'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: 'linear-gradient(135deg, rgba(2, 2, 20, 0.98) 0%, rgba(5, 5, 30, 0.95) 100%)',
      borderTop: '2px solid rgba(0, 255, 221, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorativo */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--primary-color), var(--secondary-color), transparent)',
        animation: 'gradientShift 3s ease-in-out infinite'
      }} />

      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0, 255, 221, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '80px 20px 30px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Seção principal do footer */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '50px',
          marginBottom: '60px'
        }}>
          {/* Coluna 1 - Sobre */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '25px'
            }}>
              <img
                src="/siteweblogo.png"
                alt="Thiago Hetzel"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '15px',
                  marginRight: '15px',
                  border: '2px solid var(--primary-color)',
                  boxShadow: '0 0 20px rgba(0, 255, 221, 0.3)'
                }}
              />
              <div>
                <h3 style={{
                  color: 'var(--primary-color)',
                  fontSize: '1.5em',
                  fontWeight: '700',
                  margin: '0',
                  textShadow: '0 0 10px rgba(0, 255, 221, 0.3)'
                }}>
                  Thiago Hetzel
                </h3>
                <p style={{
                  color: 'var(--secondary-color)',
                  fontSize: '1em',
                  margin: '5px 0 0 0',
                  opacity: '0.9'
                }}>
                  Desenvolvedor sites & design
                </p>
              </div>
            </div>

            <p style={{
              color: '#ffffff',
              fontSize: '1.1em',
              lineHeight: '1.6',
              marginBottom: '25px',
              opacity: '0.9'
            }}>
              Transformando ideias em experiências digitais extraordinárias.
              Especialista em desenvolvimento web moderno com foco em resultados e inovação.
            </p>

            {/* Redes sociais */}
            <div style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    background: 'rgba(0, 255, 221, 0.1)',
                    border: '2px solid rgba(0, 255, 221, 0.3)',
                    borderRadius: '15px',
                    color: 'var(--primary-color)',
                    fontSize: '1.5em',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.color === 'var(--primary-color)' ? social.color : social.color;
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.color = social.color === '#333' ? 'white' : 'white';
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                    e.currentTarget.style.boxShadow = `0 0 20px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 255, 221, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(0, 255, 221, 0.3)';
                    e.currentTarget.style.color = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 style={{
              color: 'var(--primary-color)',
              fontSize: '1.4em',
              fontWeight: '700',
              marginBottom: '25px',
              textShadow: '0 0 10px rgba(0, 255, 221, 0.3)'
            }}>
              Navegação
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {quickLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    style={{
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontSize: '1.1em',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      opacity: '0.8'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary-color)';
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'translateX(10px)';
                      e.currentTarget.style.textShadow = '0 0 10px rgba(0, 255, 221, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.opacity = '0.8';
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    <span style={{ marginRight: '10px', color: 'var(--primary-color)' }}>▶</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Serviços */}
          <div>
            <h4 style={{
              color: 'var(--primary-color)',
              fontSize: '1.4em',
              fontWeight: '700',
              marginBottom: '25px',
              textShadow: '0 0 10px rgba(0, 255, 221, 0.3)'
            }}>
              Serviços
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {services.map((service) => (
                <li key={service} style={{ marginBottom: '12px' }}>
                  <span style={{
                    color: '#ffffff',
                    fontSize: '1.1em',
                    opacity: '0.8',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '10px', color: 'var(--secondary-color)' }}>✓</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h4 style={{
              color: 'var(--primary-color)',
              fontSize: '1.4em',
              fontWeight: '700',
              marginBottom: '25px',
              textShadow: '0 0 10px rgba(0, 255, 221, 0.3)'
            }}>
              Contato
            </h4>

            <div style={{ marginBottom: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                color: '#ffffff',
                opacity: '0.9'
              }}>
                <span style={{ marginRight: '12px', fontSize: '1.2em' }}>📱</span>
                <span style={{ fontSize: '1.1em' }}>+55 (41) 99823-3408</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                color: '#ffffff',
                opacity: '0.9'
              }}>
                <span style={{ marginRight: '12px', fontSize: '1.2em' }}>📧</span>
                <span style={{ fontSize: '1.1em' }}>thiagonectar@gmail.com</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                color: '#ffffff',
                opacity: '0.9'
              }}>
                <span style={{ marginRight: '12px', fontSize: '1.2em' }}>📍</span>
                <span style={{ fontSize: '1.1em' }}>Curitiba, PR - Brasil</span>
              </div>
            </div>

            <a
              href="https://wa.me/5541998233408?text=Olá! Gostaria de conversar sobre um projeto!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                color: 'var(--background-color)',
                padding: '12px 25px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '1em',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 20px rgba(0, 255, 221, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 221, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 221, 0.3)';
              }}
            >
              <span>💬</span>
              Falar Agora
            </a>
          </div>
        </div>

        {/* Linha divisória */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 255, 221, 0.3), transparent)',
          margin: '40px 0'
        }} />

        {/* Copyright e informações finais */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{
            color: '#ffffff',
            fontSize: '1em',
            opacity: '0.7'
          }}>
            © {currentYear} Thiago Augusto Hetzel Silva. Todos os direitos reservados.
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center'
          }}>
            <span style={{
              color: '#ffffff',
              fontSize: '0.9em',
              opacity: '0.7'
            }}>
              Desenvolvido com VS code☕⚡ by Gothanectar 2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;