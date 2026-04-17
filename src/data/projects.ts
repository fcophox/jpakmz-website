export interface Project {
  slug: string;
  title: string;
  year: string;
  location: string;
  thumbnail: string;
  heroImage: string;
  subtitle: string;
  concept: string;
  context: string;
  strategy: string;
  sustainability: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "centro-comunitario-conchali",
    title: "Centro comunitario y polideportivo de Conchalí",
    year: "2025",
    location: "Conchalí, Chile",
    thumbnail: "/projects/conchali-thumb.png",
    heroImage: "/projects/conchali-hero.png",
    subtitle: "Reactivación del tejido urbano a través de infraestructura deportiva comunal.",
    concept: "El proyecto se concibe como un catalizador social, un espacio que cierra la brecha entre las actividades deportivas individuales y los encuentros colectivos de la comunidad. La arquitectura utiliza la transparencia y la porosidad para invitar al vecindario al interior.",
    context: "Ubicado en una zona residencial densa con déficit de espacio público de calidad, el sitio presentaba el desafío de crear un edificio de gran escala que no abrumara su entorno.",
    strategy: "Una serie de volúmenes interconectados se organizan alrededor de un patio central. La línea del techo varía para acomodar las diferentes alturas internas requeridas por diversos deportes, creando una silueta dinámica que dialoga con los Andes de fondo.",
    sustainability: "Sistemas de ventilación natural, ganancia solar pasiva con acristalamiento avanzado y recolección de agua de lluvia para el mantenimiento del paisaje.",
    gallery: [
      "/projects/conchali-1.png",
      "/projects/conchali-2.png",
      "/projects/conchali-3.png",
    ]
  },
  {
    slug: "comunidad-espacios-reducidos",
    title: "Comunidad en espacios reducidos",
    year: "2024",
    location: "Santiago, Chile",
    thumbnail: "/projects/comunidad-thumb.png",
    heroImage: "/projects/comunidad-hero.png",
    subtitle: "Redefiniendo la vida urbana a través de la flexibilidad modular.",
    concept: "¿Cómo podemos vivir juntos en superficies más pequeñas sin sacrificar la calidad de vida? Este proyecto explora la modularidad y los espacios compartidos como una extensión de la esfera doméstica privada.",
    context: "El costo creciente del suelo urbano y la naturaleza cambiante del equilibrio entre vida y trabajo en el centro de la ciudad exigían una nueva tipología para jóvenes profesionales y familias pequeñas.",
    strategy: "El diseño utiliza un núcleo estructural de alta eficiencia, permitiendo distribuciones perimetrales flexibles. Cada unidad cuenta con ventanales de piso a techo y paredes modulares que pueden ser reconfiguradas por el habitante.",
    sustainability: "Masa térmica optimizada, reciclaje de aguas grises y jardines verticales en la fachada para mitigar el efecto de isla de calor urbana.",
    gallery: [
      "/projects/comunidad-1.png",
      "/projects/comunidad-2.png",
      "/projects/comunidad-3.png",
    ]
  },
  {
    slug: "nuevo-museo-rapa-nui",
    title: "Nuevo Museo de Rapa Nui",
    year: "2024",
    location: "Rapa Nui, Chile",
    thumbnail: "/projects/rapanui-thumb.png",
    heroImage: "/projects/rapanui-hero.png",
    subtitle: "Un contenedor para la memoria que emerge del paisaje volcánico.",
    concept: "La arquitectura como arqueología. El edificio está diseñado para sentirse como si hubiera sido desenterrado del suelo volcánico, creando un diálogo con los moai ancestrales y la geología única de la isla.",
    context: "El ecosistema frágil y la sensibilidad cultural de Rapa Nui requerían un edificio que minimizara su huella física y maximizara su presencia simbólica.",
    strategy: "Semienterrado en el paisaje para regular naturalmente la temperatura, el museo utiliza materiales locales y técnicas de construcción tradicionales de Rapa Nui adaptadas a los requisitos estructurales modernos.",
    sustainability: "Enfriamiento geotérmico profundo, materiales de huella de carbono cero y un diseño que respeta la orientación sagrada de los sitios arqueológicos existentes.",
    gallery: [
      "/projects/rapanui-1.png",
      "/projects/rapanui-2.png",
      "/projects/rapanui-3.png",
    ]
  }
];
