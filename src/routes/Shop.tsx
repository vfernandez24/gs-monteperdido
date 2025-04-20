import { useEffect } from "react";
import Product from "../components/cards/Product";
import products from "../constants/products";

type Props = {};

function Shop({}: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Recuerdos Scout | GS Monteperdido 960 Parla`;
  }, [location.pathname]);

  return (
    <>
      <section className="section_hero pt-16">
        <div className="w-full h-fit pb-5 flex justify-center text-5xl items-center text-primary">
          <img
            src="/gs-monteperdido/icons/florDeLis.webp"
            className="h-[48px]"
          />
        </div>
        <h2 className="section__titulo after:content-[''] after:w-[150px] font-light tracking-[2px] after:h-2 after:bg-primary after:absolute after:-translate-x-2/4 after:rounded-[10px] uppercase after:left-2/4 after:top-[120%] text-center text-secondary relative text-[30px] mb-[60px]">
          Recuerdos scouts
        </h2>
      </section>

      <section className="section_ftos w-full h-10 bg-white overflow-hidden">
        <div className="section_fotos__container w-[200%] h-10 flex items-center gap-2 animate-scroll">
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="/gs-monteperdido/icons/logo4-3.webp" className="h-10" />
          <img src="/gs-monteperdido/icons/florDeLis.webp" className="h-8" />
          <img src="" alt="" />
        </div>
      </section>

      <section className="section_products py-16 flex justify-around items-start flex-wrap gap-y-3">
        {products.map((pro, index) => (
          <Product
            key={index}
            srcImg={pro.srcImg}
            subTitle={pro.subtitle}
            title={pro.title}
          />
        ))}
      </section>
    </>
  );
}

export default Shop;
