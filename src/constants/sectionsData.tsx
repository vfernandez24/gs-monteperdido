import { ReactNode } from "react";

import manadaBg from "/backgrounds/manadaBg.png";
import wolf from "/icons/wolf.png";
import tropaBg from "/backgrounds/tropaBg.png";
import brujula from "/icons/compass.png";
import escultaBg from "/backgrounds/EscultaBg.png";
import reloj from "/icons/wall-clock.png";
import kraalBg from "/backgrounds/kraalBg.png";
import kraalIcon from "/icons/manos.png";

type valores = {
  icon: string;
  title: string;
  description: string;
};

type monitor = {
  nombre: string;
  foto: string;
  nombre2?: string;
};

export type Props = {
  section_hero__title: ReactNode;
  section_hero__subtitle: string;
  section_hero__src: string;
  section_hero__icon: string;
  color: string;
  seccion: string;
  seccionFoto:
    | "sectionManada"
    | "sectionTropa"
    | "sectionEsculta"
    | "grupo"
    | "sectionKraal";
  valores: valores[];
  scouters: {
    name?: string;
    monis: monitor[];
  };
  ambientacion: {
    title: string;
    subtitle: ReactNode;
    description: string;
  };
};

export const sectionsData: Record<
  "manada" | "tropa" | "esculta" | "kraal",
  Props
