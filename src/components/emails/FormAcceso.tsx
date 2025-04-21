import React from "react";

type Props = {
  inputClasses: string;
  formSubmit: (e: React.FormEvent) => void;
  nombre: string;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  fecha: string;
  setFecha: React.Dispatch<React.SetStateAction<string>>;
  typeInputContact: string;
  setTypeInputContact: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  tel: string;
  setTel: React.Dispatch<React.SetStateAction<string>>;
};

function FormAcceso({
  inputClasses,
  formSubmit,
  nombre,
  setNombre,
  fecha,
  setFecha,
  typeInputContact,
  setTypeInputContact,
  email,
  setEmail,
  tel,
  setTel,
}: Props) {
  return (
    <form
      action=""
      className="lg:w-[600px] max-lg:w-[85%] flex flex-col mx-auto items-center justify-center flex-1"
      onSubmit={formSubmit}
    >
      <label className="w-full h-fit text-left py-4" htmlFor="name">
        Nombre completo del educando:
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
      <label className="w-full h-fit text-left py-4" htmlFor="anio">
        Mes y año de nacimiendo del educando:
        <input
          onChange={(e) => setFecha(e.target.value)}
          value={fecha}
          type="month"
          id="anio"
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
      <button
        type="submit"
        className="flex items-center justify-center bg-secondary hover:bg-bg transition-all ease duration-300 text-bg hover:text-secondary py-2 px-10 rounded-xl text-lg font-semibold border-2 border-secondary cursor-pointer"
      >
        Enviar
      </button>
    </form>
  );
}

export default FormAcceso;
