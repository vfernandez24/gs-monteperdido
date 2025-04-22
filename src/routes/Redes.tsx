type Props = {};

function Redes({}: Props) {
  return (
    <section className="section_redes min-h-fit py-[90px]">
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
      <h3 className="section__titulo mt-10 uppercase after:left-2/4 after:top-[120%] text-center text-secondary2 relative text-[25px] mb-[60px]">
        Conecta con nuestra esculta
      </h3>
      <div className="section_redes__container w-full flex justify-center items-center gap-5 px-0 pb-[30px] max-lg:flex-col max-lg:gap-10">
        <a
          target="_blank"
          href="https://www.instagram.com/esculta_tictac/"
          className="section_redes__div relative after:content-[''] after:w-0 after:absolute after:top-full after:left-0 after:h-1 after:bg-secondary after:rounded-sm after:transition-all after:duration-300 hover:after:w-full no-underline flex items-center gap-2.5 **:transition-all **:duration-300 hover:**:text-secondary2 font-semibold max-lg:flex-col"
        >
          <i className="fab text-[25px] fa-instagram"></i>
          <p className="text-[25px] text-center text-balance">
            @esculta_tictac
          </p>
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@escultatictac"
          className="section_redes__div relative after:content-[''] after:w-0 after:absolute after:top-full after:left-0 after:h-1 after:bg-secondary after:rounded-sm after:transition-all after:duration-300 hover:after:w-full no-underline flex items-center gap-2.5 **:transition-all **:duration-300 hover:**:text-secondary2 font-semibold max-lg:flex-col max-w-2/3 w-fit"
        >
          <i className="fab text-[25px] fa-tiktok"></i>
          <p className="text-[25px] text-center text-balance">
            @escultatictac
          </p>
        </a>
      </div>
      <p className="text-[25px] max-md:text-[20px] text-center text-balance font-light">
        Síguenos en nuestras redes sociales para estar al tanto de nuestras
        actividades y eventos.
      </p>
    </section>
  );
}

export default Redes;
