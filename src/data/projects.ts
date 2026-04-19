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
  tools?: {
    phase: string;
    title: string;
    description: string;
  }[];
  technicalDrawings?: {
    title: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "centro-comunitario-conchali",
    title: "Centro comunitario y polideportivo de Conchalí",
    year: "2025",
    location: "Conchalí, Chile",
    thumbnail: "/projects/conchali/cover-01.png",
    heroImage: "/projects/conchali/cover-01.png",
    subtitle: "Reactivación del tejido urbano a través de infraestructura deportiva comunal.",
    concept: `Identificación de estructuras clave en la percepción colectiva del territorio. El proyecto nace como respuesta a la necesidad de fortalecer la identidad local y el sentido de pertenencia, creando un referente urbano reconocible.

Propuesta:
• Hito urbano que organiza el territorio.
• Refuerzo de la identidad comunal.
• Promoción de la cohesión social.`,
    context: `Proyecto desarrollado a partir de un convenio entre la Universidad de Chile y la Municipalidad de Conchalí.

Investigación:
• Análisis basado en 'La imagen de la ciudad' de Kevin Lynch.
• Enfoque en: Hitos, Nodos y Recorridos.
• Identificación de oportunidades y carencias urbanas.`,
    strategy: `**Escala comunal:**
Punto de orientación dentro de la ciudad y conector entre distintos sectores.
 
**Escala barrial:**
Borde activo y permeable. Integración con la trama urbana mediante aperturas visuales y circulaciones accesibles.
 
El edificio se plantea como un espacio público de encuentro y elemento articulador del territorio.`,
    sustainability: `Desarrollo técnico integral enfocado en la precisión técnica y la visualización de alta calidad para la comunicación del proyecto.`,
    gallery: [
      "/projects/conchali/render-01-1.png",
      "/projects/conchali/render-01-2.png",
      "/projects/conchali/render-01-3.png",
      "/projects/conchali/render-01-4.png",
      "/projects/conchali/render-01-5.png",
      "/projects/conchali/render-01-6.png",
      "/projects/conchali/render-01-7.png",
    ],
    tools: [
      {
        phase: "Fase 1",
        title: "Base técnica",
        description: "AutoCAD: Modelado proyectual básico y desarrollo de todas las planimetrías técnicas iniciales."
      },
      {
        phase: "Fase 2",
        title: "Desarrollo",
        description: "Archicad: Modelado 3D detallado y coordinación espacial completa del edificio."
      },
      {
        phase: "Fase 3",
        title: "Representación",
        description: "Photoshop & Rayon: Postproducción digital avanzada, elaboración de láminas e imágenes finales."
      }
    ]
  },
  {
    slug: "comunidad-espacios-reducidos",
    title: "Comunidad en espacios reducidos",
    year: "2024",
    location: "Sector San Borja, Santiago, Chile",
    thumbnail: "/projects/comunidad/cover-01.png",
    heroImage: "/projects/comunidad/cover-01.png",
    subtitle: "Exploración utópica/distópica de vivienda colectiva e hiperdensidad urbana.",
    concept: `El proyecto plantea un modelo de vivienda para contextos de hiperdensidad urbana basado en la reducción extrema del espacio privado y la externalización de funciones domésticas.

**Concepto central:**
Trasladar lo doméstico hacia lo colectivo. El habitar se redefine como un sistema basado en la negociación del espacio, donde lo privado se reduce y lo comunitario se potencia.`,
    context: `Proyecto desarrollado como entrega final del Taller 8 para el Plan de renovación urbana del sector San Borja, con una proyección hacia el año 2070.

**Enfoque:**
Exploración de futuros posibles para la vivienda colectiva, tensionando escenarios entre lo utópico y lo distópico.`,
    strategy: `**Estrategia arquitectónica:**
Sistema de departamentos cápsula (~12 m²) que concentran funciones esenciales en espacios mínimos.

**Configuración tipológica:**
• **Unidades mínimas:** 8,5 m² (individual) y 11,5 m² (parejas) diseñadas bajo requerimientos esenciales.
• **Infraestructura comunitaria:** Corredores activos que integran higiene, almacenaje y servicios compartidos (lavaderos, comedores).

👉 El modelo propone una colectivización de lo cotidiano como respuesta a la escasez de espacio.`,
    sustainability: `Desarrollo proyectual enfocado en la reconfiguración del habitar contemporáneo mediante tipologías de alta eficiencia espacial.`,
    gallery: [
      "/projects/comunidad/render-01-1.png",
      "/projects/comunidad/cover-01.png",
    ],
    tools: [
      {
        phase: "Fase 1",
        title: "Base técnica",
        description: "AutoCAD: Desarrollo de planimetría base del sector y sistemas modulares residenciales."
      },
      {
        phase: "Fase 2",
        title: "Desarrollo",
        description: "Archicad: Modelado tridimensional detallado y coordinación del sistema de cápsulas."
      },
      {
        phase: "Fase 3",
        title: "Representación",
        description: "Photoshop: Edición, postproducción y elaboración de láminas para la entrega de licenciatura."
      }
    ]
  },
  {
    slug: "nuevo-museo-rapa-nui",
    title: "Nuevo Museo de Rapa Nui",
    year: "2024",
    location: "Rapa Nui (Isla de Pascua), Chile",
    thumbnail: "/projects/rapanui/cover-01.png",
    heroImage: "/projects/rapanui/cover-01.png",
    subtitle: "Mención Honrosa (5° lugar) - Concurso Público Nacional e Internacional de Anteproyectos.",
    concept: `La propuesta se organiza como un recorrido arquitectónico y cultural continuo dispuesto sobre un eje exterior estructurado en estaciones narrativas.

👉 El proyecto se entiende como una experiencia donde arquitectura, paisaje y relato se integran para resguardar el patrimonio e investigar la cultura local.`,
    context: `Proyecto desarrollado en el marco de un concurso público convocado en 2024 por el Servicio Nacional del Patrimonio Cultural.

**Enfoque del proyecto:**
Reconocer a Rapa Nui como patrimonio arqueológico de alcance mundial y territorio vivo con identidad cultural propia.

**Condiciones clave:**
Fragilidad ecológica de la isla y relación profunda entre paisaje y cultura.`,
    strategy: `**Estrategia espacial:**
Recorrido dinámico que integra historia, cultura y naturaleza mediante múltiples perspectivas y quiebres espaciales.

**Configuración del conjunto:**
• **Boulevard principal:** Eje de circulación exterior y articulador del proyecto.
• **Cintas edificadas:** Flanquean el recorrido conteniendo el museo, áreas de conservación y administración.
• **Sistema modular:** Volúmenes dispuestos de forma lineal con una composición sinuosa inspirada en una aldea orgánica.`,
    sustainability: `**Metodología:** Desarrollo colaborativo con distribución de roles técnicos y reuniones de coordinación semanal. El proyecto obtuvo la **Mención Honrosa (5° lugar)** en un concurso con más de 80 oficinas participantes.`,
    gallery: [
      "/projects/rapanui/render-01-1.png",
      "/projects/rapanui/render-01-2.png",
      "/projects/rapanui/render-01-2-1.png",
      "/projects/rapanui/render-01-2-2.png",
      "/projects/rapanui/render-01-2-3.png",
      "/projects/rapanui/cover-01.png",
    ],
    tools: [
      {
        phase: "Fase 1",
        title: "Diseño Inicial",
        description: "AutoCAD: Implantación en el terreno, primeros acercamientos y planimetría técnica base."
      },
      {
        phase: "Fase 2",
        title: "Modelado Tridimensional",
        description: "SketchUp: Desarrollo de la volumetría sinuosa y coordinación de las cintas edificadas."
      },
      {
        phase: "Fase 3",
        title: "Representación y Gestión",
        description: "Photoshop & Miro: Postproducción visual, láminas de concurso y coordinación remota del equipo."
      }
    ]
  }
];
