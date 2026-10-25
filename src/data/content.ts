/** Los recursos de imagen se sirven desde la carpeta local public/.
 * La imagen grande de historia tiene un respaldo temporal en la propia página.
 */
export const asset = (path: string): string =>
  "/" + path.split("/").map(encodeURIComponent).join("/");

export type Album = {
  title: string;
  year: number;
  era: "Solista" | "Soda Stereo" | "Colaboración";
  style: string;
  description: string;
  image: string;
};

export const albums: Album[] = [
  {
    title: "Ahí Vamos",
    year: 2006,
    era: "Solista",
    style: "Rock · Guitarras",
    description: "Una etapa enérgica y directa de la obra solista de Cerati.",
    image: asset("assets/images/portfolio/discografia-ahi-vamos.png"),
  },
  {
    title: "Bocanada",
    year: 1999,
    era: "Solista",
    style: "Electrónica · Experimentación",
    description:
      "Paisajes sonoros, capas electrónicas y nuevas formas de composición.",
    image: asset("assets/images/portfolio/discografia-bocanada.png"),
  },
  {
    title: "Colores Santos",
    year: 1992,
    era: "Colaboración",
    style: "Cerati + Daniel Melero",
    description:
      "Colaboración experimental que exploró caminos más allá del rock convencional.",
    image: asset("assets/images/portfolio/discografia-colores-santos.png"),
  },
  {
    title: "Fuerza Natural",
    year: 2009,
    era: "Solista",
    style: "Viaje · Folk rock",
    description:
      "Una obra expansiva que invita a recorrer distintas geografías sonoras.",
    image: asset("assets/images/portfolio/discografia-fuerza-natural.png"),
  },
  {
    title: "Siempre es Hoy",
    year: 2002,
    era: "Solista",
    style: "Producción · Nuevas texturas",
    description:
      "Una producción extensa que experimenta con ritmos, arreglos y atmósferas.",
    image: asset("assets/images/portfolio/discografia-siempre-es-hoy.png"),
  },
  {
    title: "Sueño Stereo",
    year: 1995,
    era: "Soda Stereo",
    style: "Rock alternativo · Banda",
    description:
      "Una de las etapas finales de estudio de Soda Stereo, de sonido envolvente.",
    image: asset("assets/images/portfolio/discografia-sueño-stereo.png"),
  },
];
export const members = [
  {
    name: "Gustavo Cerati",
    role: "Voz y guitarra",
    image: asset("assets/images/team/team-gustavo.png"),
  },
  {
    name: "Zeta Bosio",
    role: "Bajo",
    image: asset("assets/images/team/team-zeta.png"),
  },
  {
    name: "Charly Alberti",
    role: "Batería",
    image: asset("assets/images/team/team-charly.png"),
  },
];
export const highlights = [
  {
    number: "01",
    title: "Canciones",
    description: "Melodías y letras que acompañan generaciones.",
    image: asset("assets/images/services/legado-canciones.png"),
  },
  {
    number: "02",
    title: "Experimentación",
    description: "Rock y electrónica entrelazados en una búsqueda constante.",
    image: asset("assets/images/services/legado-sonido.png"),
  },
  {
    number: "03",
    title: "Inspiración",
    description: "Una obra que sigue conectando con quienes la descubren.",
    image: asset("assets/images/services/legado-inspiracion.png"),
  },
];
