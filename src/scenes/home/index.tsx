import CustomBtn from "@/shared/CustomBtn";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={`${SelectedPage.Home}`}
      className=" w-full  bg-white pb-8  pt-20   "
    >
      <motion.div className="items-center  justify-center  md:ml-28   md:flex md:h-[41rem]   md:flex-row-reverse ">
        {/* left content */}
        <div
          className={` relative h-[22rem] w-full flex-1 overflow-hidden bg-[url('./assets/bg-intro-mobile.svg')] bg-cover bg-center bg-no-repeat    md:h-[180%] md:bg-[url('./assets/bg-intro-desktop.svg')] md:bg-1320  md:bg-left md:bg-no-repeat  `}
        >
          <div className="before:absolute before:h-full before:w-full before:bg-[url('./assets/image-mockups.png')] before:bg-cover before:bg-bottom md:before:top-52 md:before:left-32 md:before:h-[52rem] md:before:bg-50 md:before:bg-left md:before:bg-no-repeat    "></div>
        </div>
        {/* right content */}
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
          className="mx-auto w-5/6 py-10 text-center   md:ml-4  md:mt-0 md:w-full  md:flex-[0.65]  md:text-start"
        >
          <h1 className=" text-4xl font-medium text-[#292941] md:text-6xl">
            Next generation digital banking
          </h1>

          <article className=" text-Grayish-Blue">
            <p className="my-4 whitespace-pre-wrap  text-sm md:text-sm">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending,saving, budgeting,investing,and much
              more
            </p>
          </article>
          <div className="mt-6">
            <CustomBtn>request invite</CustomBtn>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
