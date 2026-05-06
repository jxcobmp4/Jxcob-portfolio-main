export const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Resultados", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Contacto", href: "#contact" },
];

export const HERO = {
  badge: "Disponible para trabajar",
  titleLine1: "Tu contenido tiene",
  titleLine2: "potencial. Yo lo convierto en resultados",
  description:
    "Transformo tus ideas en videos que conectan con tu audiencia y generan resultados. Desde la estructura hasta los detalles visuales, todo está pensado para que tu contenido destaque y no pase desapercibido.",
  ctaText: "Ver mi trabajo",
  ctaHref: "#about",
  socialProof: {
    clientCount: "la confianza",
    rating: 5,
    label: " 20+ clientes",
    clientAvatars: [
      "/clients/client-1.jpeg",
      "/clients/client-2.jpeg",
      "/clients/client-3.jpeg",
      "/clients/client-4.jpeg",
    ],
  },
};

export const ABOUT = {
  title: "Resultados destacados",
  subtitle: "(01)",
  description1:
    "Soy Jxcob, editor de video especializado en transformar contenido en videos que venden. Mi enfoque combina técnica, creatividad y estrategia para generar impacto.",
  description2:
    "Trabajo con herramientas profesionales como Adobe Premiere, After Effects y DaVinci Resolve para garantizar la más alta calidad en cada proyecto.",
  stats: [
    { value: "50+", label: "Proyectos" },
    { value: "30+", label: "Clientes" },
    { value: "3+", label: "Años de experiencia" },
  ],
};

export const VIDEOS = [
  {
    id: 1,
    src: "https://aunjgbdzxpzeliulefch.supabase.co/storage/v1/object/public/portafolio_editor/video-1.mp4",
    title: "PVC Del Norte",
  },
  {
    id: 2,
    src: "https://aunjgbdzxpzeliulefch.supabase.co/storage/v1/object/public/portafolio_editor/video-2.mp4",
    title: "PVC Del Norte - 2",
  },
  {
    id: 3,
    src: "https://aunjgbdzxpzeliulefch.supabase.co/storage/v1/object/public/portafolio_editor/video-3.mp4",
    title: "Mike Celis Real",
  },
  {
    id: 4,
    src: "https://aunjgbdzxpzeliulefch.supabase.co/storage/v1/object/public/portafolio_editor/video-4.mp4",
    title: "Colmisan Ccuta",
  },
  {
    id: 5,
    src: "https://aunjgbdzxpzeliulefch.supabase.co/storage/v1/object/public/portafolio_editor/video-5.mp4",
    title: "Instagram Reel",
  },
  {
    id: 6,
    src: "https://aunjgbdzxpzeliulefch.supabase.co/storage/v1/object/public/portafolio_editor/video-6.mp4",
    title: "Video 6",
  },
  {
    id: 7,
    src: "https://aunjgbdzxpzeliulefch.supabase.co/storage/v1/object/public/portafolio_editor/video-7.mp4",
    title: "Video 7",
  },
  {
    id: 8,
    src: "https://aunjgbdzxpzeliulefch.supabase.co/storage/v1/object/public/portafolio_editor/video-8.mp4",
    title: "Video 8",
  },
  {
    id: 9,
    src: "https://aunjgbdzxpzeliulefch.supabase.co/storage/v1/object/public/portafolio_editor/video-9.mp4",
    title: "Video 9",
  },
];

export const PORTFOLIO = {
  title: "PORTAFOLIO",
  subtitle: "Trabajos seleccionados",
  items: [
    {
      id: 1,
      title: "Edición YouTube - Tech Review",
      category: "YouTube",
      thumbnail: "",
    },
    {
      id: 2,
      title: "Reels Instagram - Lifestyle",
      category: "Instagram",
      thumbnail: "",
    },
    {
      id: 3,
      title: "TikTok Viral - Comedia",
      category: "TikTok",
      thumbnail: "",
    },
    {
      id: 4,
      title: "Miniatura YouTube - Gaming",
      category: "YouTube",
      thumbnail: "",
    },
    {
      id: 5,
      title: "Edición Podcast - Entrevista",
      category: "Podcast",
      thumbnail: "",
    },
    {
      id: 6,
      title: "Motion Graphics - Intro Canal",
      category: "Motion",
      thumbnail: "",
    },
  ],
};

export const SERVICES = {
  title: "SERVICIOS",
  subtitle: "Lo que ofrezco",
  items: [
    {
      id: 1,
      title: "Edición de Video",
      description:
        "Transformo contenido en videos que venden. Edición dinámica, cortes precisos, subtítulos y efectos que maximizan el engagement.",
      icon: "video",
    },
    {
      id: 2,
      title: "Motion Graphics",
      description:
        "Animaciones, intros, lower thirds y elementos gráficos que elevan la calidad visual de tu contenido.",
      icon: "animation",
    },
  ],
};

export const CLIENTS = {
  tagline: "Creadores que confían en mi trabajo",
  items: [
    { id: 1, name: "@Cabaricosuplementos", followers: "1.9K seguidores", image: "/clients/client-1.jpg" },
    { id: 2, name: "@Creatorsclubaus", followers: "2.2K seguidores", image: "/clients/cliente 2.jpg" },
    { id: 3, name: "@Duomillonario", followers: "350 seguidores", image: "/clients/cliente 3.jpg" },
    { id: 4, name: "@Matchsportcenter", followers: "4.5K seguidores", image: "/clients/cliente 4.jpg" },
  ],
};

export const CONTACT = {
  title: "CONTACTO",
  subtitle: "Hablemos de tu proyecto",
  description:
    "¿Listo para transformar tu contenido en videos que venden? Escríbeme y conversemos sobre cómo puedo ayudarte.",
  email: "Dopjacob@gmail.com",
  socials: [
    { name: "YouTube", href: "#" },
    { name: "Instagram", href: "https://www.instagram.com/by.jxcob" },
    { name: "TikTok", href: "https://www.tiktok.com/@jxcob.mp4" },
    { name: "Twitter/X", href: "#" },
  ],
  ctaText: "Enviar mensaje",
  ctaHref: "mailto:Dopjacob@gmail.com",
};

export const SITE = {
  name: "Jxcob",
  url: "https://jxcob.com",
  description:
    "Editor de video profesional para creadores de contenido. Transformo contenido en videos que venden.",
  keywords:
    "editor de video, edición YouTube, TikTok, Reels, motion graphics, creadores de contenido, Jxcob",
  author: "Jxcob",
  email: "Dopjacob@gmail.com",
  ogImage: "/og-image.png",
};

export const SKILLS = [
  { name: "Video Editing", level: 90 },
  { name: "Motion Graphics", level: 85 },
  { name: "Content Strategy", level: 80 },
];
