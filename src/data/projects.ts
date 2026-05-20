export interface Project {
  slug: string;
  title: string;
  year: string;
  location: string;
  thumbnail: string;
  heroImage: string;
  subtitle: string;
  concept?: string;
  context?: string;
  strategy?: string;
  sustainability?: string;
  metodologia?: string;
  gallery: string[];
  memoria?: string;
  resumen?: string;
  analisisUrbano?: string;
  contextImages?: {
    url: string;
    caption: string;
  }[];
  tools?: {
    phase: string;
    title: string;
    description: string;
  }[];
  softwares?: {
    name: string;
    file: string;
  }[];
  technicalDrawings?: {
    title: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "centro-comunitario-conchali",
    title: "01. Centro comunitario y polideportivo de Conchalí",
    year: "2025",
    location: "Conchalí, Chile",
    thumbnail: "/projects/conchali/cover-01.png",
    heroImage: "/projects/conchali/cover-01.png",
    subtitle: "Proyecto de título · 2025",
    resumen: `El proyecto propone un polideportivo comunal concebido como un nuevo hito urbano para Conchalí. Su objetivo es fortalecer la identidad territorial y la cohesión social, articulando distintos barrios mediante un equipamiento público reconocible, activo y permeable.\n\nMás allá de su función deportiva, el edificio busca consolidarse como un espacio de encuentro comunitario y como un referente urbano capaz de conectar escalas: desde la vida barrial hasta la estructura comunal.`,
    context: `La propuesta nace a partir de un convenio entre la Universidad de Chile y la Municipalidad de Conchalí, orientado a identificar oportunidades y carencias urbanas de la comuna.\n\nEl análisis se apoyó en conceptos de Kevin Lynch, como hitos, nodos y recorridos, para comprender cómo se construye la percepción colectiva del territorio. A partir de esta lectura, el proyecto plantea una arquitectura capaz de reforzar el sentido de pertenencia y entregar una nueva referencia espacial para la comunidad.`,
    analisisUrbano: `El proyecto consideró instrumentos de planificación como el Plan Regulador Comunal y el PLADECO, junto con variables urbanas como conectividad, áreas verdes, equipamientos deportivos y educacionales, límites barriales y áreas de influencia.\n\nEste análisis permitió definir una propuesta conectada con la estructura urbana existente y orientada a activar su entorno inmediato.`,
    strategy: `El edificio combina programa deportivo, social, administrativo y de servicios. Incorpora espacios como multicancha, salas polivalentes, cafetería, oficinas, camarines, enfermería, salas comunitarias y áreas técnicas.\n\nSu configuración busca generar bordes activos, accesos claros, circulación fluida y una relación visual constante entre el interior, el espacio público y el barrio.`,
    sustainability: `La propuesta incorpora medidas pasivas y activas, como iluminación natural, ventilación cruzada, doble fachada, control atmosférico interior, paneles fotovoltaicos y recuperación de aguas lluvias para riego y uso sanitario.`,
    gallery: [
      "/projects/conchali/render-01-1.png",
      "/projects/conchali/render-01-2.png",
      "/projects/conchali/render-01-3.png",
      "/projects/conchali/render-01-4.png",
      "/projects/conchali/render-01-5.png",
      "/projects/conchali/render-01-6.png",
      "/projects/conchali/render-01-7.png",
    ],
    contextImages: [
      { url: "/projects/conchali/context-01.png", caption: "Maqueta de proceso N°1 — \"Visión de la comuna\"" },
      { url: "/projects/conchali/context-02.png", caption: "Maqueta de proceso N°2 — \"El hito en Conchalí\"" },
      { url: "/projects/conchali/context-03.png", caption: "Maqueta de proceso N°3 — \"Campus y volúmenes conceptuales\"" },
      { url: "/projects/conchali/context-04.png", caption: "Maqueta de proceso N°4 — \"Propuesta campus deportivo\"" },
      { url: "/projects/conchali/context-05.png", caption: "Maqueta de proceso N°5 — \"Propuesta piloto\"" },
    ],
    softwares: [
      { name: "Revit", file: "autodeskrevit.svg" },
      { name: "AutoCAD", file: "autocad.svg" },
      { name: "Archicad", file: "archicad.svg" },
      { name: "Photoshop", file: "adobephotoshop.svg" },
    ]
  },
  {
    slug: "comunidad-espacios-reducidos",
    title: "02. Comunidad en espacios reducidos",
    year: "2024",
    location: "Sector San Borja, Santiago, Chile",
    thumbnail: "/projects/comunidad/cover-01.png",
    heroImage: "/projects/comunidad/cover-01.png",
    subtitle: "Proyecto de licenciatura · 2024\nFacultad de Arquitectura y Urbanismo, Universidad de Chile",
    resumen: `El proyecto explora nuevas formas de habitar en contextos de hiperdensidad urbana. Propone un edificio de vivienda basado en unidades cápsula de superficie mínima, diseñadas para concentrar las actividades esenciales de la vida cotidiana.\n\nLa estrategia principal consiste en reducir la superficie privada y trasladar parte de las funciones domésticas hacia espacios colectivos, promoviendo una vida comunitaria basada en la colaboración, la negociación y el uso compartido.`,
    context: `Desarrollado como entrega final del Taller 8 y trabajo de licenciatura, el proyecto toma como punto de partida el plan de renovación urbana del sector San Borja, en Santiago de Chile, reinterpretado desde un escenario futuro proyectado al año 2070.\n\nLa propuesta plantea una reflexión crítica sobre la vivienda colectiva, oscilando entre visiones utópicas y distópicas de la vida urbana.`,
    strategy: `El edificio considera tipologías de unidades cápsula individuales y para parejas, de aproximadamente 8,5 m² y 11,5 m². Estas unidades concentran funciones esenciales en espacios compactos, apoyándose en mobiliario integrado, organización eficiente y soluciones multifuncionales.\n\nLos corredores dejan de ser simples espacios de circulación y se transforman en infraestructura comunitaria, incorporando servicios compartidos como higiene, almacenaje, lavaderos, equipamiento doméstico, comedor y camerinos.`,
    metodologia: `Para desarrollar el proyecto se analizaron referentes de vivienda en contextos de alta densidad, con el objetivo de identificar estrategias de optimización espacial.\n\nEl proceso permitió estudiar cómo reducir la superficie habitable sin comprometer las actividades cotidianas, integrando soluciones compactas y espacios comunes como extensión de la vivienda privada.`,
    gallery: [
      "/projects/comunidad/render-01-1.png",
      "/projects/comunidad/cover-01.png",
    ],
    softwares: [
      { name: "AutoCAD", file: "autocad.svg" },
      { name: "Archicad", file: "archicad.svg" },
      { name: "Photoshop", file: "adobephotoshop.svg" },
    ]
  },
  {
    slug: "nuevo-museo-rapa-nui",
    title: "03. Nuevo Museo de Rapa Nui",
    year: "2024",
    location: "Rapa Nui (Isla de Pascua), Chile",
    thumbnail: "/projects/rapanui/cover-01.png",
    heroImage: "/projects/rapanui/cover-01.png",
    subtitle: "Concurso de Anteproyectos de Arquitectura para la Reposición del Museo de Rapa Nui · 2024\nTurner Arquitectos",
    resumen: `El proyecto propone un recorrido exterior organizado en estaciones que relatan la historia, cultura y naturaleza de Rapa Nui. Este eje funciona como un boulevard cultural, generando una experiencia dinámica a través de múltiples perspectivas, quiebres espaciales y relaciones con el paisaje.\n\nLos programas del museo, conservación y administración se organizan en cintas edificadas dispuestas de forma lineal, configurando una composición sinuosa que evoca una aldea orgánica.`,
    context: `El proyecto surge a partir de un concurso público convocado en 2024 por el Servicio Nacional del Patrimonio Cultural, con el objetivo de dotar a la isla de una nueva infraestructura museográfica acorde a su relevancia histórica, cultural y patrimonial.\n\nLa propuesta reconoce a Rapa Nui como un territorio vivo, con una identidad social y cultural propia, integrando dimensiones ambientales, territoriales y comunitarias.`,
    strategy: `La propuesta entiende el museo como una experiencia continua entre arquitectura, paisaje y relato. El recorrido articula espacios interiores y exteriores, permitiendo que el visitante se vincule progresivamente con el patrimonio local.\n\nEl diseño busca resguardar, investigar y difundir la cultura Rapa Nui, fortaleciendo el vínculo entre comunidad, territorio y visitantes.`,
    metodologia: `El desarrollo del proyecto fue realizado de manera colaborativa junto a arquitectos y practicantes de Turner Arquitectos. El proceso se organizó mediante distribución de roles, reuniones semanales, revisión de avances y coordinación de objetivos por área.\n\nLa propuesta obtuvo una mención honrosa, quinto lugar, en un concurso con más de 80 oficinas participantes a nivel nacional e internacional.`,
    gallery: [
      "/projects/rapanui/render-01-1.png",
      "/projects/rapanui/render-01-2.png",
      "/projects/rapanui/render-01-2-1.png",
      "/projects/rapanui/render-01-2-2.png",
      "/projects/rapanui/render-01-2-3.png",
      "/projects/rapanui/cover-01.png",
    ],
    softwares: [
      { name: "AutoCAD", file: "autocad.svg" },
      { name: "SketchUp", file: "sketchup.svg" },
      { name: "Photoshop", file: "adobephotoshop.svg" },
    ]
  }
];
