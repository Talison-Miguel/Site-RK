import { PenTool, Megaphone, Laptop, Globe, GraduationCap, Award, BookOpen } from 'lucide-react';
import { ExperienceItem, ServiceItem, CertificationItem, NavItem, TestimonialItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Minha História', href: '#sobre' },
  { label: 'O Livro', href: '#livro' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Jornada', href: '#jornada' },
];

export const HERO_CONTENT = {
  headline: "Presença Digital com Propósito e Estratégia",
  subheadline: "Estratégia e escrita para marcas que buscam posicionamento real no digital.",
  cta: "Ver Portfólio"
};

export const ABOUT_CONTENT = {
  title: "Minha Essência",
  paragraph1: "Minha escrita nasce da imersão. Viajar e absorver novas culturas não é apenas um hobby, é minha pesquisa de campo para dar vida aos meus livros. Encontrei na literatura infantil o meu porto seguro, um lugar que me transporta de volta à infância nas montanhas de Minas Gerais, ouvindo as histórias dos meus avós.",
  paragraph2: "Acredito no poder da representatividade real. Por isso, crio personagens que muitas vezes são deixados de lado: crianças com deficiências que mostram que podem — e devem — ter uma vida normal, cheia de aventuras e conquistas.",
  paragraph3: "Hoje, uso essa mesma sensibilidade narrativa para ajudar marcas e projetos de educação a encontrarem sua voz autêntica no world digital."
};

export const PURPOSE_CONTENT = {
  title: "Propósito Literário",
  quote: "\"Minha missão é mostrar que deficiências não definem o limite de uma aventura. Na literatura infantil, cada criança é protagonista da sua própria história de superação.\""
};

export const BOOK_CONTENT = {
  id: 'livro',
  badge: "Literatura Infantil",
  title: "Katherine",
  subtitle: "A menina que queria aprender",
  description: "Histórias que celebram a diversidade e a força da infância brasileira. Narrativas focadas em inclusão, mostrando que cada criança tem seu próprio universo a ser explorado.",
  cta: "Baixar Amostra",
  ctaSecondary: "Comprar Agora",
  details: [
    { label: "Páginas", value: "48" },
    { label: "Gênero", value: "Infantil" },
    { label: "Temas", value: "Inclusão" },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Copywriting Autoral',
    description: 'Textos com alma que conectam valores e criam comunidades engajadas.',
    icon: PenTool,
    tags: ['Narrativa', 'Voz de Marca', 'Conteúdo']
  },
  {
    id: '2',
    title: 'Estratégia Educacional',
    description: 'Desenvolvimento de metodologias e comunicação para projetos de impacto social.',
    icon: GraduationCap,
    tags: ['EdTech', 'Impacto', 'Social']
  },
  {
    id: '3',
    title: 'Branding Digital',
    description: 'Posicionamento para quem deseja ser lembrado pela clareza e autoridade.',
    icon: Megaphone,
    tags: ['Identidade', 'Presets', 'Redes']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Fundador',
    company: 'E-Scola Digital',
    period: '2021 - Presente',
    description: 'Liderando a democratização do acesso à educação digital para jovens de todo o Brasil.',
    type: 'leadership'
  },
  {
    id: '2',
    role: 'Embaixador de Educação',
    company: 'Embaixada dos EUA (Jovens Embaixadores)',
    period: '2023',
    description: 'Representando o Brasil em intercâmbio cultural e diplomático focado em liderança transformadora.',
    type: 'leadership'
  },
  {
    id: '3',
    role: 'Embaixador Tech Edu',
    company: 'Latin American Leadership Academy (LALA)',
    period: '2022',
    description: 'Fomentando o uso da tecnologia como ferramenta pedagógica inclusiva e acessível.',
    type: 'education'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: '1',
    title: 'EF SET English (C2 Proficient)',
    issuer: 'EF Education First',
    year: '2023'
  },
  {
    id: '2',
    title: 'LALA Academy Graduate',
    issuer: 'Latin American Leadership Academy',
    year: '2022'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: "Rickelmy tem uma habilidade rara de transformar conceitos complexos em narrativas que tocam o coração. A estratégia desenhada por ele mudou como nos posicionamos.",
    author: "Mariana Alves",
    role: "Diretora de Marketing, EdTech Brasil"
  },
  {
    id: '2',
    quote: "Mais do que um escritor, ele é um arquiteto de histórias. Seu trabalho trouxe uma profundidade emocional para nossa marca que não sabíamos que era possível.",
    author: "Carlos Mendes",
    role: "Fundador, Instituto Ler & Saber"
  },
  {
    id: '3',
    quote: "A clareza e a sensibilidade com que ele aborda temas de inclusão e educação são inspiradoras. Um profissional que entrega excelência com propósito.",
    author: "Fernanda Souza",
    role: "Coordenadora Pedagógica, Rede Global"
  }
];