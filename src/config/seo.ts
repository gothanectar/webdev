export const seoConfig = {
  defaultTitle: "Thiago Hetzel - Desenvolvedor Web & Designer | Portfólio Hiperdimensional",
  titleTemplate: "%s | Thiago Hetzel - Desenvolvedor Web",
  defaultDescription: "Desenvolvedor web especialista em React, TypeScript e Node.js. Criação de sites modernos, landing pages e aplicações web com design hiperdimensional. Curitiba, PR.",
  siteUrl: "https://react-portfolio-fhsl9gixk-gothanectars-projects.vercel.app",
  defaultImage: "/siteweblogo.png",
  
  // Structured data
  person: {
    name: "Thiago Augusto Hetzel Silva",
    alternateName: "Thiago Hetzel",
    jobTitle: "Desenvolvedor Web & Designer",
    email: "thiagonectar@gmail.com",
    telephone: "+5541998233408",
    address: {
      locality: "Curitiba",
      region: "PR",
      country: "BR"
    },
    sameAs: [
      "https://www.linkedin.com/in/thiago-augusto-h-silva-4651092a8",
      "https://github.com/gothanectar",
      "https://wa.me/5541998233408"
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Web Development",
      "Frontend Development",
      "UI/UX Design",
      "Three.js",
      "Vite",
      "Responsive Design"
    ]
  },

  // Services offered
  services: [
    {
      name: "Sites Comerciais",
      description: "Desenvolvimento de sites modernos e responsivos para empresas",
      price: "A partir de R$ 1.500"
    },
    {
      name: "Landing Pages",
      description: "Páginas de alta conversão para campanhas e lançamentos",
      price: "A partir de R$ 800"
    },
    {
      name: "Aplicações Web",
      description: "Aplicações web modernas com React e TypeScript",
      price: "A partir de R$ 3.000"
    },
    {
      name: "SEO & Marketing Digital",
      description: "Otimização para mecanismos de busca e estratégias digitais",
      price: "A partir de R$ 1.200"
    },
    {
      name: "CRM & Automações",
      description: "Sistemas de gestão e automação de processos",
      price: "A partir de R$ 2.500"
    }
  ],

  // Portfolio projects
  projects: [
    {
      name: "Gotha Nectar Consultoria",
      description: "Site comercial para consultoria em cosméticos",
      url: "https://gothanectar.github.io/consultoria/",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "Site Comercial"
    },
    {
      name: "TradePulse Enhanced",
      description: "Plataforma de análise de trading com ferramentas avançadas",
      url: "https://gothanectar.github.io/sinaispointer/",
      technologies: ["React", "TypeScript", "Chart.js", "API Integration"],
      category: "Aplicação Web"
    },
    {
      name: "Nicholas Pinturas",
      description: "Landing page para serviços de pintura profissional",
      url: "https://gothanectar.github.io/pinturas/",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "Landing Page"
    }
  ],

  // Keywords by section
  keywords: {
    home: "desenvolvedor web curitiba, react developer, typescript specialist, portfolio hiperdimensional",
    about: "thiago hetzel, desenvolvedor frontend, especialista react, curitiba pr",
    services: "desenvolvimento web, sites modernos, landing pages, aplicações react, seo curitiba",
    portfolio: "projetos web, sites responsivos, aplicações javascript, portfolio desenvolvedor",
    contact: "contato desenvolvedor web, orçamento site, whatsapp desenvolvedor curitiba"
  }
};

export default seoConfig;