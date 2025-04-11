type Props = {
  src: string;
  clickFunction: (src: string) => void;
};

function ImageSection({ src, clickFunction }: Props) {
  return (
    <div
      onClick={() => clickFunction(src)}
      className="w-[200px] bg-green-200 h-full flex items-center justify-center cursor-pointer"
    >
      <img src={src} className="object-contain" alt={src} />
    </div>
  );
}

export default ImageSection;
