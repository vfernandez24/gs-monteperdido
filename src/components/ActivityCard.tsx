type Props = {
  h3: string;
  p: string;
  bG: string;
  fecha: string;
};

function ActivityCard({ h3, p, bG, fecha }: Props) {
  return (
    <div
      className={`section_actividades__div aspect-[100_/_100] w-[300px] rounded-lg h-auto flex flex-col items-center justify-start gap-5 transition-all duration-[0.3s] ease-[ease] p-[2%] max-md:p-[5%] hover:shadow-[0px_0px_30px_15px_${bG}] relative`}
      style={{ backgroundColor: `${bG}` }}
    >
      <h3 className="text-center text-balance font-bold text-xl flex justify-center mx-auto w-10/12">
        {h3}
      </h3>
      <p>{p}</p>
      <h2 className="text-right w-full font-semibold text-lg p-[5%] absolute left-0 top-[80%] tracking-[2px]">{fecha}</h2>
    </div>
  );
}

export default ActivityCard;
