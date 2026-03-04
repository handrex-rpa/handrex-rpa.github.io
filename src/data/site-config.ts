import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://handrex-rpa.github.io',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'Andrés Alejandro Escobar Obando',
    subtitle: 'Andrés',
    description: '',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/andrescobando'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/andrescobando'
        },

    ],
    hero: {
        title: 'Bienvenido a mi Presente!',
        text: "Yo soy **Andrés Escobar**, Profesional en análisis comercial y gestión de datos con sólida trayectoria liderando procesos estratégicos de ventas, inteligencia comercial y experiencia del cliente.\nMi enfoque combina la analítica avanzada, la optimización operativa y la toma de decisiones basada en datos para impulsar crecimiento, eficiencia y rentabilidad.\n\nCuento con experiencia dirigiendo y coordinando procesos de ETL de datos, diseño de dashboards e indicadores, interpretación de tendencias de mercado y diagnóstico de oportunidades estratégicas.\nHe apoyado equipos comerciales y de operaciones mediante análisis cuantitativo, cualitativo y predictivo, orientado a mejorar desempeño, forecast y planeación.\n\nMi trayectoria integra conocimiento integral del ciclo comercial, incluyendo facturación, ventas, crédito, cartera y logística, lo que me permite conectar la visión analítica con la realidad operativa del negocio.\n\nEn el frente de experiencia de cliente (CX), he liderado la coordinación de análisis de campañas Inbound y Outbound, así como la administración de información IVR, Virtual Hold, Web Call Back, Click to Call y ecosistemas de omnicanalidad (SMS, mailing, blaster). Manejo experto de indicadores como TMO, Nivel de Servicio, Atención, NPS, CES, C-SAT, entre otros.\n\nAdemás, tengo experiencia coordinando indicadores de aseguramiento del conocimiento, métricas de calidad y evaluación de desempeño para equipos operativos.Además, tengo experiencia coordinando indicadores de aseguramiento del conocimiento, métricas de calidad y evaluación de desempeño para equipos operativos.Me caracterizo por fortalecer decisiones estratégicas mediante información clara, confiable y orientada al logro.",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
