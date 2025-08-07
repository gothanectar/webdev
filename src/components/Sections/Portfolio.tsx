import React from 'react';

const portfolio = [
  {
    id: "gotha-nectar",
    title: "Gotha Nectar Consultoria",
    category: "Site Comercial",
    description: "Plataforma completa para consultoria em cosméticos, conectando idealizadores a produtores. Design moderno com foco em conversão e experiência do usuário.",
    image: "/logocosmeticos.png",
    link: "https://gothanectar.github.io/consultoria/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: ["Design Responsivo", "SEO Otimizado", "Formulário de Contato", "WhatsApp Integration"],
    status: "🟢 Online",
    year: "2024"
  },
  {
    id: "tradepulse",
    title: "TradePulse Enhanced",
    category: "Aplicação Web",
    description: "Plataforma avançada de análise de trading com ferramentas profissionais para XAUUSD, BTCUSD. Interface intuitiva com sinais precisos e estratégias compostas.",
    image: "/logotrade.png",
    link: "https://gothanectar.github.io/sinaispointer/",
    technologies: ["React", "TypeScript", "Chart.js", "API Integration"],
    features: ["Análise em Tempo Real", "Sinais Automatizados", "Dashboard Interativo", "Multi-timeframe"],
    status: "🟢 Online",
    year: "2024"
  },
  {
    id: "nicholas-pinturas",
    title: "Nicholas Pinturas",
    category: "Landing Page",
    description: "Site profissional para serviços de pintura e manutenção predial. Design clean com foco em conversão e geração de leads qualificados.",
    image: "/logonicolas.png",
    link: "https://gothanectar.github.io/pinturas/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    features: ["Galeria de Projetos", "Formulário de Orçamento", "Mapa Interativo", "Depoimentos"],
    status: "🟢 Online",
    year: "2024"
  },
  {
    id: "portfolio-hiperdimensional",
    title: "Portfólio Hiperdimensional",
    category: "Aplicação React",
    description: "Portfólio pessoal com efeitos 3D e animações avançadas. Desenvolvido com React, Vite e Three.js para uma experiência imersiva única.",
    image: "/siteweblogo.png",
    link: "#",
    technologies: ["React", "TypeScript", "Three.js", "Vite"],
    features: ["Animações 3D", "Background Interativo", "Design Futurista", "Performance Otimizada"],
    status: "🔄 Em Desenvolvimento",
    year: "2024"
  }
];

