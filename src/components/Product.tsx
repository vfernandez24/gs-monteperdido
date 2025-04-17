type Props = {
  srcImg: string;
  title: string;
  subTitle: string;
};

function Product({ srcImg, subTitle, title }: Props) {
  return (
    <div className="product cursor-default w-[380px] max-md:w-[300px] h-[250px] max-md:h-[350px] rounded-2xl shadow-[0_4px_20px_rgba(62,131,65,0.15)] transition-all duration-300 delay-300 ease-out grid grid-cols-[1fr_1.4fr] grid-rows-[1fr] relative hover:shadow-[5px_7px_15px_#3e834186,_-5px_-7px_15px_#ebebeb] max-md:grid-cols-[1fr] max-md:grid-rows-[4fr_6fr] ">
      <div className="product__div product__div--foto flex items-center justify-center">
        <img
          src={srcImg}
          className="md:max-w-[142px] max-h-full border-none object-cover max-md:object-contain bg-gray-300"
        />
      </div>
      <div className="product__div product__div--info md:pr-3 md:py-5 max-md:py-3 max-md:px-5">
        <h1 className="producto__div__title text-right h-[60px] tracking-tight flex items-center justify-end w-full text-balance text-[20px] text-primary font-extrabold uppercase">
          {title}
        </h1>
        <h2 className="product__div__subtitle text-balance font-light text-lg leading-relaxed">
          {subTitle}
        </h2>
        <button
          style={{
            transition: "opacity .3s ease .3s, background-color .3s ease",
          }}
          className="product__div__button opacity-0 ease absolute bottom-3 left-1/2 -translate-x-1/2 w-fit h-fit flex items-center justify-center rounded-3xl bg-secondary py-1.5 px-5 cursor-pointer hover:bg-secondary2 uppercase text-sm font-semibold text-bg"
        >
          Solicitar
        </button>
      </div>
    </div>
  );
}

export default Product;
