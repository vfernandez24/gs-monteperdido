import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer w-full h-fit grid-cols-[1fr_1fr_1fr] text-bg p-[5%] bg-primary2 z-[12] **:no-underline **:text-bg grid max-lg:grid-cols-[1fr_1fr] max-lg:grid-rows-[1fr_1fr] max-lg:gap-5 max-lg:px-[10%] max-lg:py-[5%] max-sm:grid-cols-[1fr] max-sm:grid-rows-[1fr_1fr_1fr] max-sm:p-[5%]">
        <div className="footerColumn h-full flex flex-col gap-5 items-start justify-start">
          <h2 className="font-bold text-4xl">Explora</h2>
          <Link
            className="w-fit text-xl no-underline font-medium grid grid-cols-[40px_auto] transition-all duration-[0.3s] ease-[ease] hover:text-secondary hover:*:text-secondary items-center "
            to={"/"}
          >
            <i className="text-xl transition-all duration-[0.3s] justify-self-center ease-[ease] mr-2.5 fa-solid fa-home"></i>
            <span>Inicio</span>
          </Link>
          <Link
            className="w-fit text-xl no-underline font-medium grid grid-cols-[40px_auto] transition-all duration-[0.3s] ease-[ease] hover:text-secondary hover:*:text-secondary items-center "
            to={"/info/monteperdido"}
          >
            <i className="text-xl transition-all duration-[0.3s] justify-self-center ease-[ease] mr-2.5 fa-solid fa-info"></i>
            <span>Info</span>
          </Link>
          <Link
            className="w-fit text-xl no-underline font-medium grid grid-cols-[40px_auto] transition-all duration-[0.3s] ease-[ease] hover:text-secondary hover:*:text-secondary items-center "
            to={"/redes"}
          >
            <i className="text-xl transition-all duration-[0.3s] justify-self-center ease-[ease] mr-2.5 fa-solid fa-hashtag"></i>
            <span>Redes</span>
          </Link>
          <Link
            className="w-fit text-xl no-underline font-medium grid grid-cols-[40px_auto] transition-all duration-[0.3s] ease-[ease] hover:text-secondary hover:*:text-secondary items-center "
            to={"/actividades"}
          >
            <i className="text-xl transition-all duration-[0.3s] justify-self-center ease-[ease] mr-2.5 fa-solid fa-campground"></i>
            <span>Actividades</span>
          </Link>
          <Link
            className="w-fit text-xl no-underline font-medium grid grid-cols-[40px_auto] transition-all duration-[0.3s] ease-[ease] hover:text-secondary hover:*:text-secondary items-center "
            to={"/tienda"}
          >
            <i className="text-xl transition-all duration-[0.3s] justify-self-center ease-[ease] mr-2.5 fa-solid fa-cart-shopping"></i>
            <span>Recuerdos Scout</span>
          </Link>
          <Link
            className="w-fit text-xl no-underline font-medium grid grid-cols-[40px_auto] transition-all duration-[0.3s] ease-[ease] hover:text-secondary hover:*:text-secondary items-center "
            to={"/contacto"}
          >
            <i className="text-xl transition-all duration-[0.3s] justify-self-center ease-[ease] mr-2.5 fa-solid fa-envelope"></i>
            <span>Contacto</span>
          </Link>
        </div>
        <div className="footerColumn h-full flex flex-col gap-5 items-start justify-start">
          <h2 className="font-bold text-4xl">Contacto</h2>
          <a
            className="w-fit text-xl no-underline font-medium grid grid-cols-[40px_auto] transition-all duration-[0.3s] ease-[ease] hover:text-secondary hover:*:text-secondary items-center "
            href="mailto: infomonteperdido@gmail.com"
            target="_blank"
          >
            <i className="text-xl transition-all duration-[0.3s] justify-self-center ease-[ease] mr-2.5 fa-solid fa-envelope"></i>
            <span>infomonteperdido@gmail.com</span>
          </a>
          <a
            className="w-fit text-xl no-underline font-medium grid grid-cols-[40px_auto] transition-all duration-[0.3s] ease-[ease] hover:text-secondary hover:*:text-secondary items-center "
            href="https://instagram.com/gs_monteperdido"
            target="_blank"
          >
            <i className="text-xl transition-all duration-[0.3s] justify-self-center ease-[ease] mr-2.5 fa-brands fa-instagram"></i>
            <span>@gs_monteperdido</span>
          </a>
          <a
            className="w-fit text-xl no-underline font-medium grid grid-cols-[40px_auto] transition-all duration-[0.3s] ease-[ease] hover:text-secondary hover:*:text-secondary items-center "
            href="https://facebook.com"
            target="_blank"
          >
            <i className="text-xl transition-all duration-[0.3s] justify-self-center ease-[ease] mr-2.5 fa-brands fa-facebook"></i>
            <span>Grupo Scout Monte Perdido</span>
          </a>
          <span className="w-fit text-xl no-underline font-medium grid grid-cols-[40px_auto] transition-all duration-[0.3s] ease-[ease] hover:text-secondary hover:*:text-secondary items-center  cursor-default">
            <i className="text-xl transition-all duration-[0.3s] justify-self-center ease-[ease] mr-2.5 fa-solid fa-clock"></i>
            <span>Sábados, 16:30 - 19:00h</span>
          </span>
          <a
            className="w-fit text-xl no-underline font-medium grid grid-cols-[40px_auto] transition-all duration-[0.3s] ease-[ease] hover:text-secondary hover:*:text-secondary items-center "
            href="https://www.google.es/maps/place/Plaza+de+Toros/@40.2445196,-3.7590858,18.25z/data=!4m10!1m2!2m1!1splaza+de+toro!3m6!1s0xd41f54c150d66ef:0x1648265fa138a377!8m2!3d40.2441!4d-3.75749!15sCg1wbGF6YSBkZSB0b3JvkgEJdHJhbV9zdG9w4AEA!16s%2Fg%2F1tdm9mwd?hl=es&entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <i className="text-xl transition-all duration-[0.3s] justify-self-center ease-[ease] mr-2.5 fa-solid fa-location"></i>
            <span>Local 10 de la Plaza de Toros, Parla, Madrid</span>
          </a>
        </div>
        <div className="footerColumn3 flex flex-col justify-center self-center gap-5 overflow-hidden max-lg:relative max-lg:left-2/4 max-sm:left-0">
          <img
            className="w-full h-[140px] object-contain"
            src="/icons/logoASDE.webp"
          />
          <img className="w-full h-[140px] object-contain" src="/icons/logo4-3.webp" />
        </div>
      </footer>
      <footer className="footer w-full h-fit grid-cols-[1fr_1fr_1fr] text-bg p-[5%] bg-primary2 z-[12] footer--2 flex justify-center items-center text-[20px] text-center font-normal m-0 max-lg:gap-5 max-lg:px-[10%] max-lg:py-[5%] max-sm:p-[5%]">
        © 2025 Grupo Scout Monteperdido. Todos los derechos reservados
      </footer>
    </>
  );
}

export default Footer;