const categories = ["Todos", "Site Comercial", "Landing Page", "Aplicação Web", "Aplicação React"];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");
  const [filteredPortfolio, setFilteredPortfolio] = React.useState(portfolio);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    if (selectedCategory === "Todos") {
      setFilteredPortfolio(portfolio);
    } else {
      setFilteredPortfolio(portfolio.filter(item => item.category === selectedCategory));
    }
    setCurrentIndex(0); // Reset to first slide when category changes
  }, [selectedCategory]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % filteredPortfolio.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + filteredPortfolio.length) % filteredPortfolio.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="portfolio" style={{
      padding: '140px 20px',
      background: 'linear-gradient(135deg, rgba(2, 2, 20, 0.95) 0%, rgba(10, 5, 30, 0.9) 50%, rgba(2, 2, 20, 0.95) 100%)',
      position: 'relative'
    }}>
      {/* Background decorativo */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 0, 204, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '8%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(0, 255, 221, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Header da seção */}
        <div style={{ marginBottom: '60px' }}>
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
            Meu Portfólio
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
            margin: '0 auto 40px',
            color: '#ffffff',
            lineHeight: '1.5',
            opacity: '0.9',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            Projetos que <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>transformam ideias em realidade digital</span>. 
            Cada projeto é uma jornada única de criação e inovação.
          </p>
        </div>

        {/* Filtros de categoria */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          marginBottom: '60px',
          animation: 'fadeInUp 1.4s ease-out'
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                background: selectedCategory === category 
                  ? 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))' 
                  : 'rgba(0, 255, 221, 0.1)',
                color: selectedCategory === category ? 'var(--background-color)' : 'var(--primary-color)',
                border: selectedCategory === category ? 'none' : '2px solid rgba(0, 255, 221, 0.3)',
                padding: '12px 25px',
                borderRadius: '25px',
                fontSize: '1em',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: selectedCategory === category ? '0 0 20px rgba(0, 255, 221, 0.4)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = 'rgba(0, 255, 221, 0.2)';
                  e.currentTarget.style.borderColor = 'var(--primary-color)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = 'rgba(0, 255, 221, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 221, 0.3)';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carrossel de projetos */}
        <div style={{
          position: 'relative',
          maxWidth: '1000px',
          margin: '0 auto',
          animation: 'fadeInUp 1.6s ease-out',
          padding: '30px 20px'
        }}>
          {/* Botões de navegação */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning || filteredPortfolio.length <= 1}
            style={{
              position: 'absolute',
              left: '-70px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 255, 221, 0.1)',
              border: '2px solid var(--primary-color)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              color: 'var(--primary-color)',
              fontSize: '2em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 10,
              backdropFilter: 'blur(10px)',
              opacity: (isTransitioning || filteredPortfolio.length <= 1) ? 0.3 : 1
            }}
            onMouseEnter={(e) => {
              if (!isTransitioning && filteredPortfolio.length > 1) {
                e.currentTarget.style.background = 'var(--primary-color)';
                e.currentTarget.style.color = 'var(--background-color)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 0 20px var(--primary-color)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 221, 0.1)';
              e.currentTarget.style.color = 'var(--primary-color)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning || filteredPortfolio.length <= 1}
            style={{
              position: 'absolute',
              right: '-70px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 255, 221, 0.1)',
              border: '2px solid var(--primary-color)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              color: 'var(--primary-color)',
              fontSize: '2em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 10,
              backdropFilter: 'blur(10px)',
              opacity: (isTransitioning || filteredPortfolio.length <= 1) ? 0.3 : 1
            }}
            onMouseEnter={(e) => {
              if (!isTransitioning && filteredPortfolio.length > 1) {
                e.currentTarget.style.background = 'var(--primary-color)';
                e.currentTarget.style.color = 'var(--background-color)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 0 20px var(--primary-color)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 221, 0.1)';
              e.currentTarget.style.color = 'var(--primary-color)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
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
              {filteredPortfolio.map((item, index) => (
                <div 
                  key={item.id} 
                  style={{
                    minWidth: '100%',
                    background: 'rgba(10, 10, 50, 0.9)',
                    borderRadius: '25px',
                    overflow: 'visible',
                    border: '2px solid rgba(0, 255, 221, 0.2)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    opacity: index === currentIndex ? 1 : 0.8
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 255, 221, 0.4), 0 20px 40px rgba(0, 0, 0, 0.4)';
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.borderColor = 'rgba(0, 255, 221, 0.2)';
                  }}
                >
                  {/* Imagem do projeto */}
                  <div style={{ 
                    position: 'relative', 
                    overflow: 'hidden',
                    borderRadius: '25px 25px 0 0',
                    margin: '-2px -2px 0 -2px'
                  }}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '280px',
                        objectFit: 'contain',
                        objectPosition: 'center',
                        background: item.id === 'nicholas-pinturas' 
                          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 255, 221, 0.05) 100%)'
                          : 'linear-gradient(135deg, rgba(0, 255, 221, 0.1) 0%, rgba(255, 0, 204, 0.1) 100%)',
                        transition: 'all 0.4s ease',
                        filter: item.id === 'nicholas-pinturas' 
                          ? 'brightness(1) contrast(1.2) saturate(1.1)' 
                          : 'brightness(0.9) contrast(1.1)',
                        padding: item.id === 'nicholas-pinturas' ? '30px' : '20px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        if (item.id === 'nicholas-pinturas') {
                          e.currentTarget.style.filter = 'brightness(1.1) contrast(1.3) saturate(1.2)';
                        } else {
                          e.currentTarget.style.filter = 'brightness(1) contrast(1.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        if (item.id === 'nicholas-pinturas') {
                          e.currentTarget.style.filter = 'brightness(1) contrast(1.2) saturate(1.1)';
                        } else {
                          e.currentTarget.style.filter = 'brightness(0.9) contrast(1.1)';
                        }
                      }}
                    />
                    
                    {/* Badge de categoria */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      left: '15px',
                      background: 'rgba(0, 255, 221, 0.95)',
                      color: 'var(--background-color)',
                      padding: '8px 18px',
                      borderRadius: '20px',
                      fontSize: '0.95em',
                      fontWeight: '700',
                      backdropFilter: 'blur(15px)',
                      boxShadow: '0 4px 15px rgba(0, 255, 221, 0.3)',
                      zIndex: 20,
                      border: '2px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      {item.category}
                    </div>

                    {/* Status */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: 'rgba(0, 0, 0, 0.85)',
                      color: 'white',
                      padding: '8px 15px',
                      borderRadius: '20px',
                      fontSize: '0.85em',
                      fontWeight: '700',
                      backdropFilter: 'blur(15px)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                      zIndex: 20,
                      border: '2px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      {item.status}
                    </div>
                  </div>

                  {/* Conteúdo do card */}
                  <div style={{ padding: '35px 30px 30px 30px' }}>
                    {/* Título e ano */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '15px'
                    }}>
                      <h3 style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.8em',
                        fontWeight: '700',
                        margin: '0',
                        textShadow: '0 0 10px rgba(0, 255, 221, 0.3)'
                      }}>
                        {item.title}
                      </h3>
                      <span style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1em',
                        opacity: '0.7'
                      }}>
                        {item.year}
                      </span>
                    </div>

                    {/* Descrição */}
                    <p style={{
                      color: '#ffffff',
                      fontSize: '1.1em',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      opacity: '0.9'
                    }}>
                      {item.description}
                    </p>

                    {/* Tecnologias */}
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{
                        color: 'var(--secondary-color)',
                        fontSize: '1em',
                        marginBottom: '10px',
                        fontWeight: '600'
                      }}>
                        Tecnologias:
                      </h4>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px'
                      }}>
                        {item.technologies.map((tech, idx) => (
                          <span key={idx} style={{
                            background: 'rgba(0, 255, 221, 0.1)',
                            color: 'var(--primary-color)',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '0.9em',
                            border: '1px solid rgba(0, 255, 221, 0.3)'
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div style={{ marginBottom: '25px' }}>
                      <h4 style={{
                        color: 'var(--secondary-color)',
                        fontSize: '1em',
                        marginBottom: '10px',
                        fontWeight: '600'
                      }}>
                        Principais Features:
                      </h4>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '8px'
                      }}>
                        {item.features.map((feature, idx) => (
                          <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#ffffff',
                            fontSize: '0.9em'
                          }}>
                            <span style={{
                              color: 'var(--primary-color)',
                              marginRight: '8px',
                              fontSize: '1em'
                            }}>✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Botões de ação */}
                    <div style={{
                      display: 'flex',
                      gap: '15px',
                      justifyContent: 'space-between'
                    }}>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                          color: 'var(--background-color)',
                          padding: '12px 25px',
                          borderRadius: '25px',
                          textDecoration: 'none',
                          fontSize: '1em',
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 0 15px rgba(0, 255, 221, 0.3)',
                          flex: '1'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 221, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 221, 0.3)';
                        }}
                      >
                        <span>🚀</span>
                        Ver Projeto
                      </a>

                      <a
                        href={`https://wa.me/5541998233408?text=Olá! Gostaria de um projeto similar ao ${item.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'rgba(37, 211, 102, 0.1)',
                          color: '#25D366',
                          border: '2px solid #25D366',
                          padding: '12px 20px',
                          borderRadius: '25px',
                          textDecoration: 'none',
                          fontSize: '1em',
                          fontWeight: '600',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#25D366';
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(37, 211, 102, 0.1)';
                          e.currentTarget.style.color = '#25D366';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <span>💬</span>
                        Quero Igual
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          {filteredPortfolio.length > 1 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '40px'
            }}>
              {filteredPortfolio.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    border: 'none',
                    background: index === currentIndex 
                      ? 'var(--primary-color)' 
                      : 'rgba(0, 255, 221, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: index === currentIndex 
                      ? '0 0 15px var(--primary-color)' 
                      : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== currentIndex) {
                      e.currentTarget.style.background = 'rgba(0, 255, 221, 0.6)';
                      e.currentTarget.style.transform = 'scale(1.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentIndex) {
                      e.currentTarget.style.background = 'rgba(0, 255, 221, 0.3)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Call to Action Final */}
        <div style={{
          marginTop: '80px',
          padding: '50px',
          background: 'linear-gradient(135deg, rgba(0, 255, 221, 0.1) 0%, rgba(255, 0, 204, 0.1) 100%)',
          borderRadius: '25px',
          border: '2px solid rgba(0, 255, 221, 0.3)',
          animation: 'fadeInUp 2.2s ease-out'
        }}>
          <h3 style={{
            fontSize: '2.5em',
            color: 'var(--primary-color)',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Gostou do que viu?
          </h3>
          <p style={{
            fontSize: '1.3em',
            color: '#ffffff',
            marginBottom: '30px',
            opacity: '0.9'
          }}>
            Vamos criar algo incrível juntos! Seu projeto pode ser o próximo destaque do meu portfólio.
          </p>
          <a
            href="https://wa.me/5541998233408?text=Olá! Vi seu portfólio e gostaria de criar um projeto incrível!"
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
            <span>🎯</span>
            Vamos Começar Seu Projeto!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;