import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const childVarients = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  name: string;
  image: string;
  description: string;
};

const Card = ({ name, image, description }: Props) => {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.01],
      }}
      transition={{ duration: 0.2, staggerChildren: 0.5, ease: "easeOut" }}
      variants={childVarients}
      className="flex h-[350px]  w-[280px] flex-col items-start justify-start gap-4 p-5 xs:items-center xs:text-center
    "
    >
      <img
        className="mb-1
      "
        src={image}
        alt={name}
      />
      <h2 className="mb-1 text-xl font-semibold text-[#26283d]">{name}</h2>
      <p className="text-xs text-[#a1a1a9] ">{description}</p>
    </motion.div>
  );
};

export default Card;
