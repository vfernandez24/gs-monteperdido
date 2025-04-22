import { ReactNode } from "react";

import manadaBg from "/backgrounds/manadaBg.webp";
import wolf from "/icons/wolf.webp";
import tropaBg from "/backgrounds/tropaBg.webp";
import brujula from "/icons/compass.webp";
import escultaBg from "/backgrounds/escultaBg.webp";
import reloj from "/icons/wall-clock.webp";
import kraalBg from "/backgrounds/kraalBg.webp";
import kraalIcon from "/icons/manos.webp";

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
    valores: [
      {
        description: "descripcion 1 descripcion 1 descripcion 1",
        icon: "1️⃣",
        title: "valor 1",
      },
      {
        description: "descripcion 2 descripcion 2 descripcion 2",
        icon: "2️⃣",
        title: "valor 2",
      },
      {
        description: "descripcion 3 descripcion 3 descripcion 3",
        icon: "3️⃣",
        title: "valor 3",
      },
    ],
    ambientacion: {
      title: "🟡 Para Manada - ",
      subtitle: <span className="italic">Libro de las Tierras Vírgenes</span>,
      description:
        "descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion .",
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
          nombre: "Maripaz",
        },
      ],
    },
    valores: [
      {
        description: "descripcion 1 descripcion 1 descripcion 1",
        icon: "1️⃣",
        title: "valor 1",
      },
      {
        description: "descripcion 2 descripcion 2 descripcion 2",
        icon: "2️⃣",
        title: "valor 2",
      },
      {
        description: "descripcion 3 descripcion 3 descripcion 3",
        icon: "3️⃣",
        title: "valor 3",
      },
    ],
    ambientacion: {
      title: "🟢 Para Tropa - ",
      subtitle: <span className="italic">El escultismo</span>,
      description:
        "descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion .",
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
        description: "descripcion 1 descripcion 1 descripcion 1",
        icon: "1️⃣",
        title: "valor 1",
      },
      {
        description: "descripcion 2 descripcion 2 descripcion 2",
        icon: "2️⃣",
        title: "valor 2",
      },
      {
        description: "descripcion 3 descripcion 3 descripcion 3",
        icon: "3️⃣",
        title: "valor 3",
      },
    ],
    ambientacion: {
      title: "🟤 Para Esculta - ",
      subtitle: <span className="italic">Hook (Peter Pan)</span>,
      description:
        "descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion descripcion ambientacion ",
    },
  },
  kraal: {
    section_hero__title: (
      <>
        ¡Siempre listos para servir! Conoce a nuestros maravillosos{" "}
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
