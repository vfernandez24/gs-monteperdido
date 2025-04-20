import llavero from "../../public/products/llavero.png"
import calendario from "../../public/products/calendario.png"
import tocho from "../../public/products/tocho.png"

type typeProducts = {
  precio: number,
  id: number,
  srcImg: string;
  title: string;
  subtitle: string;
};

const products: typeProducts[] = [
  {
    precio: 1.5,
    id: 0,
    srcImg: llavero,
    subtitle:
      "Llavero hecho por nuestra esculta con los colores de nuestro grupo",
    title: "Llavero Monterdido",
  },
  {
    precio: 1.5,
    id: 1,
    srcImg: calendario,
    subtitle: "Calendario personalizado con fotos de nuestras secciones",
    title: "Calendario 2025 Monteperdido",
  },
  {
    precio: 1.5,
    id: 2,
    srcImg: tocho,
    subtitle:
      "Tocho para colocar en la pañoleta hechos a mano por nuestra esculta",
    title: "Tocho Scout",
  },
  {
    precio: 1.5,
    id: 3,
    srcImg: llavero,
    subtitle:
      "Llavero hecho por nuestra esculta con los colores de nuestro grupo",
    title: "Llavero Monterdido",
  },
  {
    precio: 1.5,
    id: 4,
    srcImg: calendario,
    subtitle: "Calendario personalizado con fotos de nuestras secciones",
    title: "Calendario 2025 Monteperdido",
  },
  {
    precio: 1.5,
    id: 5,
    srcImg: tocho,
    subtitle:
      "Tocho para colocar en la pañoleta hechos a mano por nuestra esculta",
    title: "Tocho Scout",
  },
];

export default products;
