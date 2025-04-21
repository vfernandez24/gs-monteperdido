import React from "react";

type Props = {
  srcImg: string;
  title: string;
  subTitle: string;
  id: number;
  setIdProduct: React.Dispatch<React.SetStateAction<number>>;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

function Product({
  srcImg,
  subTitle,
  title,
  setIdProduct,
  id,
  setOverlay,
}: Props) {
  function onClickFunction() {
    setIdProduct(id);
    setOverlay(true);
    document.documentElement.style.setProperty("overflow", "hidden");
  }

  return (
    <div className="product cursor-default w-[380px] max-lg:w-[300px] h-[250px] max-lg:min-h-[350px] max-lg:h-fit transition-all duration-300 delay-300 ease-out grid grid-cols-[1fr_1.4fr] grid-rows-[1fr] relative max-lg:grid-cols-[1fr] max-lg:grid-rows-[4fr_6fr]">
      <div className="product__div product__div--foto flex items-center justify-center">
        <img
          src={srcImg}
          className="lg:max-w-[142px] max-h-full border-none object-cover max-lg:object-contain bg-gray-300"
        />
      </div>
      <div className="product__div product__div--info lg:pr-3 lg:py-5 max-lg:py-3 max-lg:px-5">
        <h1 className="producto__div__title text-right h-[60px] tracking-tight flex items-center justify-end w-full text-balance text-[20px] text-primary font-extrabold uppercase">
          {title}
        </h1>
        <h2 className="product__div__subtitle text-balance font-light text-md leading-relaxed">
          {subTitle}
        </h2>
        <button
          style={{
            transition: "opacity .3s ease .3s, background-color .3s ease",
          }}
          className="product__div__button ease absolute lg:bottom-5 max-lg:bottom-3 left-1/2 -translate-x-1/2 w-fit h-fit flex items-center justify-center rounded-3xl bg-secondary py-2 px-5 cursor-pointer hover:bg-secondary2 uppercase text-md font-semibold text-bg"
          onClick={onClickFunction}
        >
          Solicitar
        </button>
      </div>
    </div>
  );
}

export default Product;
