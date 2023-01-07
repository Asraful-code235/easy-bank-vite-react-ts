import { CardsType, SelectedPage } from "@/shared/types";
import Banking from "@/assets/icon-online.svg";
import Bugeting from "@/assets/icon-budgeting.svg";
import Onboarding from "@/assets/icon-onboarding.svg";
import Api from "@/assets/icon-api.svg";
import Card from "./Card";
import { motion } from "framer-motion";

const Cards: Array<CardsType> = [
  {
    name: "Online Banking",
    image: Banking,
    description:
      "Our modern web adn mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    name: "Simple Budgeting",
    image: Bugeting,
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits",
  },
  {
    name: "Fast Onboarding",
    image: Onboarding,
    description:
      "We don&apost do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    name: "Open Api",
    image: Api,
    description:
      "Manage your savings,investments pension, and much more from one account. Tracking your money has never been easier.",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={`${SelectedPage.About}`}
      className="h-auto w-full bg-[#f4f5f7]"
    >
      <motion.div
        className="py-20 md:py-10"
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <motion.div className="mx-auto w-5/6 py-10 text-center md:text-start">
          <motion.h1
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl text-[#33384c]"
          >
            Why choose Easybank?
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-[#96979c]"
          >
            We leverage Open Banking to turn your bank account into financial
            hub. Control your finances like never before.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-16 flex flex-wrap items-center justify-center md:justify-start  "
          >
            {Cards.map((item) => (
              <Card
                key={item.name}
                name={item.name}
                image={item.image}
                description={item.description}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
