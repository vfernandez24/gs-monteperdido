type Props = {
  type: "pedido" | "solicitud";
  overlay: boolean;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

function Alert({ type, overlay, setOverlay }: Props) {
  function clickFunction() {
    setOverlay(false);
    document.documentElement.style.setProperty("overflow", "auto");
    window.location.reload();
    window.scrollTo(0, 0);
  }

  return (
    <>
      {overlay == true ? (
        <>
          <div
            className="overlay fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen backdrop-blur-[2px] bg-[#0000003f] cursor-pointer"
            onClick={() => {
              setOverlay(false);
              document.documentElement.style.setProperty("overflow", "auto");
            }}
          ></div>
          <div className="rounded-lg flex flex-col items-center fixed p-5 top-1/2 left-1/2 -translate-1/2 bg-white z-30 w-[300px] px-5 h-fit">
            <h2 className="text-xl font-bold uppercase text-primary text-center w-full tracking-[2px] text-balance">
              {type == "pedido"
                ? "Pedido realizado correctamente"
                : "Solicitud realizada correctamente"}
            </h2>
            <button
              onClick={clickFunction}
              className="my-3 py-2 px-10 bg-primary hover:bg-white border-2 border-primary hover:border-secondary cursor-pointer rounded-2xl text-white hover:text-secondary transition-all duration-300 ease font-medium uppercase flex"
            >
              Cerrar
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Alert;
