import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ActivityCard from "../components/cards/ActivityCard";
import Product from "../components/cards/Product";
import ArrowButton from "../components/buttons/ArrowButton";
import OverlayProduct from "../components/emails/OverlayProduct";
import Alert from "../components/emails/Alert";

import products from "../constants/products";
import activities from "../constants/activities";

type Props = {};

function Index({}: Props) {
  const section1Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GS Monteperdido 960 | Grupo Scout de Parla, Madrid";
  }, []);

  const idProducts = [0, 1, 2];
  const [idProduct, setIdProduct] = useState(0);
  const [overlay, setOverlay] = useState(false);

  const [alert, setAlert] = useState(false);
  const [enviado, setEnviado] = useState(false)

  return (
    <>
      <Alert type={enviado == true ? "contacto" : "error"} overlay={alert} setOverlay={setAlert} />

      <OverlayProduct
        idProduct={idProduct}
        overlay={overlay}
        setOverlay={setOverlay}
        setAlert={setAlert}
        setEnviado={setEnviado}
      />

      <section className="section_inicio min-h-fit pt-[90px] h-[calc(100vh-90px)] relative w-full flex justify-center items-center flex-col max-md:bg-[url('/backgrounds/formacionV.webp')] md:bg-[url('/backgrounds/formacionH.webp')] bg-cover bg-center bg-fixed">
        <h1 className="text-[50px] text-primary3 font-bold text-center relative z-[2] text-balance max-lg:text-[40px]">
          Bienvenidos al Grupo Scout Monteperdido 960
        </h1>
        <h2 className="text-3xl text-secondary3 font-medium text-center relative z-[2] text-balance max-lg:text-[20px]">
          Explora, Aprende, y Lidera: Juntos construimos un mundo mejor desde el
          movimiento scout.
        </h2>
        <div className="section_inicio__sombra absolute h-[120%] w-full z-[1] left-0 bottom-0 bg-linear-0 from-black to-transparent"></div>
        <ArrowButton color="#3e8341" ref={section1Ref} />
      </section>

      <section
        ref={section1Ref}
        className="section_info min-h-fit pt-[90px] w-4/5 flex flex-col h-fit m-auto"
      >
        <div className="w-full h-fit pb-5 flex justify-center text-5xl items-center text-primary">
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <h2 className="section__titulo after:content-[''] after:w-[150px] font-light tracking-[2px] after:h-2 after:bg-primary after:absolute after:-translate-x-2/4 after:rounded-[10px] after:left-2/4 after:top-[120%] text-center text-secondary relative text-[30px] mb-[60px]">
          ¿QUIÉNES SOMOS?
        </h2>
        <div className="section_info__container grid lg:grid-cols-[1fr_1fr] max-lg:grid-cols-[1fr] max-lg:grid-rows-[1fr_1fr] max-lg:h-fit gap-x-10 items-start">
          <div className="section_info__div flex flex-col justify-center">
            <p className="text-xl font-medium text-text text-justify mb-5">
              <span className="block mb-5">
                Somos el Grupo Scout Monteperdido, una comunidad que desde 2018
                guía a niños, niñas y jóvenes mediante el aprendizaje, la
                aventura y el compañerismo. Promovemos valores como la
                solidaridad, el liderazgo y el amor por la naturaleza para
                construir un mundo mejor.
              </span>
              <span className="block mb-5">
                Guiados por la ley scout, creamos un entorno donde cada miembro
                crece aprendiendo responsabilidad, respeto y compromiso.
                Nuestras actividades, como campamentos y proyectos sociales,
                fortalecen el trabajo en equipo y desarrollan nuevas
                habilidades.
              </span>
            </p>
          </div>
          <div className="section_info__div flex flex-col justify-center items-stretch">
            <img
              src="/gs-monteperdido/assets/collageInfo.webp"
              alt="Collage de imágenes de actividades scouts"
              className="max-h-[none] object-cover self-stretch rounded-md lg:h-[348px] sm:h-[400px] md:h-[320px] "
            />
          </div>
        </div>
        <Link
          to="info/monteperdido"
          className="section_verMas text-center text-xl font-bold no-underline text-secondary2 transition-all duration-[0.3s] ease-[ease] hover:text-secondary flex items-center justify-center w-fit mx-auto h-fit mt-10 relative after:content-[''] after:w-0 after:absolute after:top-full after:left-0 after:h-[3px] after:bg-secondary after:rounded-sm after:transition-all after:duration-300 hover:after:w-full **:transition-all **:duration-300 hover:**:text-secondary"
        >
          Más información
        </Link>
      </section>

      <section className="section_actividades min-h-fit pt-[90px] w-full flex flex-col items-center px-0 py-[5%]">
        <div className="w-full h-fit pb-5 flex justify-center text-5xl items-center text-primary">
          <i className="fa-solid fa-campground"></i>
        </div>
        <h2 className="section__titulo after:content-[''] after:w-[150px] font-light tracking-[2px] after:h-2 after:bg-primary after:absolute after:-translate-x-2/4 after:rounded-[10px] after:left-2/4 after:top-[120%] text-center text-secondary relative text-[30px] mb-[60px]">
          ACTIVIDADES RECIENTES
        </h2>
        <div className="section_actividades__container w-full mx-auto flex justify-center items-center flex-wrap gap-10 py-5 max-md:grid-cols-[1fr] max-md:flex-col max-md:py-0">
          {activities.map((act, index) => (
            <ActivityCard
              bG={act.color}
              fecha={act.subtitle}
              h3={act.title}
              p={act.description}
              key={index}
            />
          ))}
        </div>
      </section>

      <section className="section_redes min-h-fit py-[90px] bg-[radial-gradient(#ebebeb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="w-full h-fit pb-5 flex justify-center text-5xl items-center text-primary">
          <i className="fa-solid fa-globe"></i>
        </div>
        <h2 className="section__titulo after:content-[''] after:w-[150px] font-light tracking-[2px] after:h-2 after:bg-primary after:absolute after:-translate-x-2/4 after:rounded-[10px] uppercase after:left-2/4 after:top-[120%] text-center text-secondary2 relative text-[30px] mb-[60px]">
          Conecta con nosotros
        </h2>
        <div className="section_redes__container w-full flex justify-center items-center gap-5 px-0 py-[30px] max-lg:flex-col max-lg:gap-10">
          <a
            target="_blank"
            href="https://instagram.com/gs_monteperdido"
            className="section_redes__div relative after:content-[''] after:w-0 after:absolute after:top-full after:left-0 after:h-1 after:bg-secondary after:rounded-sm after:transition-all after:duration-300 hover:after:w-full no-underline flex items-center gap-2.5 **:transition-all **:duration-300 hover:**:text-secondary2 font-semibold max-lg:flex-col"
          >
            <i className="fab text-[25px] fa-instagram"></i>
            <p className="text-[25px] text-center text-balance">
              @gs_monteperdido
            </p>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/gsmonteperdido/?locale=es_ES"
            className="section_redes__div relative after:content-[''] after:w-0 after:absolute after:top-full after:left-0 after:h-1 after:bg-secondary after:rounded-sm after:transition-all after:duration-300 hover:after:w-full no-underline flex items-center gap-2.5 **:transition-all **:duration-300 hover:**:text-secondary2 font-semibold max-lg:flex-col max-w-2/3 w-fit"
          >
            <i className="fab text-[25px] fa-facebook"></i>
            <p className="text-[25px] text-center text-balance">
              Grupo Scout Monteperdido 960
            </p>
          </a>
        </div>
        <p className="text-[25px] max-md:text-[20px] text-center text-balance font-light">
          Síguenos en nuestras redes sociales para estar al tanto de nuestras
          actividades y eventos.
        </p>
      </section>

      <section className="section_tienda min-h-fit py-[90px]">
        <div className="w-full h-fit pb-5 flex justify-center text-5xl items-center text-primary">
          <img
            src="/gs-monteperdido/icons/florDeLis.webp"
            className="h-[48px]"
          />
        </div>
        <h2 className="section__titulo after:content-[''] after:w-[150px] font-light tracking-[2px] after:h-2 after:bg-primary after:absolute after:-translate-x-2/4 after:rounded-[10px] uppercase after:left-2/4 after:top-[120%] text-center text-secondary relative text-[30px] mb-[60px]">
          Recuerdos scouts
        </h2>
        <div className="section_tienda__container flex flex-wrap items-center justify-evenly w-full px-10 gap-x-10 gap-y-10">
          {products.map((pro, index) => {
            for (let i = 0; i < idProducts.length; i++) {
              if (pro.id == idProducts[i]) {
                return (
                  <Product
                    key={index}
                    srcImg={pro.srcImg}
                    subTitle={pro.subtitle}
                    title={pro.title}
                    id={pro.id}
                    setIdProduct={setIdProduct}
                    setOverlay={setOverlay}
                  />
                );
              }
            }
          })}
        </div>
        <Link
          to="/recuerdos"
          className="section_verMas text-center text-xl font-bold no-underline text-secondary2 transition-all duration-[0.3s] ease-[ease] hover:text-secondary flex items-center justify-center w-fit mx-auto h-fit mt-10 relative after:content-[''] after:w-0 after:absolute after:top-full after:left-0 after:h-[3px] after:bg-secondary after:rounded-sm after:transition-all after:duration-300 hover:after:w-full **:transition-all **:duration-300 hover:**:text-secondary"
        >
          Más recuerdos
        </Link>
      </section>
    </>
  );
}

export default Index;
