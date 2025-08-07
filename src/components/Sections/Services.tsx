import React from 'react';

const services = [
  {
    id: "sites-comerciais",
    icon: "🌐",
    title: "Sites Comerciais",
    subtitle: "Modernos & Intuitivos",
    description: "Sites responsivos e otimizados que convertem visitantes em clientes. Design moderno com foco na experiência do usuário e performance.",
    features: ["Design Responsivo", "SEO Otimizado", "Carregamento Rápido", "Integração WhatsApp"],
    price: "A partir de R$ 1.500",
    popular: false
  },
  {
    id: "landing-pages",
    icon: "🚀",
    title: "Landing Pages",
    subtitle: "Alta Conversão",
    description: "Páginas focadas em conversão com design persuasivo e otimizações para vendas. Ideais para campanhas e lançamentos.",
    features: ["Design Persuasivo", "A/B Testing", "Analytics Integrado", "Formulários Otimizados"],
    price: "A partir de R$ 800",
    popular: true
  },
  {
    id: "aplicacoes-web",
    icon: "⚡",
    title: "Aplicações Web",
    subtitle: "React & Vite",
    description: "Aplicações web modernas e performáticas usando as melhores tecnologias. Experiência de usuário fluida e interativa.",
    features: ["React + TypeScript", "Performance Otimizada", "Interface Moderna", "Manutenção Inclusa"],
    price: "A partir de R$ 3.000",
    popular: false
  },
  {
    id: "seo-marketing",
    icon: "📈",
    title: "SEO & Marketing Digital",
    subtitle: "Visibilidade Online",
    description: "Otimização para mecanismos de busca e estratégias de marketing digital para aumentar sua presença online e gerar mais leads.",
    features: ["Otimização SEO", "Google Ads", "Analytics & Relatórios", "Estratégia de Conteúdo"],
    price: "A partir de R$ 1.200",
    popular: false
  },
  {
    id: "crm-automacao",
    icon: "🤖",
    title: "CRM & Automações",
    subtitle: "Gestão Inteligente",
    description: "Sistemas de gestão de relacionamento com cliente e automações para otimizar processos e aumentar a eficiência do seu negócio.",
    features: ["CRM Personalizado", "Automação de Processos", "Integração WhatsApp", "Relatórios Gerenciais"],
    price: "A partir de R$ 2.500",
    popular: false
  }
];

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="servicos" style={{
      padding: '140px 20px',
      background: 'linear-gradient(135deg, rgba(2, 2, 20, 0.98) 0%, rgba(5, 5, 30, 0.95) 50%, rgba(2, 2, 20, 0.98) 100%)',
      position: 'relative'
    }}>
      {/* Background decorativo */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(0, 255, 221, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '8%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(255, 0, 204, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(30px)'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Header da seção */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '4em',
            fontWeight: '800',
            background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
            textShadow: '0 0 30px rgba(0, 255, 221, 0.3)',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Meus Serviços
          </h2>
          
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
            margin: '0 auto 30px',
            borderRadius: '2px',
            boxShadow: '0 0 15px var(--primary-color)'
          }} />
          
          <p style={{
            fontSize: '1.6em',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#ffffff',
            lineHeight: '1.5',
            opacity: '0.9',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            Soluções digitais que <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>transformam ideias em resultados</span>. 
            Tecnologia de ponta com foco em conversão e experiência do usuário.
          </p>
        </div>

        {/* Carrossel de serviços */}
        <div style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto',
          animation: 'fadeInUp 1.4s ease-out'
        }}>
          {/* Botões de navegação */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 255, 221, 0.1)',
              border: '2px solid var(--primary-color)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              color: 'var(--primary-color)',
              fontSize: '1.5em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 10,
              backdropFilter: 'blur(10px)',
              opacity: isTransitioning ? 0.5 : 1
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-color)';
              e.currentTarget.style.color = 'var(--background-color)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 221, 0.1)';
              e.currentTarget.style.color = 'var(--primary-color)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 255, 221, 0.1)',
              border: '2px solid var(--primary-color)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              color: 'var(--primary-color)',
              fontSize: '1.5em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 10,
              backdropFilter: 'blur(10px)',
              opacity: isTransitioning ? 0.5 : 1
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-color)';
              e.currentTarget.style.color = 'var(--background-color)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 221, 0.1)';
              e.currentTarget.style.color = 'var(--primary-color)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ›
          </button>

          {/* Container do slide */}
          <div style={{
            overflow: 'hidden',
            borderRadius: '25px'
          }}>
            <div style={{
              display: 'flex',
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}>
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  style={{
                    minWidth: '100%',
                    background: service.popular 
                      ? 'linear-gradient(135deg, rgba(0, 255, 221, 0.1) 0%, rgba(255, 0, 204, 0.05) 100%)' 
                      : 'rgba(10, 10, 50, 0.8)',
                    padding: '45px 35px',
                    border: service.popular 
                      ? '3px solid var(--primary-color)' 
                      : '2px solid rgba(0, 255, 221, 0.3)',
                    borderRadius: '25px',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    backdropFilter: 'blur(10px)',
                    boxShadow: service.popular 
                      ? '0 0 40px rgba(0, 255, 221, 0.3)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.3)',
                    transform: index === currentIndex && service.popular ? 'scale(1.02)' : 'scale(1)',
                    opacity: index === currentIndex ? 1 : 0.7
                  }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = service.popular ? 'scale(1.08) translateY(-10px)' : 'scale(1.05) translateY(-15px)';
                e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 255, 221, 0.5), 0 20px 40px rgba(0, 0, 0, 0.4)';
                e.currentTarget.style.borderColor = 'var(--primary-color)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = service.popular ? 'scale(1.05) translateY(0)' : 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = service.popular 
                  ? '0 0 40px rgba(0, 255, 221, 0.3)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = service.popular 
                  ? 'var(--primary-color)' 
                  : 'rgba(0, 255, 221, 0.3)';
              }}
            >
              {/* Badge Popular */}
              {service.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                  color: 'var(--background-color)',
                  padding: '8px 25px',
                  borderRadius: '20px',
                  fontSize: '0.9em',
                  fontWeight: '700',
                  boxShadow: '0 0 20px rgba(0, 255, 221, 0.5)'
                }}>
                  ⭐ MAIS POPULAR
                </div>
              )}

              {/* Ícone */}
              <div style={{
                fontSize: '4em',
                marginBottom: '20px',
                filter: 'drop-shadow(0 0 10px rgba(0, 255, 221, 0.5))'
              }}>
                {service.icon}
              </div>

              {/* Título e Subtítulo */}
              <h3 style={{
                color: 'var(--primary-color)',
                marginBottom: '8px',
                fontSize: '2.2em',
                fontWeight: '700',
                textShadow: '0 0 15px rgba(0, 255, 221, 0.3)'
              }}>
                {service.title}
              </h3>
              
              <h4 style={{
                color: 'var(--secondary-color)',
                marginBottom: '20px',
                fontSize: '1.3em',
                fontWeight: '500',
                opacity: '0.9'
              }}>
                {service.subtitle}
              </h4>

              {/* Descrição */}
              <p style={{
                color: '#ffffff',
                fontSize: '1.1em',
                lineHeight: '1.6',
                marginBottom: '25px',
                opacity: '0.9'
              }}>
                {service.description}
              </p>

              {/* Features */}
              <div style={{
                marginBottom: '30px',
                textAlign: 'left'
              }}>
                {service.features.map((feature, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                    color: '#ffffff',
                    fontSize: '1em'
                  }}>
                    <span style={{
                      color: 'var(--primary-color)',
                      marginRight: '10px',
                      fontSize: '1.2em'
                    }}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Preço */}
              <div style={{
                background: 'rgba(0, 255, 221, 0.1)',
                padding: '15px',
                borderRadius: '15px',
                marginBottom: '25px',
                border: '1px solid rgba(0, 255, 221, 0.3)'
              }}>
                <div style={{
                  color: 'var(--primary-color)',
                  fontSize: '1.8em',
                  fontWeight: '700',
                  textShadow: '0 0 10px rgba(0, 255, 221, 0.3)'
                }}>
                  {service.price}
                </div>
              </div>

              {/* Botão CTA */}
              <a
                href={`https://wa.me/5541998233408?text=Olá! Tenho interesse no serviço: ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: service.popular 
                    ? 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))' 
                    : 'transparent',
                  color: service.popular ? 'var(--background-color)' : 'var(--primary-color)',
                  border: service.popular ? 'none' : '2px solid var(--primary-color)',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.1em',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: service.popular 
                    ? '0 0 20px rgba(0, 255, 221, 0.4)' 
                    : 'none'
                }}
                onMouseEnter={(e) => {
                  if (service.popular) {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 221, 0.7)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  } else {
                    e.currentTarget.style.background = 'var(--primary-color)';
                    e.currentTarget.style.color = 'var(--background-color)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (service.popular) {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 221, 0.4)';
                    e.currentTarget.style.transform = 'scale(1)';
                  } else {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                <span>💬</span>
                Solicitar Orçamento
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '30px'
          }}>
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: index === currentIndex 
                    ? 'var(--primary-color)' 
                    : 'rgba(0, 255, 221, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: index === currentIndex 
                    ? '0 0 10px var(--primary-color)' 
                    : 'none'
                }}
                onMouseEnter={(e) => {
                  if (index !== currentIndex) {
                    e.currentTarget.style.background = 'rgba(0, 255, 221, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentIndex) {
                    e.currentTarget.style.background = 'rgba(0, 255, 221, 0.3)';
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Final */}
        <div style={{
          marginTop: '80px',
          padding: '50px',
          background: 'linear-gradient(135deg, rgba(0, 255, 221, 0.1) 0%, rgba(255, 0, 204, 0.1) 100%)',
          borderRadius: '25px',
          border: '2px solid rgba(0, 255, 221, 0.3)',
          animation: 'fadeInUp 2s ease-out'
        }}>
          <h3 style={{
            fontSize: '2.5em',
            color: 'var(--primary-color)',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Precisa de algo personalizado?
          </h3>
          <p style={{
            fontSize: '1.3em',
            color: '#ffffff',
            marginBottom: '30px',
            opacity: '0.9'
          }}>
            Cada projeto é único. Vamos conversar sobre suas necessidades específicas!
          </p>
          <a
            href="https://wa.me/5541998233408?text=Olá! Gostaria de discutir um projeto personalizado!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
              color: 'var(--background-color)',
              padding: '20px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.3em',
              fontWeight: '700',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 25px rgba(0, 255, 221, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 255, 221, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 221, 0.4)';
            }}
          >
            <span>🚀</span>
            Vamos Conversar!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;