> = {
  manada: {
    section_hero__title: (
      <>
        Explora la Selva, Juega con los lobos y Descubre tu{" "}
        <span
          className="text-[#F8CB42]"
          style={{ textShadow: "0px 0px 40px #F8CB42" }}
        >
          Manada
        </span>
      </>
    ),
    section_hero__subtitle: "",
    section_hero__src: manadaBg,
    section_hero__icon: wolf,
    color: "#AA871B",
    seccion: "La manada",
    seccionFoto: "sectionManada",
    scouters: {
      name: "Los viejos lobos",
      monis: [
        {
          foto: "",
          nombre: "Isa",
          nombre2: "Akela",
        },
        {
          foto: "",
          nombre: "Pablo",
          nombre2: "Kaa",
        },
        {
          foto: "",
          nombre: "Diego",
          nombre2: "H. Gris",
        },
      ],
    },
    valores: [{ description: "", icon: "", title: "" }],
    ambientacion: {
      title: "🟡 Para Manada - ",
      subtitle: <span className="italic">Libro de las Tierras Vírgenes</span>,
      description:
        "En la Manada nos inspiramos en el Libro de las Tierras Vírgenes, donde cada niño y niña foma parte de una gran familia de lobatos. A través de historias, símbolos y personajes como Akela o Baloo, los pequeños aprenden valores mientras se sumergen en la magia de la selva",
    },
  },
  tropa: {
    section_hero__title: (
      <>
        La naturaleza es nuestro terreno de juego. ¿Listo para conocer a la{" "}
        <span
          className="text-[#45FF7F]"
          style={{ textShadow: "0px 0px 40px #45FF7F" }}
        >
          Tropa
        </span>
        ?
      </>
    ),
    section_hero__subtitle: "",
    section_hero__src: tropaBg,
    section_hero__icon: brujula,
    color: "#377A4C",
    seccion: "La tropa",
    seccionFoto: "sectionTropa",
    scouters: {
      name: "",
      monis: [
        {
          foto: "",
          nombre: "Jimena",
        },
        {
          foto: "",
          nombre: "",
        },
        {
          foto: "",
          nombre: "Felipe",
        },
        {
          foto: "",
          nombre: "",
        },
      ],
    },
    valores: [{ description: "", icon: "", title: "" }],
    ambientacion: {
      title: "🟢 Para Tropa - ",
      subtitle: <span className="italic">El escultismo</span>,
      description:
        "La Tropa sigue la ambientación clásica del escultismo, centrada en la aventura, el compañerismo y el servicio. A través de patrullas, desafíos y salidas al aire libre, los troperos desarrollan autonomía y liderazgo en un entorno inspirado por la tradición scout.",
    },
  },
  esculta: {
    section_hero__title: (
      <>
        Crecer es opcional pero conocer a nuestra{" "}
        <span
          className="text-[#c0a36c]"
          style={{ textShadow: "0px 0px 40px #c0a36c" }}
        >
          Esculta
        </span>{" "}
        es obligatorio
      </>
    ),
    section_hero__subtitle: "",
    section_hero__src: escultaBg,
    section_hero__icon: reloj,
    color: "#866340",
    seccion: "La esculta",
    seccionFoto: "sectionEsculta",
    scouters: {
      name: "",
      monis: [
        {
          foto: "",
          nombre: "Tapi",
          nombre2: "Peter Pan",
        },
        {
          foto: "",
          nombre: "Pepo",
          nombre2: "Sr. Smith",
        },
        {
          foto: "",
          nombre: "Jack",
          nombre2: "Campanilla",
        },
      ],
    },
    valores: [
      {
        description:
          "bla blab lbalba ba labla lab lalba lalb alb labl albl al ab",
        icon: "😂",
        title: "Solidaridad",
      },
      {
        description:
          "bla blab lbalba ba labla lab lalba lalb alb labl albl al ab",
        icon: "😂",
        title: "Solidaridad",
      },
      {
        description:
          "bla blab lbalba ba labla lab lalba lalb alb labl albl al ab",
        icon: "😂",
        title: "Solidaridad",
      },
    ],
    ambientacion: {
      title: "🟤 Para Esculta - ",
      subtitle: <span className="italic">Hook (Peter Pan)</span>,
      description:
        "Inspirados en el universo de Hook, los escultas viven su etapa como una travesía entre islas, estrellas y mapas. El grupo se convierte en una tripulación con rumbo propio, guiada por la imaginación, la responsabilidad y el deseo de dejar huella.",
    },
  },
  kraal: {
    section_hero__title: (
      <>
        ¡Siempre listos para servir! Conoce a nuestro maravilloso{" "}
        <span
          className="text-[#D188FF]"
          style={{ textShadow: "0px 0px 40px #C86FFF" }}
        >
          Scouters
        </span>
      </>
    ),
    section_hero__subtitle: "",
    section_hero__src: kraalBg,
    section_hero__icon: kraalIcon,
    color: "#602584",
    seccion: "El Kraal",
    seccionFoto: "sectionKraal",
    scouters: {
      name: "Nuestros integrantes",
      monis: [
        {
          foto: "",
          nombre: "Isa",
          nombre2: "Akela",
        },
        {
          foto: "",
          nombre: "Pablo",
          nombre2: "Kaa",
        },
        {
          foto: "",
          nombre: "Diego",
          nombre2: "H. Gris",
        },
        {
          foto: "",
          nombre: "Jimena",
        },
        {
          foto: "",
          nombre: "",
        },
        {
          foto: "",
          nombre: "Felipe",
        },
        {
          foto: "",
          nombre: "",
        },
        {
          foto: "",
          nombre: "Tapi",
          nombre2: "Peter Pan",
        },
        {
          foto: "",
          nombre: "Pepo",
          nombre2: "Sr. Smith",
        },
        {
          foto: "",
          nombre: "Jack",
          nombre2: "Campanilla",
        },
      ],
    },
    valores: [{ description: "", icon: "", title: "" }],
    ambientacion: {
      title: "",
      description: "",
      subtitle: "",
    },
  },
};

export type PropsGrupo = {
  section_hero__title: ReactNode;
  section_hero__subtitle: string;
  section_hero__src: string;
  section_hero__icon: string;
  color: string;
  seccion: string;
  seccionFoto:
    | "sectionManada"
    | "sectionTropa"
    | "sectionEsculta"
    | "grupo"
    | "sectionKraal";
  valores: valores[];
  scouters: {
    name?: string;
    monis: monitor[];
  };
  ambientacion: {
    title: string;
    subtitle: ReactNode;
    description: string;
  };
};

export const grupoData = {};
