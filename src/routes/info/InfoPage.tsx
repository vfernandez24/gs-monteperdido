import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { Props, sectionsData } from "../../constants/sectionsData";

import SectionTitle from "../../components/SectionTitle";
import ArrowButton from "../../components/ArrowButton";
import images from "../../constants/photosLocation";
import ImageSection from "../../components/ImageSection";

function InfoPage({
  seccionName,
}: {
  seccionName: "manada" | "tropa" | "esculta" | "kraal";
}) {
  const seccionUppercase =
    seccionName.charAt(0).toUpperCase() + seccionName.slice(1).toLowerCase();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${seccionUppercase} | GS Monteperdido 960 Parla`;
  }, [location.pathname]);

  const data: Props = sectionsData[seccionName];

  const section1Ref = useRef<HTMLDivElement>(null);

  const viewportWidth = window.innerWidth;
  const [photoNumber, setPhotoNumber] = useState(0);
  const lenghtPhotos = images[data.seccionFoto].length;
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

  const inputClasses = `w-full max-w-[90dvw] block h-10 rounded-[5px] p-3 bg-bg border-[1.5px] border-primary focus:border-primary3 outline-none transition-all ease duration-300`;
  const [typeInputContact, setTypeInputContact] = useState("");
  const [noError, setNoError] = useState(false);
  function submitSolicitud() {
    setNoError;
  }
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
          className="text-6xl text-wrap w-1/2 mx-auto z-[2] font-['Kanit'] text-center font-medium text-white max-md:text-5xl max-sm:text-4xl"
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
        <SectionTitle
          color={data.color}
          inner={`¿Quiénes somos ${data.seccion}?`}
        />
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
              actividades de {data.seccion}
            </h3>
          </article>
        </div>
        <div className="section_principal__container my-10 w-3/4 flex items-center flex-col mx-auto h-[300px] relative">
          <article className="section_principal__div w-[80%] h-full items-center flex flex-wrap md:justify-between max-md:justify-center">
            {images[data.seccionFoto].map((img, index) => {
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
                  ? images[data.seccionFoto].length - 1
                  : viewportWidth <= 768 && viewportWidth > 1024
                  ? images[data.seccionFoto].length - 2
                  : images[data.seccionFoto].length - 3
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
                (viewportWidth > 1024 &&
                  prev < images[data.seccionFoto].length - 3) ||
                (viewportWidth > 768 &&
                  viewportWidth <= 1024 &&
                  prev < images[data.seccionFoto].length - 2) ||
                (viewportWidth <= 768 &&
                  prev < images[data.seccionFoto].length - 1)
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
      </main>

      <section className="section_valores bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <SectionTitle color={data.color} inner="Nuestros valores" />
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
            {data.ambientacion.title}
            {data.ambientacion.subtitle}
          </div>
          <div className="section_valores__ambientacion__description p-3 border-l-2 text-lg border-gray-200">
            {data.ambientacion.description}
          </div>
        </div>
      </section>

      <section className="section_scouters">
        <SectionTitle
          color={data.color}
          inner={
            data.scouters.name ? data.scouters.name : "Scouters de sección"
          }
        />
        <div className="section_scouters__container mx-auto flex-wrap flex items-center max-w-[80dvw] justify-center gap-[7%] px-10 pb-10">
          {data.scouters.monis.map((moni, index) => (
            <div
              key={index}
              className="section_scouters__moni h-[300px] w-[220px] grid grid-rows-[auto_1fr]"
            >
              <div className="section_scouters__moni__img overflow-hidden h-[220px] flex items-center justify-center">
                <img
                  src={moni.foto}
                  alt={`Foto de ${moni.nombre2 ? moni.nombre2 : moni.nombre}`}
                  className="object-contain h-4/5 w-4/5 bg-green-300 transition-all duration-300 ease"
                />
              </div>
              <div className="section_scouters__moni__name relative flex items-center justify-center">
                {moni.nombre2 ? (
                  <div className="absolute top-0 right-0 text-right text-lg italic font-light">
                    {moni.nombre2}
                  </div>
                ) : null}
                <h4 className="text-xl font-bold" style={{ color: data.color }}>
                  {moni.nombre}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section_unete bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(90,200,100,0.2)_0,rgba(90,200,100,0)_50%,rgba(90,200,100,0)_100%)]">
        <SectionTitle
          color={data.color}
          inner={`¿Quieres unirte a ${data.seccion} / a grupo?`}
        />
        <form
          action=""
          className="lg:w-[600px] max-lg:w-[85%] flex flex-col mx-auto items-center justify-center flex-1"
          onSubmit={submitSolicitud}
        >
          <label className="w-full h-fit text-left py-4" htmlFor="name">
            Nombre completo del educando:
            <input type="text" id="name" className={inputClasses} required />
          </label>
          <label className="w-full h-fit text-left py-4" htmlFor="anio">
            Mes y año de nacimiendo del educando:
            <input type="month" id="anio" className={inputClasses} required />
          </label>
          <span className="w-full text-left py-2">
            Tipo de contacto:
            <label className="block ml-10 py-1" htmlFor="typeEmail">
              <input
                type="radio"
                value="email"
                name="typeContact"
                onChange={(e) => setTypeInputContact(e.target.value)}
                id="typeEmail"
              />
              <span
                className="ml-4"
                style={{ fontWeight: typeInputContact === "email" ? 500 : 400 }}
              >
                Correo Electrónico
              </span>
            </label>
            <label className="block ml-10 py-1" htmlFor="typeTel">
              <input
                type="radio"
                value="tel"
                name="typeContact"
                onChange={(e) => setTypeInputContact(e.target.value)}
                id="typeTel"
              />
              <span
                className="ml-4"
                style={{ fontWeight: typeInputContact === "tel" ? 500 : 400 }}
              >
                Teléfono
              </span>
            </label>
          </span>
          {typeInputContact === "email" ? (
            <label className="w-full h-fit text-left py-4" htmlFor="email">
              Correo Electrónico:
              <input
                type="email"
                id="email"
                className={inputClasses}
                required={typeInputContact === "email" ? true : false}
              />
            </label>
          ) : null}
          {typeInputContact === "tel" ? (
            <label className="w-full h-fit text-left py-4" htmlFor="tel">
              Teléfono:
              <input
                type="tel"
                id="tel"
                className={inputClasses}
                required={typeInputContact === "tel" ? true : false}
              />
            </label>
          ) : null}
          <button
            type="submit"
            className="flex items-center justify-center bg-secondary hover:bg-bg transition-all ease duration-300 text-bg hover:text-secondary py-2 px-10 rounded-xl text-lg font-semibold border-2 border-secondary cursor-pointer"
          >
            Enviar
          </button>
        </form>
        <p
          className="items-center justify-center w-full h-fit py-5 text-secondary font-bold text-xl"
          style={{ opacity: noError == true ? 1 : 0 }}
        >
          Solicitud enviada correctamente
        </p>
      </section>
    </>
  );
}

export default InfoPage;
