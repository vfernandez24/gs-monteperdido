type Props = {
  color: string;
  inner: string;
};

function SectionTitle({ color, inner }: Props) {
  return (
    <h2
      className="text-3xl uppercase font-normal text-center py-10 tracking-[2px] text-balance px-5"
      style={{ color: color }}
    >
      {inner}
    </h2>
  );
}

export default SectionTitle;
