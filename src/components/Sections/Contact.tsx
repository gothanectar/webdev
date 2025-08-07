import React from 'react';

const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/5541998233408?text=${encodeURIComponent("Olá, Thiago! Vi seu portfólio e gostaria de conversar sobre um projeto!")}`;
  const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=thiagonectar@gmail.com&su=Contato%20do%20Portfólio&body=Olá%20Thiago!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

  return (
    <section id="contato" style={{
      padding: '140px 20px 80px',
      background: 'linear-gradient(135deg, rgba(2, 2, 20, 0.98) 0%, rgba(5, 5, 30, 0.95) 50%, rgba(2, 2, 20, 0.98) 100%)',
      position: 'relative'
    }}>
      {/* Background decorativo */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(0, 255, 221, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '5%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(255, 0, 204, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(30px)'
      }} />

      <div style={{
        maxWidth: '1200px',
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
            Vamos Conversar?
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
            fontSize: '1.8em',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#ffffff',
            lineHeight: '1.5',
            opacity: '0.9',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            Pronto para <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>transformar sua ideia</span> em realidade digital? 
            Entre em contato e vamos criar algo extraordinário juntos!
          </p>
        </div>

        {/* Cards de contato */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: window.innerWidth <= 768 ? '20px' : '40px',
          marginBottom: '60px',
          animation: 'fadeInUp 1.4s ease-out',
          padding: window.innerWidth <= 768 ? '0 10px' : '0'
        }}>
          {/* WhatsApp Card */}
          <div style={{
            background: 'rgba(37, 211, 102, 0.1)',
            border: '2px solid #25D366',
            borderRadius: '25px',
            padding: '40px 30px',
            transition: 'all 0.4s ease',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(37, 211, 102, 0.4)';
            e.currentTarget.style.background = 'rgba(37, 211, 102, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(37, 211, 102, 0.1)';
          }}>
            <div style={{
              fontSize: '4em',
              marginBottom: '20px'
            }}>💬</div>
            <h3 style={{
              color: '#25D366',
              fontSize: '1.8em',
              fontWeight: '700',
              marginBottom: '15px'
            }}>WhatsApp</h3>
            <p style={{
              color: '#ffffff',
              fontSize: '1.1em',
              marginBottom: '25px',
              opacity: '0.9'
            }}>
              Resposta rápida e atendimento personalizado. Vamos conversar sobre seu projeto!
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#25D366',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.2em',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 20px rgba(37, 211, 102, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(37, 211, 102, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(37, 211, 102, 0.3)';
              }}
            >
              <span>📱</span>
              Chamar no WhatsApp
            </a>
          </div>

          {/* Email Card */}
          <div style={{
            background: 'rgba(0, 255, 221, 0.1)',
            border: '2px solid var(--primary-color)',
            borderRadius: '25px',
            padding: '40px 30px',
            transition: 'all 0.4s ease',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 255, 221, 0.4)';
            e.currentTarget.style.background = 'rgba(0, 255, 221, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(0, 255, 221, 0.1)';
          }}>
            <div style={{
              fontSize: '4em',
              marginBottom: '20px'
            }}>📧</div>
            <h3 style={{
              color: 'var(--primary-color)',
              fontSize: '1.8em',
              fontWeight: '700',
              marginBottom: '15px'
            }}>Email</h3>
            <p style={{
              color: '#ffffff',
              fontSize: '1.1em',
              marginBottom: '25px',
              opacity: '0.9'
            }}>
              Para propostas detalhadas e briefings completos. Vamos discutir seu projeto!
            </p>
            <a 
              href={emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--primary-color)',
                color: 'var(--background-color)',
                padding: '15px 30px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.2em',
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
              <span>📧</span>
              Enviar e-mail
            </a>
          </div>
        </div>

        {/* Informações adicionais */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: window.innerWidth <= 768 ? '20px' : '30px',
          marginBottom: '60px',
          animation: 'fadeInUp 1.6s ease-out',
          padding: window.innerWidth <= 768 ? '0 10px' : '0'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5em',
              marginBottom: '15px'
            }}>⚡</div>
            <h4 style={{
              color: 'var(--primary-color)',
              fontSize: '1.3em',
              fontWeight: '600',
              marginBottom: '10px'
            }}>Resposta Rápida</h4>
            <p style={{
              color: '#ffffff',
              opacity: '0.8'
            }}>Retorno em até 2 horas durante horário comercial</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5em',
              marginBottom: '15px'
            }}>🎯</div>
            <h4 style={{
              color: 'var(--primary-color)',
              fontSize: '1.3em',
              fontWeight: '600',
              marginBottom: '10px'
            }}>Consultoria Gratuita</h4>
            <p style={{
              color: '#ffffff',
              opacity: '0.8'
            }}>Primeira conversa sem compromisso para entender seu projeto</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5em',
              marginBottom: '15px'
            }}>🚀</div>
            <h4 style={{
              color: 'var(--primary-color)',
              fontSize: '1.3em',
              fontWeight: '600',
              marginBottom: '10px'
            }}>Entrega Rápida</h4>
            <p style={{
              color: '#ffffff',
              opacity: '0.8'
            }}>Projetos entregues em 7-15 dias úteis</p>
          </div>
        </div>

        {/* Call to Action Final */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 221, 0.1) 0%, rgba(255, 0, 204, 0.1) 100%)',
          borderRadius: '25px',
          padding: '50px 40px',
          border: '2px solid rgba(0, 255, 221, 0.3)',
          animation: 'fadeInUp 1.8s ease-out'
        }}>
          <h3 style={{
            fontSize: '2.5em',
            color: 'var(--primary-color)',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Pronto para começar?
          </h3>
          <p style={{
            fontSize: '1.4em',
            color: '#ffffff',
            marginBottom: '30px',
            opacity: '0.9'
          }}>
            Não deixe sua ideia apenas na imaginação. Vamos transformá-la em realidade!
          </p>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '15px',
              background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
              color: 'var(--background-color)',
              padding: '20px 50px',
              borderRadius: '60px',
              textDecoration: 'none',
              fontSize: '1.4em',
              fontWeight: '700',
              transition: 'all 0.4s ease',
              boxShadow: '0 0 30px rgba(0, 255, 221, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 255, 221, 0.6), 0 15px 30px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 221, 0.4)';
            }}
          >
            <span>🎯</span>
            Vamos Criar Seu Projeto!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;