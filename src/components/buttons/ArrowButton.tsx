import React from "react";

import handleScroll from "../../scroll";

type Props = {
  ref: React.RefObject<HTMLDivElement | null>;
  color: string;
};

function ArrowButton({ ref, color }: Props) {
  return (
    <button
      className="section_inicio__button absolute bottom-5 left-1/2 -translate-x-1/2 h-fit flex items-center justify-center py-10 text-4xl cursor-pointer z-[2]"
      onClick={() => handleScroll(ref)}
      style={{color: color}}
    >
      <i className="fa-solid fa-arrow-down"></i>
    </button>
  );
}

export default ArrowButton;
