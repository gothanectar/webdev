import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Thiago Augusto Hetzel Silva",
    title: "Desenvolvimento Hiperdimensional",
    description: "Eu sou Thiago Augusto Hetzel Silva, um desenvolvedor web hiperdimensional e especialista em consultoria de cosméticos, trading e pintura profissional. Com domínio em HTML, React, Vite e Windsurf, crio experiências digitais que atravessam dimensões. Minha expertise conecta ideias a resultados, seja desenvolvendo sites imersivos, estratégias de trading ou soluções para cosméticos. Pronto para levar seu projeto ao multiverso?",
    contact: {
      whatsapp: "5541998233408",
      message: "Olá, Thiago! Quero um site atual para meu projeto. Podemos conversar?"
    }
  },
  services: [
    {
      id: "sites-transdimensionais",
      title: "Sites tradicionais, comerciais, intuitivos e modernos",
      description: "e interatividade que direcionam os sentidos."
    },
    {
      id: "aplicacoes-quanticas",
      title: "Aplicações Quânticas",
      description: "Apps web com React e Vite, para performance além do imaginável."
    },
    {
      id: "landing-pages-infinitas",
      title: "Landing Pages Infinitas",
      description: "Páginas de conversão com Windsurf, para resultados que ecoam no multiverso."
    }
  ],
  portfolio: [
    {
      id: "gotha-nectar",
      title: "Gotha Nectar Consultoria",
      description: "Site para consultoria em cosméticos, conectando idealizadores a produtores e fornecedores para criar produtos de alta qualidade com serviços full e medium service.",
      image: "https://gothanectar.github.io/consultoria/og-image.jpg",
      link: "https://gothanectar.github.io/consultoria/",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: "tradepulse",
      title: "TradePulse Enhanced",
      description: "Plataforma de análise de trading com ferramentas avançadas para XAUUSD, BTCUSD e mais, oferecendo sinais precisos e estratégias compostas.",
      image: "https://gothanectar.github.io/sinaispointer/og-image.jpg",
      link: "https://gothanectar.github.io/sinaispointer/",
      technologies: ["React", "TypeScript", "Trading APIs"]
    },
    {
      id: "nicholas-pinturas",
      title: "Nicholas Pinturas",
      description: "Serviço de pintura profissional e manutenção predial em Colombo e região, com foco em qualidade, segurança e acabamento impecável.",
      image: "https://gothanectar.github.io/pinturas/og-image.jpg",
      link: "https://gothanectar.github.io/pinturas/",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ]
};