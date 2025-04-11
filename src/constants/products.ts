import llavero from "../../public/products/llavero.png"
import calendario from "../../public/products/calendario.png"
import tocho from "../../public/products/tocho.png"

type typeProducts = {
  srcImg: string;
  title: string;
  subtitle: string;
};

const products: typeProducts[] = [
  {
    srcImg: llavero,
    subtitle:
      "Llavero hecho por nuestra esculta con los colores representativos de nuestro grupo",
    title: "Llavero Monterdido",
  },
  {
    srcImg: calendario,
    subtitle: "Calendario personalizado con fotos de nuestras secciones",
    title: "Calendario 2025 Monteperdido",
  },
  {
    srcImg: tocho,
    subtitle:
      "Tocho para colocar en la pañoleta hechos a mano por nuestra esculta",
    title: "Tocho Scout",
  },
];

export default products;
