type Props = {
  children: string;
};

const CustomBtn = ({ children }: Props) => {
  return (
    <button className="rounded-3xl bg-gradient-to-l from-Bright-Cyan to-Lime-Green px-4 py-3  text-base font-bold capitalize text-white hover:drop-shadow-md">
      {children}
    </button>
  );
};

export default CustomBtn;
