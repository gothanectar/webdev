export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    contact: {
      whatsapp: string;
      message: string;
    };
  };
  services: Service[];
  portfolio: PortfolioItem[];
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  animations: {
    duration: {
      fast: number;
      medium: number;
      slow: number;
    };
    easing: string;
  };
}

export interface LoadingState {
  isLoading: boolean;
  progress: number;
  error: string | null;
  stage: 'initializing' | 'loading-assets' | 'rendering' | 'complete';
}