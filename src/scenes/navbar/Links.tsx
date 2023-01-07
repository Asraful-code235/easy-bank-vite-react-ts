import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  items: string;
  setIsMenuToggled: (value: boolean) => void;
  isMenuToggled?: boolean;
  selectPage: SelectedPage;
  isAboveMediaScreens: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const Links = ({
  items,
  selectPage,
  setSelectedPage,
  isAboveMediaScreens,
  setIsMenuToggled,
  isMenuToggled,
}: Props) => {
  const tolowerCaseItem = items.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${tolowerCaseItem}`}
      onClick={() => setSelectedPage(tolowerCaseItem)}
      className={`${
        !isAboveMediaScreens
          ? "capitalize text-gray-400"
          : "navLinks relative  capitalize text-gray-400"
      }`}
    >
      <motion.div
        initial={{
          x: -50,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className={`${
          selectPage === tolowerCaseItem ? "text-gray-800 " : "text-gray-600"
        }hover:text-gray-800`}
      >
        {!isAboveMediaScreens ? (
          <div onClick={() => setIsMenuToggled(!isMenuToggled)}>{items}</div>
        ) : (
          <div>{items}</div>
        )}
      </motion.div>
      <div
        className={`${
          !isAboveMediaScreens
            ? ""
            : "navHoverBars absolute -bottom-11 z-30  h-1 w-full rounded-md transition  duration-500  "
        }`}
      ></div>
    </AnchorLink>
  );
};

export default Links;
