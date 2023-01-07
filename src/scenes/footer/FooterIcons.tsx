type Props = {
  image: string;
};

const FooterIcons = ({ image }: Props) => {
  return (
    <div className="rounded-full ">
      <img
        src={image}
        alt="social icons"
        className="rounded-full bg-[#2d314e] p-2 hover:bg-Lime-Green "
      />
    </div>
  );
};

export default FooterIcons;
