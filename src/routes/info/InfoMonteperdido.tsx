import { useRef, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import images from "../../constants/photosLocation";
import { sectionsData } from "../../constants/sectionsData";

import grupoBg from "/backgrounds/grupoBg.png";
import ArrowButton from "../../components/ArrowButton";
import SectionTitle from "../../components/SectionTitle";
import ImageSection from "../../components/ImageSection";

const data = {
  section_hero__title: (
    <>
      Conoce el Grupo Scout{" "}
      <span
        className="text-[#ebaf2d]"
        style={{ textShadow: "0px 0px 40px #ebaf2d" }}
      >
        Monteperdido 960
      </span>
    </>
  ),
  section_hero__subtitle: "",
  section_hero__src: grupoBg,
  section_hero__icon: "",
  color: "#3e8341",
  secciones: [
    {
      bG: sectionsData.manada.color,
      h3: "manada",
      p: "8-11 años",
      icono: sectionsData.manada.section_hero__icon,
      fecha: "",
    },
    {
      bG: sectionsData.tropa.color,
      h3: "tropa",
      p: "11-14 años",
      icono: sectionsData.tropa.section_hero__icon,
      fecha: "",
    },
    {
      bG: sectionsData.esculta.color,
      h3: "esculta",
      p: "14-17 años",
      icono: sectionsData.esculta.section_hero__icon,
      fecha: "",
    },
  ],
  valores: [
    {
      icon: "🤝",
      title: "Abnegación",
      description: "Ayudar a los demás sin esperar un beneficio",
    },
    {
      icon: "✨",
      title: "Pureza",
      description: "Tener pensamientos y acciones sinceras, honestas y limpias",
    },
    {
      icon: "🛡️",
      title: "Lealtad",
      description: "Ser fiel a los los principios del escultismo, a la familia y a la patria",
    },
  ],
  leyes: {
    title: "🟣 Nuestro movimiento, el ",
    subtitle: <span className="italic font-bold text-purple-700">movimiento Scout ⚜️</span>,
    content: <>
      <span>Nuestro movimiento busca hacer del mundo un lugar mejor, educando a la juventud en valores mediante el juego y la naturaleza. A nuestro paso, buscamos siempre dejar el entonrno igual o mejor de lo que nos hemos encontrado, como enseñó el fundador de nuestro movimiento Baden Powell, con la ley scout:</span>
      <ul>
        <li className="block font-medium text-lg justify py-2">1️⃣ El scout cifra su honor en ser digno de confianza</li>
        <li className="block font-medium text-lg justify py-2">2️⃣ El scout es leal</li>
        <li className="block font-medium text-lg justify py-2">3️⃣ El scout es útil y servicial</li>
        <li className="block font-medium text-lg justify py-2">4️⃣ El scout es amigo de todos y hermano de cualquier otro scout</li>
        <li className="block font-medium text-lg justify py-2">5️⃣ El scout es cortés y educado</li>
        <li className="block font-medium text-lg justify py-2">6️⃣ El scout ve en la naturaleza la obra de Dios</li>
        <li className="block font-medium text-lg justify py-2">7️⃣ El scout obedece sin réplica y no deja nada a medias</li>
        <li className="block font-medium text-lg justify py-2">8️⃣ El scout sonríe y canta ante las dificultades</li>
        <li className="block font-medium text-lg justify py-2">9️⃣ El scout cuida y respeta el bien ajeno</li>
        <li className="block font-medium text-lg justify py-2">🔟 El scout es limpio en pensamiento, palabra y acción</li>
      </ul>
    </>,
  },
};

type Props = {};

function InfoMonteperdido({}: Props) {
  const section1Ref = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const seccionUppercase = "Grupo Scout Monteperdido 960";
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${seccionUppercase} | GS Monteperdido 960 Parla`;
  }, [location.pathname]);

  const viewportWidth = window.innerWidth;
  const [photoNumber, setPhotoNumber] = useState(0);
  const lenghtPhotos = images.grupo.length;
  let arrayPhotos = [];
  for (let i = 0; i < lenghtPhotos; i++) {
    arrayPhotos[i] = i;
  }

  const [photoPrincipalSrc, setPhotoPrincipalSrc] = useState("");
  const [showModal, setShowModal] = useState(false);
  const photo_fullScreen = (src: string) => {
    setPhotoPrincipalSrc(src);
    setShowModal(true);
    document.documentElement.style.setProperty("overflow", "hidden");
  };

  return (
    <>
      <div
        className="overlay w-screen h-screen top-0 left-0 fixed z-50 bg-[#00000033] backdrop-blur-[2px] cursor-pointer items-center justify-center"
        style={{ display: showModal == true ? "flex" : "none" }}
        onClick={() => {
          setShowModal(false);
          document.documentElement.style.setProperty("overflow", "auto");
        }}
      >
        <img src={photoPrincipalSrc} className="overlay__img"></img>
      </div>

      <section
        className="section_hero h-[calc(100vh-80px)] p-0 relative flex items-center flex-col justify-center"
        style={{
          backgroundImage: `url(${data.section_hero__src})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="z-[2]">
          <img className="h-[100px]" src={data.section_hero__icon} alt="" />
        </div>
        <h1
          className="text-6xl text-wrap w-1/2 mx-auto z-[2] font-['Kanit'] text-center font-medium text-primary3 max-md:text-5xl max-sm:text-4xl"
          style={{ textShadow: `0px 0px 30px ${data.color}` }}
        >
          {data.section_hero__title}
        </h1>
        <h2>{data.section_hero__subtitle}</h2>
        <div className="section_hero__sombra z-[1] absolute h-screen w-full left-0 bottom-0 bg-linear-0 from-[#000000c4] to-transparent"></div>
        <ArrowButton color={data.color} ref={section1Ref} />
      </section>

      <main
        ref={section1Ref}
        className="section_principal w-full h-fit pt-[80px]"
      >
        <SectionTitle color={data.color} inner={`¿Quiénes somos?`} />
        <div className="section_principal__container grid lg:grid-cols-[1fr_1fr] max-lg:gap-4 max-lg:grid-rows-[1fr_1fr] px-[15%] lg:grid-rows-[1fr] max-lg:grid-cols-1 w-full min-h-[350px] gap-20">
          <article className="section_principal__div text-balance text-lg rounded-lg z-[3]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto maxime, rem facilis asperiores deserunt enim aliquid
              qui natus excepturi deleniti consequatur quaerat mollitia
              exercitationem nulla voluptates dignissimos ex eum porro! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quam sunt
              magnam id eos, reprehenderit sed quae natus accusantium cumque!
              Earum dolorem modi consectetur, repudiandae aliquam vel facilis
              iste obcaecati tempora!
            </p>
          </article>
          <article className="section_principal__div rounded-lg z-[3]">
            <h3
              className="text-right uppercase font-medium text-xl"
              style={{ color: data.color }}
            >
              nuestra misión
            </h3>
          </article>
        </div>
      </main>

      <section className="section_historia">
        <SectionTitle color={data.color} inner="nuestra historia" />
        <div className="section_historia__container relative h-[300px]">
          <div className="section_historia__linea w-2 h-full bg-primary rounded-md absolute top-0 left-1/2 -traslate-y-1/2 overflow-visible"></div>
        </div>
      </section>

      <section className="section_secciones">
        <SectionTitle color={data.color} inner="nuestras secciones" />
        <div className="section_secciones__container w-full mx-auto flex justify-center items-center flex-wrap gap-10 py-5 max-md:grid-cols-[1fr] max-md:flex-col max-md:py-0">
          {data.secciones.map((sec) => (
            <div
              className={`section_actividades__div h-[220px] w-[300px] rounded-lg flex flex-col items-center justify-start gap-5 transition-all duration-[0.3s] ease-[ease] p-[2%] max-md:p-[5%] hover:shadow-[0px_0px_30px_15px_${sec.bG}] relative text-white`}
              style={{ backgroundColor: `${sec.bG}` }}
            >
              <div className="flex items-center justify-center w-full h-10">
                <img
                  className="h-[150%]"
                  src={sec.icono}
                  alt={`Icono de ${sec.h3}`}
                />
              </div>
              <h3 className="text-center uppercase text-balance font-bold text-xl flex justify-center mx-auto w-10/12">
                {sec.h3}
              </h3>
              <p className="italic">{sec.p}</p>
              <Link
                to={`/info/${sec.h3}`}
                className="w-fit mx-auto h-fit flex items-center justify-center absolute bottom-5 font-bold hover:text-secondary3 transition-all duration-300 ease"
              >
                Más información
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section_valores bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <SectionTitle color={data.color} inner="Nuestras virtudes" />
        <div className="section_valores__container flex max-w-[80dvw] gap-8 mx-auto mt-8 justify-center flex-wrap pb-10">
          {data.valores.map((val, index) => (
            <div
              className="p-6 h-[196px] w-[362.672px] text-center transition-all duration-300 bg-[#F3F4F6] rounded-lg shadow-md cursor-default section_valores__valor"
              style={{ boxShadow: `7px 7px 14px ${data.color}` }}
              key={index}
            >
              <div className="mb-4 text-5xl section_valores__valor__icon">
                {val.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 section_valores__valor__title">
                {val.title}
              </h3>
              <p className="mt-2 text-gray-600 section_valores__valor__description">
                {val.description}
              </p>
            </div>
          ))}
        </div>
        <div className="section_valores__ambientacion__container py-12 w-2/3 flex-col flex-1 flex mx-auto h-fit">
          <div className="section_valores__ambientacion__title py-2 text-2xl font-medium">
            {data.leyes.title}
            {data.leyes.subtitle}
          </div>
          <div className="section_valores__ambientacion__description p-3 border-l-2 text-lg border-gray-200">
            {data.leyes.content}
          </div>
        </div>
      </section>

      <section className="section_location">
        <SectionTitle color={data.color} inner="¿Dónde estamos?" />
        <div className="section_location__container w-full h-fit justify-center grid grid-cols-[1fr_1fr] px-[15%] gap-10 items-center"></div>
      </section>

      <section className="section_fotos">
        <SectionTitle color={data.color} inner="Fotos de grupo" />
        <div className="section_principal__container my-10 w-3/4 flex items-center flex-col mx-auto h-[300px] relative">
          <article className="section_principal__div w-[80%] h-full items-center flex flex-wrap md:justify-between max-md:justify-center">
            {images.grupo.map((img, index) => {
              let mostrar = false;

              if (viewportWidth >= 1024) {
                mostrar =
                  photoNumber === index ||
                  photoNumber + 1 === index ||
                  photoNumber + 2 === index;
              } else if (viewportWidth > 768 && viewportWidth < 1024) {
                mostrar = photoNumber === index || photoNumber + 1 === index;
              } else if (viewportWidth <= 768) {
                mostrar = photoNumber === index;
              }

              return mostrar ? (
                <ImageSection
                  key={index}
                  clickFunction={photo_fullScreen}
                  src={img}
                />
              ) : null;
            })}
          </article>
          <div className="section_principal__indicator w-full justify-center flex items-center gap-2 h-fit py-4">
            {arrayPhotos.map((number, index) => {
              const total = arrayPhotos.length;
              let mostrar = true;

              if (viewportWidth >= 1024) {
                mostrar = index < total - 2;
              } else if (viewportWidth > 768 && viewportWidth < 1024) {
                mostrar = index < total - 1;
              }

              return mostrar ? (
                <button
                  key={number}
                  onClick={() => setPhotoNumber(Number(number))}
                  className={`before:content-[''] before:w-1/2 before:h-1/2 before:bg-primary flex items-center justify-center hover:bg-hover transition-all duration-300 rounded-[100%] before:rounded-[100%] w-6 h-6 ${
                    photoNumber === Number(number)
                      ? "before:bg-primary3"
                      : "hover:before:bg-primary2"
                  }`}
                ></button>
              ) : null;
            })}
          </div>
          <button
            onClick={() => {
              console.log(photoNumber);
              setPhotoNumber((prev) =>
                prev !== 0
                  ? prev - 1
                  : viewportWidth < 768
                  ? images.grupo.length - 1
                  : viewportWidth <= 768 && viewportWidth > 1024
                  ? images.grupo.length - 2
                  : images.grupo.length - 3
              );
              console.log(photoNumber);
            }}
            className="section_principal__buttonPhoto absolute top-1/2 -translate-y-1/2 md:left-4 max-md:left-0 flex items-center w-12 h-12 justify-center hover:**:text-white hover:bg-[#ffb049] transition duration-300 rounded-full ease cursor-pointer "
          >
            <i className="fa-solid fa-chevron-left text-[#3e8341] text-2xl font-medium"></i>
          </button>
          <button
            onClick={() => {
              console.log(photoNumber);
              setPhotoNumber((prev) =>
                (viewportWidth > 1024 && prev < images.grupo.length - 3) ||
                (viewportWidth > 768 &&
                  viewportWidth <= 1024 &&
                  prev < images.grupo.length - 2) ||
                (viewportWidth <= 768 && prev < images.grupo.length - 1)
                  ? prev + 1
                  : 0
              );
              console.log(photoNumber);
            }}
            className="section_principal__buttonPhoto absolute top-1/2 -translate-y-1/2 md:right-4 max-md:right-0 flex items-center w-12 h-12 justify-center hover:**:text-white hover:bg-[#ffb049] transition duration-300 rounded-full ease cursor-pointer "
          >
            <i className="fa-solid fa-chevron-right text-[#3e8341] text-2xl font-medium"></i>
          </button>
        </div>
      </section>
    </>
  );
}

export default InfoMonteperdido;
