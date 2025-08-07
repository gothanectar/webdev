const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = `https://wa.me/5541998233408?text=${encodeURIComponent("Olá, Thiago! Quero um site atual para meu projeto. Podemos conversar?")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: 1000,
        width: '70px',
        height: '70px',
        background: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 20px rgba(37, 211, 102, 0.8)',
        animation: 'pulseFloat 2s infinite',
        transition: 'transform 0.3s',
        textDecoration: 'none'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.3)';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(37, 211, 102, 1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(37, 211, 102, 0.8)';
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{
          width: '35px',
          height: '35px'
        }}
      />
    </a>
  );
};

export default WhatsAppFloat;