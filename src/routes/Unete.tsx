import { useEffect, useState } from "react";

import sendEmail from "../scripts/sendEmail";
import FormAcceso from "../components/emails/FormAcceso";
import SectionTitle from "../components/common/SectionTitle";
import Alert from "../components/emails/Alert";

type Props = {};

function Unete({}: Props) {
  useEffect(() => {
      window.scrollTo(0, 0);
      document.title = `Únete a nosotros | GS Monteperdido 960 Parla`;
    }, [location.pathname]);

  const inputClasses = `w-full max-w-[90dvw] block h-10 rounded-[5px] p-3 bg-bg border-[1.5px] border-primary focus:border-primary3 outline-none transition-all ease duration-300`;
  const [typeInputContact, setTypeInputContact] = useState("");

  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const [submit, setSubmit] = useState(false);

  const [alert, setAlert] = useState(false);
  const [enviado, setEnviado] = useState(false)

  async function formSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmit(true);
    const fechaSol = new Date().toLocaleString();
    const emailBody = `Nombre: ${nombre}
Fecha de nacimiento: ${fecha}
Fecha de solicitud: ${fechaSol}
Contacto: ${typeInputContact == "email" ? email : tel}`;
    const emailSubject = `Solicitud de ingreso a grupo (${fechaSol})`;
    const enviado = await sendEmail(emailBody, emailSubject);
    setAlert(true);
    setEnviado(enviado);
  }
  return (
    <>
      <Alert type={enviado == true ? "contacto" : "error"} overlay={alert} setOverlay={setAlert} />

      <section className="section_unete bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(90,200,100,0.2)_0,rgba(90,200,100,0)_50%,rgba(90,200,100,0)_100%)]">
        <SectionTitle color="#3e8341" inner={`¿Quieres unirte a grupo?`} />
        <FormAcceso
          email={email}
          fecha={fecha}
          formSubmit={formSubmit}
          inputClasses={inputClasses}
          nombre={nombre}
          setEmail={setEmail}
          setFecha={setFecha}
          setNombre={setNombre}
          setTel={setTel}
          setTypeInputContact={setTypeInputContact}
          tel={tel}
          typeInputContact={typeInputContact}
        />
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

export default Unete;
