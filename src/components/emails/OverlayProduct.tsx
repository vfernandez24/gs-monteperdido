import { useState } from "react";
import sendEmail from "../../scripts/sendEmail";
import products from "../../constants/products";

type Props = {
  idProduct: number;
  overlay: boolean;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

function OverlayProduct({ idProduct, overlay, setOverlay }: Props) {
  const product = products[idProduct];

  const [submit, setSubmit] = useState(false);

  const [cantidad, setCantidad] = useState(0);
  const [contacto, setContacto] = useState("email");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    setSubmit(true);
    const fecha = new Date().toLocaleString();
    const subject = `Pedido de "${product.title}" (${fecha})`;
    const body = `Recuerdo: ${product.title} (id: ${product.id})
Cantidad: ${cantidad}
Fecha de pedido: ${fecha}
Contacto: ${contacto == "email" ? email : tel}`;
    sendEmail(body, subject);
  }
  return (
    <>
      {overlay == true ? (
        <>
          <div
            className="overlay fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen backdrop-blur-[2px] bg-[#0000003f]"
            onClick={() => {
              setOverlay(false);
              document.documentElement.style.setProperty("overflow", "auto");
            }}
          ></div>
          <form
            action=""
            onSubmit={submitForm}
            className="productForm rounded-lg flex flex-col items-center fixed p-5 top-1/2 left-1/2 -translate-1/2 bg-white z-30 w-full max-w-[500px] sm:w-[90vw] px-5 h-fit"
          >
            <button
              type="button"
              className="absolute top-3 right-3 flex items-center justify-center cursor-pointer rounded-full text-lg sm:text-xl text-primary hover:text-secondary h-9 w-9 sm:h-10 sm:w-10 hover:bg-gray-100 transition-all ease duration-300 hover:rotate-180"
              onClick={() => {
                setOverlay(false);
                document.documentElement.style.setProperty("overflow", "auto");
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <h1 className="w-full text-center py-3 text-lg sm:text-xl uppercase font-bold text-primary tracking-[2px]">
              Solicitar recuerdo
            </h1>

            <div className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] flex mx-auto bg-gray-200 hover:*:scale-[1.1] overflow-hidden">
              <img
                src={product.srcImg}
                className="w-auto h-auto max-w-full max-h-full object-contain transition-all duration-300 ease"
              />
            </div>

            <p className="w-full py-2 font-medium text-secondary text-base sm:text-lg uppercase tracking-[1px] text-right">
              {product.title}
            </p>

            <label
              className="w-full text-left py-1 text-sm sm:text-base"
              htmlFor="cantidad"
            >
              Cantidad:
              <input
                required
                type="number"
                value={cantidad}
                min={1}
                onChange={(e) => setCantidad(Number(e.target.value))}
                className="w-full block h-9 rounded-[5px] p-3 bg-bg border-[1.5px] border-primary focus:border-primary3 outline-none transition-all ease duration-300"
              />
            </label>

            <span className="w-full text-left py-2 text-sm sm:text-base">
              Tipo de contacto:
              <label className="block ml-6 py-1" htmlFor="typeEmail">
                <input
                  type="radio"
                  value="email"
                  name="typeContact"
                  onChange={(e) => setContacto(e.target.value)}
                  id="typeEmail"
                  defaultChecked
                />
                <span
                  className="ml-3"
                  style={{ fontWeight: contacto === "email" ? 500 : 400 }}
                >
                  Correo Electrónico
                </span>
              </label>
              <label className="block ml-6 py-1" htmlFor="typeTel">
                <input
                  type="radio"
                  value="tel"
                  name="typeContact"
                  onChange={(e) => setContacto(e.target.value)}
                  id="typeTel"
                />
                <span
                  className="ml-3"
                  style={{ fontWeight: contacto === "tel" ? 500 : 400 }}
                >
                  Usuario de instagram
                </span>
              </label>
            </span>

            {contacto === "email" ? (
              <label
                className="w-full text-left py-1 text-sm sm:text-base"
                htmlFor="email"
              >
                Correo Electrónico:
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="correo@electronico.com"
                  type="email"
                  id="email"
                  className="w-full block h-9 rounded-[5px] p-3 bg-bg border-[1.5px] border-primary focus:border-primary3 outline-none transition-all ease duration-300"
                  required
                />
              </label>
            ) : null}

            {contacto === "tel" ? (
              <label
                className="w-full text-left py-1 text-sm sm:text-base relative before:content-['@'] before:w-5 before:h-10 before:flex before:absolute before:bottom-[4px] before:left-3 before:items-center before:justify-center before:text-gray-500 before:text-lg before:z-10"
                htmlFor="tel"
              >
                Usuario de instagram:
                <input
                  onChange={(e) => setTel(e.target.value)}
                  value={tel}
                  placeholder="username"
                  type="text"
                  id="tel"
                  className="w-full block h-9 rounded-[5px] p-3 bg-bg border-[1.5px] border-primary focus:border-primary3 outline-none transition-all ease duration-300 pl-10"
                  required
                />
              </label>
            ) : null}

            <button
              type="submit"
              className="flex items-center justify-center bg-secondary hover:bg-bg transition-all ease duration-300 text-bg hover:text-secondary mt-2 py-1 px-8 sm:px-10 rounded-xl text-sm sm:text-md font-semibold border-2 border-secondary cursor-pointer"
            >
              Solicitar
            </button>

            <p
              className="text-center w-full py-2 text-secondary font-normal text-sm sm:text-md"
              style={{ display: submit == true ? "block" : "none" }}
            >
              Cargando solicitud...
              <br />
              (Esto puede tardar un par de segundos)
            </p>
          </form>
        </>
      ) : null}
    </>
  );
}

export default OverlayProduct;
