import { useEffect, useState } from "react";

import sendEmail from "../scripts/sendEmail";
import SectionTitle from "../components/common/SectionTitle";
import Alert from "../components/emails/Alert";

type Props = {};

function Contacto({}: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Contacta con nosotros | GS Monteperdido 960 Parla`;
  }, [location.pathname]);

  const inputClasses = `w-full max-w-[90dvw] block h-10 rounded-[5px] p-3 bg-bg border-[1.5px] border-primary focus:border-primary3 outline-none transition-all ease duration-300`;
  const [typeInputContact, setTypeInputContact] = useState("email");

  const [nombre, setNombre] = useState("");
  const [asunto, setAsunto] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const [submit, setSubmit] = useState(false);

  const [alert, setAlert] = useState(false);
  const [enviado, setEnviado] = useState(false);

  async function formSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmit(true);
    const fechaSol = new Date().toLocaleString();
    const emailBody = `Nombre: ${nombre}
Contacto: ${typeInputContact == "email" ? email : tel}
Fecha de envío: ${fechaSol}
    
${body}`;
    const enviado = await sendEmail(emailBody, asunto);
    setAlert(true);
    setEnviado(enviado);
  }
  return (
    <>
      <Alert
        type={enviado == true ? "contacto" : "error"}
        overlay={alert}
        setOverlay={setAlert}
      />

      <section className="section_unete bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(90,200,100,0.2)_0,rgba(90,200,100,0)_50%,rgba(90,200,100,0)_100%)]">
        <SectionTitle color="#3e8341" inner={`Contacta con nosotros`} />
        <form
          action=""
          className="lg:w-[600px] max-lg:w-[85%] flex flex-col mx-auto items-center justify-center flex-1"
          onSubmit={formSubmit}
        >
          <label className="w-full h-fit text-left py-4" htmlFor="name">
            Nombre:
            <input
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              placeholder="Name"
              type="text"
              id="name"
              className={inputClasses}
              required
            />
          </label>
          <label className="w-full h-fit text-left py-4" htmlFor="subject">
            Asunto:
            <input
              onChange={(e) => setAsunto(e.target.value)}
              value={asunto}
              placeholder="Subject"
              type="text"
              id="subject"
              className={inputClasses}
              required
            />
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
                defaultChecked={true}
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
                Usuario de instagram
              </span>
            </label>
          </span>
          {typeInputContact === "email" ? (
            <label className="w-full h-fit text-left py-4" htmlFor="email">
              Correo Electrónico:
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="correo@electronico.com"
                type="email"
                id="email"
                className={inputClasses}
                required={typeInputContact === "email" ? true : false}
              />
            </label>
          ) : null}
          {typeInputContact === "tel" ? (
            <label
              className="w-full h-fit text-left py-4 relative before:content-['@'] before:w-5 before:h-10 before:flex before:absolute before:bottom-[16px] before:left-3 before:items-center before:justify-center before:text-gray-500 before:text-lg before:z-10"
              htmlFor="tel"
            >
              Usuario de instagram:
              <input
                onChange={(e) => setTel(e.target.value)}
                value={tel}
                placeholder="username"
                type="text"
                id="tel"
                className={`${inputClasses} pl-10 relative before:content-['@']`}
                required={typeInputContact === "tel" ? true : false}
              />
            </label>
          ) : null}
          <label className="w-full h-fit text-left py-4" htmlFor="body">
            Descripcion:
            <textarea
              onChange={(e) => setBody(e.target.value)}
              value={body}
              placeholder="Text here ..."
              id="body"
              className="w-full max-w-[90dvw] block h-fit rounded-[5px] p-3 bg-bg border-[1.5px] border-primary focus:border-primary3 outline-none transition-all ease duration-300"
              rows={10}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="flex items-center justify-center bg-secondary hover:bg-bg transition-all ease duration-300 text-bg hover:text-secondary py-2 px-10 rounded-xl text-lg font-semibold border-2 border-secondary cursor-pointer"
          >
            Enviar
          </button>
        </form>
        <p
          className="items-center justify-center text-center w-full h-fit py-5 text-secondary font-light text-xl"
          style={{ opacity: submit == true ? 1 : 0 }}
        >
          Cargando solicitud...
          <br />
          (Esto puede tardar un par de segundos)
        </p>
      </section>
    </>
  );
}

export default Contacto;
