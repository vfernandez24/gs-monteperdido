import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

function Header({}: Props) {
  const [menu, setMenu] = useState(true);

  return (
    <>
      <div
        className="overlay w-full h-screen fixed z-[3] cursor-pointer left-0 top-0 bg-[#00000080]"
        style={{ display: menu == true ? "none" : "block" }}
        onClick={() => {
          setMenu(!menu!);
        }}
      ></div>
      <header className="header20px h-5 bg-primary2 border-none relative z-[4] max-md:h-[50px]"></header>
      <header className="headerFalse h-[90px] w-full absolute z-[4] border-none flex gap-2 pr-[1%] left-0 top-0 justify-end list-none text-bg max-md:h-[120px] max-md:flex-col max-md:justify-start max-md:items-center max-md:gap-0">
        <li className="w-fit h-5 flex items-center justify-center">
          <a
            className="hover:text-secondary hover:*:text-secondary no-underline text-[15px] font-normal w-fit h-[30px] flex items-center justify-center leading-[30px] transition-all duration-[0.3s] ease-[ease] max-md:text-[15px] max-md:font-medium max-md:w-fit max-md:h-[25px] max-md:flex max-md:items-center max-md:justify-center max-md:leading-[25px] md:mr-2.5"
            target="_blank"
            href="https://www.instagram.com/gs_monteperdido/"
          >
            <i className="text-inherit transition-all duration-[0.3s] ease-[ease] mr-[5px] fa-brands fa-instagram"></i>
            @gs_monteperdido
          </a>
        </li>
        <li className="w-fit h-5 items-center flex justify-center">
          <a
            href="mailto:infomonteperdido@gmail.com"
            className="hover:text-secondary hover:*:text-secondary no-underline text-[15px] font-normal w-fit h-[30px] flex items-center justify-center leading-[30px] transition-all duration-[0.3s] ease-[ease] max-md:text-[15px] fmax-md:ont-medium max-md:w-fit max-md:h-[25px] max-md:flex max-md:items-center max-md:justify-center max-md:leading-[25px]"
          >
            <i className="text-inherit transition-all duration-[0.3s] ease-[ease] mr-[5px] fa-solid fa-envelope"></i>
            infomonteperdido@gmail.com
          </a>
        </li>
      </header>
      <header className="h-[70px] w-full flex justify-between border-none items-center sticky z-[4] bg-primary2 px-[5%] py-0 left-0 top-0">
        <Link
          onClick={() => {
            setMenu(true);
          }}
          to=""
          className="header__logo lg:h-[70px] max-lg:h-full flex justify-center gap-5 items-center max-md:h-[60%]"
        >
          <img
            src="/gs-monteperdido/icons/logoASDE.webp"
            className="xl:h-full max-xl:h-[70%] max-lg:h-full"
          />
          <img
            src="/gs-monteperdido/icons/logo4-3.webp"
            className="xl:h-full max-xl:h-[70%] max-lg:h-full"
          />
        </Link>
        <nav
          className={`header__nav w-fit h-full max-lg:fixed max-lg:w-[400px] max-lg:h-screen max-lg:block max-lg:transition-[left] max-lg:bg-primary4 max-lg:duration-[0.3s] max-lg:ease-[ease-out] max-lg:pl-5 max-lg:pt-[70px] max-lg:top-0 max-md:w-full ${
            menu == true
              ? "max-lg:left-[-400px] max-md:left-[-100%]"
              : "max-lg:left-0"
          }`}
        >
          <button
            className="header__navBtn bg-primary4 lg:hidden max-lg:flex justify-center text-white items-center h-[70px] w-[70px] cursor-pointer absolute text-[50px] border-[none] right-2.5 top-2.5 hover:*:text-secondary2"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <i className="fa-solid fa-xmark transition-[color] duration-[0.3s] ease-[ease]"></i>
          </button>
          <ul className="header__ul w-full h-full flex lg:justify-center gap-[30px] lg:items-center max-lg:justify-start max-lg:flex-col max-lg:items-start">
            <li className="lg:hidden max-lg:flex header__item text-white hover:text-secondary hover:*:text-secondary cursor-pointer transition-all duration-[0.3s] ease-[ease] lg:font-bold max-xl:text-[12px] xl:text-[17px] lg:h-full items-center relative *:no-underline *:transition-all *:duration-[0.3s] *:ease-[ease] *:text-[color:var(--background)] max-lg:w-full max-lg:justify-start max-lg:h-10 max-lg:text-[25px] max-lg:font-semibold max-lg:px-0 max-lg:py-2.5">
              <Link
                onClick={() => {
                  setMenu(true);
                }}
                to="/"
                className="heaeder__link max-lg:pl-10"
              >
                <i className="fa-solid fa-home mr-0.5 max-lg:absolute max-lg:-translate-y-2/4 max-lg:left-0 max-lg:top-2/4"></i>{" "}
                INICIO
              </Link>
            </li>
            <li className="header__item text-white hover:text-secondary hover:*:text-secondary transition-all duration-[0.3s] ease-[ease] lg:font-bold max-xl:text-[12px] xl:text-[17px] lg:h-full flex items-center relative *:no-underline *:transition-all *:duration-[0.3s] *:ease-[ease] *:text-[color:var(--background)] cursor-default header__item--1 max-lg:w-full max-lg:text-[25px] max-lg:font-semibold max-lg:px-0 max-lg:py-2.5 max-lg:overflow-visible max-lg:h-fit max-lg:flex-col max-lg:items-start max-lg:justify-start max-lg:pl-10">
              <div className="header__navDiv max-lg:flex max-lg:justify-start max-lg:items-center">
                <i className="fa-solid fa-info mr-0.5 max-lg:absolute max-lg:-translate-y-2/4 max-lg:left-0 max-lg:top-2/4"></i>{" "}
                INFORMACIÓN <i className="fa-solid fa-chevron-down max-lg:ml-2"></i>
              </div>
              <ul className="header__subItem lg:absolute w-full h-fit max-h-0 overflow-hidden transition-[max-height] duration-[0.3s] ease-[ease-out] left-0 top-[70px] lg:bg-primary2 max-lg:static max-lg:block max-lg:bg-transparent">
                <Link
                  className="h-10 text-[17px] font-medium flex items-center list-none"
                  onClick={() => {
                    setMenu(true);
                  }}
                  to="/info/monteperdido"
                >
                  Monteperdido
                </Link>
                <Link
                  className="h-10 text-[17px] font-medium flex items-center list-none"
                  onClick={() => {
                    setMenu(true);
                  }}
                  to="/info/manada"
                >
                  Manada
                </Link>
                <Link
                  className="h-10 text-[17px] font-medium flex items-center list-none"
                  onClick={() => {
                    setMenu(true);
                  }}
                  to="/info/tropa"
                >
                  Tropa
                </Link>
                <Link
                  className="h-10 text-[17px] font-medium flex items-center list-none"
                  onClick={() => {
                    setMenu(true);
                  }}
                  to="/info/esculta"
                >
                  Esculta
                </Link>
                <Link
                  className="h-10 text-[17px] font-medium flex items-center list-none"
                  onClick={() => {
                    setMenu(true);
                  }}
                  to="/info/kraal"
                >
                  Kraal
                </Link>
              </ul>
            </li>
            <li className="header__item text-white hover:text-secondary hover:*:text-secondary cursor-pointer transition-all duration-[0.3s] ease-[ease] lg:font-bold max-xl:text-[12px] xl:text-[17px] lg:h-full flex items-center relative *:no-underline *:transition-all *:duration-[0.3s] *:ease-[ease] *:text-[color:var(--background)] max-lg:w-full max-lg:justify-start max-lg:h-10 max-lg:text-[25px] max-lg:font-semibold max-lg:px-0 max-lg:py-2.5">
              <Link
                onClick={() => {
                  setMenu(true);
                }}
                to="/redes/"
                className="heaeder__link max-lg:pl-10"
              >
                <i className="fa-solid fa-hashtag mr-0.5 max-lg:absolute max-lg:-translate-y-2/4 max-lg:left-0 max-lg:top-2/4"></i>{" "}
                REDES
              </Link>
            </li>
            <li className="lg:hidden max-lg:flex header__item text-white hover:text-secondary hover:*:text-secondary cursor-pointer transition-all duration-[0.3s] ease-[ease] lg:font-bold max-xl:text-[12px] xl:text-[17px] lg:h-full items-center relative *:no-underline *:transition-all *:duration-[0.3s] *:ease-[ease] *:text-[color:var(--background)] max-lg:w-full max-lg:justify-start max-lg:h-10 max-lg:text-[25px] max-lg:font-semibold max-lg:px-0 max-lg:py-2.5">
              <Link
                onClick={() => {
                  setMenu(true);
                }}
                to="/actividades"
                className="heaeder__link max-lg:pl-10"
              >
                <i className="fa-solid fa-campground mr-0.5 max-lg:absolute max-lg:-translate-y-2/4 max-lg:left-0 max-lg:top-2/4"></i>{" "}
                ACTIVIDADES
              </Link>
            </li>
            <li className="header__item text-white hover:text-secondary hover:*:text-secondary cursor-pointer transition-all duration-[0.3s] ease-[ease] lg:font-bold max-xl:text-[12px] xl:text-[17px] lg:h-full flex items-center relative *:no-underline *:transition-all *:duration-[0.3s] *:ease-[ease] *:text-[color:var(--background)] max-lg:w-full max-lg:justify-start max-lg:h-10 max-lg:text-[25px] max-lg:font-semibold max-lg:px-0 max-lg:py-2.5">
              <Link
                onClick={() => {
                  setMenu(true);
                }}
                to="/recuerdos"
                className="heaeder__link max-lg:pl-10"
              >
                <i className="fa-solid fa-cart-shopping mr-0.5 max-lg:absolute max-lg:-translate-y-2/4 max-lg:left-0 max-lg:top-2/4"></i>{" "}
                RECUERDOS
              </Link>
            </li>
            <li className="header__item text-white hover:text-secondary hover:*:text-secondary cursor-pointer transition-all duration-[0.3s] ease-[ease] lg:font-bold max-xl:text-[12px] xl:text-[17px] lg:h-full flex items-center relative *:no-underline *:transition-all *:duration-[0.3s] *:ease-[ease] *:text-[color:var(--background)] max-lg:w-full max-lg:justify-start max-lg:h-10 max-lg:text-[25px] max-lg:font-semibold max-lg:px-0 max-lg:py-2.5">
              <Link
                onClick={() => {
                  setMenu(true);
                }}
                to="/contacto"
                className="heaeder__link max-lg:pl-10"
              >
                <i className="fa-solid fa-envelope mr-0.5 max-lg:absolute max-lg:-translate-y-2/4 max-lg:left-0 max-lg:top-2/4"></i>{" "}
                CONTACTO
              </Link>
            </li>
            <Link
              to="/unete"
              className="header__item cursor-pointer text-white hover:text-secondary header__item--last h-fit lg:flex justify-center items-center border-secondary2 border-[2px] transition-all duration-300 font-semibold px-6 py-2 rounded-3xl bg-secondary2 hover:bg-transparent hover:*:text-secondary2 max-lg:w-full max-lg:justify-start max-lg:h-10 max-lg:text-[25px] max-lg:font-semibold max-lg:px-0 max-lg:py-2.5 max-lg:hidden"
            >
              <div
                onClick={() => {
                  setMenu(true);
                }}
                className="h-full w-full heaeder__link heaeder__link--last max-lg:pl-10 text-white"
              >
                ÚNETE
              </div>
            </Link>
          </ul>
        </nav>
        <button
          className="header__btn lg:hidden max-lg:flex bg-[none] text-[40px] text-[white] cursor-pointer border-[none] hover:text-secondary2"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>
    </>
  );
}

export default Header;
