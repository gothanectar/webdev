const About: React.FC = () => {
  return (
    <section id="sobre" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '120px 20px 80px',
      textAlign: 'center',
      position: 'relative',
      background: 'var(--background-color)'
    }}>
      {/* Efeito de partículas decorativas */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '4px',
        height: '4px',
        background: 'var(--primary-color)',
        borderRadius: '50%',
        boxShadow: '0 0 10px var(--primary-color)',
        animation: 'pulse 2s infinite'
      }} />
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '15%',
        width: '3px',
        height: '3px',
        background: 'var(--secondary-color)',
        borderRadius: '50%',
        boxShadow: '0 0 8px var(--secondary-color)',
        animation: 'pulse 2.5s infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '25%',
        left: '20%',
        width: '5px',
        height: '5px',
        background: 'var(--primary-color)',
        borderRadius: '50%',
        boxShadow: '0 0 12px var(--primary-color)',
        animation: 'pulse 1.8s infinite'
      }} />

      {/* Logo Principal com animação melhorada */}
      <div style={{
        marginBottom: '60px',
        position: 'relative',
        animation: 'fadeInUp 1s ease-out'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '-20px',
          right: '-20px',
          bottom: '-20px',
          background: 'linear-gradient(45deg, rgba(0, 255, 221, 0.1), rgba(255, 0, 204, 0.1))',
          borderRadius: '30px',
          filter: 'blur(20px)',
          animation: 'pulse 3s infinite'
        }} />
        <img 
          src="/siteweblogo.png" 
          alt="Thiago Augusto Hetzel Silva" 
          style={{
            maxWidth: '320px',
            width: '100%',
            height: 'auto',
            borderRadius: '25px',
            boxShadow: '0 0 50px rgba(0, 255, 221, 0.7), 0 0 100px rgba(0, 255, 221, 0.3)',
            border: '3px solid var(--primary-color)',
            filter: 'brightness(1.1) contrast(1.1)',
            position: 'relative',
            zIndex: 2,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05) rotateY(5deg)';
            e.currentTarget.style.boxShadow = '0 0 60px rgba(0, 255, 221, 0.9), 0 0 120px rgba(0, 255, 221, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
            e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 255, 221, 0.7), 0 0 100px rgba(0, 255, 221, 0.3)';
          }}
        />
      </div>

      {/* Título Principal com efeito melhorado */}
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{
          fontSize: window.innerWidth <= 768 ? '2.5em' : window.innerWidth <= 1024 ? '3.5em' : '5em',
          fontWeight: '800',
          background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--primary-color))',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '10px',
          textShadow: '0 0 40px rgba(0, 255, 221, 0.6)',
          letterSpacing: window.innerWidth <= 768 ? '1px' : '3px',
          animation: 'gradientShift 3s ease-in-out infinite, fadeInUp 1.2s ease-out',
          position: 'relative',
          textAlign: 'center'
        }}>
          DESENVOLVEDOR
        </h1>
        
        <h2 style={{
          fontSize: window.innerWidth <= 768 ? '1.8em' : window.innerWidth <= 1024 ? '2.5em' : '3.2em',
          fontWeight: '500',
          color: 'var(--secondary-color)',
          marginBottom: '0',
          textShadow: '0 0 25px rgba(255, 0, 204, 0.6)',
          letterSpacing: window.innerWidth <= 768 ? '1px' : '2px',
          animation: 'fadeInUp 1.4s ease-out',
          textAlign: 'center'
        }}>
          & DESIGN
        </h2>
      </div>

      {/* Linha decorativa */}
      <div style={{
        width: '100px',
        height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)',
        margin: '40px auto',
        borderRadius: '2px',
        boxShadow: '0 0 10px var(--primary-color)',
        animation: 'fadeInUp 1.6s ease-out'
      }} />

      {/* Texto Principal melhorado */}
      <div style={{
        maxWidth: '950px',
        margin: '0 auto 50px',
        animation: 'fadeInUp 1.8s ease-out'
      }}>
        <p style={{
          fontSize: window.innerWidth <= 768 ? '1.2em' : window.innerWidth <= 1024 ? '1.6em' : '2em',
          lineHeight: '1.5',
          color: 'var(--text-color)',
          marginBottom: '35px',
          fontWeight: '400',
          textShadow: '0 0 10px rgba(224, 224, 255, 0.3)',
          padding: window.innerWidth <= 768 ? '0 10px' : '0'
        }}>
          Vamos criar seu <span style={{ 
            color: 'var(--primary-color)', 
            fontWeight: '700',
            textShadow: '0 0 15px var(--primary-color)'
          }}>mundo virtual juntos</span>.
        </p>
        
        <p style={{
          fontSize: window.innerWidth <= 768 ? '1.1em' : window.innerWidth <= 1024 ? '1.3em' : '1.6em',
          lineHeight: '1.4',
          color: 'var(--primary-color)',
          marginBottom: '25px',
          fontWeight: '600',
          textShadow: '0 0 15px rgba(0, 255, 221, 0.4)',
          padding: window.innerWidth <= 768 ? '0 10px' : '0'
        }}>
          Vamos fazer algo que marque, <span style={{ 
            color: 'var(--secondary-color)',
            fontStyle: 'italic'
          }}>converta</span> e venda.
        </p>
        
        <p style={{
          fontSize: window.innerWidth <= 768 ? '1em' : window.innerWidth <= 1024 ? '1.2em' : '1.4em',
          lineHeight: '1.6',
          color: 'var(--text-secondary)',
          fontWeight: '300',
          opacity: '0.9',
          padding: window.innerWidth <= 768 ? '0 15px' : '0'
        }}>
          Desenvolvimento web, HTML, TypeScript e Node.js moderno. Suas ideias em novos formatos modernos 
          com experiências digitais impactantes. Seus clientes ligados em você! Intuitivo e feito com tecnologia de ponta.
        </p>
      </div>

      {/* Estatísticas rápidas */}
      <div style={{
        display: 'flex',
        gap: '40px',
        marginBottom: '50px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        animation: 'fadeInUp 2s ease-out'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '2.5em',
            fontWeight: '700',
            color: 'var(--primary-color)',
            textShadow: '0 0 15px var(--primary-color)'
          }}>50+</div>
          <div style={{
            fontSize: '1em',
            color: 'var(--text-secondary)',
            marginTop: '5px'
          }}>Projetos</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '2.5em',
            fontWeight: '700',
            color: 'var(--secondary-color)',
            textShadow: '0 0 15px var(--secondary-color)'
          }}>100%</div>
          <div style={{
            fontSize: '1em',
            color: 'var(--text-secondary)',
            marginTop: '5px'
          }}>Satisfação</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '2.5em',
            fontWeight: '700',
            color: 'var(--primary-color)',
            textShadow: '0 0 15px var(--primary-color)'
          }}>24/7</div>
          <div style={{
            fontSize: '1em',
            color: 'var(--text-secondary)',
            marginTop: '5px'
          }}>Suporte</div>
        </div>
      </div>

      {/* Call to Action melhorado */}
      <div style={{
        display: 'flex',
        gap: window.innerWidth <= 768 ? '15px' : '25px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        animation: 'fadeInUp 2.2s ease-out',
        flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
        alignItems: 'center',
        padding: window.innerWidth <= 768 ? '0 20px' : '0'
      }}>
        <a 
          href="#portfolio"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
            color: 'var(--background-color)',
            padding: '20px 45px',
            borderRadius: '60px',
            textDecoration: 'none',
            fontSize: '1.3em',
            fontWeight: '700',
            transition: 'all 0.4s ease',
            boxShadow: '0 0 25px rgba(0, 255, 221, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 255, 221, 0.7), 0 15px 40px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 221, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)';
          }}
        >
          <span>🚀</span> VER PORTFÓLIO
        </a>
        
        <a 
          href="https://wa.me/5541998233408?text=Olá! Gostaria de criar um site incrível!"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(37, 211, 102, 0.1)',
            color: '#25D366',
            padding: '20px 45px',
            borderRadius: '60px',
            textDecoration: 'none',
            fontSize: '1.3em',
            fontWeight: '700',
            border: '2px solid #25D366',
            transition: 'all 0.4s ease',
            boxShadow: '0 0 20px rgba(37, 211, 102, 0.3)',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#25D366';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(37, 211, 102, 0.6), 0 15px 40px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(37, 211, 102, 0.1)';
            e.currentTarget.style.color = '#25D366';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(37, 211, 102, 0.3)';
          }}
        >
          <span>💬</span> FALAR NO WHATSAPP
        </a>
      </div>

      {/* Indicador de scroll */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'linear-gradient(to bottom, var(--primary-color), transparent)',
          margin: '0 auto 10px',
          borderRadius: '1px'
        }} />
        <div style={{
          fontSize: '0.9em',
          color: 'var(--text-secondary)',
          opacity: '0.7'
        }}>
          Role para baixo
        </div>
      </div>
    </section>
  );
};

export default About;